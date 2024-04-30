import { Button, CardGrid, Group, Header } from '@vkontakte/vkui'
import { useNews } from '../../hooks/useNews'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import Loader from '../../ui/loader/Loader.tsx'
import styles from './index.module.css'
import { Story } from './Story'
import { FC } from 'react'
import { UseQueryResult } from '@tanstack/react-query'

const NewsList: FC = () => {
	const {
		data: news,
		refetch,
		isLoading,
		isPending,
		isRefetching,
		isFetching
	}: {
		data: number[]
		refetch: () => Promise<UseQueryResult>
		isLoading: boolean
		isPending: boolean
		isRefetching: boolean
		isFetching: boolean
	} = useNews()
	const routeNavigator = useRouteNavigator()
	return (
		<Group>
			<div className={styles.news}>
				<Header mode='primary' size='large'>
					Latest News
				</Header>
				<Button
					onClick={() => refetch()}
					loading={isLoading || isPending || isFetching || isRefetching}
				>
					Refresh
				</Button>
			</div>

			<CardGrid size='l'>
				{(isFetching || isLoading || isPending || isRefetching) && <Loader />}
				{news?.map(id => {
					return <Story id={id} routeNavigator={routeNavigator} key={id} />
				})}
			</CardGrid>
		</Group>
	)
}

export default NewsList
