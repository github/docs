import got from 'got'
import { errors } from '@elastic/elasticsearch'
import statsd from '#src/observability/lib/statsd.js'

import { getPathWithoutVersion, getPathWithoutLanguage } from '../../../lib/path-utils.js'
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

  req.context.search = { search, validationErrors }

  if (!validationErrors.length && search.query) {
    if (!process.env.ELASTICSEARCH_URL) {
      // This is only true in local dev or in Preview environments.
      // And in local dev, it's usually for content contritbutors who
      // want to test a preview locally, but don't want to have to
      // set up Elasticsearch.
      // This same proxying logic happens in `middleware/api/index.js`
      // too for the outwards facing `/api/search/v1` endpoint.
      req.context.search.results = await getProxySearch(search)
    } else {
      // If this throws, so be it. Let it bubble up.
      // In local dev, you get to see the error. In production,
      // you get a "Oops! Something went wrong" which involves a Failbot
      // send.
      const tags = [`indexName:${search.indexName}`]
      const timed = statsd.asyncTimer(getSearchResults, 'contextualize.search', tags)
      try {
        req.context.search.results = await timed(search)
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

async function getProxySearch(search) {
  const url = new URL('https://docs.github.com/api/search/v1')
  for (const key of ['query', 'version', 'language', 'page']) {
    url.searchParams.set(key, `${search[key] || ''}`)
  }
  console.log(`Proxying search to ${url}`)
  return got(url).json()
}
