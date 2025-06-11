/*
*   Logger Levels for Winston reference:
*
*   error: 0
*   warn: 1
*   info: 2
*   http: 3
*   verbose: 4
*   debug: 5
*   silly: 6
*   
*   https://github.com/winstonjs/winston#logging-levels
*/

import { addColors, createLogger, format, transports } from 'winston'

import { WinstonTransport } from '@customTypes/config'
import {
  SERVER_LOG_FILE_PATH, SOCKET_LOG_FILE_PATH, UTILS_LOG_FILE_PATH
} from '@constants/paths'

import {
  LOG_TO_FILE, SERVER_LOG_LEVEL, SOCKET_LOG_LEVEL, UTILS_LOG_LEVEL
} from '@configs/server'


const colorsConfig = {
  error: 'bold red',
  warn: 'bold yellow',
  info: 'blue',
  verbose: 'cyan',
  debug: 'magenta',
  silly: 'green'
}

addColors(colorsConfig)
const { combine, timestamp, colorize, printf, label } = format

const timestampConfig = timestamp({ format: 'YYYY/MM/DD HH:mm:ss' })
const colorizeConfig = colorize({ all: true })

const consolePrintfConfig = printf(({ level, message, timestamp, label }) => `[ ${timestamp} ${level} ${label} ]: ${message}`)
const filePrintfConfig = printf(({ level, message, timestamp }) => `[ ${timestamp} ] ${level}: ${message}`)

const fileFormat = combine(timestampConfig, filePrintfConfig)

const getFileTransportConfig = (filename: string) => new transports.File({ filename, format: fileFormat })
const getConsoleTransportConfig = (labelName: string) => new transports.Console({
  format: combine(timestampConfig, colorizeConfig, label({ label: labelName }), consolePrintfConfig)
})


const serverConsoleTransportConfig = getConsoleTransportConfig('SERVER')
const serverTransportsConfig: WinstonTransport = LOG_TO_FILE ? [
  serverConsoleTransportConfig, getFileTransportConfig(SERVER_LOG_FILE_PATH)
] : [serverConsoleTransportConfig]
export const serverLogger = createLogger({ level: SERVER_LOG_LEVEL as string, transports: serverTransportsConfig })

const socketConsoleTransportConfig = getConsoleTransportConfig('SOCKET')
const socketTransportsConfig: WinstonTransport = LOG_TO_FILE ? [
  socketConsoleTransportConfig, getFileTransportConfig(SOCKET_LOG_FILE_PATH)
] : [socketConsoleTransportConfig]
export const socketLogger = createLogger({ level: SOCKET_LOG_LEVEL as string, transports: socketTransportsConfig })

const utilsConsoleTransportConfig = getConsoleTransportConfig('UTILS')
const utilsTransportsConfig: WinstonTransport = LOG_TO_FILE ? [
  utilsConsoleTransportConfig, getFileTransportConfig(UTILS_LOG_FILE_PATH)
] : [utilsConsoleTransportConfig]
export const utilsLogger = createLogger({ level: UTILS_LOG_LEVEL as string, transports: utilsTransportsConfig })
