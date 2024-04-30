import { HN_URL } from '../../shared/constants/apiConstants'
import axios from 'axios'
import { TItem } from '../../shared/types/types.d.ts'

export const getItemById = async id => {
	try {
		return axios.get<TItem>(`${HN_URL}/item/${id}.json?print=pretty`)
	} catch (err) {
		console.error(err.toJSON())
	}
}
