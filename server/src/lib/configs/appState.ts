import { Server } from "socket.io"

import { initConnectionHandlers } from "@services/socket/initConnectionHandlers"

export class AppState {
    private io: Server
    private clientConnectionCount: number = 0

    constructor (io: Server) {
        this.io = io
    }

    initializeHandlers = () => {
        initConnectionHandlers(this.io)
    }

    incrementClientConnectionCount = () => { this.clientConnectionCount++ }
    decrementClientConnectionCount = () => { this.clientConnectionCount-- }
    getClientConnectionCount = () => { return this.clientConnectionCount }
}
