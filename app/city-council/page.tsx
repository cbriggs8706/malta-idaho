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
						<strong>Council Member (Roads)</strong> – Richard Hall
					</li>
					<li>
						<strong>Council Member (Books)</strong> – Margie Neff
					</li>
					<li>
						<strong>Council Member (Park)</strong> – Amador Maldonado
					</li>
					<li>
						<strong>Council Member (City Cleanup)</strong> – Tom Hogan
					</li>
					<li>
						<strong>City Clerk</strong> – Lisa Bankhead
					</li>
					<li>
						<strong>Sheriff</strong> – Tony Bernad
					</li>
				</ul>
			</CardContent>
		</Card>
	)
}
