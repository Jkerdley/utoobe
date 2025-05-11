import type { Video } from './video.types'

export interface Channel {
	id: string
	name: string
	slug: string
	description: string
	isVerified: boolean
	avatarUrl: string
	bannerUrl: string
	// user: string
	videos: Video
	subscribers: []
	createdAt: string
}
