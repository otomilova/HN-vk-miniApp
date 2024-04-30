import axios from 'axios'
import { HN_URL } from './apiConstants.js'

export const getNews = async limit => {
	try {
		return axios.get(
			`${HN_URL}/newstories.json?print=pretty&orderBy="$key"&limitToFirst=${limit}`
		)
	} catch (err) {
		console.error(err.toJSON())
	}
}
