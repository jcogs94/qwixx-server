import useReduxState from "@reduxService/hooks/useReduxState"

export const useSocketConnected = () => {
    return useReduxState("socketConnected", false)
}
