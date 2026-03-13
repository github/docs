import { EventEmitter } from 'events'
import Bottleneck from 'bottleneck'
import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import cheerio from 'cheerio'

import type { Permalink } from '@/search/scripts/scrape/types'

// Custom error class to match got's HTTPError interface
class HTTPError extends Error {
  response: { ok: boolean; statusCode?: number }
  request: { requestUrl?: { pathname?: string } }

  constructor(
    message: string,
    response: { ok: boolean; statusCode?: number },
    request: { requestUrl?: { pathname?: string } },
  ) {
    super(message)
    this.name = 'HTTPError'
    this.response = response
    this.request = request
  }
}

// Type aliases for error objects with additional URL information
type HTTPErrorWithUrl = HTTPError & { url?: string; relativePath?: string }
type ErrorWithUrl = Error & { url?: string; relativePath?: string }

interface DomWaiterOptions {
  parseDOM?: boolean
  json?: boolean
  maxConcurrent?: number
  minTime?: number
}

export default function domwaiter(pages: Permalink[], opts: DomWaiterOptions = {}): EventEmitter {
  const emitter = new EventEmitter()

  // Add a default no-op error handler to prevent EventEmitter from throwing
  // when errors are emitted before the caller attaches their error handler
  // This will be overridden/supplemented by the caller's error handler
  const defaultErrorHandler = () => {
    // No-op: prevents EventEmitter from throwing
    // External handlers will still receive the error
  }
  emitter.on('error', defaultErrorHandler)

  const defaults = {
    parseDOM: true,
    json: false,
    maxConcurrent: 5,
    minTime: 500,
  }
  opts = Object.assign(defaults, opts)

  const limiter = new Bottleneck(opts)

  for (const page of pages) {
    async function schedulePage() {
      try {
        await limiter.schedule(() => getPage(page, emitter, opts))
      } catch (err) {
        // Catch any unhandled promise rejections
        emitter.emit('error', err)
      }
    }

    schedulePage()
  }

  limiter.on('idle', () => {
    emitter.emit('done')
  })

  limiter.on('error', (err) => {
    emitter.emit('error', err)
  })

  return emitter
}

async function getPage(page: Permalink, emitter: EventEmitter, opts: DomWaiterOptions) {
  // Wrap everything in a try-catch to ensure no errors escape
  try {
    emitter.emit('beforePageLoad', page)

    if (opts.json) {
      try {
        const response = await fetchWithRetry(page.url!, undefined, {
          retries: 3,
          throwHttpErrors: false,
          timeout: 60000,
        })
        if (!response.ok) {
          const httpError = new HTTPError(
            `HTTP ${response.status}: ${response.statusText}`,
            { ok: response.ok, statusCode: response.status },
            { requestUrl: { pathname: page.url } },
          )
          // Add URL and path info directly to the HTTPError
          ;(httpError as HTTPErrorWithUrl).url = page.url
          ;(httpError as HTTPErrorWithUrl).relativePath = page.relativePath
          // Emit error instead of throwing
          emitter.emit('error', httpError)
          return // Exit early, don't continue processing
        }
        const json = await response.json()
        const pageCopy = Object.assign({}, page, { json })
        emitter.emit('page', pageCopy)
      } catch (err) {
        // Enhance error with URL information
        if (err instanceof Error && page.url) {
          const enhancedError = new Error(err.message, { cause: err.cause })
          enhancedError.name = err.name
          enhancedError.stack = err.stack
          ;(enhancedError as ErrorWithUrl).url = page.url
          ;(enhancedError as ErrorWithUrl).relativePath = page.relativePath
          emitter.emit('error', enhancedError)
        } else {
          emitter.emit('error', err)
        }
      }
    } else {
      try {
        const response = await fetchWithRetry(page.url!, undefined, {
          retries: 3,
          throwHttpErrors: false,
          timeout: 60000,
        })
        if (!response.ok) {
          const httpError = new HTTPError(
            `HTTP ${response.status}: ${response.statusText}`,
            { ok: response.ok, statusCode: response.status },
            { requestUrl: { pathname: page.url } },
          )
          // Add URL and path info directly to the HTTPError
          ;(httpError as HTTPErrorWithUrl).url = page.url
          ;(httpError as HTTPErrorWithUrl).relativePath = page.relativePath
          // Emit error instead of throwing
          emitter.emit('error', httpError)
          return // Exit early, don't continue processing
        }
        const body = await response.text()
        const pageCopy = Object.assign({}, page, { body })
        if (opts.parseDOM)
          (pageCopy as Permalink & { $?: ReturnType<typeof cheerio.load> }).$ = cheerio.load(body)
        emitter.emit('page', pageCopy)
      } catch (err) {
        // Enhance error with URL information
        if (err instanceof Error && page.url) {
          const enhancedError = new Error(err.message, { cause: err.cause })
          enhancedError.name = err.name
          enhancedError.stack = err.stack
          ;(enhancedError as ErrorWithUrl).url = page.url
          ;(enhancedError as ErrorWithUrl).relativePath = page.relativePath
          emitter.emit('error', enhancedError)
        } else {
          emitter.emit('error', err)
        }
      }
    }
  } catch (err) {
    // Ultimate catch-all to ensure nothing escapes
    console.error('Unexpected error in getPage:', err)
    emitter.emit('error', err)
  }
}
