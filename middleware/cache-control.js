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
// Or, if you want to make it definitely not cache:
//
//    const noCacheControl = getCacheControl(0) // you can use `false` too
//    ...
//    noControlYear(res)
//    res.send(body)
//
// Max age is in seconds
export function cacheControlFactory(
  maxAge = 60 * 60,
  { key = 'cache-control', public_ = true, immutable = false, maxAgeZero = false } = {}
) {
  const directives = [
    maxAge && public_ && 'public',
    maxAge && `max-age=${maxAge}`,
    maxAge && immutable && 'immutable',
    !maxAge && 'private',
    !maxAge && 'no-store',
    maxAgeZero && 'max-age=0',
  ]
    .filter(Boolean)
    .join(', ')
  return (res) => {
    if (process.env.NODE_ENV !== 'production' && res.hasHeader('set-cookie')) {
      console.warn(
        "You can't set a >0 cache-control header AND set-cookie or else the CDN will never respect the cache-control."
      )
    }
    res.set(key, directives)
  }
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
