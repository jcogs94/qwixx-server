import { configureStore } from "@reduxjs/toolkit"

import socketConnectedSlice from "@reduxService/socketFeatures/socketConnectedSlice"

export const store = configureStore({
    reducer: {
        // socket states
        socketConnected: socketConnectedSlice,
        
        // global states
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
