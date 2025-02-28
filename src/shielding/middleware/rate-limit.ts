import type { Request } from 'express'

import rateLimit from 'express-rate-limit'

import statsd from '@/observability/lib/statsd.js'
import { noCacheControl } from '@/frame/middleware/cache-control.js'
import { isFastlyIP } from '@/shielding/lib/fastly-ips'

const EXPIRES_IN_AS_SECONDS = 60

const MAX = process.env.RATE_LIMIT_MAX ? parseInt(process.env.RATE_LIMIT_MAX, 10) : 50
if (isNaN(MAX)) {
  throw new Error(`process.env.RATE_LIMIT_MAX (${process.env.RATE_LIMIT_MAX}) not a number`)
}

// We apply this rate limiter to _all_ routes in src/shielding/index.ts except for `/api/*` routes
// `/api/*` routes are rate limited on a more specific basis in frame/api/index.ts
// When creating a limiter for `/api/*` routes, we need to pass `true` as the second argument
export function createRateLimiter(max = MAX, isAPILimiter = false) {
  return rateLimit({
    // 1 minute
    windowMs: EXPIRES_IN_AS_SECONDS * 1000,
    // limit each IP to X requests per windowMs
    // We currently have about 12 instances in production. That's routed
    // in Moda to spread the requests to each healthy instance.
    // So, the true rate limit, per `windowMs`, is this number multiplied
    // by the current number of instances.
    max: max,

    // Return rate limit info in the `RateLimit-*` headers
    standardHeaders: true,
    // Disable the `X-RateLimit-*` headers
    legacyHeaders: false,

    keyGenerator: (req) => {
      return getClientIPFromReq(req)
    },

    skip: async (req) => {
      const ip = getClientIPFromReq(req)
      if (await isFastlyIP(ip)) {
        return true
      }
      // IP is empty when we are in a non-production (not behind Fastly) environment
      // In these environments, we don't want to rate limit (including tests)
      // However, if you want to test rate limiting locally, you can manually set
      // the `fastly-client-ip` header to your IP address to bypass this check set the
      if (ip === '') {
        return true
      }

      // We handle /api/* routes with a separate rate limiter
      // When it is a separate rate limiter, isAPILimiter will be passed as true
      if (req.path.startsWith('/api/') || isAPILimiter) {
        return false
      }

      // If the request is not suspicious, don't rate limit it
      if (!isSuspiciousRequest(req)) {
        return true
      }

      // At this point, a request is suspicious. We want to track how many are in datadog
      const tags = [`url:${req.url}`, `ip:${ip}`, `path:${req.path}`, `qs:${req.url.split('?')[1]}`]
      statsd.increment('middleware.rate_limit_dont_skip', 1, tags)

      return false
    },

    handler: (req, res, next, options) => {
      const tags = [`url:${req.url}`, `ip:${req.ip}`, `path:${req.path}`]
      statsd.increment('middleware.rate_limit', 1, tags)
      noCacheControl(res)
      res.status(options.statusCode).send(options.message)
    },
  })
}

function getClientIPFromReq(req: Request) {
  // Moda forwards the client's IP using the `fastly-client-ip` header.
  // However, in non-fastly environments, this header is not present.
  // Staging is behind Okta, so we don't need to rate limit there.
  let ip = req?.headers?.['fastly-client-ip'] || ''
  // This is to satisfy TypeScript since a header could be a string array, but fastly-client-ip is not
  if (typeof ip !== 'string') {
    ip = ''
  }
  return ip
}

const RECOGNIZED_KEYS_BY_PREFIX = {
  '/_next/data/': ['versionId', 'productId', 'restPage', 'apiVersion', 'category', 'subcategory'],
  '/api/search': ['query', 'language', 'version', 'page', 'product', 'autocomplete', 'limit'],
  '/api/anchor-redirect': ['hash', 'path'],
  '/api/webhooks': ['category', 'version'],
  '/api/pageinfo': ['pathname'],
}

const RECOGNIZED_KEYS = {
  search: ['query', 'page'],
}

const MISC_KEYS = [
  // Learning track pages
  'learn',
  'learnProduct',

  // Platform picker
  'platform',

  // Tool picker
  'tool',

  // When apiVersion isn't the only one. E.g. ?apiVersion=XXX&tool=vscode
  'apiVersion',

  // Lowercase for rest pages
  'apiversion',

  // We use the query param "feature" to enable experiments in the browser
  'feature',
]

/**
 * Return true if the request looks like a DoS request. I.e. suspicious.
 *
 * We've seen lots of requests slip past the CDN and its edge rate limiter
 * that clearly are not realistic URLs that you'd get in a browser.
 * For example `?action=octrh&api=h9vcd&immagine=jzs3c&lang=xb0kp&m=rrmek`
 * There are certain URLs that have query strings that are valid, but
 * have one more query string keys. In particular the `/api/..` endpoints.
 *
 * Remember, just because this function might return true, it doesn't mean
 * the request will be rate limited. It has to be both suspicious AND
 * have lots and lots of requests.
 *
 * @param {Request} req
 * @returns boolean
 */
function isSuspiciousRequest(req: Request) {
  const keys = Object.keys(req.query)

  // Since this function can only speculate by query strings (at the
  // moment), if the URL doesn't have any query strings it's not suspicious.
  if (!keys.length) {
    return false
  }

  // E.g. `/en/rest/actions?apiVersion=YYYY-MM-DD`
  if (keys.length === 1 && keys[0] === 'apiVersion') return false

  // Now check what query string keys are *left* based on a list of
  // recognized keys per different prefixes.
  for (const [prefix, recognizedKeys] of Object.entries(RECOGNIZED_KEYS_BY_PREFIX)) {
    if (req.path.startsWith(prefix)) {
      return keys.filter((key) => !recognizedKeys.includes(key)).length > 0
    }
  }

  // E.g. `/fr/search?query=foo
  if (req.path.split('/')[2] === 'search') {
    return keys.filter((key) => !RECOGNIZED_KEYS.search.includes(key)).length > 0
  }

  const unrecognizedKeys = keys.filter((key) => !MISC_KEYS.includes(key))
  return unrecognizedKeys.length > 0
}
