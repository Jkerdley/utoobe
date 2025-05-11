import type { Channel } from './channel.types'

export interface Video {
	id: string
	title: string
	slug: string
	description: string
	thumbnailUrl: string
	videoFileName: string
	viewsCount: number
	isPublic: boolean
	channel: Channel
	// channelId: string,
	// likes: number,
	// comments: string,
	// tags: string,
	createdAt: string
	// updatedAt: string,
	// playlist: string,
	// playlistId: string,
	// watchHistories: string,
}
