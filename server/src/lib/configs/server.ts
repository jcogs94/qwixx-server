import { WinstonLogLevel } from "@customTypes/config"

export const DEV_MODE: boolean = false
export const PORT: number = 4000

// logger configs
export const LOG_TO_FILE: boolean = DEV_MODE ? false : true
export const SERVER_LOG_LEVEL: WinstonLogLevel = DEV_MODE ? 'debug' : 'warn'
export const SOCKET_LOG_LEVEL: WinstonLogLevel = DEV_MODE ? 'debug' : 'warn'
export const UTILS_LOG_LEVEL: WinstonLogLevel = DEV_MODE ? 'debug' : 'warn'
