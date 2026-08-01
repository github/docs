import type { Response } from 'express'

import { createLogger } from '@/observability/logger'
const logger = createLogger(import.meta.url)

type CacheControlKey = 'cache-control' | 'surrogate-control'

interface CacheControlOptions {
  key?: CacheControlKey
  immutable?: boolean
  staleWhileRevalidate?: number
  staleIfError?: number
}

const ONE_MINUTE = 60
const TEN_MINUTES = 10 * ONE_MINUTE
const ONE_HOUR = 60 * ONE_MINUTE
const ONE_DAY = 24 * ONE_HOUR
const ONE_WEEK = 7 * ONE_DAY
const ONE_YEAR = 365 * ONE_DAY

// Return a function you can pass a Response object to and it will set the `Cache-Control` header.
// Max age is in seconds.
// Max age should not be greater than 31536000, per <https://www.ietf.org/rfc/rfc2616.txt>.
function cacheControlFactory(
  maxAge: number = 0,
  {
    key = 'cache-control',
    immutable = false,
    staleWhileRevalidate = 0,
    staleIfError = 0,
  }: CacheControlOptions = {},
): (res: Response) => void {
  const directives = [
    maxAge > 0 && 'public',
    maxAge > 0 && `max-age=${maxAge}`,
    maxAge <= 0 && 'max-age=0',
    maxAge > 0 && immutable && 'immutable',
    maxAge <= 0 && 'private',
    maxAge <= 0 && 'no-store',
    maxAge > 0 && staleWhileRevalidate > 0 && `stale-while-revalidate=${staleWhileRevalidate}`,
    maxAge > 0 && staleIfError > 0 && `stale-if-error=${staleIfError}`,
  ]
    .filter(Boolean)
    .join(', ')
  return (res: Response) => {
    if (process.env.NODE_ENV !== 'production' && res.hasHeader('set-cookie') && maxAge) {
      logger.warn(
        "You can't set a >0 cache-control header AND set-cookie or else the CDN will never respect the cache-control.",
      )
    }
    res.set(key, directives)
  }
}

// ### These are roughly in order from shortest to longest. ###

// If you do not want caching.
export const noCacheControl = cacheControlFactory(0)

// Short cache for 4xx errors.
export const errorCacheControl = cacheControlFactory(ONE_MINUTE)

// For default cache control, up to one week in cache but much shorter in browser.
// Most responses are under the default cache control policy.
const browserCacheControl = cacheControlFactory(ONE_MINUTE)
const defaultCDNCacheControl = cacheControlFactory(TEN_MINUTES, {
  key: 'surrogate-control',
  staleWhileRevalidate: ONE_WEEK,
  staleIfError: ONE_WEEK,
})
export function defaultCacheControl(res: Response): void {
  browserCacheControl(res)
  defaultCDNCacheControl(res)
}
export const searchCacheControl = defaultCacheControl

// For requests where the response can vary between a HTML and Markdown response
// using the accept header.
export function contentTypeCacheControl(res: Response): void {
  defaultCacheControl(res)
  res.append('vary', 'accept')
}

// Vary on language when needed.
// `x-user-language` is a custom request header derived from `req.cookie:user_language`.
// `accept-language` is truncated to one of our available languages.
// https://bit.ly/3u5UeRN
export function languageCacheControl(res: Response): void {
  defaultCacheControl(res)
  res.append('vary', 'accept-language, x-user-language')
}

// Vary on both language and version for homepage redirects.
// `x-user-version` is a custom request header derived from `req.cookie:user_version`.
export function languageAndVersionCacheControl(res: Response): void {
  defaultCacheControl(res)
  res.append('vary', 'accept-language, x-user-language, x-user-version')
}

// Long cache control for versioned assets: such as images, CSS, prebuilt JS.
const assetBrowserCacheControl = cacheControlFactory(TEN_MINUTES)
const assetCDNCacheControl = cacheControlFactory(ONE_WEEK, {
  key: 'surrogate-control',
  immutable: true,
  staleWhileRevalidate: ONE_WEEK,
  staleIfError: ONE_WEEK,
})
export function assetCacheControl(res: Response): void {
  assetBrowserCacheControl(res)
  assetCDNCacheControl(res)
}

// Long caching for archived pages and assets.
const archivedBrowserCacheControl = cacheControlFactory(TEN_MINUTES)
const archivedCDNCacheControl = cacheControlFactory(ONE_YEAR, {
  key: 'surrogate-control',
  immutable: true,
  staleWhileRevalidate: ONE_WEEK,
  staleIfError: ONE_WEEK,
})
export function archivedCacheControl(res: Response): void {
  archivedBrowserCacheControl(res)
  archivedCDNCacheControl(res)
}
