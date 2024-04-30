import { AppRoot, SplitCol, SplitLayout } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/cssm/styles/themes.css'
import { FC } from 'react'
import Home from '../components/home/Home'

const App: FC = () => {
	return (
		<AppRoot>
			<SplitLayout>
				<SplitCol>
					<Home />
				</SplitCol>
			</SplitLayout>
		</AppRoot>
	)
}

export default App
