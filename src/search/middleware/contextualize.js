import got from 'got'

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
      req.context.search.results = await getSearchResults(search)
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
