'use server'
import { unstable_noStore as noStore, revalidatePath } from 'next/cache'

import person from '@/db/schema/person'
import { eq } from 'drizzle-orm'
import {
	personFD,
	personDbValidator,
	type PersonSelect,
	type PersonFormValidator,
} from '../schema/person'
import { db } from '@/db/drizzle'

export const readPerson = async (id: PersonSelect['id']) => {
	noStore()
	try {
		if (!id) {
			throw new Error(`Reading person failed. No id found.`)
		}
		const data = await db.query.person.findFirst({
			where: eq(person.id, id),
			// with: {
			// 	directoryCompany: true,
			// 	securityReaderGroups: { with: { securityReaderGroup: true } },
			// },
		})
		return data
	} catch (error) {
		console.error(error)
		if (error instanceof Error) {
			throw new Error(error.message)
		}
		throw new Error('Reading person(s) failed. Please try again.')
	}
}
export type ReadPerson = Awaited<ReturnType<typeof readPerson>>

export const readPersons = async () => {
	noStore()
	try {
		const data = await db.query.person.findMany({
			// with: {
			// 	directoryCompany: true,
			// 	securityReaderGroups: { with: { securityReaderGroup: true } },
			// },
		})
		return data
	} catch (error) {
		console.error(error)
		if (error instanceof Error) {
			throw new Error(error.message)
		}
		throw new Error('Reading person(s) failed. Please try again.')
	}
}

export const createPerson = async (formData: PersonFormValidator) => {
	const now = new Date()
	try {
		const formattedData = personFD(formData)
		const validatedData = personDbValidator.safeParse(formattedData)
		if (!validatedData.success) {
			throw new Error(`Creating person failed. Invalid data.`)
		}
		const [data] = await db
			.insert(person)
			.values({ ...validatedData.data })
			.returning()
		revalidatePath('/admin/person')
		return {
			status: 200,
			message: `Creating person succeeded.`,
			data,
		}
	} catch (error) {
		console.error(error)
		if (error instanceof Error) {
			throw new Error(error.message)
		}
		throw new Error(`Creating person failed. Please try again.`)
	}
}

export const updatePerson = async (
	formData: PersonFormValidator,
	id: PersonSelect['id']
) => {
	const now = new Date()
	try {
		if (!id) {
			throw new Error(`Updating person failed. No id found.`)
		}
		const formattedData = personFD(formData)
		const validatedData = personDbValidator.safeParse(formattedData)
		if (!validatedData.success) {
			throw new Error(`Updating person failed. Invalid data.`)
		}
		const [data] = await db
			.update(person)
			.set({ ...validatedData.data })
			.where(eq(person.id, id))
			.returning()
		revalidatePath(`/admin/person/read/${id}`)
		return {
			status: 200,
			message: `Updating person succeeded. ID: ${id} updated.`,
			data,
		}
	} catch (error) {
		console.error(error)
		if (error instanceof Error) {
			throw new Error(error.message)
		}
		throw new Error(`Updating person failed. Please try again.`)
	}
}

export const deletePerson = async (id: PersonSelect['id']) => {
	try {
		if (!id) {
			throw new Error(`Deleting person failed. No id found.`)
		}
		await db.delete(person).where(eq(person.id, id))
		revalidatePath('/admin/person')
		return {
			status: 200,
			message: `Deleting person successful. ID: ${id} deleted.`,
			data: undefined,
		}
	} catch (error) {
		console.error(error)
		if (error instanceof Error) {
			throw new Error(error.message)
		}
		throw new Error(`Deleting person failed. Please try again.`)
	}
}
