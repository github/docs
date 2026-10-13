// Browsers request /favicon.ico and Apple touch icons even though pages do not link them.
// Serve these root icon URLs directly from assets/images/site.
import fs from 'fs'

import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'
import { SURROGATE_ENUMS, setFastlySurrogateKey } from './set-fastly-surrogate-key'
import { assetCacheControl } from './cache-control'

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

// Safari probes precomposed Apple touch icon names for desktop share previews.
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
      // Sync reads are rare because assetCacheControl keeps icons in the CDN and browser cache.
      buffer = fs.readFileSync(filePath)
    }
    return buffer
  }
}

export default function favicons(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!MAP[req.path]) return next()

  // The manual surrogate key keeps CDN caching through production deploys.
  setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)

  // Set asset caching here because this middleware sends the response.
  assetCacheControl(res)

  const { contentType, buffer } = MAP[req.path]
  res.set('content-type', contentType)

  res.send(buffer())
}
