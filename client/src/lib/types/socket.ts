export type EmitData = Record<string, unknown>
export type EmitFunction = (data?: EmitData) => void
export type EmitError = { error: string; timestamp: number }

export type ListenerCallback<T = unknown[]> = (...args: T[]) => void
export type ListenerError = { error: string; timestamp: number }
