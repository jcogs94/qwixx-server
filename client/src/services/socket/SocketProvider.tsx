import { useRef, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import io, { Socket } from "socket.io-client"

import { setSocketConnected } from "@reduxService/socketFeatures/socketConnectedSlice"
import { SOCKET_URL } from "@constants/urls"
import { SocketContext } from "@socketService/SocketContext"

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const socketRef = useRef<Socket | null>(null)
    const [isConnected, setIsConnected] = useState(false)
    const dispatch = useDispatch()
    
    useEffect(() => { dispatch(setSocketConnected(isConnected)) }, [dispatch, isConnected])
    useEffect(() => {
        socketRef.current = io(SOCKET_URL) as Socket
        
        const handleConnect = () => {
            console.log('%cConnected to socket!', 'color: green; font-weight: bold;')
            setIsConnected(true)
        }

        const handleDisconnect = () => {
            console.log('%cDisconnected from socket!', 'color: red; font-weight: bold;')
            setIsConnected(false)
        }

        socketRef.current.on('connect', handleConnect)
        socketRef.current.on('disconnect', handleDisconnect)

        return () => {
            if (!socketRef.current) return
            
            socketRef.current.off('connect', handleConnect)
            socketRef.current.off('disconnect', handleDisconnect)
            socketRef.current.disconnect()
        }
    }, [])
    
    return <>
        <SocketContext.Provider value={socketRef.current}>
            { children }
        </SocketContext.Provider>
    </>
}

export default SocketProvider
