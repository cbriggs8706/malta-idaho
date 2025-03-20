'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PersonFormValidator, personFormValidator } from '@/lib/schema/person'
import { createPerson, updatePerson } from '@/lib/actions/person'
import { toast } from 'sonner'

type PropsType = {
	assetId: number
	defaultValues?: PersonFormValidator
	disabled?: boolean
	action: 'create' | 'read' | 'update' | 'delete'
}

export default function PersonForm({
	disabled = true,
	action,
	defaultValues,
	assetId,
}: PropsType) {
	const form = useForm<PersonFormValidator>({
		resolver: zodResolver(personFormValidator),
		defaultValues: defaultValues,
	})

	const handleSubmit = async (formData: PersonFormValidator) => {
		try {
			let res = undefined
			switch (action) {
				case 'create':
					res = await createPerson(formData)
					break
				case 'update': {
					if (!formData.firstNames) {
						toast('Error', {
							description: 'Error: no person id found to update',
						})
						break
					}
					res = await updatePerson(formData, assetId)
					break
				}
				default:
					toast('Error', {
						description: 'Error: no person id found. Please try again.',
					})
					break
			}
			if (res && res.status !== 200) {
				toast('Error', {
					description: res.message,
				})
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<Form {...form}>
			<form
				id="Person"
				onSubmit={form.handleSubmit(handleSubmit)}
				className="space-y-8"
			>
				<FormField
					control={form.control}
					name="firstNames"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Names</FormLabel>
							<FormControl>
								<Input placeholder="Enter your first name" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}
