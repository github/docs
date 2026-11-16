import type { Response, NextFunction } from 'express'
import statsd from '@/observability/lib/statsd'

import type { ExtendedRequest } from '@/types'

const STATSD_KEY = 'middleware.handle_next_data_path'

// Client route transitions request _next/data JSON paths; map them back to page paths.
// Example: /_next/data/development/en/actions/foo.json becomes
// /en/actions/foo.
export default function handleNextDataPath(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (req.path.startsWith('/_next/data/') && req.path.endsWith('.json')) {
    let decodedPath = ''
    try {
      decodedPath = decodeURIComponent(req.path)
    } catch {
      res.status(400).send(`Bad request`)
      const tags = ['response:400', `path:${req.path}`]
      statsd.increment(STATSD_KEY, 1, tags)
      return
    }

    const parts = decodedPath.split('/').slice(4)
    // Drop free-pro-team@latest because page paths omit that default version.
    if (parts[1] === 'free-pro-team@latest') {
      parts.splice(1, 1)
    }
    req.pagePath = `/${parts.join('/').replace(/.json+$/, '')}`
  } else {
    req.pagePath = req.path
  }

  return next()
}
