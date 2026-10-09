import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'
import { setFastlySurrogateKey, SURROGATE_ENUMS } from '@/frame/middleware/set-fastly-surrogate-key'

export default function setStaticAssetCaching(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (isChecksummed(req.path)) {
    setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
  }
  return next()
}

// Checksummed URLs can keep manual surrogate keys because content changes produce new URLs.
function isChecksummed(path: string) {
  if (path.startsWith('/assets/cb-')) return true
  if (path.startsWith('/_next/static')) {
    // E.g. /_next/static/chunks/0e226fb0-f47400d931ae7427.js
    if (/[a-f0-9]{16}/.test(path)) return true
    // E.g. /_next/static/NkhGE2zLVuDHVh7pXdtVC/_buildManifest.js
    if (/\/\w{21}\//.test(path)) return true
  }
  return false
}
