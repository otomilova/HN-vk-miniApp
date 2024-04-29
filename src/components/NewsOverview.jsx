import {
	Button,
	Caption,
	Group,
	Header,
	Link,
	PanelHeaderBack,
	RichCell,
	Separator,
	Spacing,
	Text
} from '@vkontakte/vkui'
import { useParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { useNewsById } from '../hooks/useNewsById.js'
import Loader from '../ui/Loader.jsx'
import { Icon24ExternalLinkOutline } from '@vkontakte/icons'
import Comments from './Comments.jsx'
import parse from 'html-react-parser'

const NewsOverview = () => {
	const routeNavigator = useRouteNavigator()
	const { id } = useParams()
	const {
		data: currentNews,
		isLoading,
		isSuccess,
		refetch,
		isFetching
	} = useNewsById(id)
	return (
		<Group>
			{isLoading && <Loader />}
			{isSuccess && (
				<>
					<PanelHeaderBack onClick={() => routeNavigator.back()} />
					<Header size='large'>{currentNews.title}</Header>
					<RichCell>
						<div>
							{currentNews.text && (
								<Text style={{ textWrap: 'wrap', maxWidth: '90vw' }}>
									{parse(currentNews.text)}
								</Text>
							)}
							{currentNews.url && (
								<Link href={currentNews.url} target='_blank'>
									{currentNews.url}{' '}
									<Icon24ExternalLinkOutline width={16} height={16} />
								</Link>
							)}
						</div>
						<Caption level='2' style={{ marginBottom: 16, marginTop: 16 }}>
							{`Published ${currentNews.time} ago by ${currentNews.by}`}
						</Caption>
						<Spacing size={24} />
						<Group
							header={<Header>{`Comments: ${currentNews.descendants}`}</Header>}
						>
							<Button
								style={{ marginLeft: '1em' }}
								mode='primary'
								onClick={() => refetch()}
								loading={isFetching}
							>
								Refresh
							</Button>
							<Spacing size={24}>
								<Separator />
							</Spacing>
							<Comments ids={currentNews?.kids} shift={0} />
						</Group>
					</RichCell>
				</>
			)}
		</Group>
	)
}

export default NewsOverview
