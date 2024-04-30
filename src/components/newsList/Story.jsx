import { useNewsById } from '../../hooks/useNewsById.js'
import { ContentCard, SimpleCell, Spinner } from '@vkontakte/vkui'
import styles from './index.module.css'

export const Story = ({ id, routeNavigator }) => {
	const {
		data: story,
		isLoading,
		isPending,
		isRefetching,
		isFetching,
		isSuccess
	} = useNewsById(id)
	return (
		<>
			{(isLoading || isPending || isRefetching || isFetching) && (
				<SimpleCell expandable='auto' className={styles.story}>
					<Spinner size='regular' className={styles.spinner} />
				</SimpleCell>
			)}
			{isSuccess && (
				<ContentCard
					onClick={() => {
						routeNavigator.push(`/${story.id}`)
					}}
					key={story.id}
					subtitle={
						story.score == 1 ? `${story.score} point` : `${story.score} points`
					}
					header={story.title}
					caption={`${story.time} ago by ${story.by}`}
				/>
			)}
		</>
	)
}
