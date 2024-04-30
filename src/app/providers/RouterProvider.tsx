import React from 'react'
import { ROUTES } from '../../shared/constants/routes'
import {
	createHashRouter,
	RouterProvider
} from '@vkontakte/vk-mini-apps-router'

const hashRouter = createHashRouter(ROUTES)

const Router = ({ children }) => {
	return <RouterProvider router={hashRouter}>{children}</RouterProvider>
}

export default Router
