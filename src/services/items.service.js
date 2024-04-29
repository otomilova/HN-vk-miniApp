import { $axios } from './api.js'

export const getItemById = async id => {
	try {
		return $axios.get(`/item/${id}.json?print=pretty`, {
			headers: { 'Access-Control-Allow-Origin': 'localhost:3000' }
		})
	} catch (err) {
		console.error(err.toJSON())
	}
}
