/*
 This file and the routes included are for the /search endpoint of our API

 For general search (client searches on docs.github.com) we use the middleware in ./general-search-middleware to get the search results
*/
// TODO: Move the routes implementations in this files to lib/routes so you can at-a-glance see all of the routes without the implementation logic
import express, { Request, Response } from 'express'

import FailBot from '@/observability/lib/failbot.js'
import { searchCacheControl } from '@/frame/middleware/cache-control.js'
import catchMiddlewareError from '@/observability/middleware/catch-middleware-error.js'
import {
  setFastlySurrogateKey,
  SURROGATE_ENUMS,
} from '@/frame/middleware/set-fastly-surrogate-key.js'
import { getAutocompleteSearchResults } from '@/search/lib/get-elasticsearch-results/general-autocomplete'
import { getAISearchAutocompleteResults } from '@/search/lib/get-elasticsearch-results/ai-search-autocomplete'
import { getSearchFromRequestParams } from '@/search/lib/search-request-params/get-search-from-request-params'
import { getGeneralSearchResults } from '@/search/lib/get-elasticsearch-results/general-search'
import { combinedSearchRoute } from '@/search/lib/routes/combined-search-route'

const router = express.Router()

router.get('/legacy', (req: Request, res: Response) => {
  res.status(410).send('Use /api/search/v1 instead.')
})

router.get(
  '/v1',
  catchMiddlewareError(async (req: Request, res: Response) => {
    const { indexName, searchParams, validationErrors } = getSearchFromRequestParams(
      req,
      'generalSearch',
    )
    if (validationErrors.length) {
      // We only send the first validation error to the user
      return res.status(400).json(validationErrors[0])
    }

    const getResultOptions = {
      indexName,
      searchParams,
    }
    try {
      const { meta, hits, aggregations } = await getGeneralSearchResults(getResultOptions)

      if (process.env.NODE_ENV !== 'development') {
        searchCacheControl(res)
        // We can cache this without purging it after every deploy
        // because the API search is only used as a proxy for local
        // and review environments.
        setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
      }

      res.status(200).json({ meta, hits, aggregations })
    } catch (error) {
      await handleGetSearchResultsError(req, res, error, getResultOptions)
    }
  }),
)

router.get(
  '/autocomplete/v1',
  catchMiddlewareError(async (req: Request, res: Response) => {
    const {
      indexName,
      validationErrors,
      searchParams: { query, size, debug },
    } = getSearchFromRequestParams(req, 'generalAutocomplete')
    if (validationErrors.length) {
      return res.status(400).json(validationErrors[0])
    }

    const options = {
      indexName,
      query,
      size,
      debug,
    }
    try {
      const { meta, hits } = await getAutocompleteSearchResults(options)

      if (process.env.NODE_ENV !== 'development') {
        searchCacheControl(res)
        setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
      }

      res.status(200).json({ meta, hits })
    } catch (error) {
      await handleGetSearchResultsError(req, res, error, options)
    }
  }),
)

router.get(
  '/ai-search-autocomplete/v1',
  catchMiddlewareError(async (req: Request, res: Response) => {
    // If no query is provided, we want to return the top 5 most popular terms
    // This is a special case for AI search autocomplete
    // So we use `force` to allow the query to be empty without the usual validation error
    let force = {} as any
    if (!req.query.query) {
      force.query = ''
    }
    const {
      indexName,
      validationErrors,
      searchParams: { query, size, debug },
    } = getSearchFromRequestParams(req, 'aiSearchAutocomplete', force)
    if (validationErrors.length) {
      return res.status(400).json(validationErrors[0])
    }

    const getResultOptions = {
      indexName,
      query,
      size,
      debug,
    }
    try {
      const { meta, hits } = await getAISearchAutocompleteResults(getResultOptions)

      if (process.env.NODE_ENV !== 'development') {
        searchCacheControl(res)
        setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
      }

      res.status(200).json({ meta, hits })
    } catch (error) {
      await handleGetSearchResultsError(req, res, error, getResultOptions)
    }
  }),
)

// Route used by our frontend to fetch ai autocomplete search suggestions + general search results in a single request
// Combining this into a single request results in less overall requests to the server
router.get(
  '/combined-search/v1',
  catchMiddlewareError(async (req: Request, res: Response) => {
    combinedSearchRoute(req, res)
  }),
)

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
  res.status(500).json({ error: error.message })
}

// Redirects search routes to their latest versions
router.get('/', (req: Request, res: Response) => {
  res.redirect(307, req.originalUrl.replace('/search', '/search/v1'))
})

router.get('/autocomplete', (req: Request, res: Response) => {
  res.redirect(307, req.originalUrl.replace('/search/autocomplete', '/search/autocomplete/v1'))
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
