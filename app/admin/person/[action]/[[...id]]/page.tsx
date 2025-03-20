import PersonForm from '@/components/person'
import { readPersons } from '@/lib/actions/person'
import { personDF, PersonFormValidator } from '@/lib/schema/person'
import { Toaster } from 'sonner'

type PropsType = {
	params: {
		action: 'create' | 'read' | 'update' | 'delete'
		id: number[] | undefined
	}
}

const Page = async ({ params: { action, id } }: PropsType) => {
	let assetId = undefined
	let data = undefined
	let disabled = true
	let defaultValues: PersonFormValidator
	if (id) {
		assetId = id[0]
		data = await readPersons(assetId)
		defaultValues = personDF(data)
	} else {
		defaultValues = personDF(null)
	}
	if (action === 'update' || (action === 'create' && !id)) {
		disabled = false
	}
	const personData = await readPersons()

	return (
		<>
			<Toaster />
			<PersonForm
				assetId={assetId}
				defaultValues={defaultValues}
				disabled={disabled}
				action={action}
			/>
		</>
	)
}
export default Page
