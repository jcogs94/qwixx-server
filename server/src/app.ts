import express, { Express } from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

import { AppState } from '@configs/appState'
import { PORT } from '@configs/server'
import { PUBLIC_DIRECTORY_BUILD_PATH } from '@constants/paths'
import { serverLogger } from '@configs/logger'

import { apiRouter } from '@api/routers/api'


const app: Express = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: { origin: '*'}
})

export const appState = new AppState(io)
appState.initializeHandlers()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: '*' }))
app.use(express.static(PUBLIC_DIRECTORY_BUILD_PATH))

// routers
app.use('/api', apiRouter)

app.get('/*splat', (req, res) => {
    serverLogger.http(`Request received: ${req.url}`)
    serverLogger.http(`Sending index.html...`)
    res.sendFile('index.html', { root: PUBLIC_DIRECTORY_BUILD_PATH })
})

server.listen(PORT, () => {
    serverLogger.info(`Server started and listening on port ${PORT}...`)
})
