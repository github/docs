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
export function cacheControlFactory(maxAge = 60 * 60, public_ = true) {
  return (res) => {
    if (maxAge) {
      res.set('cache-control', `${public_ ? 'public, ' : ''}max-age=${maxAge}`)
    } else {
      res.set('cache-control', 'private, no-store')
    }
  }
}
