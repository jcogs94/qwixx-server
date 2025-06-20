import { WinstonLogLevel } from "@customTypes/config"

export const DEV_MODE: boolean = true
export const PORT: number = 4000

// logger configs
export const LOG_TO_FILE: boolean = DEV_MODE ? true : true
export const SERVER_LOG_LEVEL: WinstonLogLevel = DEV_MODE ? 'debug' : 'warn'
export const SOCKET_LOG_LEVEL: WinstonLogLevel = DEV_MODE ? 'debug' : 'warn'
export const UTILS_LOG_LEVEL: WinstonLogLevel = DEV_MODE ? 'debug' : 'warn'
