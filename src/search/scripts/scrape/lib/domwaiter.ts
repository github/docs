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

interface DomWaiterOptions {
  parseDOM?: boolean
  json?: boolean
  maxConcurrent?: number
  minTime?: number
}

export default function domwaiter(pages: Permalink[], opts: DomWaiterOptions = {}): EventEmitter {
  const emitter = new EventEmitter()

  const defaults = {
    parseDOM: true,
    json: false,
    maxConcurrent: 5,
    minTime: 500,
  }
  opts = Object.assign(defaults, opts)

  const limiter = new Bottleneck(opts)

  pages.forEach((page) => {
    limiter.schedule(() => getPage(page, emitter, opts))
  })

  limiter.on('idle', () => {
    emitter.emit('done')
  })

  limiter.on('error', (err) => {
    emitter.emit('error', err)
  })

  return emitter
}

async function getPage(page: Permalink, emitter: EventEmitter, opts: DomWaiterOptions) {
  emitter.emit('beforePageLoad', page)

  if (opts.json) {
    try {
      const response = await fetchWithRetry(page.url!, undefined, { retries: 3 })
      if (!response.ok) {
        throw new HTTPError(
          `HTTP ${response.status}: ${response.statusText}`,
          { ok: response.ok, statusCode: response.status },
          { requestUrl: { pathname: page.url } },
        )
      }
      const json = await response.json()
      const pageCopy = Object.assign({}, page, { json })
      emitter.emit('page', pageCopy)
    } catch (err) {
      emitter.emit('error', err)
    }
  } else {
    try {
      const response = await fetchWithRetry(page.url!, undefined, { retries: 3 })
      if (!response.ok) {
        throw new HTTPError(
          `HTTP ${response.status}: ${response.statusText}`,
          { ok: response.ok, statusCode: response.status },
          { requestUrl: { pathname: page.url } },
        )
      }
      const body = await response.text()
      const pageCopy = Object.assign({}, page, { body })
      if (opts.parseDOM) (pageCopy as any).$ = cheerio.load(body)
      emitter.emit('page', pageCopy)
    } catch (err) {
      emitter.emit('error', err)
    }
  }
}
