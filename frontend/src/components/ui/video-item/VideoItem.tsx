import { BadgeCheckIcon, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PAGE } from '@/config/public-page.config'

import { transformDate } from '@/utils/transform-date'
import { transformViews } from '@/utils/transform-views'

import type { Video } from '@/types/video.types'

interface Props {
	video: Video
	Icon?: LucideIcon
}

export function VideoItem({ video, Icon }: Props) {
	return (
		<div>
			<div className='relative mb-2'>
				<Link href={PAGE.VIDEO(video.title)}>
					<Image
						src={video.thumbnailUrl}
						alt={video.title}
						width={250}
						height={140}
						className='rounded-lg'
					/>
				</Link>
				<Link
					href={PAGE.CHANNEL(video.channel.slug)}
					className='absolute left-1.5 bottom-1.5'
				>
					<Image
						src={video.channel.avatarUrl}
						alt={video.channel.slug}
						width={35}
						height={35}
						className='rounded-md shadow-md shadow-gray-6 50'
					/>
				</Link>
			</div>
			<div className='mb-1 flex items-center justify-between gap-1'>
				<div className='flex item-center justify-between gap-0.5 '>
					{Icon && (
						<Icon
							className='text-red-500'
							size={18}
						/>
					)}
					<span className='text-gray-400 text-sm'>{transformViews(video.viewsCount)}</span>
				</div>
				<div>
					<span className='text-gray-400 text-sm'>{transformDate(video.createdAt)}</span>
				</div>
			</div>
			<div className='mb-1'>
				<Link
					href={PAGE.VIDEO(video.title)}
					className='line-clamp-2 leading-snug'
				>
					{video.title}
				</Link>
			</div>
			<div>
				<Link
					href={PAGE.CHANNEL(video.channel.slug)}
					className='flex items-center gap-1'
				>
					<span className='text-gray-400 text-sm'>{video.channel.slug}</span>
					<span>
						<BadgeCheckIcon
							className='text-green-500 mt-0.75'
							size={15}
						/>
					</span>
				</Link>
			</div>
		</div>
	)
}
