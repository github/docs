// We actually don't rely and use /favicon.ico but it's nevertheless a
// very common request. Same with /apple-touch-icon.png.
// Because we store our images, including those not for the Markdown text,
// in the `assets/images/site` directory, we will use a custom
// solution to serve this directly.
import fs from 'fs'

import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'
import { SURROGATE_ENUMS, setFastlySurrogateKey } from './set-fastly-surrogate-key.js'
import { assetCacheControl } from './cache-control.js'

type IconConfig = {
  contentType: string
  buffer: () => Buffer
}
const MAP: {
  [uri: string]: IconConfig
} = {
  '/favicon.ico': {
    contentType: 'image/x-icon',
    buffer: getBuffer('assets/images/site/favicon.ico'),
  },
  '/apple-touch-icon.png': {
    contentType: 'image/png',
    buffer: getBuffer('assets/images/site/apple-touch-icon.png'),
  },
  '/apple-touch-icon-120x120.png': {
    contentType: 'image/png',
    buffer: getBuffer('assets/images/site/apple-touch-icon-120x120.png'),
  },
  '/apple-touch-icon-152x152.png': {
    contentType: 'image/png',
    buffer: getBuffer('assets/images/site/apple-touch-icon-152x152.png'),
  },
}

// It's the same image but it's fine. By default, when Safari tries to
// to figure out which apple touch icons are available it will
// try to load this by default. For example, if you in desktop Safari
// click share icon, it will load this to serve as a preview icon.
MAP['/apple-touch-icon-precomposed.png'] = MAP['/apple-touch-icon.png']
MAP['/apple-touch-icon-120x120-precomposed.png'] = MAP['/apple-touch-icon-120x120.png']
MAP['/apple-touch-icon-152x152-precomposed.png'] = MAP['/apple-touch-icon-152x152.png']

function getBuffer(filePath: string) {
  let buffer: Buffer
  if (!fs.existsSync(filePath)) {
    throw new Error(`${filePath} not found on disk`)
  }
  return () => {
    if (!buffer) {
      // Yes, sync and a bit slow, but the headers we send will
      // make sure these requests are rare because the payload
      // will be sticky in the CDN and stickly in the browser too.
      buffer = fs.readFileSync(filePath)
    }
    return buffer
  }
}

export default function favicons(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!MAP[req.path]) return next()

  // This makes sure the CDN caching survives each production deployment.
  setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)

  // Manually settings a Cache-Control because no other middleware
  // will get a chance to do this later since we terminate here.
  assetCacheControl(res)

  const { contentType, buffer } = MAP[req.path]
  res.set('content-type', contentType)

  res.send(buffer())
}
