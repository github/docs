// When in local development we want to proxy to the ai-search route at docs.github.com

import { Router, Request, Response, NextFunction } from 'express'
import got from 'got'
import { pipeline } from 'node:stream'

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
  const out: Record<string, string | string[]> = {}
  for (const [key, value] of Object.entries(src)) {
    if (!value) continue
    const k = key.toLowerCase()
    if (hopByHop.has(k) || k === 'cookie' || k === 'host') continue
    out[key] = value
  }
  out['accept'] = 'application/x-ndjson'
  out['content-type'] = 'application/json'
  return out
}

router.post('/ai-search/v1', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const upstream = got.stream.post('https://docs.github.com/api/ai-search/v1', {
      headers: filterRequestHeaders(req.headers),
      body: JSON.stringify(req.body ?? {}),
      decompress: false,
      throwHttpErrors: false,
      retry: { limit: 0 },
    })

    upstream.on('response', (uRes) => {
      res.status(uRes.statusCode || 500)

      for (const [k, v] of Object.entries(uRes.headers)) {
        if (!v) continue
        const key = k.toLowerCase()
        // Never forward hop-by-hop; got already handles chunked → strip content-length
        if (hopByHop.has(key) || key === 'content-length') continue
        res.setHeader(k, v as string)
      }
      res.flushHeaders?.()
    })

    pipeline(upstream, res, (err) => {
      if (err) {
        console.error('[ai-search proxy] pipeline error:', err)
        if (!res.headersSent) res.status(502).end('Bad Gateway')
      }
    })

    upstream.on('error', (err) => console.error('[ai-search proxy] upstream error:', err))
  } catch (err) {
    console.error('[ai-search proxy] request failed:', err)
    next(err)
  }
})

export default router
