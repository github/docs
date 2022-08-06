import express from 'express'

import searchVersions from '../../lib/search/versions.js'
import languages from '../../lib/languages.js'
import { allVersions } from '../../lib/all-versions.js'
import { cacheControlFactory } from '../cache-control.js'
import catchMiddlewareError from '../catch-middleware-error.js'
import { getSearchResults } from './es-search.js'

// Used by the legacy search
const versions = new Set(Object.values(searchVersions))
const languagesSet = new Set(Object.keys(languages))

const router = express.Router()

const cacheControl = cacheControlFactory(60 * 60 * 24)

const DEFAULT_SIZE = 10
const MAX_SIZE = 50 // How much you return has a strong impact on performance
const DEFAULT_PAGE = 1
const POSSIBLE_SORTS = ['best', 'relevance']
const DEFAULT_SORT = POSSIBLE_SORTS[0]

// If someone searches for `...&version=3.5` what they actually mean
// is `ghes-3.5`. This is because of legacy formatting with the old search.
// In some distant future we can clean up any client enough that this
// aliasing won't be necessary.
const versionAliases = {}
Object.values(allVersions).forEach((info) => {
  if (info.hasNumberedReleases) {
    versionAliases[info.currentRelease] = info.miscVersionName
  } else {
    versionAliases[info.version] = info.miscVersionName
    versionAliases[info.miscVersionName] = info.miscVersionName
  }
})

const legacyEnterpriseServerVersions = Object.fromEntries(
  Object.entries(searchVersions)
    .filter(([fullName]) => {
      return fullName.startsWith('enterprise-server@')
    })
    .map(([_, shortName]) => {
      return [shortName, `ghes-${shortName}`]
    })
)

function convertLegacyVersionName(version) {
  // In the olden days we used to use `?version=3.5&...` but we decided
  // that's ambiguous and it should be `ghes-3.5` instead.
  return legacyEnterpriseServerVersions[version] || version
}

router.get(
  '/legacy',
  catchMiddlewareError(async function legacySearch(req, res, next) {
    const { query, version, language, filters, limit: limit_ } = req.query
    if (filters) {
      throw new Error('not implemented yet')
    }
    const limit = Math.min(parseInt(limit_, 10) || 10, 100)
    if (!versions.has(version)) {
      return res.status(400).json({ error: 'Unrecognized version' })
    }
    if (!languagesSet.has(language)) {
      return res.status(400).json({ error: 'Unrecognized language' })
    }
    if (!query || !limit) {
      return res.status(200).json([])
    }

    const indexName = `github-docs-${convertLegacyVersionName(version)}-${language}`
    const hits = []
    try {
      const searchResults = await getSearchResults({
        indexName,
        query,
        page: 1,
        sort: 'best',
        size: limit,
        debug: true,
        includeTopics: true,
        // The legacy search is used as an autocomplete. In other words,
        // a debounce that sends the query before the user has had a
        // chance to fully submit the search. That means if the user
        // send the query 'google cl' they hope to find 'Google Cloud'
        // even though they didn't type that fully.
        usePrefixSearch: true,
      })
      hits.push(...searchResults.hits)
    } catch (err) {
      // If we don't catch here, the `catchMiddlewareError()` wrapper
      // will take any thrown error and pass it to `next()`.
      console.error('Error wrapping getSearchResults()', err)
      return res.status(500).json([])
    }

    // The legacy search just returned an array
    const results = hits.map((hit) => {
      let title = hit.title
      if (hit.highlights?.title && hit.highlights?.title.length) {
        title = hit.highlights.title[0]
      }
      let content = ''
      if (hit.highlights?.content && hit.highlights?.content.length) {
        content = hit.highlights.content.join('\n')
      }

      return {
        url: hit.url,
        title,
        breadcrumbs: hit.breadcrumbs || '',
        content,
        topics: hit.topics || [],
        popularity: hit.popularity || 0.0,
        score: hit.score,
      }
    })
    if (process.env.NODE_ENV !== 'development') {
      cacheControl(res)
      // Undo the cookie setting that CSRF sets.
      // Otherwise it can't be cached in the CDN.
      res.removeHeader('set-cookie')
    }

    res.setHeader('x-search-legacy', 'yes')

    res.status(200).json(results)
  })
)

const validationMiddleware = (req, res, next) => {
  const params = [
    { key: 'query' },
    { key: 'version', default_: 'dotcom', validate: (v) => versionAliases[v] || allVersions[v] },
    { key: 'language', default_: 'en', validate: (v) => v in languages },
    {
      key: 'size',
      default_: DEFAULT_SIZE,
      cast: (v) => parseInt(v, 10),
      validate: (v) => v >= 0 && v <= MAX_SIZE,
    },
    {
      key: 'page',
      default_: DEFAULT_PAGE,
      cast: (v) => parseInt(v, 10),
      validate: (v) => v >= 1 && v <= 10,
    },
    { key: 'sort', default_: DEFAULT_SORT, validate: (v) => POSSIBLE_SORTS.includes(v) },
    { key: 'debug', default_: Boolean(process.env.NODE_ENV === 'development' || req.query.debug) },
  ]

  const search = {}
  for (const { key, default_, cast, validate } of params) {
    let value = req.query[key]
    if (!value || (typeof value === 'string' && !value.trim())) {
      if (default_ === undefined) {
        // no value and no default, bad!
        return res.status(400).json({ error: `No truthy value for key '${key}'` })
      }
      value = default_
    }
    if (cast) {
      value = cast(value)
    }
    if (validate && !validate(value)) {
      return res
        .status(400)
        .json({ error: `Not a valid value (${JSON.stringify(value)}) for key '${key}'` })
    }
    search[key] = value
  }

  const version = versionAliases[search.version] || allVersions[search.version].miscVersionName

  search.indexName = `github-docs-${version}-${search.language}` // github-docs-ghes-3.5-en

  req.search = search
  return next()
}

router.get(
  '/v1',
  validationMiddleware,
  catchMiddlewareError(async function search(req, res, next) {
    const { indexName, query, page, size, debug, sort } = req.search
    const { meta, hits } = await getSearchResults({ indexName, query, page, size, debug, sort })

    if (process.env.NODE_ENV !== 'development') {
      // The assumption, at the moment is that searches are never distinguished
      // differently depending on a cookie or a request header.
      // So the only distinguishing key is the request URL.
      // Because of that, it's safe to allow the reverse proxy (a.k.a the CDN)
      // cache and hold on to this.
      cacheControl(res)
      // Undo the cookie setting that CSRF sets.
      // Otherwise it can't be cached in the CDN.
      res.removeHeader('set-cookie')
    }

    // The v1 version of the output matches perfectly what comes out
    // of the getSearchResults() function.
    res.status(200).json({ meta, hits })
  })
)

// Alias for the latest version
router.get('/', (req, res, next) => {
  // At the time of writing, the latest version is v1. (July 2022)
  // Use `req.originalUrl` because this router is "self contained"
  // which means that `req.url` will be `/` in this context.
  res.redirect(307, req.originalUrl.replace('/search', '/search/v1'))
})

export default router
