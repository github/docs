import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'
import { defaultCacheControl } from './cache-control'

export default function trailingSlashes(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (req.method === 'GET' || req.method === 'HEAD' || req.method === 'OPTIONS') {
    const split = req.url.split('?')
    let pathname = split.shift()
    if (pathname && pathname !== '/' && pathname.endsWith('/')) {
      while (pathname.endsWith('/')) {
        pathname = pathname.slice(0, pathname.length - 1)
      }
      // An empty Location resolves to the same URL, so a path of only slashes goes to the homepage.
      if (!pathname) pathname = '/'
      // Collapse repeated slashes in the path only, because query values can contain //.
      let url = pathname.replace(/\/+/g, '/')
      if (split.length) {
        url += `?${split.join('?')}`
      }
      defaultCacheControl(res)
      return res.safeRedirect(301, url)
    }
  }

  next()
}
