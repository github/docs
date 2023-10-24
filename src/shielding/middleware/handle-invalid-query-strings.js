import statsd from '#src/observability/lib/statsd.js'
import { noCacheControl, defaultCacheControl } from '../../../middleware/cache-control.js'

const STATSD_KEY = 'middleware.handle_invalid_querystrings'

// Exported for the sake of end-to-end tests
export const MAX_UNFAMILIAR_KEYS_BAD_REQUEST = 15
export const MAX_UNFAMILIAR_KEYS_REDIRECT = 3

const RECOGNIZED_KEYS_BY_PREFIX = {
  '/_next/data/': ['versionId', 'productId', 'restPage', 'apiVersion', 'category', 'subcategory'],
  '/api/search': ['query', 'language', 'version', 'page', 'product', 'autocomplete', 'limit'],
  '/api/anchor-redirect': ['hash', 'path'],
  '/api/webhooks': ['category', 'version'],
  '/api/pageinfo': ['pathname'],
}

const RECOGNIZED_KEYS_BY_ANY = new Set([
  // Learning track pages
  'learn',
  'learnProduct',
  // Platform picker
  'platform',
  // Tool picker
  'tool',
  // When apiVersion isn't the only one. E.g. ?apiVersion=XXX&tool=vscode
  'apiVersion',
  // Search
  'query',
  // The drop-downs on "Webhook events and payloads"
  'actionType',
])

export default function handleInvalidQuerystrings(req, res, next) {
  const { method, query, path } = req
  if (method === 'GET' || method === 'HEAD') {
    const originalKeys = Object.keys(query)
    let keys = originalKeys.filter((key) => !RECOGNIZED_KEYS_BY_ANY.has(key))
    if (keys.length > 0) {
      // Before we judge the number of query strings, strip out all the ones
      // we're familiar with.
      for (const [prefix, recognizedKeys] of Object.entries(RECOGNIZED_KEYS_BY_PREFIX)) {
        if (path.startsWith(prefix)) {
          keys = keys.filter((key) => !recognizedKeys.includes(key))
        }
      }
    }

    // If you fill out the Survey form with all the fields and somehow
    // don't attempt to make a POST request, you'll end up with a query
    // string like this.
    const honeypotted = 'survey-token' in query && 'survey-vote' in query

    if (keys.length >= MAX_UNFAMILIAR_KEYS_BAD_REQUEST || honeypotted) {
      noCacheControl(res)

      const message = honeypotted ? 'Honeypotted' : 'Too many unrecognized query string parameters'
      res.status(400).send(message)

      const tags = [
        'response:400',
        `url:${req.url}`,
        `ip:${req.ip}`,
        `path:${req.path}`,
        `keys:${originalKeys.length}`,
      ]
      statsd.increment(STATSD_KEY, 1, tags)

      return
    }

    // This is a pattern we've observed in production and we're shielding
    // against it happening again. The root home page is hit with a
    // 8 character long query string that has no value.
    const rootHomePage = path.split('/').length === 2
    const badKeylessQuery =
      rootHomePage && keys.length === 1 && keys[0].length === 8 && !query[keys[0]]

    if (keys.length >= MAX_UNFAMILIAR_KEYS_REDIRECT || badKeylessQuery) {
      defaultCacheControl(res)
      const sp = new URLSearchParams(query)
      keys.forEach((key) => sp.delete(key))
      let newURL = req.path
      if (sp.toString()) newURL += `?${sp}`

      res.redirect(302, newURL)

      const tags = [
        'response:302',
        `url:${req.url}`,
        `ip:${req.ip}`,
        `path:${req.path}`,
        `keys:${originalKeys.length}`,
      ]
      statsd.increment(STATSD_KEY, 1, tags)

      return
    }
  }

  return next()
}
