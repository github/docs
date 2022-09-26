import { setFastlySurrogateKey, SURROGATE_ENUMS } from './set-fastly-surrogate-key.js'

export default function setStaticAssetCaching(req, res, next) {
  if (isChecksummed(req.path)) {
    setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
  }
  return next()
}

// True if the URL is known to contain some pattern of a checksum that
// would make it intelligently different if its content has changed.
function isChecksummed(path) {
  if (path.startsWith('/assets/cb-')) return true
  if (path.startsWith('/_next/static') && /[a-f0-9]{16}/.test(path)) return true
  return false
}
