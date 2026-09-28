import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'

// Tests use this route to exercise uncaught async rejections on incoming requests.

// Keep triggerError async and unwrapped so it rejects like async middleware.
export default async function triggerError(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  // Block intentional errors in production.
  if (process.env.NODE_ENV === 'production' && process.env.MODA_PROD_SERVICE_ENV === 'true')
    return next()

  throw new Error('Intentional error')
}
