import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'
import { defaultCacheControl } from './cache-control.js'

export default function trailingSlashes(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (req.method === 'GET' || req.method === 'HEAD' || req.method === 'OPTIONS') {
    const split = req.url.split('?')
    let pathname = split.shift()
    if (pathname && pathname !== '/' && pathname.endsWith('/')) {
      while (pathname.endsWith('/')) {
        pathname = pathname.slice(0, pathname.length - 1)
      }
      let url = pathname
      if (split.length) {
        url += `?${split.join('?')}`
      }
      defaultCacheControl(res)
      return res.redirect(301, url)
    }
  }

  next()
}
