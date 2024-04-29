import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import bridge from '@vkontakte/vk-bridge'
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
	createBrowserRouter,
	createHashRouter,
	RouterProvider
} from '@vkontakte/vk-mini-apps-router'

bridge.send('VKWebAppInit')
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})
const routes = [
	{
		path: '/',
		panel: 'main',
		view: 'main'
	},
	{
		path: `/:id`,
		panel: 'newsOverview',
		view: 'main'
	},
	{
		path: 'index.html/',
		panel: 'main',
		view: 'main'
	},
	{
		path: `index.html/:id`,
		panel: 'newsOverview',
		view: 'main'
	}
]

const router = createBrowserRouter(routes)

const hashRouter = createHashRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
	<ConfigProvider>
		<AdaptivityProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} hashRouter={hashRouter}>
					<App />
				</RouterProvider>
			</QueryClientProvider>
		</AdaptivityProvider>
	</ConfigProvider>
)
