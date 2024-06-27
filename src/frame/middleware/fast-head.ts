import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'
import { defaultCacheControl } from './cache-control.js'

export default function fastHead(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.context) throw new Error('request is not contextualized')
  const { context } = req
  const { page } = context
  if (page) {
    // Since the *presence* is not affected by the request, we can cache
    // this and allow the CDN to hold on to it.
    defaultCacheControl(res)

    return res.status(200).send('')
  }
  next()
}
