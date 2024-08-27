export type Response<T> = {
    content: T,
    success: boolean,
    message?: string
}