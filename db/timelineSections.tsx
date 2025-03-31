export interface TimelineEvent {
	id: number
	title?: string
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
				year: '1910',
				image: '/next.svg',
				content: (
					<>
						<p>
							The Malta Ward was organized 13 Nov 1910 with Thomas Taylor Jr. as
							Bishop.
						</p>
					</>
				),
			},
			{
				id: 2,
				image:
					'/ordinances/MC-01-Fixing-time-place-of-meeting-pdf-638x1024.jpg',
				year: '1910-1914',
				content: (
					<>
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
				id: 3,

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
				id: 4,
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
			{
				id: 5,

				year: '1915-1916',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Aaron Zollinger
						</p>
						<p>
							<strong>1st Counselor:</strong> Joseph Rasmussen
						</p>
						<p>
							<strong>2nd Counselor:</strong> Isaac James Neddo, Junior
						</p>
						<p>
							<strong>Ward Clerk:</strong> Joseph Rasmussen
						</p>
					</>
				),
			},
			{
				id: 6,

				year: '1916-1925',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Isaac James Neddo Jr
						</p>
						<p>
							<strong>1st Counselor:</strong> John O Smith
						</p>
						<p>
							<strong>2nd Counselor:</strong> Leonard P Hall (1918-1928)
						</p>
						<p>
							<strong>Ward Clerk:</strong> Richard G Harper (1920-1925)
						</p>
					</>
				),
			},
			{
				id: 7,
				title: '1919 Raft River Stake Headquarters Moved to Malta',
				year: '1919',
				content: (
					<>
						<p>Image. Second Church House - Built sometime between 1919-1921</p>
					</>
				),
			},
			{
				id: 8,

				year: '1925-1936',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Orson Sanders
						</p>
						<p>
							<strong>1st Counselor:</strong> John O Smith
						</p>
						<p>
							<strong>2nd Counselor:</strong> Ira K Hall (1928-1930)
						</p>
						<p>
							<strong>Ward Clerk:</strong> Harry A Shaw, Junior
						</p>
					</>
				),
			},
			{
				id: 9,

				year: '1936-1941',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> John O Smith (died of leg amputation)
						</p>
						<p>
							<strong>1st Counselor:</strong> Rawlins J Harper
						</p>
						<p>
							<strong>2nd Counselor:</strong> Lorin R Horne
						</p>
						<p>
							<strong>Ward Clerk:</strong> Fredrick Gardiner
						</p>
					</>
				),
			},
			{
				id: 10,

				year: '1941-1944',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Rawlins J Harper
						</p>
						<p>
							<strong>1st Counselor:</strong> Lorin R Horne (1941), ES Miller
							(1943)
						</p>
						<p>
							<strong>2nd Counselor:</strong> Orville Udy
						</p>
						<p>
							<strong>Ward Clerk:</strong> Kenneth Hastings
						</p>
					</>
				),
			},
			{
				id: 11,
				title: 'New Church Building',
				year: '1943',
				image: '/church/3rdChurch-600x392.jpg',
				content: (
					<>
						<p>
							President J Reuben Clark and Bishop Worthlin were here in Malta to
							dedicate the Stake and Ward House 8 Aug 1943.
						</p>
					</>
				),
			},
			{
				id: 12,

				year: '1944-1947',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Shirley H Barlow
						</p>
						<p>
							<strong>1st Counselor:</strong> Lano Elison
						</p>
						<p>
							<strong>2nd Counselor:</strong> Wesley Brunson
						</p>
						<p>
							<strong>Ward Clerk:</strong> Afton Nye
						</p>
					</>
				),
			},
			{
				id: 13,

				year: '1947-1955',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> J Henry Thompson
						</p>
						<p>
							<strong>1st Counselor:</strong> George W Neddo
						</p>
						<p>
							<strong>2nd Counselor:</strong> Harvey J Wight
						</p>
						<p>
							<strong>Ward Clerk:</strong> David Tell Taylor
						</p>
					</>
				),
			},
			{
				id: 14,

				year: '1955-1961',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> J Henry Thompson
						</p>
						<p>
							<strong>1st Counselor:</strong> Harvey J Wight
						</p>
						<p>
							<strong>2nd Counselor:</strong> Charles H Warr
						</p>
						<p>
							<strong>Ward Clerk:</strong> David Tell Taylor / Wallace O Briggs
						</p>
					</>
				),
			},
			{
				id: 15,

				year: '1961-1968',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Harvey J Wight
						</p>
						<p>
							<strong>1st Counselor:</strong> Charles H Warr / Wallace O Briggs
						</p>
						<p>
							<strong>2nd Counselor:</strong> Delwin J Harper
						</p>
						<p>
							<strong>Ward Clerk:</strong> Reid Tew Allred
						</p>
					</>
				),
			},
			{
				id: 16,

				year: '1968-1971',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Wallace O Briggs
						</p>
						<p>
							<strong>1st Counselor:</strong> Golden Gardiner
						</p>
						<p>
							<strong>2nd Counselor:</strong> Buddy Ward
						</p>
						<p>
							<strong>Ward Clerk:</strong> ?
						</p>
					</>
				),
			},
			{
				id: 17,

				year: '1971-1977',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Delwin J Harper
						</p>
						<p>
							<strong>1st Counselor:</strong> Jay Cottle
						</p>
						<p>
							<strong>2nd Counselor:</strong> Cleve G Smith
						</p>
						<p>
							<strong>Ward Clerk:</strong> Kenneth Crump
						</p>
					</>
				),
			},
			{
				id: 18,
				title: 'Current Church Building',
				year: '1976',
				content: (
					<>
						<p>
							President J Reuben Clark and Bishop Worthlin were here in Malta to
							dedicate the Stake and Ward House 8 Aug 1943.
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
				id: 20,
				title: 'Malta 1st Organized',
				year: '1977',
				content: 'The Malta 1st Ward was organized 17 Apr 1977',
			},
			{
				id: 21,
				year: '1977-1978',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Delwin J Harper
						</p>
						<p>
							<strong>1st Counselor:</strong> Earl Brent Udy
						</p>
						<p>
							<strong>2nd Counselor:</strong> Jack Homer Hill
						</p>
						<p>
							<strong>Ward Clerk:</strong> Rodney Hall
						</p>
					</>
				),
			},
			{
				id: 22,
				year: '1978-1983',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Jerry Udy
						</p>
						<p>
							<strong>1st Counselor:</strong> Earl Brent Udy / Dean Fredrickson
						</p>
						<p>
							<strong>2nd Counselor:</strong> Michael R Telford
						</p>
						<p>
							<strong>Ward Clerk:</strong> Elmo Elison
						</p>
					</>
				),
			},
			{
				id: 23,
				year: '1983-1988',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Albert Jay Cottle
						</p>
						<p>
							<strong>1st Counselor:</strong> Rod Garner / George Darrington
						</p>
						<p>
							<strong>2nd Counselor:</strong> Stan Campbell
						</p>
						<p>
							<strong>Ward Clerk:</strong> ?
						</p>
					</>
				),
			},
			{
				id: 24,
				year: '1988-1994',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Alan Jay Harper
						</p>
						<p>
							<strong>1st Counselor:</strong> Richard Lance Udy / Ronald Holtman
						</p>
						<p>
							<strong>2nd Counselor:</strong> Larry Kempton
						</p>
						<p>
							<strong>Ward Clerk:</strong> Zeldon Nelson
						</p>
					</>
				),
			},
			{
				id: 25,
				year: '1994-2000',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> George Darrington
						</p>
						<p>
							<strong>1st Counselor:</strong> Devan William Tolman
						</p>
						<p>
							<strong>2nd Counselor:</strong> Peter Grush
						</p>
						<p>
							<strong>Ward Clerk:</strong> Juel Hurst
						</p>
					</>
				),
			},
			{
				id: 26,
				year: '2000-2003',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Devan William Tolman
						</p>
						<p>
							<strong>1st Counselor:</strong> Juel Hurst
						</p>
						<p>
							<strong>2nd Counselor:</strong> Terry Wallace Briggs
						</p>
						<p>
							<strong>Ward Clerk:</strong> Joseph Barrett Junior
						</p>
					</>
				),
			},
			{
				id: 27,
				year: '2003-2008',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Juel Hurst
						</p>
						<p>
							<strong>1st Counselor:</strong> Michael R Telford
						</p>
						<p>
							<strong>2nd Counselor:</strong> Kirtland Yates
						</p>
						<p>
							<strong>Ward Clerk:</strong> Jeremy Nelson
						</p>
					</>
				),
			},
			{
				id: 28,
				year: '2008-2014',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Jeffrey C Johnson
						</p>
						<p>
							<strong>1st Counselor:</strong> Ted Higley
						</p>
						<p>
							<strong>2nd Counselor:</strong> Bryce Campbell
						</p>
						<p>
							<strong>Ward Clerk:</strong> Lane Schumann
						</p>
					</>
				),
			},
			{
				id: 29,
				year: '2014-2017',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Richard Hall
						</p>
						<p>
							<strong>1st Counselor:</strong> Rawhide Clark
						</p>
						<p>
							<strong>2nd Counselor:</strong> Jake Smith
						</p>
						<p>
							<strong>Ward Clerk:</strong> John Campbell
						</p>
					</>
				),
			},
		],
		right: [
			{
				id: 30,
				title: 'Malta 2nd Organized',
				year: '1977',
				content: 'The Malta 2nd Ward was organized 17 Apr 1977',
			},
			{
				id: 31,
				year: '1977-1982',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Cleve G Smith
						</p>
						<p>
							<strong>1st Counselor:</strong> Steven L Blake / Marvin Hall
							(1980)
						</p>
						<p>
							<strong>2nd Counselor:</strong> Marvin Hall / Gary Harper (1980)
						</p>
						<p>
							<strong>Ward Clerk:</strong> Newell Norman
						</p>
					</>
				),
			},
			{
				id: 32,
				year: '1982-1987',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Gary B Harper
						</p>
						<p>
							<strong>1st Counselor:</strong> Sid Norman / Jim Powers
						</p>
						<p>
							<strong>2nd Counselor:</strong> Jim Powers / Stan Campbell
						</p>
						<p>
							<strong>Ward Clerk:</strong> Olani Wallace
						</p>
					</>
				),
			},
			{
				id: 33,
				year: '1987-1992',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Val Anderson
						</p>
						<p>
							<strong>1st Counselor:</strong> Jack Wight
						</p>
						<p>
							<strong>2nd Counselor:</strong> Ross Labrum / Gordon Henrie
						</p>
						<p>
							<strong>Ward Clerk:</strong> Roland Zollinger
						</p>
					</>
				),
			},
			{
				id: 34,
				year: '1992-1997',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Dennis Lee
						</p>
						<p>
							<strong>1st Counselor:</strong> Jim Powers / Kim Smith
						</p>
						<p>
							<strong>2nd Counselor:</strong> Kim Smith / Cregg Smith
						</p>
						<p>
							<strong>Ward Clerk:</strong> Jim Rigby
						</p>
					</>
				),
			},
			{
				id: 35,
				year: '1997-2003',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Todd Harris
						</p>
						<p>
							<strong>1st Counselor:</strong> Jeff Greenwood
						</p>
						<p>
							<strong>2nd Counselor:</strong> Brad Hutchison
						</p>
						<p>
							<strong>Ward Clerk:</strong> Mike Peglau / Steve Rigby
						</p>
					</>
				),
			},
			{
				id: 36,
				year: '2003-2008',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Max Jones
						</p>
						<p>
							<strong>1st Counselor:</strong> Jim Powers
						</p>
						<p>
							<strong>2nd Counselor:</strong> Darin Harper
						</p>
						<p>
							<strong>Ward Clerk:</strong> Russell Zollinger
						</p>
					</>
				),
			},
			{
				id: 37,
				year: '2008-2010',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Pat Manning
						</p>
						<p>
							<strong>1st Counselor:</strong> Mike Christensen
						</p>
						<p>
							<strong>2nd Counselor:</strong> Kurt Harris
						</p>
						<p>
							<strong>Ward Clerk:</strong> Gus Oman
						</p>
					</>
				),
			},
			{
				id: 38,
				year: '2010-2015',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Brad Hutchison
						</p>
						<p>
							<strong>1st Counselor:</strong> Mike Christensen
						</p>
						<p>
							<strong>2nd Counselor:</strong> Cregg Smith
						</p>
						<p>
							<strong>Ward Clerk:</strong> Gus Oman
						</p>
					</>
				),
			},
			{
				id: 39,
				year: '2014-2017',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Dallan Spencer
						</p>
						<p>
							<strong>1st Counselor:</strong> Nolan Harper
						</p>
						<p>
							<strong>2nd Counselor:</strong> Kurt Harris
						</p>
						<p>
							<strong>Ward Clerk:</strong> Jerry Bankhead
						</p>
					</>
				),
			},
		],
	},
	{
		type: 'single',
		events: [
			{
				id: 40,
				title: 'Stake Boundaries Reorganized',
				year: '2017',
				content: '30 Apr 2017 the two Malta Wards were combined',
			},
			{
				id: 50,

				year: '2017-2019',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Dallan Spencer
						</p>
						<p>
							<strong>1st Counselor:</strong> Luke Smith
						</p>
						<p>
							<strong>2nd Counselor:</strong> Alan Branch
						</p>
						<p>
							<strong>Ward Clerk:</strong> Jerry Bankhead
						</p>
					</>
				),
			},
			{
				id: 51,

				year: '2019-present',
				content: (
					<>
						<p>
							<strong>Bishop:</strong> Lane Schuman
						</p>
						<p>
							<strong>1st Counselor:</strong> Zeb Bingham
						</p>
						<p>
							<strong>2nd Counselor:</strong> Tracy Bankhead
						</p>
						<p>
							<strong>Ward Clerk:</strong> Tyler Gilbert
						</p>
					</>
				),
			},
		],
	},
]
