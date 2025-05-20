import type { Response, NextFunction } from 'express'
import statsd from '@/observability/lib/statsd.js'

import type { ExtendedRequest } from '@/types.js'

const STATSD_KEY = 'middleware.handle_next_data_path'

export default function handleNextDataPath(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (req.path.startsWith('/_next/data/') && req.path.endsWith('.json')) {
    // translate a nextjs data request to a page path that the server can use on context
    // this is triggered via client-side route transitions
    // example path:
    // /_next/data/development/en/free-pro-team%40latest/github/setting-up-and-managing-your-github-user-account.json
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
    // free-pro-team@latest should not be included in the page path
    if (parts[1] === 'free-pro-team@latest') {
      parts.splice(1, 1)
    }
    req.pagePath = '/' + parts.join('/').replace(/.json+$/, '')
  } else {
    req.pagePath = req.path
  }

  return next()
}
