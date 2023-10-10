import statsd from '#src/observability/lib/statsd.js'
import { allTools } from '#src/tools/lib/all-tools.js'
import { allPlatforms } from '#src/tools/lib/all-platforms.js'
import { defaultCacheControl } from '../../../middleware/cache-control.js'

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

export default function handleInvalidQuerystringValues(req, res, next) {
  const { method, query } = req
  if (method === 'GET' || method === 'HEAD') {
    for (const key of Object.keys(query)) {
      if (key in RECOGNIZED_VALUES) {
        const validValues = RECOGNIZED_VALUES[key]
        const values = Array.isArray(query[key]) ? query[key] : [query[key]]
        if (values.some((value) => !validValues.includes(value))) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(
              'Warning! Invalid query string *value* detected. %O is not one of %O',
              query[key],
              validValues,
            )
          }
          // Some value is not recognized. Redirect to the current URL
          // but with that query string key removed.
          const sp = new URLSearchParams(query)
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
    }
  }

  return next()
}
