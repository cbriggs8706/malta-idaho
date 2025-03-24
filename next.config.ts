import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	// other Next.js config options if you have them...
	async redirects() {
		return [
			{
				source: '/businesses',
				destination: '/business',
				permanent: true,
			},
			{
				source: '/city',
				destination: '/city-council',
				permanent: true,
			},
			{
				source: '/malta-city-ordinances',
				destination: '/city-ordinance',
				permanent: true,
			},
			{
				source: '/church-2',
				destination: '/church',
				permanent: true,
			},
			{
				source: '/historical-sites',
				destination: '/historical-site',
				permanent: true,
			},
			{
				source: '/histories',
				destination: '/history',
				permanent: true,
			},
			{
				source: '/residents',
				destination: '/valley-vu-cemetery',
				permanent: true,
			},
			{
				source: '/resident/:slug*',
				destination: '/person/:slug*',
				permanent: true, // 301 redirect
			},
		]
	},
}

export default nextConfig
