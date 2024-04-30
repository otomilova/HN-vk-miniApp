import React, { FC } from 'react'
import NewsList from '../newsList/NewsList'
import NewsOverview from '../newsOverview/NewsOverview'
import { Footer, Image, Panel, PanelHeader, View } from '@vkontakte/vkui'
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router'

const Home: FC = () => {
	const { panel: activePanel } = useActiveVkuiLocation()
	return (
		<View activePanel='outer'>
			<Panel id='outer'>
				<View activePanel={activePanel}>
					<Panel id='main'>
						<PanelHeader
							before={<Image src='/logo.svg' alt='Hacker News Logo' />}
						>
							Hacker News
						</PanelHeader>
						<NewsList />
					</Panel>
					<Panel id='newsOverview'>
						<PanelHeader
							before={<Image src='/logo.svg' alt='Hacker News Logo' />}
						>
							Hacker News
						</PanelHeader>
						<NewsOverview />
					</Panel>
				</View>
				<Footer>Hacker News</Footer>
			</Panel>
		</View>
	)
}

export default Home
