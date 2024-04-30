import axios from 'axios'
import { HN_URL } from './apiConstants.ts'

export const getNews = async (limit: number) => {
	try {
		return axios.get<number[]>(
			`${HN_URL}/newstories.json?print=pretty&orderBy="$key"&limitToFirst=${limit}`
		)
	} catch (err) {
		console.error(err.toJSON())
	}
}
