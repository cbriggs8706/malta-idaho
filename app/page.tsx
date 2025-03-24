import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
	return (
		<Card>
			<CardHeader>
				<h1 className="text-center">The History of Malta, Idaho</h1>
			</CardHeader>

			<CardDescription className="text-2xl text-center">
				Rooted in the Land. Built by Pioneers. Shaped by Community.
			</CardDescription>
			<CardContent>
				<p>
					Welcome to Malta, Idaho—a small town with a rich and enduring past.
					Nestled in the Raft River Valley of southern Idaho, Malta&apos;s
					history is a testament to perseverance, hard work, and the pioneer
					spirit that helped shape the American West. Though modest in size,
					Malta holds deep historical significance for the people who call it
					home and for those with ties to Idaho&apos;s early settlement.
				</p>
				<h2>Early Settlement and Founding</h2>
				<p>
					The area that would become Malta began to see settlement in the late
					1800s as pioneers moved west seeking land, opportunity, and freedom.
					The fertile soil of the Raft River Valley offered ideal conditions for
					farming and ranching, and Malta quickly grew into a tight-knit
					agricultural community. The town was officially incorporated in 1900,
					though its roots stretch back even further.
				</p>
				<h2>The Origin of the Name</h2>
				<p>
					Malta is said to have been named after the Mediterranean island of
					Malta, though stories differ as to why. Some say it was simply chosen
					by early settlers; others believe it reflects admiration for the
					island&apos;s role in global history. Regardless of the origin, the
					name has come to symbolize resilience, unity, and strength—traits that
					define the people of Malta, Idaho.
				</p>
				<h2>Agriculture and Rural Life</h2>
				<p>
					Farming and ranching have always been central to Malta&apos;s
					identity. Generations of families have worked the land, raising
					cattle, growing wheat, barley, and alfalfa, and developing irrigation
					systems that still serve the community today. Despite modern
					advancements, Malta retains its rural character and strong
					agricultural roots.
				</p>
				<h2>Community and Heritage</h2>
				<p>
					Life in Malta has always revolved around faith, family, and community.
					Churches, schools, and local events have helped weave a strong social
					fabric that endures to this day. The town&apos;s one-room schoolhouses
					gave way to more modern buildings, but the value placed on education
					and community involvement remains unchanged.
				</p>
				<h2>Historical Highlights</h2>
				<ul>
					<li>
						<strong>Raft River Valley:</strong> A key passageway for early
						travelers and settlers
					</li>
					<li>
						<strong>Malta Ward Chapel:</strong> A gathering place for spiritual
						and civic life for over a century
					</li>
					<li>
						<strong>Local family legacies:</strong> Many residents today are
						descendants of original homesteaders
					</li>
					<li>
						<strong>Agricultural milestones:</strong> The transformation of
						desert into productive farmland
					</li>
				</ul>
				<h2>Preserving the Past</h2>
				<p>
					Today, Malta honors its past through local history projects, family
					histories, and efforts to preserve landmarks and memories. Whether
					you're researching family roots, exploring regional heritage, or
					documenting pioneer life, Malta offers a unique window into
					Idaho&apos;s historical landscape.
				</p>
			</CardContent>
		</Card>
	)
}
