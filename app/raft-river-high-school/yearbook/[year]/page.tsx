// app/raft-river-high-school/yearbook/[year]/page.tsx

import { notFound } from 'next/navigation'

interface Props {
	params: {
		year: string
	}
}

export default function YearbookPage({ params }: Props) {
	const { year } = params

	// Optionally validate year
	const validYears = Array.from({ length: 85 }, (_, i) => 1940 + i).map(String) // 1940–2024
	if (!validYears.includes(year)) {
		return notFound()
	}

	return (
		<div className="max-w-4xl mx-auto p-4">
			<h1 className="text-3xl font-bold mb-4">RRHS {year} Yearbook</h1>
			<p>Coming soon...</p>
			{/* You could pull data dynamically here based on `year` */}
			<img
				src={`/images/yearbooks/${year}.jpg`}
				alt={`Yearbook ${year}`}
				className="mt-6 rounded shadow max-w-full"
			/>
		</div>
	)
}
