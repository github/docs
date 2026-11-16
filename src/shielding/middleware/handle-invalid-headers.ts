import type { Response, NextFunction } from 'express'

import { ExtendedRequest } from '@/types'

const INVALID_HEADER_KEYS = [
  // Next.js treats x-invoke-status as the response status, which can make the CDN cache 203s
  // or turn malformed requests into 500s.
  'x-invoke-status',
]

export default function handleInvalidNextPaths(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  const header = INVALID_HEADER_KEYS.find((key) => req.headers[key])
  if (header) {
    // The CDN does not cache non-success, non-404 responses.
    res.status(400).type('text').send('Invalid request headers')
    return
  }

  return next()
}
