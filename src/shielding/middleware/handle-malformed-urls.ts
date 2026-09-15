import type { Response, NextFunction } from 'express'

import { defaultCacheControl } from '@/frame/middleware/cache-control'
import { ExtendedRequest } from '@/types'

/**
 * Malformed UTF-8 in a URL, like `%FF`, makes decodeURIComponent throw.
 * Express does not catch that while parsing, so without this the crash
 * happens later at the router level.
 */
export default function handleMalformedUrls(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  const url = req.originalUrl || req.url
  try {
    decodeURIComponent(url)
  } catch {
    defaultCacheControl(res)
    res.status(400).type('text').send('Bad Request: Malformed URL')
    return
  }

  return next()
}
