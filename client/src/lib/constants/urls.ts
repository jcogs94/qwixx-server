import { DEV_MODE, SERVER_PORT } from "@configs/app"

// base urls
const windowAddress = `http://${window.location.host}`
const localAddress = `http://localhost:${SERVER_PORT}`

export const BASE_URL = windowAddress
export const BASE_SERVER_URL = DEV_MODE ? localAddress : windowAddress

export const SOCKET_URL = BASE_SERVER_URL
export const SERVER_API_URL = `${BASE_SERVER_URL}/api`

// app urls
export const homeUrl = BASE_URL
