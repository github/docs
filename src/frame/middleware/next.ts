import next from 'next'

import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'

export const nextApp = next({ dev: isDevelopment })
export const nextHandleRequest = nextApp.getRequestHandler()
await nextApp.prepare()

function renderPageWithNext(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (req.path.startsWith('/_next') && !req.path.startsWith('/_next/data')) {
    return nextHandleRequest(req, res)
  }

  // Note that URLs like `/_next/webpack-hmr` and
  // '/_next/static/webpack/64e44ef62e261d3a.webpack.hot-update.json' has to
  // go through here.

  return next()
}

export default renderPageWithNext
