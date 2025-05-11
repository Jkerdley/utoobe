import axios from 'axios'

import type { Video } from '@/types/video.types'

class VideoService {
	getTrendingVideos() {
		return axios.get<{ videos: Video[] }>('http://localhost:4200/api/videos/trending')
	}

	getExploreVideos() {
		return axios.get<{ videos: Video[] }>('http://localhost:4200/api/videos/explore')
	}
}

export const videoService = new VideoService()
