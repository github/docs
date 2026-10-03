import type { NextFunction, Response } from 'express'

import { defaultCacheControl } from './cache-control'
import type { ExtendedRequest } from '@/types'

const defaultResponse = 'User-agent: *'

const disallowAll = `User-agent: *
Disallow: /`

export default function robots(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (req.path !== '/robots.txt') return next()

  res.type('text/plain')

  defaultCacheControl(res)

  const host = req.get('x-host') || req.get('x-forwarded-host') || req.get('host')

  // Allow indexing only on docs.github.com and 127.0.0.1 for tests.
  if (
    host === 'docs.github.com' ||
    req.hostname === 'docs.github.com' ||
    req.hostname === '127.0.0.1'
  ) {
    res.send(defaultResponse)
    return
  }

  res.send(disallowAll)
}
