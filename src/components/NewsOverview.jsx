import {
	Button,
	Caption,
	Cell,
	Counter,
	Group,
	Header,
	Link,
	PanelHeaderBack,
	RichCell,
	Separator,
	Spacing,
	Text,
	Title
} from '@vkontakte/vkui'
import { useParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { useNewsById } from '../hooks/useNewsById.js'
import Loader from '../ui/Loader.jsx'
import { Icon24ExternalLinkOutline } from '@vkontakte/icons'
import Comments from './Comments.jsx'
import parse from 'html-react-parser'
import React from 'react'

const NewsOverview = () => {
	const routeNavigator = useRouteNavigator()
	const { id } = useParams()
	const {
		data: currentNews,
		isLoading,
		isSuccess,
		refetch,
		isFetching
	} = useNewsById(id, true)
	return (
		<Group>
			{isLoading && <Loader />}
			{isSuccess && (
				<>
					<PanelHeaderBack onClick={() => routeNavigator.back()} />
					<Header size='large' width='10px' wrap='wrap'>
						<Title style={{ textWrap: 'wrap', maxWidth: '90vw' }}>
							{currentNews.title}{' '}
						</Title>
					</Header>
					<RichCell>
						<div>
							{currentNews.text && (
								<Text style={{ textWrap: 'wrap', maxWidth: '90vw' }}>
									{parse(currentNews.text)}
								</Text>
							)}
							{currentNews.url && (
								<Link
									href={currentNews.url}
									target='_blank'
									style={{ textWrap: 'wrap', maxWidth: '90vw' }}
								>
									{currentNews.url}{' '}
									<Icon24ExternalLinkOutline width={16} height={16} />
								</Link>
							)}
						</div>
						<Caption level='2' style={{ marginBottom: 16, marginTop: 16 }}>
							{`Published ${currentNews.time} ago by ${currentNews.by}`}
						</Caption>
						<Spacing size={24} />
						<Group>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									paddingBottom: '1em',
									paddingTop: '1em',
									paddingRight: '0.5em'
								}}
							>
								<Cell
									indicator={
										<Counter mode='primary'>{currentNews.descendants}</Counter>
									}
								>
									Comments
								</Cell>
								<Button onClick={() => refetch()} loading={isFetching}>
									Refresh
								</Button>
							</div>

							<Separator />
							<Spacing size={24}></Spacing>
							{!currentNews.kids && (
								<Caption
									level='1'
									style={{
										marginLeft: '1em',
										paddingBottom: '2em',
										paddingTop: '1em'
									}}
								>
									No comments yet
								</Caption>
							)}

							<Comments ids={currentNews?.kids} shift={0} />
						</Group>
					</RichCell>
				</>
			)}
		</Group>
	)
}

export default NewsOverview
