import statsd from '#src/observability/lib/statsd.js'
import { noCacheControl } from '#src/frame/middleware/cache-control.js'

const STATSD_KEY = 'middleware.handle_tracking_querystrings'

// Exported for the sake of end-to-end tests
export const DOMAIN_QUERY_PARAM = 'ghdomain'
export const MAX_DOMAINS_SAVED = 3

const DOMAIN_COOKIE_AGE_MS = 365 * 24 * 3600 * 1000
export const DOMAIN_COOKIE_NAME = 'github_domains'

export default function handleTrackingQueryStrings(req, res, next) {
  if (req.path.startsWith('/_next/')) {
    return next()
  }

  if (req.query[DOMAIN_QUERY_PARAM] || req.query[DOMAIN_QUERY_PARAM] === '') {
    if (Array.isArray(req.query[DOMAIN_QUERY_PARAM])) {
      res.status(400).send('can only be one')

      const tags = [`key:${DOMAIN_QUERY_PARAM}`, 'domain:_multiple_']
      statsd.increment(STATSD_KEY, 1, tags)

      return
    }

    const searchParams = new URLSearchParams(req.query)

    const oldCookieValue = req.cookies[DOMAIN_COOKIE_NAME] || ''
    const oldCookieValueParsed = oldCookieValue
      .split(',')
      .map((x) => x.trim().toLowerCase())
      .filter(Boolean)

    const domain = (searchParams.get(DOMAIN_QUERY_PARAM) || '').toLowerCase().trim()
    if (!domain && !oldCookieValueParsed.length) return next()

    if (domain) {
      const newCookieValue = [domain, ...oldCookieValueParsed.filter((x) => x !== domain)]
        .slice(0, MAX_DOMAINS_SAVED)
        .join(',')
      res.cookie(DOMAIN_COOKIE_NAME, newCookieValue, {
        maxAge: DOMAIN_COOKIE_AGE_MS,
        httpOnly: false,
      })
    } else {
      res.clearCookie(DOMAIN_COOKIE_NAME)
    }

    searchParams.delete(DOMAIN_QUERY_PARAM)

    noCacheControl(res)

    let newURL = req.path
    if (searchParams.toString()) {
      newURL += `?${searchParams.toString()}`
    }
    res.redirect(302, newURL)

    const tags = [`key:${DOMAIN_QUERY_PARAM}`, `domain:${domain || '_empty_'}`]
    statsd.increment(STATSD_KEY, 1, tags)

    return
  }

  return next()
}
