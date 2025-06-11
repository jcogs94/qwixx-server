import winston from 'winston'

export type WinstonLogLevel = keyof typeof winston.config.npm.levels
export type WinstonTransport = Array<typeof winston.transports.Console | typeof winston.transports.File>
