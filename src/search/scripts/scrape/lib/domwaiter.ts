import { EventEmitter } from 'events'
import Bottleneck from 'bottleneck'
import got from 'got'
import cheerio from 'cheerio'

import type { Permalink } from '@/search/scripts/scrape/types'

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
      const json = await got(page.url!).json()
      const pageCopy = Object.assign({}, page, { json })
      emitter.emit('page', pageCopy)
    } catch (err) {
      emitter.emit('error', err)
    }
  } else {
    try {
      const body = (await got(page.url!)).body
      const pageCopy = Object.assign({}, page, { body })
      if (opts.parseDOM) (pageCopy as any).$ = cheerio.load(body)
      emitter.emit('page', pageCopy)
    } catch (err) {
      emitter.emit('error', err)
    }
  }
}
