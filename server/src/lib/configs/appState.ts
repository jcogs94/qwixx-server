import { Server } from "socket.io"

export class AppState {
    private io: Server

    constructor (io: Server) {
        this.io = io
    }
}
