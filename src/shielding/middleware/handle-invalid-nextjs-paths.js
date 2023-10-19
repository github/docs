import statsd from '#src/observability/lib/statsd.js'
import { defaultCacheControl } from '../../../middleware/cache-control.js'

const STATSD_KEY = 'middleware.handle_invalid_nextjs_paths'

export default function handleInvalidNextPaths(req, res, next) {
  // For example, `/_next/bin/junk.css`.
  // The reason for depending on checking NODE_ENV is that in development,
  // the Nextjs server will send things like /_next/static/webpack/...
  // or /_next/webpack-hmr.
  // In local dev, we don't get these penetration-testing looking requests.
  if (
    process.env.NODE_ENV !== 'development' &&
    req.path.startsWith('/_next/') &&
    !req.path.startsWith('/_next/data')
  ) {
    defaultCacheControl(res)

    const tags = [`ip:${req.ip}`, `path:${req.path}`]
    statsd.increment(STATSD_KEY, 1, tags)

    return res.status(404).type('text').send('Not found')
  }

  return next()
}
