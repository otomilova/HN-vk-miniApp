import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import bridge from '@vkontakte/vk-bridge'
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'
import Router from './app/providers/RouterProvider'
import QueryProvider from './app/providers/QueryClientProvider'

bridge.send('VKWebAppInit')

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ConfigProvider>
		<AdaptivityProvider>
			<QueryProvider>
				<Router>
					<App />
				</Router>
			</QueryProvider>
		</AdaptivityProvider>
	</ConfigProvider>
)
