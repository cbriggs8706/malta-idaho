import OrdinanceCards from '@/components/OrdinanceCards'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import ordinances from '@/db/ordinances'
import Image from 'next/image'

export default function Page() {
	return (
		<Card>
			<CardHeader>
				<h1 className="text-center">City Ordinances</h1>
			</CardHeader>

			{/* <CardDescription className="text-2xl text-center">
				Rooted in the Land. Built by Pioneers. Shaped by Community.
			</CardDescription> */}
			<CardContent>
				<OrdinanceCards ordinances={ordinances} />
			</CardContent>
		</Card>
	)
}
