import type { RootState } from '@reduxService/store'
import { useSelector } from 'react-redux'

const useReduxState = <K extends keyof RootState>(key: K, defaultValue: RootState[K]): RootState[K] => {
    const state = useSelector((state: RootState) => state[key])
    return state ?? defaultValue
}

export default useReduxState
