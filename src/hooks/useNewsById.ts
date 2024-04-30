import { useQuery } from '@tanstack/react-query'
import { formatDistance } from 'date-fns'
import { getItemById } from '../services/items.service.ts'

export const useNewsById = (id: number, refetchOnMount: boolean = false) => {
	return useQuery({
		enabled: !!id,
		queryKey: ['get news overview', id],
		queryFn: () => getItemById(id),
		select: ({ data }) => {
			const itemDate = data.time ? new Date(data.time * 1000) : new Date()
			return {
				...data,
				time: formatDistance(itemDate, new Date(), { includeSeconds: true })
			}
		},
		refetchOnMount: refetchOnMount
	})
}
