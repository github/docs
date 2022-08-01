import statsd from '../lib/statsd.js'

const STATSD_KEY = 'middleware.handle_invalid_paths'

export default function handleInvalidPaths(req, res, next) {
  // Prevent various malicious injection attacks targeting Next.js
  if (req.path.match(/^\/_next[^/]/) || req.path === '/_next/data' || req.path === '/_next/data/') {
    statsd.increment(STATSD_KEY, 1, ['check:nextjs-injection-attack'])
    return next(404)
  }

  return next()
}
