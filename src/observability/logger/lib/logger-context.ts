import { AsyncLocalStorage } from 'async_hooks'
import type { NextFunction, Request, Response } from 'express'

// Think of this like a Redux store, but for the backend.
// An early middleware calls asyncLocalStorage.run(store, ...),
// which lets all downstream middleware read the store via `getLoggerContext`.
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
  // Device / UA
  'user-agent',
  'sec-ch-ua',
  'sec-ch-ua-platform',
  // Language
  'x-user-language',
  'accept-language',
  // Version
  'x-user-version',
  // Host
  'host',
  'x-host',
  // Cache control
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
