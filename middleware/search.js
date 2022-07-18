import express from 'express'
import libLanguages from '../lib/languages.js'
import searchVersions from '../lib/search/versions.js'
import loadLunrResults, { QueryTermError } from '../lib/search/lunr-search.js'
import { cacheControlFactory } from './cache-control.js'
import catchMiddlewareError from './catch-middleware-error.js'

const languages = new Set(Object.keys(libLanguages))
const versions = new Set(Object.values(searchVersions))
const router = express.Router()
const cacheControl = cacheControlFactory(60 * 60 * 24)
const noCacheControl = cacheControlFactory(0)

router.get(
  '/',
  catchMiddlewareError(async function getSearch(req, res, next) {
    const { query, version, language, filters, limit: limit_ } = req.query
    const limit = Math.min(parseInt(limit_, 10) || 10, 100)
    if (!versions.has(version)) {
      return res.status(400).json({ error: 'Unrecognized version' })
    }
    if (!languages.has(language)) {
      return res.status(400).json({ error: 'Unrecognized language' })
    }
    if (!query || !limit) {
      return res.status(200).json([])
    }

    try {
      const results = await loadLunrResults({
        version,
        language,
        query: `${query} ${filters || ''}`,
        limit,
      })
      // Only reply if the headers have not been sent and the request was not aborted...
      if (!res.headersSent && !req.aborted) {
        cacheControl(res)

        // Undo the cookie setting that CSRF sets.
        // Otherwise it can't be cached in the CDN.
        res.removeHeader('set-cookie')

        return res.status(200).json(results)
      }
    } catch (err) {
      if (err instanceof QueryTermError) {
        // Handled as an not entirely unexpected potential error
        return res.status(400).json({ error: err.toString() })
      }

      console.error(err)
      // Only reply if the headers have not been sent and the request was not aborted...
      if (!res.headersSent && !req.aborted) {
        noCacheControl(res)
        return res.status(400).json({ error: err.toString() })
      }
    }
  })
)

export default router
