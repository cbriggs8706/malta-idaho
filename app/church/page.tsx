import ParallelTimeline from '@/components/Timeline'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import Image from 'next/image'

export default function Page() {
	return (
		<>
			<Card>
				<CardHeader>
					<h1 className="text-center">Church</h1>
				</CardHeader>

				<CardDescription className="text-2xl text-center">
					Rooted in the Land. Built by Pioneers. Shaped by Community.
				</CardDescription>
				<CardContent></CardContent>
			</Card>
			<ParallelTimeline />
		</>
	)
}
