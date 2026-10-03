import type { Response, NextFunction } from 'express'

import { createLogger } from '@/observability/logger'
import statsd from '@/observability/lib/statsd'
import { noCacheControl, defaultCacheControl } from '@/frame/middleware/cache-control'
import { ExtendedRequest } from '@/types'

const logger = createLogger(import.meta.url)

const STATSD_KEY = 'middleware.handle_invalid_querystrings'

// Exported for the sake of end-to-end tests
export const MAX_UNFAMILIAR_KEYS_BAD_REQUEST = 15
export const MAX_UNFAMILIAR_KEYS_REDIRECT = 3

const RECOGNIZED_KEYS_BY_PREFIX = {
  '/_next/data/': ['versionId', 'productId', 'restPage', 'apiVersion', 'category', 'subcategory'],
  '/api/search': ['query', 'language', 'version', 'page', 'product', 'autocomplete', 'limit'],
  '/api/combined-search': ['query', 'version', 'size', 'debug'],
  '/api/anchor-redirect': ['hash', 'path'],
  '/api/webhooks': ['category', 'version'],
  '/api/pageinfo': ['pathname'],
}

const RECOGNIZED_KEYS_BY_ANY = new Set([
  // Learning track pages add these keys.
  'learn',
  'learnProduct',
  // The platform picker adds this key.
  'platform',
  // The tool picker adds this key.
  'tool',
  // API pages can combine apiVersion with picker keys such as tool.
  'apiVersion',
  // Search results pages read this key.
  'query',
  // The search overlay can add these keys on any page.
  'search-overlay-input',
  'search-overlay-open',
  'search-overlay-ask-ai',
  // Webhook events pages use actionType for drop-down filtering.
  'actionType',
  // Landing page article grids use these filter keys.
  'articles-category',
  'articles-filter',
  'articles-page',
  // Recognize the legacy ghdomain parameter even though Docs no longer processes it.
  'ghdomain',
  // UTM campaign links add these keys.
  'utm_source',
  'utm_medium',
  'utm_campaign',
  // Experiments add this key.
  'feature',
  // External API request links add this key.
  'client_name',
])

export default function handleInvalidQuerystrings(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  const { method, query, path } = req
  if (method === 'GET' || method === 'HEAD') {
    const originalKeys = Object.keys(query)

    const invalidKeys = originalKeys.filter((key) => {
      return key.includes('[') || key.includes(']')
    })

    if (invalidKeys.length > 0) {
      noCacheControl(res)
      res.status(400).type('text').send('Invalid query string')

      const tags = [
        'response:400',
        'reason:invalid-brackets',
        `url:${req.url}`,
        `path:${req.path}`,
        `keys:${originalKeys.length}`,
      ]
      statsd.increment(STATSD_KEY, 1, tags)

      return
    }

    let keys = originalKeys.filter((key) => !RECOGNIZED_KEYS_BY_ANY.has(key))
    if (keys.length > 0) {
      // Count only keys this middleware does not recognize for the current path.
      for (const [prefix, recognizedKeys] of Object.entries(RECOGNIZED_KEYS_BY_PREFIX)) {
        if (path.startsWith(prefix)) {
          keys = keys.filter((key) => !recognizedKeys.includes(key))
        }
      }
    }

    // GET and HEAD with hidden survey-token plus real survey-vote match this honeypot branch.
    const honeypotted = 'survey-token' in query && 'survey-vote' in query

    if (keys.length >= MAX_UNFAMILIAR_KEYS_BAD_REQUEST || honeypotted) {
      noCacheControl(res)

      const message = honeypotted ? 'Honeypotted' : 'Too many unrecognized query string parameters'
      res.status(400).type('text').send(message)

      const tags = [
        'response:400',
        `url:${req.url}`,
        `path:${req.path}`,
        `keys:${originalKeys.length}`,
      ]
      statsd.increment(STATSD_KEY, 1, tags)

      return
    }

    // Production has sent the home page 8-character valueless query strings.
    const rootHomePage = path.split('/').length === 2
    const badKeylessQuery =
      rootHomePage && keys.length === 1 && keys[0].length === 8 && !query[keys[0]]

    // Strip production keys like tool%25252525253Dvisualstudio...%26tool%3Djetbrains=.
    const badToolsQuery = keys.some((key) => key.startsWith('tool%') && !query[key])

    if (keys.length >= MAX_UNFAMILIAR_KEYS_REDIRECT || badKeylessQuery || badToolsQuery) {
      if (process.env.NODE_ENV === 'development') {
        logger.warn(
          'Redirecting because of a questionable query string, see https://github.com/github/docs/blob/main/src/shielding/README.md',
        )
      }
      defaultCacheControl(res)
      const sp = new URLSearchParams(query as Record<string, string>)
      for (const key of keys) {
        sp.delete(key)
      }
      let newURL = req.path
      if (sp.toString()) newURL += `?${sp}`

      res.safeRedirect(302, newURL)

      const tags = [
        'response:302',
        `url:${req.url}`,
        `path:${req.path}`,
        `keys:${originalKeys.length}`,
      ]
      statsd.increment(STATSD_KEY, 1, tags)

      return
    }
  }

  return next()
}
