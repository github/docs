import express from 'express'

import searchVersions from '../../lib/search/versions.js'
import FailBot from '../../lib/failbot.js'
import languages from '../../lib/languages.js'
import { allVersions } from '../../lib/all-versions.js'
import statsd from '../../lib/statsd.js'
import { searchCacheControl } from '../cache-control.js'
import catchMiddlewareError from '../catch-middleware-error.js'
import { setFastlySurrogateKey } from '../set-fastly-surrogate-key.js'
import {
  getSearchResults,
  POSSIBLE_HIGHLIGHT_FIELDS,
  DEFAULT_HIGHLIGHT_FIELDS,
} from './es-search.js'

// Used by the legacy search
const versions = new Set(Object.values(searchVersions))
const languagesSet = new Set(Object.keys(languages))

const router = express.Router()

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
    .map(([, shortName]) => {
      return [shortName, `ghes-${shortName}`]
    })
)

function getIndexPrefix() {
  // This logic is mirrored in the scripts we use before running tests
  // In particular, see the `index-test-fixtures` npm script.
  // That's expected to be run before CI and local jest testing.
  // The reason we have a deliberately different index name (by prefix)
  // for testing compared to regular operation is to make it convenient
  // for engineers working on local manual testing *and* automated
  // testing without have to re-index different content (e.g. fixtures
  // vs real content) on the same index name.
  if (process.env.NODE_ENV === 'test') return 'tests_'

  return ''
}

function convertLegacyVersionName(version) {
  // In the olden days we used to use `?version=3.5&...` but we decided
  // that's ambiguous and it should be `ghes-3.5` instead.
  return legacyEnterpriseServerVersions[version] || version
}

router.get(
  '/legacy',
  catchMiddlewareError(async function legacySearch(req, res) {
    const { query, version, language, filters, limit: limit_ } = req.query
    const topics = []
    if (filters) {
      if (Array.isArray(filters)) {
        topics.push(...filters)
      } else {
        topics.push(filters)
      }
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

    const indexName = `${getIndexPrefix()}github-docs-${convertLegacyVersionName(
      version
    )}-${language}`

    const hits = []
    const tags = ['version:legacy', `indexName:${indexName}`]
    const timed = statsd.asyncTimer(getSearchResults, 'api.search', tags)
    const options = {
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
      topics,
    }
    try {
      const { hits: hits_, meta } = await timed(options)
      hits.push(...hits_)
      statsd.timing('api.search.total', meta.took.total_msec, tags)
      statsd.timing('api.search.query', meta.took.query_msec, tags)
    } catch (error) {
      // If we don't catch here, the `catchMiddlewareError()` wrapper
      // will take any thrown error and pass it to `next()`.
      await handleGetSearchResultsError(req, res, error, options)
      return
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
      searchCacheControl(res)
      setFastlySurrogateKey(res, `api-search:${language}`, true)
    }

    res.setHeader('x-search-legacy', 'yes')

    res.status(200).json(results)
  })
)

class ValidationError extends Error {}

const validationMiddleware = (req, res, next) => {
  const params = [
    { key: 'query' },
    {
      key: 'version',
      default_: 'dotcom',
      validate: (v) => {
        if (versionAliases[v] || allVersions[v]) return true
        const valid = [...Object.keys(versionAliases), ...Object.keys(allVersions)]
        throw new ValidationError(`'${v}' not in ${valid}`)
      },
    },
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
    {
      key: 'highlights',
      default_: DEFAULT_HIGHLIGHT_FIELDS,
      cast: (v) => (Array.isArray(v) ? v : [v]),
      validate: (v) => {
        for (const highlight of v) {
          if (!POSSIBLE_HIGHLIGHT_FIELDS.includes(highlight)) {
            throw new ValidationError(`highlight value '${highlight}' is not valid`)
          }
        }
        return true
      },
    },
    { key: 'autocomplete', default_: false, cast: toBoolean },
    { key: 'debug', default_: process.env.NODE_ENV === 'development', cast: toBoolean },
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
    try {
      if (validate && !validate(value)) {
        return res
          .status(400)
          .json({ error: `Not a valid value (${JSON.stringify(value)}) for key '${key}'` })
      }
    } catch (err) {
      if (err instanceof ValidationError) {
        return res.status(400).json({ error: err.toString(), field: key })
      }
      throw err
    }
    search[key] = value
  }

  const version = versionAliases[search.version] || allVersions[search.version].miscVersionName

  search.indexName = `${getIndexPrefix()}github-docs-${version}-${search.language}` // github-docs-ghes-3.5-en

  req.search = search
  return next()
}

function toBoolean(value) {
  if (value === 'true' || value === '1') return true
  return false
}

router.get(
  '/v1',
  validationMiddleware,
  catchMiddlewareError(async function search(req, res) {
    const { indexName, language, query, autocomplete, page, size, debug, sort, highlights } =
      req.search

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
  })
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
