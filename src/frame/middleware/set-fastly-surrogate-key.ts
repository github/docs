import type { NextFunction } from 'express'

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

// Using 'any' type for res parameter to maintain compatibility with Express Response objects
export function setFastlySurrogateKey(res: any, enumKey: string, isCustomKey = false) {
  if (process.env.NODE_ENV !== 'production') {
    if (!isCustomKey && !Object.values(SURROGATE_ENUMS).includes(enumKey)) {
      throw new Error(
        `Unrecognized surrogate enumKey. ${enumKey} is not one of ${Object.values(
          SURROGATE_ENUMS,
        )}`,
      )
    }
  }
  res.set(KEY, enumKey)
}

// Using 'any' type for req and res parameters to maintain backward compatibility with test mock objects
// that don't fully implement ExtendedRequest and Response interfaces
export function setDefaultFastlySurrogateKey(req: any, res: any, next: NextFunction) {
  res.set(KEY, `${SURROGATE_ENUMS.DEFAULT} ${makeLanguageSurrogateKey()}`)
  return next()
}

// Using 'any' type for req and res parameters to maintain backward compatibility with test mock objects
// that don't fully implement ExtendedRequest and Response interfaces
export function setLanguageFastlySurrogateKey(req: any, res: any, next: NextFunction) {
  res.set(KEY, `${SURROGATE_ENUMS.DEFAULT} ${makeLanguageSurrogateKey(req.language)}`)
  return next()
}

export function makeLanguageSurrogateKey(langCode?: string) {
  if (!langCode) {
    return 'no-language'
  }
  return `language:${langCode}`
}
