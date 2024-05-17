import express from 'express'

import FailBot from '#src/observability/lib/failbot.js'
import { searchCacheControl } from '#src/frame/middleware/cache-control.js'
import catchMiddlewareError from '#src/observability/middleware/catch-middleware-error.js'
import {
  setFastlySurrogateKey,
  SURROGATE_ENUMS,
} from '#src/frame/middleware/set-fastly-surrogate-key.js'
import { getAutocompleteSearchResults, getSearchResults } from './es-search.js'
import { getAutocompleteSearchFromRequest, getSearchFromRequest } from './get-search-request.js'

const router = express.Router()

router.get('/legacy', (req, res) => {
  res.status(410).send('Use /api/search/v1 instead.')
})

export const validationMiddleware = (req, res, next) => {
  const { search, validationErrors } = getSearchFromRequest(req)
  if (validationErrors.length) {
    // There might be multiple things bad about the query parameters,
    // but we send a 400 on the first possible one in the API.
    return res.status(400).json(validationErrors[0])
  }

  req.search = search
  return next()
}

router.get(
  '/v1',
  validationMiddleware,
  catchMiddlewareError(async function search(req, res) {
    const { indexName, query, autocomplete, page, size, debug, sort, highlights, include } =
      req.search

    const options = {
      indexName,
      query,
      page,
      size,
      debug,
      sort,
      highlights,
      usePrefixSearch: autocomplete,
      include,
    }
    try {
      const { meta, hits } = await getSearchResults(options)

      if (process.env.NODE_ENV !== 'development') {
        searchCacheControl(res)
        // We can cache this without purging it after every deploy
        // because the API search is only used as a proxy for local
        // and preview environments.
        setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
      }

      // The v1 version of the output matches perfectly what comes out
      // of the getSearchResults() function.
      res.status(200).json({ meta, hits })
    } catch (error) {
      // If getSearchResult() throws an error that might be 404 inside
      // elasticsearch, if we don't capture that here, it will propagate
      // to the next middleware.
      await handleGetSearchResultsError(req, res, error, options)
    }
  }),
)

export const autocompleteValidationMiddleware = (req, res, next) => {
  const { search, validationErrors } = getAutocompleteSearchFromRequest(req)
  if (validationErrors.length) {
    // There might be multiple things bad about the query parameters,
    // but we send a 400 on the first possible one in the API.
    return res.status(400).json(validationErrors[0])
  }

  req.search = search
  return next()
}

router.get(
  '/autocomplete/v1',
  autocompleteValidationMiddleware,
  catchMiddlewareError(async (req, res) => {
    const { indexName, query, size } = req.search

    const options = {
      indexName,
      query,
      size,
    }
    try {
      const { meta, hits } = await getAutocompleteSearchResults(options)

      if (process.env.NODE_ENV !== 'development') {
        searchCacheControl(res)
        // We can cache this without purging it after every deploy
        // because the API search is only used as a proxy for local
        // and preview environments.
        setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
      }

      // The v1 version of the output matches perfectly what comes out
      // of the getSearchResults() function.
      res.status(200).json({ meta, hits })
    } catch (error) {
      // If getSearchResult() throws an error that might be 404 inside
      // elasticsearch, if we don't capture that here, it will propagate
      // to the next middleware.
      await handleGetSearchResultsError(req, res, error, options)
    }
  }),
)

// We have more than one place where we do `try{...} catch error( THIS )`
// which is slightly different depending on the "sub-version" (e.g. /legacy)
// This function is a single place to take care of all of these error handlings
async function handleGetSearchResultsError(req, res, error, options) {
  if (process.env.NODE_ENV === 'development') {
    console.error(`Error calling getSearchResults(${options})`, error)
  } else {
    const reports = FailBot.report(error, Object.assign({ url: req.url }, options))
    // It might be `undefined` if no backends are configured which
    // is likely when using production NODE_ENV on your laptop
    // where you might not have a HAYSTACK_URL configured.
    if (reports) await Promise.all(reports)
  }
  res.status(500).json({ error: error.message })
}

// Alias for the latest version
router.get('/', (req, res) => {
  // At the time of writing, the latest version is v1. (July 2022)
  // Use `req.originalUrl` because this router is "self contained"
  // which means that `req.url` will be `/` in this context.
  res.redirect(307, req.originalUrl.replace('/search', '/search/v1'))
})

// Alias for the latest autocomplete version
router.get('/autocomplete', (req, res) => {
  res.redirect(307, req.originalUrl.replace('/search/autocomplete', '/search/autocomplete/v1'))
})

export default router
