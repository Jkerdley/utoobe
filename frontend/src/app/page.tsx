import { Compass, Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import Explore from './explore/Explore'
import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Utoobe',
	description: 'Russian video platform',
	alternates: {
		canonical: '/'
	},
	openGraph: {
		url: '/',
		type: 'website',
		title: 'Utoobe'
	}
}

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.slice(0, 6)
	return (
		<section>
			<section>
				<Heading Icon={Compass}>Trending</Heading>
				<div className='grid grid-cols-5 gap-6'>
					{data.length &&
						trendingVideos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
				</div>
			</section>
			<Explore />
		</section>
	)
}
