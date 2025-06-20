import { createSlice } from "@reduxjs/toolkit"

const initialState = false

export const socketConnectedSlice = createSlice({
    name: "socketConnected",
    initialState,
    reducers: {
        setSocketConnected: (_, action) => {
            return action.payload
        }
    }
})

export const { setSocketConnected } = socketConnectedSlice.actions
export default socketConnectedSlice.reducer
