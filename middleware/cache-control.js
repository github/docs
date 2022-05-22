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
export function cacheControlFactory(maxAge = 60 * 60, public_ = true) {
  return (res) => res.set('cache-control', `${public_ ? 'public, ' : ''}max-age=${maxAge}`)
}
