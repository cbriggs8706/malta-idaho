'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
} from '@/components/ui/navigation-menu'

const navLinkClass = (href: string, pathname: string) => {
	const isActive = pathname === href
	return `block px-2 py-1 rounded-md transition-colors ${
		isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'hover:bg-gray-100'
	}`
}

export default function Nav() {
	const pathname = usePathname()
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<header className="bg-white shadow-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
				<Link href="/" className="text-xl font-bold text-foreground">
					Malta, Idaho
				</Link>

				{/* Hamburger Button */}
				<button
					onClick={() => setMobileOpen(!mobileOpen)}
					className="sm:hidden text-2xl"
					aria-label="Toggle Menu"
				>
					{mobileOpen ? '✕' : '☰'}
				</button>

				{/* Desktop Menu */}
				<div className="hidden sm:block">
					<NavigationMenu>
						<NavigationMenuList className=" my-auto">
							{/* Government */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-white">
									Government
								</NavigationMenuTrigger>
								<NavigationMenuContent className="p-4">
									<ul className="list-none grid gap-2 min-w-[200px]">
										<li>
											<NavigationMenuLink asChild>
												<Link
													href="/city-council"
													className={navLinkClass('/city-council', pathname)}
												>
													City Council
												</Link>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink asChild>
												<Link
													href="/city-ordinance"
													className={navLinkClass('/city-ordinance', pathname)}
												>
													City Ordinance
												</Link>
											</NavigationMenuLink>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* Community */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-white">
									Community
								</NavigationMenuTrigger>
								<NavigationMenuContent className="p-4">
									<ul className="list-none grid gap-2 min-w-[200px]">
										<li>
											<NavigationMenuLink asChild>
												<Link
													href="/church"
													className={navLinkClass('/church', pathname)}
												>
													Church
												</Link>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink asChild>
												<Link
													href="/business"
													className={navLinkClass('/business', pathname)}
												>
													Business
												</Link>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink asChild>
												<Link
													href="/person"
													className={navLinkClass('/person', pathname)}
												>
													People
												</Link>
											</NavigationMenuLink>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* History */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-white">
									History
								</NavigationMenuTrigger>
								<NavigationMenuContent className="p-4">
									<ul className="list-none grid gap-2 min-w-[200px]">
										<li>
											<NavigationMenuLink asChild>
												<Link
													href="/history"
													className={navLinkClass('/history', pathname)}
												>
													Town History
												</Link>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink asChild>
												<Link
													href="/historical-site"
													className={navLinkClass('/historical-site', pathname)}
												>
													Historical Sites
												</Link>
											</NavigationMenuLink>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* Other */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-white">
									Other
								</NavigationMenuTrigger>
								<NavigationMenuContent className="p-4">
									<ul className="list-none grid gap-2 min-w-[200px]">
										<li>
											<NavigationMenuLink asChild>
												<Link
													href="/raft-river-high-school"
													className={navLinkClass(
														'/raft-river-high-school',
														pathname
													)}
												>
													High School
												</Link>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink asChild>
												<Link
													href="/valley-vu-cemetery"
													className={navLinkClass(
														'/valley-vu-cemetery',
														pathname
													)}
												>
													Cemetery
												</Link>
											</NavigationMenuLink>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>

			{/* Mobile Drawer */}
			{mobileOpen && (
				<div className="sm:hidden px-4 pb-4">
					<div className="space-y-4 text-gray-800">
						<div>
							<p className="font-semibold">Government</p>
							<Link
								href="/city-council"
								className={navLinkClass('/city-council', pathname)}
								onClick={() => setMobileOpen(false)}
							>
								City Council
							</Link>
							<Link
								href="/city-ordinance"
								className={navLinkClass('/city-ordinance', pathname)}
								onClick={() => setMobileOpen(false)}
							>
								City Ordinance
							</Link>
						</div>

						<div>
							<p className="font-semibold">Community</p>
							<Link
								href="/church"
								className={navLinkClass('/church', pathname)}
								onClick={() => setMobileOpen(false)}
							>
								Church
							</Link>
							<Link
								href="/business"
								className={navLinkClass('/business', pathname)}
								onClick={() => setMobileOpen(false)}
							>
								Business
							</Link>
							<Link
								href="/person"
								className={navLinkClass('/person', pathname)}
								onClick={() => setMobileOpen(false)}
							>
								People
							</Link>
						</div>

						<div>
							<p className="font-semibold">History</p>
							<Link
								href="/history"
								className={navLinkClass('/history', pathname)}
								onClick={() => setMobileOpen(false)}
							>
								Town History
							</Link>
							<Link
								href="/historical-site"
								className={navLinkClass('/historical-site', pathname)}
								onClick={() => setMobileOpen(false)}
							>
								Historical Sites
							</Link>
						</div>

						<div>
							<p className="font-semibold">Other</p>
							<Link
								href="/raft-river-high-school"
								className={navLinkClass('/raft-river-high-school', pathname)}
								onClick={() => setMobileOpen(false)}
							>
								High School
							</Link>
							<Link
								href="/valley-vu-cemetery"
								className={navLinkClass('/valley-vu-cemetery', pathname)}
								onClick={() => setMobileOpen(false)}
							>
								Cemetery
							</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	)
}
