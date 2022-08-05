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
  { key = 'cache-control', public_ = true, immutable = false } = {}
) {
  const directives = [
    maxAge && public_ && 'public',
    maxAge && `max-age=${maxAge}`,
    maxAge && immutable && 'immutable',
    !maxAge && 'private',
    !maxAge && 'no-store',
  ]
    .filter(Boolean)
    .join(', ')
  return (res) => {
    res.set(key, directives)
  }
}
