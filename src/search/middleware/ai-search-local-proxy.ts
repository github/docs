// Local development proxies AI search requests to docs.github.com.

import { Router, Request, Response, NextFunction } from 'express'
import { fetchStream } from '@/frame/lib/fetch-utils'
import { pipeline, Readable } from 'node:stream'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

const router = Router()

const hopByHop = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailers',
  'transfer-encoding',
  'upgrade',
])

function filterRequestHeaders(src: Request['headers']) {
  const out: Record<string, string> = {}
  for (const [key, value] of Object.entries(src)) {
    if (!value) continue
    const k = key.toLowerCase()
    if (hopByHop.has(k) || k === 'cookie' || k === 'host') continue
    out[key] = Array.isArray(value) ? value[0] : value
  }
  out['accept'] = 'application/x-ndjson'
  out['content-type'] = 'application/json'
  return out
}

router.post('/ai-search/v1', async (req: Request, res: Response, next: NextFunction) => {
  let reader: ReadableStreamDefaultReader<Uint8Array> | null = null

  try {
    const response = await fetchStream(
      'https://docs.github.com/api/ai-search/v1',
      {
        method: 'POST',
        headers: filterRequestHeaders(req.headers),
        body: JSON.stringify(req.body ?? {}),
      },
      {
        throwHttpErrors: false,
      },
    )

    res.status(response.status || 500)

    for (const [k, v] of response.headers.entries()) {
      if (!v) continue
      const key = k.toLowerCase()
      // Never forward hop-by-hop or content-length; fetch handles chunked responses.
      if (hopByHop.has(key) || key === 'content-length') continue
      res.setHeader(k, v)
    }
    res.flushHeaders?.()

    if (!response.body) {
      if (!res.headersSent) res.status(502).end('Bad Gateway')
      return
    }

    reader = response.body.getReader()
    const nodeStream = new Readable({
      async read() {
        try {
          const { done, value } = await reader!.read()
          if (done) {
            this.push(null)
          } else {
            this.push(Buffer.from(value))
          }
        } catch (err) {
          this.destroy(err as Error)
        }
      },
    })

    pipeline(nodeStream, res, (err) => {
      if (err) {
        logger.error('[ai-search proxy] pipeline error', { error: err })
        if (!res.headersSent) res.status(502).end('Bad Gateway')
      }
      if (reader) {
        reader.releaseLock()
        reader = null
      }
    })
  } catch (err) {
    logger.error('[ai-search proxy] request failed', { error: err })
    next(err)
  } finally {
    if (reader) {
      reader.releaseLock()
    }
  }
})

export default router
