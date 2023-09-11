import rateLimit from 'express-rate-limit'

import statsd from '#src/observability/lib/statsd.js'
import { noCacheControl } from '../../../middleware/cache-control.js'

const EXPIRES_IN_AS_SECONDS = 60

const MAX = process.env.RATE_LIMIT_MAX ? parseInt(process.env.RATE_LIMIT_MAX, 10) : 100
if (isNaN(MAX)) {
  throw new Error(`process.env.RATE_LIMIT_MAX (${process.env.RATE_LIMIT_MAX}) not a number`)
}

const ipv4WithPort = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}):\d{1,5}$/

export default rateLimit({
  // 1 minute
  windowMs: EXPIRES_IN_AS_SECONDS * 1000,
  // limit each IP to X requests per windowMs
  // We currently have about 25 instances in production. That's routed
  // in Azure to spread the requests to each healthy instance.
  // So, the true rate limit, per `windowMs`, is this number multiplied
  // by the current number of instances.
  max: MAX,

  // Return rate limit info in the `RateLimit-*` headers
  standardHeaders: true,
  // Disable the `X-RateLimit-*` headers
  legacyHeaders: false,

  keyGenerator: (req) => {
    let { ip } = req
    // In our Azure preview environment, with the way the proxying works,
    // the `x-forwarded-for` is always the origin IP with a port number
    // attached. E.g. `75.40.90.27:56675, 169.254.129.1`
    // This port number portion changes with every request, so we strip it.
    ip = ip.replace(ipv4WithPort, '$1')

    return ip
  },

  skip: (req) => {
    // Always ignore these
    if (req.path === '/api/events') return true
    // If the query string looks totally regular, then skip
    if (!isSuspiciousRequest(req)) return true

    // This is so we can get a sense of how many requests are being
    // treated as suspicious. They don't necessarily get rate limited.
    const tags = [
      `url:${req.url}`,
      `ip:${req.ip}`,
      `path:${req.path}`,
      `qs:${req.url.split('?')[1]}`,
    ]

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
]

/**
 * Return true if the request looks like a DoS request. I.e. suspcious.
 *
 * We've seen lots of requests slip past the CDN and its edge rate limiter
 * that clearly are not realistic URLs that you'd get in a browser.
 * For example `?action=octrh&api=h9vcd&immagine=jzs3c&lang=xb0kp&m=rrmek`
 * There are certain URLs that have query strings that are valid, but
 * have one more query string keys. In particular the `/api/..` endpoints.
 *
 * Remember, just because this function might return true, it doesn't mean
 * the request will be rate limited. It has to be both suspicous AND
 * have lots and lots of requests.
 *
 * @param {Request} req
 * @returns boolean
 */
function isSuspiciousRequest(req) {
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
