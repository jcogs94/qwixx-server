import { Server, Socket } from 'socket.io'

import { socketLogger } from '@configs/logger'

export class ConnectionHandler {
    private io: Server
    private socket: Socket

    constructor(io: Server, socket: Socket) {
        this.io = io
        this.socket = socket
    }

    emit = (event: string, data: any) => {
        socketLogger.debug(`emitting event: '${event}'`)
        this.socket.emit(event, data)
    }

    emitBroadcast = (event: string, data: any) => {
        socketLogger.debug(`broadcasting event: '${event}'`)
        this.io.emit(event, data)
    }

    on = (event: string, callback: (data: any) => void) => {
        socketLogger.debug(`listening for event: '${event}'`)
        this.socket.on(event, callback)
    }
}
