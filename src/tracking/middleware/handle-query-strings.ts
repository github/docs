import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'
import statsd from '@/observability/lib/statsd.js'
import { noCacheControl } from '@/frame/middleware/cache-control.js'

const STATSD_KEY = 'middleware.handle_tracking_querystrings'

// Exported for the sake of end-to-end tests
export const DOMAIN_QUERY_PARAM = 'ghdomain'
export const MAX_DOMAINS_SAVED = 3

const DOMAIN_COOKIE_AGE_MS = 365 * 24 * 3600 * 1000
export const DOMAIN_COOKIE_NAME = 'github_domains'

export default function handleTrackingQueryStrings(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
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

    const searchParams = new URLSearchParams(req.query as any)

    const oldCookieValue: string = req.cookies[DOMAIN_COOKIE_NAME] || ''
    const oldCookieValueParsed = oldCookieValue
      .split(',')
      .map((x) => x.trim().toLowerCase())
      .filter(Boolean)

    const domain = (searchParams.get(DOMAIN_QUERY_PARAM) || '').toLowerCase().trim()
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

    // Ordinarily, you can put the query string on any URL and the server
    // will just 302 redirect you to the same URL but with the query string
    // key removed. However, when we, from the client-side UI, send a
    // fetch() event, as an XHR request, we can't follow the redirect.
    // So we have this "dummy" endpoint just to be able return a 200 OK.
    if (req.path === '/__tracking__') {
      res.send('OK')
    } else {
      res.redirect(302, newURL)
    }

    const tags = [`key:${DOMAIN_QUERY_PARAM}`, `domain:${domain || '_empty_'}`]
    statsd.increment(STATSD_KEY, 1, tags)

    return
  } else if (req.path === '/__tracking__') {
    // E.g. `GET /__tracking__` but not the lack of query string
    return res.status(400).type('text').send('Lacking query string')
  }

  return next()
}
