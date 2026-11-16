import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

import { createLogger } from '@/observability/logger'
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
import { STAFFONLY_COOKIE_NAME } from '@/frame/lib/constants'

const logger = createLogger(import.meta.url)
const router = express.Router()

router.use('/events', events)
router.use('/webhooks', webhooks)
router.use('/anchor-redirect', anchorRedirect)
router.use('/pagelist', pageList)
router.use('/article', article)

// Local development proxies AI Search to docs.github.com when CSE_COPILOT_ENDPOINT
// is unset, so writers do not need a local AI Search service.
if (process.env.CSE_COPILOT_ENDPOINT || process.env.NODE_ENV === 'test') {
  router.use('/ai-search', aiSearch)
} else {
  logger.info(
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
      pathRewrite(path, req: ExtendedRequest) {
        return req.originalUrl
      },
    }),
  )
}

// Browser JavaScript cannot read github.com httpOnly cookies.
// The server endpoint returns the staff flag that client code needs.
router.get('/cookies', (req, res) => {
  noCacheControl(res)
  const cookies = {
    isStaff: Boolean(req.cookies?.[STAFFONLY_COOKIE_NAME]?.startsWith('yes')) || false,
  }
  res.json(cookies)
})

router.get('/', (req, res) => {
  res.status(404).json({ error: `${req.path} not found` })
})

router.get('/*path', (req, res) => {
  res.status(404).json({ error: `${req.path} not found` })
})

export default router
