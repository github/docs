import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

import events from '#src/events/middleware.js'
import anchorRedirect from '#src/rest/api/anchor-redirect.js'
import search from '#src/search/middleware/search.js'
import pageInfo from '#src/pageinfo/middleware.js'
import webhooks from '#src/webhooks/middleware/webhooks.js'

const router = express.Router()

router.use('/events', events)
router.use('/webhooks', webhooks)
router.use('/anchor-redirect', anchorRedirect)
router.use('/pageinfo', pageInfo)

// The purpose of this is for convenience to everyone who runs this code
// base locally but don't have an Elasticsearch server locally.
// In production, this env var is always set but perhaps in a writer's
// local laptop, they don't have an Elasticsearch. Neither a running local
// server or the known credentials to a remote Elasticsearch. Whenever
// that's the case, they can just HTTP proxy to the production server.
if (process.env.ELASTICSEARCH_URL) {
  router.use('/search', search)
} else {
  router.use(
    '/search',
    createProxyMiddleware({
      target: 'https://docs.github.com',
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return req.originalUrl
      },
    }),
  )
}

router.get('*', (req, res, next) => {
  res.status(404).json({ error: `${req.path} not found` })
})

export default router
