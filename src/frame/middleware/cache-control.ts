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

// maxAge is seconds. Keep it at or below 31536000.
// https://www.ietf.org/rfc/rfc2616.txt
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

export const noCacheControl = cacheControlFactory(0)

// 4xx errors get a short cache.
export const errorCacheControl = cacheControlFactory(ONE_MINUTE)

// Default responses cache for 1 minute in browsers and 10 minutes in the CDN.
// The CDN can serve stale responses for 1 week while revalidating or on errors.
// Most responses use this policy.
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

// The Accept header can switch content responses between HTML and Markdown.
export function contentTypeCacheControl(res: Response): void {
  defaultCacheControl(res)
  res.append('vary', 'accept')
}

// Vary by accept-language and x-user-language.
// x-user-language comes from req.cookie:user_language.
// Upstream code truncates accept-language to available languages.
// https://bit.ly/3u5UeRN
export function languageCacheControl(res: Response): void {
  defaultCacheControl(res)
  res.append('vary', 'accept-language, x-user-language')
}

// Homepage redirects also vary by x-user-version.
// x-user-version comes from req.cookie:user_version.
export function languageAndVersionCacheControl(res: Response): void {
  defaultCacheControl(res)
  res.append('vary', 'accept-language, x-user-language, x-user-version')
}

// Versioned images, CSS, and prebuilt JS use long browser and CDN caches.
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

// Archived pages and assets use long browser and CDN caches.
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
