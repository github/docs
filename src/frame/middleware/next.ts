import next from 'next'

import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'

export const nextApp = next({ dev: isDevelopment })
export const nextHandleRequest = nextApp.getRequestHandler()
await nextApp.prepare()

function renderPageWithNext(req: ExtendedRequest, res: Response, nextFn: NextFunction) {
  // _next asset and HMR requests, like /_next/webpack-hmr, bypass docs routing.
  if (req.path.startsWith('/_next') && !req.path.startsWith('/_next/data')) {
    return nextHandleRequest(req, res)
  }

  return nextFn()
}

export default renderPageWithNext
