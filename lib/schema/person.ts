import * as z from 'zod'
import { createInsertSchema } from 'drizzle-zod'
import { ReadPerson } from '../actions/person'
import { person } from '@/db/schema'

export type Person = NonNullable<ReadPerson>
export type PersonSelect = typeof person.$inferSelect

export const personDbValidator = createInsertSchema(person)
export type PersonDbValidator = z.infer<typeof personDbValidator>

export const personFormValidator = z.object({
	firstNames: z.string().min(2, {
		message: 'Must be at least 2 characters',
	}),
	lastNames: z.string().min(2, {
		message: 'Must be at least 2 characters',
	}),
	marriedName: z.string(),
	nicknames: z.string(),
	birthYear: z.number(),
	birthMonth: z.number(),
	birthDay: z.number(),
	birthPlaceId: z.string(),
	deathYear: z.number(),
	deathMonth: z.number(),
	deathDay: z.number(),
	deathPlaceId: z.string(),
	additionalInfo: z.string(),
	internalNotes: z.string(),
	isVisible: z.boolean(),
	father: z.string(),
	mother: z.string(),
})
export type PersonFormValidator = z.infer<typeof personFormValidator>

export const personDF = (data: PersonDbValidator | null) => {
	let person: PersonFormValidator
	person = {
		firstNames: data?.firstNames ? data?.firstNames : '',
		lastNames: data?.lastNames ? data?.lastNames : '',
		marriedName: data?.marriedName ? data?.marriedName : '',
		nicknames: data?.nicknames ? data?.nicknames : '',
		birthYear: data?.birthYear ?? 0,
		birthMonth: data?.birthMonth ?? 0,
		birthDay: data?.birthDay ?? 0,
		birthPlaceId: data?.birthPlaceId ? data?.birthPlaceId?.toString() : '',
		deathYear: data?.deathYear ?? 0,
		deathMonth: data?.deathMonth ?? 0,
		deathDay: data?.deathDay ?? 0,
		deathPlaceId: data?.deathPlaceId ? data?.deathPlaceId?.toString() : '',
		isVisible: data?.isVisible ?? false,
		additionalInfo: data?.additionalInfo ? data?.additionalInfo : '',
		internalNotes: data?.internalNotes ? data?.internalNotes : '',
		father: data?.father ? data?.father?.toString() : '',
		mother: data?.mother ? data?.mother?.toString() : '',
	}
	return person
}

export const personFD = (data: PersonFormValidator) => {
	let person: PersonDbValidator
	person = {
		firstNames: data.firstNames,
		lastNames: data.lastNames,
		marriedName: data.marriedName,
		nicknames: data.nicknames,
		birthYear: data.birthYear,
		birthMonth: data.birthMonth,
		birthDay: data.birthDay,
		birthPlaceId: data.birthPlaceId ? Number(data.birthPlaceId) || null : null,
		deathYear: data.deathYear,
		deathMonth: data.deathMonth,
		deathDay: data.deathDay,
		deathPlaceId: data.deathPlaceId ? Number(data.deathPlaceId) || null : null,
		isVisible: data.isVisible,
		additionalInfo: data.additionalInfo,
		internalNotes: data.internalNotes,

		father: data.father ? Number(data.father) || null : null,
		mother: data.mother ? Number(data.mother) || null : null,
	}
	return person
}
