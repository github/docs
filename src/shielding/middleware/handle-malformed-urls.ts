import type { Response, NextFunction } from 'express'

import { defaultCacheControl } from '@/frame/middleware/cache-control'
import { ExtendedRequest } from '@/types'

/**
 * Middleware to handle malformed UTF-8 sequences in URLs that cause
 * decodeURIComponent to fail. This prevents crashes from malicious
 * requests containing invalid URL-encoded sequences like %FF.
 */
export default function handleMalformedUrls(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  // Check URL for malformed UTF-8 sequences
  // Express/router doesn't catch these during initial parsing - they cause
  // crashes later when decodeURIComponent is called at the router level
  const url = req.originalUrl || req.url
  try {
    decodeURIComponent(url)
  } catch {
    // If any decoding fails, this is a malformed URL
    defaultCacheControl(res)
    res.setHeader('content-type', 'text/plain')
    res.status(400).send('Bad Request: Malformed URL')
    return
  }

  return next()
}
