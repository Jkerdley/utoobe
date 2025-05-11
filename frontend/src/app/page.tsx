'use client'

import { useQuery } from '@tanstack/react-query'
import { Flame } from 'lucide-react'

import { VideoItem } from '@/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'

export default function Home() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})
	console.log('data.data', data?.data)
	return (
		<div className='grid grid-cols-4 gap-6'>
			{isLoading
				? 'Loading...'
				: data?.data.videos.length &&
					data.data.videos.map(video => {
						// console.log('video', video)
						return (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						)
					})}
		</div>
	)
}

// export default function Home() {
// 	const { data, isLoading } = useQuery({
// 		queryKey: ['explore'],
// 		queryFn: () => videoService.getExploreVideos()
// 	})

// 	return (
// 		<div className='grid grid-cols-6 gap-6'>
// 			{isLoading
// 				? 'Loading...'
// 				: data?.data.length &&
// 					data.data.map(video => (
// 						<VideoItem
// 							key={video.id}
// 							video={video}
// 							Icon={Flame}
// 						/>
// 					))}
// 		</div>
// 	)
// }
