'use client'
import React, { useState } from 'react'

export interface Ordinance {
	number: number
	title: string
	desc: string
	url: string
	transcript: string
}

type OrdinanceCardsProps = {
	ordinances: Ordinance[]
}

const OrdinanceCards: React.FC<OrdinanceCardsProps> = ({ ordinances }) => {
	const [expandedCard, setExpandedCard] = useState<number | null>(null)

	const handleClick = (ord: Ordinance) => {
		if (ord.url) {
			setExpandedCard(expandedCard === ord.number ? null : ord.number)
		}
	}

	return (
		<div className="flex flex-wrap gap-4 justify-start">
			{ordinances.map((ord) => {
				const isExpanded = expandedCard === ord.number

				return (
					<div
						key={ord.number}
						onClick={() => handleClick(ord)}
						className={`${
							isExpanded ? 'w-full' : 'w-full sm:w-[48%] lg:w-[23%]'
						} bg-white shadow rounded-xl p-4 border transition-all duration-300 cursor-pointer`}
					>
						<h3 className="text-lg font-semibold mb-1">
							Ordinance {ord.number}
						</h3>
						<p className="text-sm font-medium text-gray-700">{ord.title}</p>
						{ord.desc && (
							<p className="text-sm text-gray-500 mt-1">{ord.desc}</p>
						)}
						{isExpanded && ord.url && (
							<div className="mt-3">
								<img
									src={ord.url}
									alt={`Ordinance ${ord.number}`}
									className="w-full rounded-lg object-cover"
								/>
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default OrdinanceCards
