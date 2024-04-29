import { $axios } from './api.js'

export const getNews = async limit => {
	try {
		return $axios.get(
			`/newstories.json?print=pretty&orderBy="$key"&limitToFirst=${limit}`,
			{
				headers: { 'Access-Control-Allow-Origin': 'localhost:3000' }
			}
		)
	} catch (err) {
		console.error(err.toJSON())
	}
}
