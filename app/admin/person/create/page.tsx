import PersonForm from '@/components/person'
import { personDF } from '@/lib/schema/person'

const Page = async () => {
	let formData = personDF(null)
	formData = { ...formData }

	return <PersonForm formData={formData} />
}
export default Page
