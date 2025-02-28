// Return a function you can pass a Response object to and it will
// set the `Cache-Control` header.
//
// For example:
//
//    const cacheControlYear = getCacheControl(60 * 60 * 24 * 365)
//    ...
//    cacheControlYear(res)
//    res.send(body)
//
// Max age is in seconds
// Max age should not be greater than 31536000 https://www.ietf.org/rfc/rfc2616.txt
function cacheControlFactory(
  maxAge = 60 * 60,
  { key = 'cache-control', public_ = true, immutable = false, maxAgeZero = false } = {},
) {
  const directives = [
    maxAge && public_ && 'public',
    maxAge && `max-age=${maxAge}`,
    maxAge && immutable && 'immutable',
    !maxAge && 'private',
    !maxAge && 'no-store',
    maxAge >= 60 * 60 && `stale-while-revalidate=${60 * 60}`,
    maxAge >= 60 * 60 && `stale-if-error=${24 * 60 * 60}`,
    (maxAgeZero || maxAge === 0) && 'max-age=0',
  ]
    .filter(Boolean)
    .join(', ')
  return (res) => {
    if (process.env.NODE_ENV !== 'production' && res.hasHeader('set-cookie') && maxAge) {
      console.warn(
        "You can't set a >0 cache-control header AND set-cookie or else the CDN will never respect the cache-control.",
      )
    }
    res.set(key, directives)
  }
}

// These are roughly in order from shortest to longest

// If you do not want caching
export const noCacheControl = cacheControlFactory(0)

// Short cache for 4xx errors
export const errorCacheControl = cacheControlFactory(60) // 1 minute

// This means we tell the browser to cache the XHR request for 1h
const searchBrowserCacheControl = cacheControlFactory(60 * 60)
// This tells the CDN to cache the response for 24 hours
const searchCdnCacheControl = cacheControlFactory(60 * 60 * 24, {
  key: 'surrogate-control',
})
export function searchCacheControl(res) {
  searchBrowserCacheControl(res)
  searchCdnCacheControl(res)
}

// 24 hours for CDN, we soft-purge this with each deploy
const defaultCDNCacheControl = cacheControlFactory(60 * 60 * 24, {
  key: 'surrogate-control',
})
// Shorter because between deployments and their (sort) purges,
// we don't want the browser to overly cache because with them we
// can't control purging.
const defaultBrowserCacheControl = cacheControlFactory(60)
// A general default configuration that is useful to almost all responses
// that can be cached.
export function defaultCacheControl(res) {
  defaultCDNCacheControl(res)
  defaultBrowserCacheControl(res)
}

// Vary on language when needed
// x-user-language is a custom request header derived from req.cookie:user_language
// accept-language is truncated to one of our available languages
// https://bit.ly/3u5UeRN
export function languageCacheControl(res) {
  defaultCacheControl(res)
  res.set('vary', 'accept-language, x-user-language')
}

// Long cache control for versioned assets: images, CSS, JS...
export const assetCacheControl = cacheControlFactory(60 * 60 * 24 * 7, { immutable: true })

// Long caching for archived pages and assets
export const archivedCacheControl = cacheControlFactory(60 * 60 * 24 * 365)
