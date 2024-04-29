import { useQueries } from '@tanstack/react-query'
import { getItemById } from '../services/items.service.js'
import { format } from 'date-fns'

export const useComments = ids => {
	return useQueries({
		enabled: !!ids,
		queries: ids
			? ids?.map(id => {
					return {
						queryKey: ['comment details', id],
						queryFn: () => getItemById(id)
					}
				})
			: [],
		combine: results => {
			return {
				data: results.map(result => {
					const itemDate = result?.data
						? new Date(result?.data?.data?.time * 1000)
						: new Date()

					return {
						...result.data,
						time: format(itemDate, `Mo MMM 'at' HH:mm`)
					}
				}),
				isPending: results.some(result => result.isPending),
				isSuccess: results.every(result => result.isSuccess)
			}
		}
	})
}
