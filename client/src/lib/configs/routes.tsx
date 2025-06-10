import { createBrowserRouter } from "react-router-dom"

import { HOME_PATH } from "./paths"

import App from '@layoutComponents/App'
import HomePage from '@pages/HomePage'

export const router = createBrowserRouter([
    {
        path: HOME_PATH,
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            { element: <HomePage />, path: HOME_PATH },
        ]
    }
])
