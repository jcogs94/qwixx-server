import { Server, Socket } from 'socket.io'

import { socketLogger } from '@configs/logger'

import { appState } from '@app'

import { ConnectionHandler } from './connectionHandler'

// import dataParserHandlers from "./handlers/dataParserHandlers.js"

export const initConnectionHandlers = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        appState.incrementClientConnectionCount()
        socketLogger.info('client connected...')

        const connectionHandler = new ConnectionHandler(io, socket)

        if (connectionHandler) {}

        socket.on('disconnect', () => {
            appState.decrementClientConnectionCount()
            socketLogger.info('client disconnected...')
        })
    })
}
