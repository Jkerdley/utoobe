import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Trending videos',
	description: 'Trending videos',
	alternates: {
		canonical: '/'
	},
	openGraph: {
		url: '/trending',
		type: 'website',
		title: 'Trending videos'
	}
}

export default function Trending() {
	return <div>Trending videos</div>
}
