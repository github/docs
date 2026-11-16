import type { Response, NextFunction } from 'express'

import { createLogger } from '@/observability/logger'
import { ExtendedRequest } from '@/types'
import statsd from '@/observability/lib/statsd'
import { allTools } from '@/tools/lib/all-tools'
import { allPlatforms } from '@/tools/lib/all-platforms'
import { defaultCacheControl } from '@/frame/middleware/cache-control'

const logger = createLogger(import.meta.url)

const STATSD_KEY = 'middleware.handle_invalid_querystring_values'

// Recognized values must be static across pages; dynamic values such as query stay out.
// Add path-aware matching if a key needs different values on pages such as /en/search.
const RECOGNIZED_VALUES = {
  platform: allPlatforms as string[],
  tool: Object.keys(allTools),
}
// Use a Set so built-in object properties such as constructor do not count as recognized keys.
const RECOGNIZED_VALUES_KEYS = new Set(Object.keys(RECOGNIZED_VALUES))

export default function handleInvalidQuerystringValues(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  const { method, query } = req
  if (method === 'GET' || method === 'HEAD') {
    for (const [key, value] of Object.entries(query)) {
      if (RECOGNIZED_VALUES_KEYS.has(key)) {
        const validValues = RECOGNIZED_VALUES[key as keyof typeof RECOGNIZED_VALUES]
        const queryValue = query[key]
        const values = Array.isArray(queryValue) ? queryValue : [queryValue]
        if (values.some((val) => typeof val === 'string' && !validValues.includes(val))) {
          if (process.env.NODE_ENV === 'development') {
            logger.warn('Invalid query string value detected', {
              key,
              value: query[key],
              validValues,
            })
          }
          // Redirect after removing the query key that contains an unrecognized value.
          const sp = new URLSearchParams(query as Record<string, string>)
          sp.delete(key)

          defaultCacheControl(res)
          let newURL = req.path
          if (sp.toString()) newURL += `?${sp}`
          res.safeRedirect(302, newURL)

          const tags = ['response:302', `url:${req.url}`, `path:${req.path}`, `key:${key}`]
          statsd.increment(STATSD_KEY, 1, tags)

          return
        }
      }

      // Reject ?foo[bar]=baz, but not ?foo=bar&foo=baz.
      if (value instanceof Object && !Array.isArray(value)) {
        const message = 'Invalid query string'
        defaultCacheControl(res)
        res.status(400).type('text').send(message)

        const tags = ['response:400', `path:${req.path}`, `key:${key}`]
        statsd.increment(STATSD_KEY, 1, tags)
        return
      }
    }
  }

  return next()
}
