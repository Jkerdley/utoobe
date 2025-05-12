'use client'

import { useQuery } from '@tanstack/react-query'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'

export default function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<section>
			<h2>Explore</h2>
			<div className='grid grid-cols-5 gap-6'>
				{isLoading ? (
					<SkeletonLoader
						count={5}
						className='h-36 rounded-md'
					/>
				) : (
					data?.data?.videos?.length &&
					data.data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				)}
			</div>
		</section>
	)
}
