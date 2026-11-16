import { AsyncLocalStorage } from 'async_hooks'
import type { NextFunction, Request, Response } from 'express'

// AsyncLocalStorage carries request fields from early middleware to downstream log calls.
export const asyncLocalStorage = new AsyncLocalStorage()

export type LoggerContext = {
  requestUuid: string
  path: string
  method: string
  headers: Record<string, string>
  query?: Record<string, unknown>
  body?: unknown
  language?: string
  userLanguage?: string
  userVersion?: string
  version?: string
  pagePath?: string
}

export function getLoggerContext(): LoggerContext {
  const store = asyncLocalStorage.getStore() || {
    requestUuid: '',
    path: '',
    method: '',
    headers: {},
    language: '',
    userLanguage: '',
    query: '',
    body: '',
  }
  return store as LoggerContext
}

export function updateLoggerContext(newContext: Partial<LoggerContext>): void {
  const store = asyncLocalStorage.getStore()
  if (!store) {
    return
  }
  Object.assign(store, newContext)
}

const INCLUDE_HEADERS = [
  'user-agent',
  'sec-ch-ua',
  'sec-ch-ua-platform',
  'x-user-language',
  'accept-language',
  'x-user-version',
  'host',
  'x-host',
  'cache-control',
]

export function initLoggerContext(req: Request, res: Response, next: NextFunction) {
  const requestUuid = crypto.randomUUID()

  const headers = {} as Record<string, string>
  for (const [key, value] of Object.entries(req.headers)) {
    if (INCLUDE_HEADERS.includes(key)) {
      if (!value) {
        headers[key] = 'unset'
      } else if (Array.isArray(value)) {
        headers[key] = value.join(',')
      } else {
        headers[key] = value
      }
    }
  }

  const store: LoggerContext = {
    requestUuid,
    path: req.path,
    method: req.method,
    headers,
    query: req.query,
    body: req.body,
  }

  asyncLocalStorage.run(store, () => {
    next()
  })
}
