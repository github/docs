import type { NextFunction, Response } from 'express'

import statsd from '@/observability/lib/statsd'
import { ExtendedRequest } from '@/types'

class AbortError extends Error {
  statusCode: number
  code: string
  constructor(message: string, statusCode: number, code: string) {
    super(message)
    this.statusCode = statusCode
    this.code = code
  }
}

export default function abort(req: ExtendedRequest, res: Response, next: NextFunction) {
  req.once('aborted', () => {
    // Ignore _next aborts, which usually come from webpack HMR.
    if (req.path.startsWith('/_next')) {
      return
    }

    const incrementTags = []
    // Request contextualizers might not run before an abort, so guard optional request fields.
    if (req.pagePath) {
      incrementTags.push(`path:${req.pagePath}`)
    }
    if (req.context?.currentCategory) {
      incrementTags.push(`product:${req.context.currentCategory}`)
    }
    statsd.increment('middleware.abort', 1, incrementTags)

    const abortError = new AbortError('Client closed request', 499, 'ECONNRESET')

    return next(abortError)
  })

  return next()
}
