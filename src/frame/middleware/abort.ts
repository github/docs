import type { NextFunction, Response } from 'express'

import statsd from '#src/observability/lib/statsd.js'
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
  // If the client aborts the connection, send an error
  req.once('aborted', () => {
    // ignore aborts from next, usually has to do with webpack-hmr
    if (req.path.startsWith('/_next')) {
      return
    }
    // NOTE: Node.js will also automatically set `req.aborted = true`

    const incrementTags = []
    // Be careful with depending on attributes set on the `req` because
    // under certain conditions the contextualizers might not yet have
    // had a chance to run.
    if (req.pagePath) {
      incrementTags.push(`path:${req.pagePath}`)
    }
    if (req.context?.currentCategory) {
      incrementTags.push(`product:${req.context.currentCategory}`)
    }
    statsd.increment('middleware.abort', 1, incrementTags)

    const abortError = new AbortError('Client closed request', 499, 'ECONNRESET')

    // Pass the error to the Express error handler
    return next(abortError)
  })

  return next()
}
