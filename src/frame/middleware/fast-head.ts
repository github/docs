import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'
import { defaultCacheControl } from './cache-control'

export default function fastHead(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.context) throw new Error('request is not contextualized')
  const { context } = req
  const { page } = context
  if (page) {
    // Cache by URL because request headers do not change this empty HEAD response.
    defaultCacheControl(res)

    res.status(200).send('')
    return
  }
  next()
}
