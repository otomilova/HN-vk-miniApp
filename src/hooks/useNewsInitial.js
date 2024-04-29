import { useQueries, useQuery } from '@tanstack/react-query'
import { getNews } from '../services/news.service.js'
import { formatDistance } from 'date-fns'
import { getItemById } from '../services/items.service.js'

export const useNewsInitial = () => {
	const { data, refetch, isLoading, isPending, isRefetching, isFetching } =
		useQuery({
			queryKey: ['get news ids initial'],
			queryFn: () => getNews(10),
			select: ({ data }) => data,
			refetchInterval: 60000
		})
	const news = useQueries({
		enabled: !!data,
		queries: data
			? data?.map(id => {
					return {
						queryKey: ['news details', id],
						queryFn: () => getItemById(id)
					}
				})
			: [],
		combine: results => {
			return {
				data: results.map(result => {
					const itemDate = result?.data
						? new Date(result?.data?.data.time * 1000)
						: new Date()

					return {
						...result.data,
						time: formatDistance(itemDate, new Date(), { includeSeconds: true })
					}
				}),
				isPending: results.some(result => result.isPending),
				isSuccess: results.every(result => result.isSuccess)
			}
		}
	})

	return { news, refetch, isLoading, isPending, isRefetching, isFetching }
}
