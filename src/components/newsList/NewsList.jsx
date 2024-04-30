import { Button, CardGrid, Group, Header } from '@vkontakte/vkui'
import { useNews } from '../../hooks/useNews.js'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import Loader from '../../ui/Loader.jsx'
import styles from './index.module.css'
import { Story } from './Story.jsx'

const NewsList = () => {
	const {
		data: news,
		refetch,
		isLoading,
		isPending,
		isRefetching,
		isFetching
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
