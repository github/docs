import type { Response, NextFunction } from 'express'

import statsd from '@/observability/lib/statsd'
import { defaultCacheControl } from '@/frame/middleware/cache-control'
import { ExtendedRequest } from '@/types'

const STATSD_KEY = 'middleware.handle_invalid_nextjs_paths'

// Development needs /_next/static/webpack and /_next/webpack-hmr.
// Production blocks /_next/ paths unless they start with /_next/data, plus __nextFallback requests.
export default function handleInvalidNextPaths(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (
    process.env.NODE_ENV !== 'development' &&
    ((req.path.startsWith('/_next/') &&
      !(req.path.startsWith('/_next/data/') && req.path.endsWith('.json'))) ||
      req.query?.['__nextFallback'])
  ) {
    defaultCacheControl(res)

    const tags = [`path:${req.path}`]
    statsd.increment(STATSD_KEY, 1, tags)

    res.status(404).type('text').send('Not found')
    return
  }

  return next()
}
