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
export function cacheControlFactory(maxAge = 60 * 60, { public_ = true, immutable = false } = {}) {
  return (res) => {
    const directives = []
    if (maxAge) {
      if (public_) directives.push('public')
      directives.push(`max-age=${maxAge}`)
      if (immutable) directives.push('immutable')
    } else {
      directives.push('private')
      directives.push('no-store')
    }
    res.set('cache-control', directives.join(', '))
  }
}
