'use client'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Page() {
	const decades = [
		'1940s',
		'1950s',
		'1960s',
		'1970s',
		'1980s',
		'1990s',
		'2000s',
		'2010s',
		'2020s',
	]

	const yearbookData = Object.fromEntries(
		decades.map((decade) => {
			const start = parseInt(decade.slice(0, 4), 10)
			const years = Array.from(
				{ length: decade === '2020s' ? 5 : 10 },
				(_, i) => start + i
			)
			return [decade, years]
		})
	)

	const [showScroll, setShowScroll] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShowScroll(window.scrollY > 300)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className="relative">
			<Card>
				<CardHeader>
					<h1 className="text-center">Valley Vu Yearbook</h1>
				</CardHeader>
				<CardDescription className="text-xs p-2 text-center bg-red-200">
					We are in the process of migrating this site to a new server. Some
					elements may be unavailable until that has completed. Check back in a
					couple of weeks to browse the full site again. If you need anything in
					the meantime, please contact Cameron.
				</CardDescription>
				<CardContent>
					<div className="flex flex-wrap justify-center gap-2 py-4">
						{decades.map((decade) => (
							<a
								key={decade}
								href={`#${decade}`}
								className="text-blue-600 hover:underline"
							>
								{decade}
							</a>
						))}
					</div>

					<h2 className="text-xl mt-6 mb-2">By Decade</h2>

					{decades.map((decade) => (
						<div key={decade} id={decade} className="mb-8">
							<h3 className="text-lg font-bold mb-4">{decade}</h3>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
								{yearbookData[decade].map((year) => (
									<Link
										href={`/raft-river-high-school/yearbook/${year}`}
										key={year}
										className="border rounded shadow hover:shadow-lg transition overflow-hidden"
									>
										<div className="relative aspect-[3/4] w-full">
											<Image
												src={`/images/yearbooks/${year}.jpg`}
												alt={`Yearbook ${year}`}
												fill
												className="object-cover"
											/>
										</div>
										<div className="text-center text-sm py-1">{year}</div>
									</Link>
								))}
							</div>
						</div>
					))}
				</CardContent>
			</Card>

			{showScroll && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-4 right-4 p-2 rounded-full shadow bg-white border text-xs text-gray-500 hover:text-black transition-opacity"
					aria-label="Scroll to top"
				>
					↑ Top
				</button>
			)}
		</div>
	)
}
