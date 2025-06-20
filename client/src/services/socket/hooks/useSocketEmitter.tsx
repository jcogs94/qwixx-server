import { useCallback, useContext, useEffect, useRef, useState } from "react"

import type { EmitData, EmitError, EmitFunction } from "@customTypes/socket"

import { useSocketConnected } from "@socketService/hooks/useSocketConnected"
import { SocketContext } from "@socketService/SocketContext"

export const useSocketEmitter = (header: string, emitInit = false, emitData: EmitData = {}) => {
    const socket = useContext(SocketContext)
    const socketConnected = useSocketConnected()
    const [sentInitEmit, setSentEmitInit] = useState(false)
    const [lastError, setLastError] = useState<EmitError | null>(null)
    const pendingEmitRef = useRef<EmitData | null>(null)

    const emitEvent: EmitFunction = useCallback((data = {}) => {
        if (!socket) {
            setLastError({ error: 'Socket not initialized', timestamp: Date.now() })
            return
        }
        if (!socketConnected) {
            pendingEmitRef.current = data
            setLastError({ error: 'Socket not connected', timestamp: Date.now() })
            return
        }
        try {
            socket.emit(header, data)
            setLastError(null)
        } catch (err) {
            setLastError({ error: err instanceof Error ? err.message : 'Unknown error', timestamp: Date.now() })
        }
    }, [socket, socketConnected, header])

    // Handle initial emit
    useEffect(() => {
        if (!emitInit || sentInitEmit || !socket || !socketConnected) return
        emitEvent(emitData)
        setSentEmitInit(true)
    }, [emitInit, sentInitEmit, socket, socketConnected, emitEvent, emitData])

    // Handle reconnection for pending emits
    useEffect(() => {
        if (socketConnected && pendingEmitRef.current) {
            emitEvent(pendingEmitRef.current)
            pendingEmitRef.current = null
        }
    }, [socketConnected, emitEvent])

    return [ emitEvent, lastError ] as const
}
