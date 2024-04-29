import {
	AppRoot,
	Footer,
	Image,
	Panel,
	PanelHeader,
	View
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router'
import NewsOverview from './components/NewsOverview'
import NewsList from './components/NewsList.jsx'

function App() {
	const { panel: activePanel } = useActiveVkuiLocation()
	return (
		<AppRoot>
			<View activePanel={activePanel}>
				<Panel id='main'>
					<PanelHeader
						before={<Image src='/logo.svg' alt='Hacker News Logo' />}
					>
						Hacker News
					</PanelHeader>
					<NewsList />
					<Footer>Hacker News</Footer>
				</Panel>
				<Panel id='newsOverview'>
					<PanelHeader
						before={<Image src='/logo.svg' alt='Hacker News Logo' />}
					>
						Hacker News
					</PanelHeader>
					<NewsOverview />
					<Footer>Hacker News</Footer>
				</Panel>
			</View>
		</AppRoot>
	)
}

export default App
