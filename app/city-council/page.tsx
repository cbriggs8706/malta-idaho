import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import Image from 'next/image'

export default function Page() {
	return (
		<Card>
			<CardHeader>
				<h1 className="text-center">City Council</h1>
			</CardHeader>

			<CardContent>
				<ul>
					<li>
						<strong>Mayor</strong> – Tracy Bankhead
					</li>
					<li>
						<strong>Council Member</strong> – Marlene Hall
					</li>
					<li>
						<strong>Council Member</strong> – Brandon Smith
					</li>
					<li>
						<strong>Council Member</strong> – Whitni Hesselgesser
					</li>
					<li>
						<strong>City Clerk</strong> – Lisa Bankhead
					</li>
					<li>
						<strong>Sheriff</strong> – Cordell Hansen
					</li>
				</ul>
			</CardContent>
		</Card>
	)
}
