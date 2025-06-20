import { Server } from "socket.io"

import { initConnectionHandlers } from "@services/socket/initConnectionHandlers"
import { socketLogger } from "./logger"

export class AppState {
    private io: Server
    private clientConnectionCount: number = 0

    constructor (io: Server) {
        this.io = io
    }

    initializeHandlers = () => {
        initConnectionHandlers(this.io)
    }

    logClientConnectionCount = () => {
        socketLogger.debug(`current client connection count: ${this.clientConnectionCount}`)
    }
    
    incrementClientConnectionCount = () => {
        this.clientConnectionCount++
        this.logClientConnectionCount()
    }
    
    decrementClientConnectionCount = () => {
        this.clientConnectionCount--
        this.logClientConnectionCount()
    }
    
    getClientConnectionCount = () => { return this.clientConnectionCount }
}
