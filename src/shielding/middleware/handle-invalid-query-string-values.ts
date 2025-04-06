import type { Response, NextFunction } from 'express'

import { ExtendedRequest } from '@/types'
import statsd from '@/observability/lib/statsd.js'
import { allTools } from '@/tools/lib/all-tools.js'
import { allPlatforms } from '@/tools/lib/all-platforms.js'
import { defaultCacheControl } from '@/frame/middleware/cache-control.js'

const STATSD_KEY = 'middleware.handle_invalid_querystring_values'

// Hi future reader!
// If there are query strings whose values are static and predictable,
// type them in here.
// It can't be something like `?query=...` because its value is highly
// dynamic.
// At the time of writing, these will match independent of location. A
// possible extension, in the future, is to make the value match
// dependent on the location. For example, you might want to express
// that the values of `?platform=...` should be none when the path is
// something like `/en/search`.
const RECOGNIZED_VALUES = {
  platform: allPlatforms,
  tool: Object.keys(allTools),
}
// So we can look up if a key in the object is actually present
// and not a built in.
// Otherwise...
//
//    > const myObj = {foo: 'bar'}
//    > 'constructor' in myObj
//    true
//
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
        const value = query[key]
        const values = Array.isArray(value) ? value : [value]
        if (values.some((value) => typeof value === 'string' && !validValues.includes(value))) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(
              'Warning! Invalid query string *value* detected. %O is not one of %O',
              query[key],
              validValues,
            )
          }
          // Some value is not recognized. Redirect to the current URL
          // but with that query string key removed.
          const sp = new URLSearchParams(query as any)
          sp.delete(key)

          defaultCacheControl(res)
          let newURL = req.path
          if (sp.toString()) newURL += `?${sp}`
          res.redirect(302, newURL)

          const tags = [
            'response:302',
            `url:${req.url}`,
            `ip:${req.ip}`,
            `path:${req.path}`,
            `key:${key}`,
          ]
          statsd.increment(STATSD_KEY, 1, tags)

          return
        }
      }

      // For example ?foo[bar]=baz (but not ?foo=bar&foo=baz)
      if (value instanceof Object && !Array.isArray(value)) {
        const message = `Invalid query string key (${key})`
        defaultCacheControl(res)
        res.status(400).send(message)

        const tags = ['response:400', `path:${req.path}`, `key:${key}`]
        statsd.increment(STATSD_KEY, 1, tags)
        return
      }
    }
  }

  return next()
}
