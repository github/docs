// Fastly provides a Soft Purge feature that allows you to mark content as outdated (stale) instead of permanently
// purging and thereby deleting it from Fastly's caches. Objects invalidated with Soft Purge will be treated as
// outdated (stale) while Fastly fetches a new version from origin.
//
// Use of a surrogate key is required for soft purging
// https://docs.fastly.com/en/guides/soft-purges
// https://docs.fastly.com/en/guides/getting-started-with-surrogate-keys

// What the header needs to be called for Fastly to recognize it.
const KEY = 'surrogate-key'

export const SURROGATE_ENUMS = {
  DEFAULT: 'every-deployment',
  MANUAL: 'manual-purge',
}

export function setFastlySurrogateKey(res, enumKey) {
  if (!Object.values(SURROGATE_ENUMS).includes(enumKey)) {
    throw new Error(
      `Unrecognizes surrogate enumKey. ${enumKey} is not one of ${Object.values(SURROGATE_ENUMS)}`
    )
  }
  res.set(KEY, enumKey)
}

export function setDefaultFastlySurrogateKey(req, res, next) {
  res.set(KEY, SURROGATE_ENUMS.DEFAULT)
  return next()
}
