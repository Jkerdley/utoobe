import { type BadgeCheck, BadgeCheckIcon, type LucideIcon } from 'lucide-react'
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
			<div>
				<Link href={PAGE.VIDEO(video.slug)}>
					<Image
						src={video.thumbnailUrl}
						alt={video.title}
						width={250}
						height={140}
					/>
				</Link>
				<Link href={PAGE.CHANNEL(video.channel.slug)}>
					<Image
						src={video.channel.avatarUrl}
						alt={video.channel.name}
						width={30}
						height={30}
					/>
				</Link>
			</div>
			<div>
				<div>
					{Icon && <Icon />}
					<span>{transformViews(video.viewsCount)}</span>
				</div>
				<div>
					<span>{transformDate(video.createdAt)}</span>
				</div>
			</div>
			<div>{video.title}</div>
			<div>
				<span>{video.channel.name}</span>
				<span>
					<BadgeCheckIcon className='text-green-500' />
				</span>
			</div>
		</div>
	)
}
