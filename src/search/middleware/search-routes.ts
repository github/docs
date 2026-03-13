/*
 This file and the routes included are for the /search endpoint of our API

 For general search (client searches on docs.github.com) we use the middleware in ./general-search-middleware to get the search results
*/
import express, { Request, Response } from 'express'

import FailBot from '@/observability/lib/failbot'
import catchMiddlewareError from '@/observability/middleware/catch-middleware-error'
import { generalSearchRoute } from '@/search/lib/routes/general-search-route'
import { aiSearchAutocompleteRoute } from '@/search/lib/routes/ai-search-autocomplete-route'
import { combinedSearchRoute } from '@/search/lib/routes/combined-search-route'
import { createLogger } from '@/observability/logger'

const logger = createLogger('search:middleware:search-routes')
const router = express.Router()

router.get('/legacy', (req: Request, res: Response) => {
  res.status(410).send('Use /api/search/v1 instead.')
})

router.get('/v1', catchMiddlewareError(generalSearchRoute))

router.get('/ai-search-autocomplete/v1', catchMiddlewareError(aiSearchAutocompleteRoute))

// Route used by our frontend to fetch ai autocomplete search suggestions + general search results in a single request
// Combining this into a single request results in less overall requests to the server
router.get('/combined-search/v1', catchMiddlewareError(combinedSearchRoute))

export async function handleGetSearchResultsError(
  req: Request,
  res: Response,
  error: any,
  options: any,
) {
  if (process.env.NODE_ENV === 'development') {
    console.error(`Error calling getSearchResults(${options})`, error)
  } else {
    const reports = FailBot.report(error, { url: req.url, ...options })
    if (reports) await Promise.all(reports)
  }
  // Avoid "Cannot set headers after they are sent to the client" error
  // if response was already partially sent before the error occurred
  if (!res.headersSent) {
    res.status(500).json({ error: error.message })
  } else {
    logger.warn('Response headers already sent; unable to send error response.', {
      url: req.url,
      message: error?.message,
    })
  }
}

// Redirects search routes to their latest versions
router.get('/', (req: Request, res: Response) => {
  res.redirect(307, req.originalUrl.replace('/search', '/search/v1'))
})

router.get('/ai-search-autocomplete', (req: Request, res: Response) => {
  res.redirect(
    307,
    req.originalUrl.replace('/search/ai-search-autocomplete', '/search/ai-search-autocomplete/v1'),
  )
})

router.get('/combined-search', (req: Request, res: Response) => {
  res.redirect(
    307,
    req.originalUrl.replace('/search/combined-search', '/search/combined-search/v1'),
  )
})

export default router
