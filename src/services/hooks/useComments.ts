import { useQueries } from '@tanstack/react-query'
import { getItemById } from '../api/items.service.ts'
import { format } from 'date-fns'
import { makeDate } from '../../utils/dateUtils'

export const useComments = (ids: number[] | undefined) => {
	return useQueries({
		enabled: !!ids,
		queries: ids
			? ids?.map(id => {
					return {
						queryKey: ['comment details', id],
						queryFn: () => getItemById(id),
						refetchOnMount: true
					}
				})
			: [],
		combine: results => {
			return {
				data: results.map(result => {
					const itemDate = makeDate(result?.data?.data?.time)

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
