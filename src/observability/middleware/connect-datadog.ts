import connectDatadog from 'connect-datadog'
import type { NextFunction, Request, Response } from 'express'

import statsd, { tags } from '../lib/statsd.js'

export default (req: Request, res: Response, next: NextFunction) => {
  return connectDatadog({
    dogstatsd: statsd,
    method: true, // Track HTTP methods (GET, POST, etc)
    response_code: true, // Track response codes
    tags: tags as string[],
  })(req, res, next)
}
