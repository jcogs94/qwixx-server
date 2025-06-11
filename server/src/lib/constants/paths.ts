import { DEV_MODE } from "@configs/server"
import path from "path"

// System paths
export const ROOT_PATH = '/'
export const MMS_PATH = '/mms'
export const MEDIA_PATH = '/media'
export const HOME_PATH = '~/'
export const HOME_TMP_PATH = `${HOME_PATH}tmp`
export const SDCARD_PATH = `${MEDIA_PATH}/sdcard`

// Server paths
export const SERVER_PROJECT_ROOT = path.resolve(__dirname, '../../..')
export const BUILD_PATH = path.join(SERVER_PROJECT_ROOT, 'dist')
export const PUBLIC_DIRECTORY_BUILD_PATH = path.join(BUILD_PATH, 'public')
export const DEV_TESTING_PATH = `${SERVER_PROJECT_ROOT}/devTesting`

// Logger paths
export const LOG_FILE_PATH = path.join(`${DEV_MODE ? DEV_TESTING_PATH : HOME_PATH}/logs`)
export const SERVER_LOG_FILE_PATH = `${LOG_FILE_PATH}/qwixx-server.log`
export const SOCKET_LOG_FILE_PATH = `${LOG_FILE_PATH}/qwixx-socket.log`
export const UTILS_LOG_FILE_PATH = `${LOG_FILE_PATH}/qwixx-utils.log`
