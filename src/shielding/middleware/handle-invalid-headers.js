import statsd from '#src/observability/lib/statsd.js'
import { errorCacheControl } from '#src/frame/middleware/cache-control.js'

const STATSD_KEY = 'middleware.handle_invalid_headers'

const INVALID_HEADER_KEYS = [
  // Next.js will pick this up and override the status code.
  // We don't want that to happen because `x-invoke-status: 203` can
  // trigger the CDN to cache it.
  // It can also trigger a 500 error because the header is not used
  // correctly.
  'x-invoke-status',
]

export default function handleInvalidNextPaths(req, res, next) {
  const header = INVALID_HEADER_KEYS.find((key) => req.headers[key])
  if (header) {
    // This way you can't hammer the backend with invalid requests.
    // Since the CDN will cache based on the status code not being one
    // of success, we don't have to worry about this being cached when
    // the URL is the same but the headers *not invalid*.
    errorCacheControl(res)

    const tags = [`ip:${req.ip}`, `path:${req.path}`, `header:${header}`]
    statsd.increment(STATSD_KEY, 1, tags)

    return res.status(400).type('text').send('Invalid request headers')
  }

  return next()
}
