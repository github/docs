import { AsyncLocalStorage } from 'async_hooks'
import type { NextFunction, Request, Response } from 'express'

// Think of this like a Redux store, but for the backend
// During an early middleware, we call asyncLocalStorage.run(store, () => { next() })
// This ensures that all downstream middleware can access `store` from the asyncLocalStorage,
// using the `getLoggerContext` function.
export const asyncLocalStorage = new AsyncLocalStorage()

export type LoggerContext = {
  requestUuid: string
  path: string
  method: string
  headers: any
  query?: any
  body?: any
  language?: string
  userLanguage?: string
  version?: string
  pagePath?: string
}

export function getLoggerContext(): LoggerContext {
  const store = asyncLocalStorage.getStore() || {
    requestUuid: '',
    path: '',
    method: '',
    headers: '',
    language: '',
    userLanguage: '',
    query: '',
    body: '',
  }
  return store as LoggerContext
}

// Called in subsequent middleware to update the request context
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
  // Host
  'host',
  'x-host',
  // Cache control
  'cache-control',
]

export function initLoggerContext(req: Request, res: Response, next: NextFunction) {
  const requestUuid = crypto.randomUUID()

  const headers = {} as Record<string, string>
  // Only include the headers we care about
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

  // This is all of the context we want to include for each logger.<method> call
  const store: LoggerContext = {
    requestUuid,
    path: req.path,
    method: req.method,
    headers,
    query: req.query,
    body: req.body,
  }

  // Subsequent middleware and route handlers will have access to the { requestId } store
  asyncLocalStorage.run(store, () => {
    next()
  })
}
