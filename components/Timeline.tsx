'use client'
import { TimelineEvent, timelineSections } from '@/db/timelineSections'
import { useState } from 'react'

// Props for card component
interface TimelineCardProps {
	event: TimelineEvent
	expandedId: number | null
	setExpandedId: (id: number | null) => void
	isDualColumn: boolean
}

// Reusable card component
const TimelineCard: React.FC<TimelineCardProps> = ({
	event,
	expandedId,
	setExpandedId,
	isDualColumn,
}) => {
	const isExpanded = expandedId === event.id

	return (
		<div
			className={`relative mb-8 cursor-pointer transition-all duration-300 ease-in-out 
        ${isDualColumn && isExpanded ? 'col-span-2' : 'col-span-1'} 
        bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl border`}
			onClick={() => setExpandedId(isExpanded ? null : event.id)}
		>
			<div className="text-sm text-gray-500">{event.year}</div>
			<h3 className="text-xl font-semibold mb-2">{event.title}</h3>
			{event.image && (
				<img
					src={event.image}
					alt={event.title}
					className="w-full max-h-40 object-cover rounded-md mb-2"
				/>
			)}
			{isExpanded && <p className="text-gray-700 mt-2">{event.content}</p>}
		</div>
	)
}

const ParallelTimeline: React.FC = () => {
	const [expandedId, setExpandedId] = useState<number | null>(null)

	return (
		<div className="w-full max-w-6xl mx-auto py-8 px-4">
			<h2 className="text-3xl font-bold text-center mb-10">
				Organizational Timeline
			</h2>

			{timelineSections.map((section, index) => {
				return (
					<div key={index} className="relative mb-12">
						{/* Vertical center line */}
						<div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300 z-0 transform -translate-x-1/2" />

						{section.type === 'single' ? (
							<div className="grid grid-cols-1 gap-8 relative z-10">
								{section.events.map((event) => (
									<TimelineCard
										key={event.id}
										event={event}
										expandedId={expandedId}
										setExpandedId={setExpandedId}
										isDualColumn={false}
									/>
								))}
							</div>
						) : (
							<div className="grid grid-cols-2 gap-8 relative z-10">
								<div className="space-y-8">
									{section.left.map((event) => (
										<TimelineCard
											key={event.id}
											event={event}
											expandedId={expandedId}
											setExpandedId={setExpandedId}
											isDualColumn={true}
										/>
									))}
								</div>
								<div className="space-y-8">
									{section.right.map((event) => (
										<TimelineCard
											key={event.id}
											event={event}
											expandedId={expandedId}
											setExpandedId={setExpandedId}
											isDualColumn={true}
										/>
									))}
								</div>
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default ParallelTimeline
