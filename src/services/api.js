import axios from 'axios'

const HN_URL = `${import.meta.env.VITE_HN_URL}/v0`

export const $axios = axios.create({
	baseURL: HN_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})
