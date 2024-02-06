export function jsonSuccess(data) {
    return global.response.status(200).json(data)
}
export function jsonError(message, code = 500) {
    return global.response.status(code).json({ message })
}