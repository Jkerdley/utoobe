import axios from 'axios'

import type { Video } from '@/types/video.types'

class VideoService {
	async getTrendingVideos() {
		const response = await axios.get<Video[]>('http://localhost:4200/api/videos/trending')
		return response.data
	}

	getExploreVideos() {
		return axios.get<{ videos: Video[] }>('http://localhost:4200/api/videos/explore')
	}
}

export const videoService = new VideoService()
