import fs from 'fs/promises'
import express from 'express'
import statsd from '@/observability/lib/statsd'
import catchMiddlewareError from '@/observability/middleware/catch-middleware-error'
import { defaultCacheControl } from '@/frame/middleware/cache-control'

const router = express.Router()

let cache: string | null = null

router.get(
  '/',
  catchMiddlewareError(async function (req, res) {
    if (cache === null) {
      cache = await fs.readFile('data/llms-txt/docs.md', 'utf8')
    }
    statsd.increment('api.llms-txt.lookup', 1)
    defaultCacheControl(res)
    res.type('text/markdown').send(cache)
  }),
)

export default router
