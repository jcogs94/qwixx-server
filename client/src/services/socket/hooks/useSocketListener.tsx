import { useContext, useEffect, useRef, useState } from "react"

import type { ListenerCallback, ListenerError } from "@customTypes/socket"

import { SocketContext } from "@socketService/SocketContext"
import { useSocketConnected } from "@socketService/hooks/useSocketConnected"

export const useSocketListener = <T = unknown>(
    header: string, 
    callback: ListenerCallback<T>,
    options = { handleReconnect: true }
) => {
    const socket = useContext(SocketContext)
    const socketConnected = useSocketConnected()
    const callbackRef = useRef(callback)
    const [lastError, setLastError] = useState<ListenerError | null>(null)
    const [isListening, setIsListening] = useState(false)

    useEffect(() => { callbackRef.current = callback }, [callback])

    useEffect(() => {
        if (!socket) {
            setIsListening(false)
            setLastError({ error: 'Socket not initialized', timestamp: Date.now() })
            return undefined
        }

        if (!socketConnected) {
            setIsListening(false)
            setLastError({ error: 'Socket not connected', timestamp: Date.now() })
            return undefined
        }

        const handler = (...args: unknown[]) => {
            try {
                callbackRef.current(...(args as T[]))
                setLastError(null)
            } catch (err) {
                setLastError({ 
                    error: err instanceof Error ? err.message : 'Error in listener callback',
                    timestamp: Date.now()
                })
            }
        }

        try {
            socket.on(header, handler)
            setIsListening(true)
            setLastError(null)
        } catch (err) {
            setLastError({ 
                error: err instanceof Error ? err.message : 'Error setting up listener',
                timestamp: Date.now()
            })
            setIsListening(false)
        }

        return () => {
            try {
                socket.off(header, handler)
                setIsListening(false)
            } catch (err) {
                setLastError({ 
                    error: err instanceof Error ? err.message : 'Error removing listener',
                    timestamp: Date.now()
                })
            }
        }
    }, [socket, socketConnected, header, options.handleReconnect])

    return [ isListening, lastError ] as const
}
