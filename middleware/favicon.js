// We actually don't rely and use favicon.ico but it's nevertheless a
// very common request.
// Because we store our images, including those not for the Markdown text,
// in the `assets/images/site` directory, we will use a custom
// solution to serve this directly.
import fs from 'fs'

import { SURROGATE_ENUMS, setFastlySurrogateKey } from './set-fastly-surrogate-key.js'
import { cacheControlFactory } from './cache-control.js'

const cacheControl = cacheControlFactory(60 * 60 * 24 * 7)

const faviconPayloadBuffer = fs.readFileSync('assets/images/site/favicon.ico')

export default function assetPreprocessing(req, res, next) {
  if (req.path !== '/favicon.ico') return next()

  // This makes sure the CDN caching survives each production deployment.
  setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)

  // Manually settings a Cache-Control because no other middleware
  // will get a chance to do this later since we terminate here.
  cacheControl(res)

  res.set('content-type', 'image/x-icon')
  res.send(faviconPayloadBuffer)
}
