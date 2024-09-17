import got from 'got'
import { errors } from '@elastic/elasticsearch'
import statsd from '#src/observability/lib/statsd.js'

import { getPathWithoutVersion, getPathWithoutLanguage } from '#src/frame/lib/path-utils.js'
import { getSearchFromRequest } from './get-search-request.js'
import { getSearchResults } from './es-search.js'

export default async function contextualizeSearch(req, res, next) {
  // If it's NextJS fetching or data or it's a direct request,
  // the pagePath is the "normalized" version
  const { pagePath } = req
  if (getPathWithoutLanguage(getPathWithoutVersion(pagePath)) !== '/search') {
    return next()
  }

  // When you use `/api/search/v1?version=foo&language=xy&...`
  // the language and version comes from the query string.
  // When you use `/xz/enterprise-cloud@latest/search?query=hello`
  // the `version` and `language` is implied from the URL pathname.
  // search.version = req.context.currentVersion
  // search.language = req.context.currentLanguage

  const { search, validationErrors } = getSearchFromRequest(req, {
    version: req.context.currentVersion,
    language: req.context.currentLanguage,
  })

  if (validationErrors.map((error) => error.key).includes('query')) {
    // 'query' is such an exception because the search result component
    // will attempt to display its value even if there was any
    // validation error. In a sense, it displays:
    //
    //   You searched for "foo"
    //   But your 'page' parameter is invalid.
    //
    // If for example, the search input is an array, we pick the first
    // value. If it's too long, we truncate it.
    if (Array.isArray(search.query)) {
      search.query = search.query[0]
    } else if (!search.query) {
      // If the 'query' query string parameter wasn't even present,
      // it becomes `undefined`. But since `search.query` needs to be
      // a *string*, we pretend it was provided but empty.
      search.query = ''
    }
  }

  // This enables so that when the search is sent to Elasticsearch
  // it will request an aggregate by these keyword fields.
  search.aggregate = ['toplevel']

  req.context.search = { search, validationErrors }

  if (!validationErrors.length && search.query) {
    if (!process.env.ELASTICSEARCH_URL) {
      // This is only true in local dev or in Preview environments.
      // And in local dev, it's usually for content contributors who
      // want to test a preview locally, but don't want to have to
      // set up Elasticsearch.
      // This same proxying logic happens in `middleware/api/index.js`
      // too for the outwards facing `/api/search/v1` endpoint.
      if (search.aggregate && search.toplevel && search.toplevel.length > 0) {
        // Do 2 searches. One without filtering
        const { toplevel, ...searchWithoutFilter } = search
        searchWithoutFilter.size = 0
        const { aggregations } = await getProxySearch(searchWithoutFilter)
        const { aggregate, ...searchWithoutAggregate } = search
        req.context.search.results = await getProxySearch(searchWithoutAggregate)
        req.context.search.results.aggregations = aggregations
      } else {
        req.context.search.results = await getProxySearch(search)
      }
    } else {
      // If this throws, so be it. Let it bubble up.
      // In local dev, you get to see the error. In production,
      // you get a "Oops! Something went wrong" which involves a Failbot
      // send.
      const tags = [`indexName:${search.indexName}`, `toplevels:${search.toplevel.length}`]
      const timed = statsd.asyncTimer(getSearchResults, 'contextualize.search', tags)
      try {
        if (search.aggregate && search.toplevel && search.toplevel.length > 0) {
          // Do 2 searches. One without filtering
          const { toplevel, ...searchWithoutFilter } = search
          searchWithoutFilter.size = 0
          const { aggregations } = await timed(searchWithoutFilter)
          req.context.search.results = await timed(search)
          req.context.search.results.aggregations = aggregations
        } else {
          req.context.search.results = await timed(search)
        }
      } catch (error) {
        // If the error coming from the Elasticsearch client is any sort
        // of 4xx error, it will be bubbled up to the next middleware
        // which might think something else is wrong with the *client's*
        // request from the outside. But in reality it's not their fault.
        // It's our fault in the backend side. So we throw a new error
        // so that this failure to seach ultimately bubbles up to a
        // proper 500 error (including Failbot reporting).
        // In particular, this helps platform developers working on the
        // Elasticsearch searching code.
        if (error instanceof errors.ElasticsearchClientError) {
          console.error('Error calling getSearchResults(%s):', search, error)
          if (error.meta?.body) {
            console.error(`Meta:`, error.meta.body)
          }
          throw new Error(error.message)
        } else {
          throw error
        }
      }
    }
  }

  return next()
}

// When you use the proxy to prod, using its API, we need to "convert"
// the parameters we have figured out here in the contextualizer.
// Thankfully all the names match. For example, we might figure
// the page by doing `req.context.search.page = 123` and now we need to
// add that to the query string for the `/api/search/v1`.
// We inclusion-list all the keys that we want to take from the search
// object into the query string URL.
const SEARCH_KEYS_TO_QUERY_STRING = [
  'query',
  'version',
  'language',
  'page',
  'aggregate',
  'toplevel',
  'size',
]

async function getProxySearch(search) {
  const url = new URL('https://docs.github.com/api/search/v1')
  for (const key of SEARCH_KEYS_TO_QUERY_STRING) {
    const value = search[key]
    if (typeof value === 'boolean') {
      url.searchParams.set(key, value ? 'true' : 'false')
    } else if (Array.isArray(value)) {
      for (const v of value) {
        url.searchParams.append(key, v)
      }
    } else if (typeof value === 'number') {
      url.searchParams.set(key, `${value}`)
    } else if (value) {
      url.searchParams.set(key, value)
    }
  }
  console.log(`Proxying search to ${url}`)
  return got(url).json()
}
