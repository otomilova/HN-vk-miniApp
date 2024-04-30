import { HN_URL } from './apiConstants.js'
import axios from 'axios'

export const getItemById = async id => {
	try {
		return axios.get(`${HN_URL}/item/${id}.json?print=pretty`)
	} catch (err) {
		console.error(err.toJSON())
	}
}
