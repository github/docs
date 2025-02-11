import express, { Request, Response } from 'express'

import catchMiddlewareError from '#src/observability/middleware/catch-middleware-error.js'
import { aiSearchProxy } from '../lib/ai-search-proxy'
import { createRateLimiter } from '#src/shielding/middleware/rate-limit.js'
import { noCacheControl } from '#src/frame/middleware/cache-control.js'

const router = express.Router()
if (process.env.NODE_ENV === 'test') {
  router.use(createRateLimiter(7)) // set to 7 so last test in api-ai-search.ts will exceed rate limit
} else if (process.env.NODE_ENV === 'development') {
  router.use(createRateLimiter(10)) // just 1 worker in dev so 10 requests per minute allowed
} else if (process.env.NODE_ENV === 'production') {
  router.use(createRateLimiter(1)) // 1 * 25 requests per minute for prod
}

router.post(
  '/v1',
  catchMiddlewareError(async (req: Request, res: Response) => {
    noCacheControl(res)
    await aiSearchProxy(req, res)
  }),
)

// Redirect to most recent version
router.post('/', (req, res) => {
  res.redirect(307, req.originalUrl.replace('/ai-search', '/ai-search/v1'))
})

export default router
