import { Button, CardGrid, ContentCard, Group, Header } from '@vkontakte/vkui'
import { useNews } from '../hooks/useNews.js'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import Loader from '../ui/Loader.jsx'
import { useNewsInitial } from '../hooks/useNewsInitial.js'

const NewsList = () => {
	const {
		news: newsInitial,
		isPending: isPendingInitial,
		isFetching: isFetchingInitial
	} = useNewsInitial()
	const { news, refetch, isLoading, isPending, isRefetching, isFetching } =
		useNews()

	const routeNavigator = useRouteNavigator()
	return (
		<Group>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingBottom: '1em',
					paddingRight: '0.5em'
				}}
			>
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
				{(newsInitial.isPending || isPendingInitial || isFetchingInitial) && (
					<Loader />
				)}
				{newsInitial.isSuccess && news.isPending && (
					<>
						{' '}
						{newsInitial.data.map(item => {
							return (
								<ContentCard
									onClick={() => {
										routeNavigator.push(`/${item.data.id}`)
									}}
									key={item.data.id}
									subtitle={
										item.data.score == 1
											? `${item.data.score} point`
											: `${item.data.score} points`
									}
									header={item.data.title}
									caption={`${item.time} ago by ${item.data.by}`}
								/>
							)
						})}
						<Loader />
					</>
				)}
				{news.isSuccess &&
					news.data.map(item => {
						return (
							<ContentCard
								onClick={() => {
									routeNavigator.push(`/${item.data.id}`)
								}}
								key={item.data.id}
								subtitle={
									item.data.score == 1
										? `${item.data.score} point`
										: `${item.data.score} points`
								}
								header={item.data.title}
								caption={`${item.time} ago by ${item.data.by}`}
							/>
						)
					})}
			</CardGrid>
		</Group>
	)
}

export default NewsList
