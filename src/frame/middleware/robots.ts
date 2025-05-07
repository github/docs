import type { NextFunction, Response } from 'express'

import { defaultCacheControl } from './cache-control.js'
import type { ExtendedRequest } from '@/types'

const defaultResponse = 'User-agent: *'

const disallowAll = `User-agent: *
Disallow: /`

export default function robots(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (req.path !== '/robots.txt') return next()

  res.type('text/plain')

  defaultCacheControl(res)

  const host = req.get('x-host') || req.get('x-forwarded-host') || req.get('host')

  // only include robots.txt when it's our production domain and adding localhost for robots-txt.js test
  if (
    host === 'docs.github.com' ||
    req.hostname === 'docs.github.com' ||
    req.hostname === '127.0.0.1'
  ) {
    return res.send(defaultResponse)
  }

  return res.send(disallowAll)
}
