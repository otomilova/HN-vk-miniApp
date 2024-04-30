import { useNewsById } from '../../../services/hooks/useNewsById'
import { ContentCard, SimpleCell, Spinner } from '@vkontakte/vkui'
import styles from '../ui/index.module.css'
import { RouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { FC } from 'react'
import { IStory } from '../../../shared/types/types'

interface IStoryProps {
	id: number
	routeNavigator: RouteNavigator
}

export const Story: FC<IStoryProps> = ({ id, routeNavigator }) => {
	const {
		data: story,
		isLoading,
		isPending,
		isRefetching,
		isFetching,
		isSuccess
	}: {
		data: IStory
		isLoading: boolean
		isPending: boolean
		isRefetching: boolean
		isFetching: boolean
		isSuccess: boolean
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
