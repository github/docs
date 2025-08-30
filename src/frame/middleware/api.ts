import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

import events from '@/events/middleware'
import anchorRedirect from '@/rest/api/anchor-redirect'
import aiSearch from '@/search/middleware/ai-search'
import aiSearchLocalProxy from '@/search/middleware/ai-search-local-proxy'
import search from '@/search/middleware/search-routes'
import pageList from '@/article-api/middleware/pagelist'
import article from '@/article-api/middleware/article'
import webhooks from '@/webhooks/middleware/webhooks'
import { ExtendedRequest } from '@/types'
import { noCacheControl } from './cache-control'

const router = express.Router()

router.use('/events', events)
router.use('/webhooks', webhooks)
router.use('/anchor-redirect', anchorRedirect)
router.use('/pagelist', pageList)
router.use('/article', article)

// The purpose of this is for convenience to everyone who runs this code
// base locally but don't have an Elasticsearch server locally.
// In production, this env var is always set but perhaps in a writer's
// local laptop, they don't have an Elasticsearch. Neither a running local
// server or the known credentials to a remote Elasticsearch. Whenever
// that's the case, they can just HTTP proxy to the production server.
if (process.env.CSE_COPILOT_ENDPOINT || process.env.NODE_ENV === 'test') {
  router.use('/ai-search', aiSearch)
} else {
  console.log(
    'Proxying AI Search requests to docs.github.com. To use the cse-copilot endpoint, set the CSE_COPILOT_ENDPOINT environment variable.',
  )
  router.use(aiSearchLocalProxy)
}
if (process.env.ELASTICSEARCH_URL) {
  router.use('/search', search)
} else {
  router.use(
    '/search',
    createProxyMiddleware({
      target: 'https://docs.github.com',
      changeOrigin: true,
      pathRewrite: function (path, req: ExtendedRequest) {
        return req.originalUrl
      },
    }),
  )
}

// We need access to specific httpOnly cookies set on github.com from the client
// The only way to access these on the client is to fetch them from the server
// Limit this endpoint to 1req/min because a client should only call this route once
router.get('/cookies', (req, res) => {
  noCacheControl(res)
  const cookies = {
    isStaff: Boolean(req.cookies?.staffonly?.startsWith('yes')) || false,
  }
  res.json(cookies)
})

// Handle root /api requests
router.get('/', (req, res) => {
  res.status(404).json({ error: `${req.path} not found` })
})

router.get('/*path', (req, res) => {
  res.status(404).json({ error: `${req.path} not found` })
})

export default router
