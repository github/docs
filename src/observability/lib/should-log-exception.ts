export type ErrorWithCode = Error & {
  code: string
  statusCode?: number
  status?: string
}

export function shouldLogException(error: ErrorWithCode) {
  const IGNORED_ERRORS = [
    // Client connected aborted
    'ECONNRESET',
  ]

  if (IGNORED_ERRORS.includes(error.code)) {
    return false
  }

  // "TypeError: terminated" is thrown by Node.js's undici fetch implementation
  // when a connection is aborted by the remote server. This is a transient
  // network error (similar to ECONNRESET) that occurs during proxied requests
  // to archived enterprise pages and shouldn't be reported to Sentry.
  if (error.name === 'TypeError' && error.message === 'terminated') {
    return false
  }

  // We should log this exception
  return true
}
