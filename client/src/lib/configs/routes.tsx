import { createBrowserRouter } from "react-router-dom"

import { HOME_PATH } from "./paths"

import App from '@layoutComponents/App'
import ErrorPage from "@pages/ErrorPage"
import HomePage from '@pages/HomePage'
import NotFoundPage from "@pages/NotFoundPage"

export const router = createBrowserRouter([
    {
        path: HOME_PATH,
        element: <App />,
        children: [
            { element: <HomePage />, path: HOME_PATH },
        ]
    },
    {
        path: '*',
        errorElement: <ErrorPage />,
        element: <NotFoundPage />,
    }
])
