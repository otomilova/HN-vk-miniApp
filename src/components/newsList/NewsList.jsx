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

// const Story = ({ id, routeNavigator }) => {
// 	const {
// 		data: story,
// 		isLoading,
// 		isPending,
// 		isRefetching,
// 		isFetching,
// 		isSuccess
// 	} = useNewsById(id)
// 	return (
// 		<>
// 			{(isLoading || isPending || isRefetching || isFetching) && (
// 				<SimpleCell
// 					expandable='auto'
// 					style={{
// 						width: '100%',
// 						display: 'flex',
// 						alignItems: 'center',
// 						flexDirection: 'column'
// 					}}
// 				>
// 					<Spinner size='regular' style={{ margin: '20px 0' }} />
// 				</SimpleCell>
// 			)}
// 			{isSuccess && (
// 				<ContentCard
// 					onClick={() => {
// 						routeNavigator.push(`/${story.id}`)
// 					}}
// 					key={story.id}
// 					subtitle={
// 						story.score == 1 ? `${story.score} point` : `${story.score} points`
// 					}
// 					header={story.title}
// 					caption={`${story.time} ago by ${story.by}`}
// 				/>
// 			)}
// 		</>
// 	)
// }
