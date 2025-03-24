export interface TimelineEvent {
	id: number
	title: string
	year: string
	image?: string
	content: React.ReactNode
}

export type TimelineSection =
	| {
			type: 'single'
			events: TimelineEvent[]
	  }
	| {
			type: 'dual'
			left: TimelineEvent[]
			right: TimelineEvent[]
	  }

export const timelineSections: TimelineSection[] = [
	{
		type: 'single',
		events: [
			{
				id: 1,
				title: 'Organization of Malta Ward',
				year: '1910-1914',
				content: (
					<>
						<p>
							The Malta Ward was organized 13 Nov 1910 with Thomas Taylor Jr. as
							Bishop.
						</p>
						<p>
							<strong>Bishop:</strong> Thomas E Taylor Junior
						</p>
						<p>
							<strong>1st Counselor:</strong> Jesse L Hubbard
						</p>
						<p>
							<strong>2nd Counselor:</strong> Robert Hutchinson
						</p>
						<p>
							<strong>Ward Clerk:</strong> Alfred C Hubbard / Isaac J Neddo,
							Junior
						</p>
					</>
				),
			},
			{
				id: 2,
				title: 'Early Growth',
				year: '1914-1915',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Thomas E Taylor Junior
						</p>
						<p>
							<strong>1st Counselor:</strong> Robert Hutchinson
						</p>
						<p>
							<strong>2nd Counselor:</strong> Isaac J Neddo, Junior
						</p>
						<p>
							<strong>Ward Clerk:</strong> Alfred C Hubbard / Isaac J Neddo,
							Junior
						</p>
					</>
				),
			},
			{
				id: 3,
				title: 'Raft River Stake Organized',
				year: '1915',
				content: (
					<>
						<p>
							The Raft River Stake was organized 27 Apr 1915 with John A Elison
							as president. He was called to move to Almo, Idaho, with his
							family to preside over the new stake. The year 1919 made another
							change for the stake, as it was decided to have stake headquarters
							in Malta. All the stake officers were called to move to Malta, in
							order to be where the stake meetings were held. – Book of
							Remembrance
						</p>
					</>
				),
			},
		],
	},
	{
		type: 'dual',
		left: [
			{
				id: 3,
				title: 'Org A Breaks Off',
				year: '1920',
				content: 'Org A was formed due to differing visions...',
			},
		],
		right: [
			{
				id: 4,
				title: 'Org B Starts Up',
				year: '1920',
				content: 'Org B focused on a new mission and approach...',
			},
		],
	},
	{
		type: 'single',
		events: [
			{
				id: 5,
				title: 'Organizations Reunite',
				year: '1940',
				content: 'The organizations came together under a common cause...',
			},
		],
	},
]
