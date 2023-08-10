import express from 'express'

import FailBot from '#src/observability/lib/failbot.js'
import statsd from '#src/observability/lib/statsd.js'
import { searchCacheControl } from '../../../middleware/cache-control.js'
import catchMiddlewareError from '#src/observability/middleware/catch-middleware-error.js'
import { setFastlySurrogateKey } from '../../../middleware/set-fastly-surrogate-key.js'
import { getSearchResults } from './es-search.js'
import { getSearchFromRequest } from './get-search-request.js'

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
    const {
      indexName,
      language,
      query,
      autocomplete,
      page,
      size,
      debug,
      sort,
      highlights,
      include,
    } = req.search

    // The getSearchResults() function is a mix of preparing the search,
    // sending & receiving it, and post-processing the response from the
    // network (i.e. Elasticsearch).
    // This measurement then combines both the Node-work and the total
    // network-work but we know that roughly 99.5% of the total time is
    // spent in the network-work time so this primarily measures that.
    const tags = ['version:v1', `indexName:${indexName}`]
    const timed = statsd.asyncTimer(getSearchResults, 'api.search', tags)

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
      const { meta, hits } = await timed(options)

      statsd.timing('api.search.total', meta.took.total_msec, tags)
      statsd.timing('api.search.query', meta.took.query_msec, tags)

      if (process.env.NODE_ENV !== 'development') {
        searchCacheControl(res)
        setFastlySurrogateKey(res, `api-search:${language}`, true)
      }

      // The v1 version of the output matches perfectly what comes out
      // of the getSearchResults() function.
      res.status(200).json({ meta, hits })
    } catch (error) {
      // If getSearchResult() throws an error that might be 404 inside
      // elasticsearch, if we don't capture that here, it will propgate
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
    // where you might not have a HATSTACK_URL configured.
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

export default router
