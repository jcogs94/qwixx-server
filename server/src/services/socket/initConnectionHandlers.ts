import { Server, Socket } from 'socket.io'

import { socketLogger } from '@configs/logger'

import { appState } from '@app'
import { ConnectionHandler } from './connectionHandler'
import { gameHandlers } from './game/gameHandlers'


export const initConnectionHandlers = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        socketLogger.info('client connected...')
        appState.incrementClientConnectionCount()

        const connectionHandler = new ConnectionHandler(io, socket)

        gameHandlers(connectionHandler)

        socket.on('disconnect', () => {
            socketLogger.info('client disconnected...')
            appState.decrementClientConnectionCount()
        })
    })
}
