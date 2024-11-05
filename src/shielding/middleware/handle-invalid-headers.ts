import type { Response, NextFunction } from 'express'

import { ExtendedRequest } from '@/types'

const INVALID_HEADER_KEYS = [
  // Next.js will pick this up and override the status code.
  // We don't want that to happen because `x-invoke-status: 203` can
  // trigger the CDN to cache it.
  // It can also trigger a 500 error because the header is not used
  // correctly.
  'x-invoke-status',
]

export default function handleInvalidNextPaths(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  const header = INVALID_HEADER_KEYS.find((key) => req.headers[key])
  if (header) {
    // There's no point attempting to set a cache-control on this.
    // The CDN will not cache if the status code is not a success
    // and not a 404.

    return res.status(400).type('text').send('Invalid request headers')
  }

  return next()
}
