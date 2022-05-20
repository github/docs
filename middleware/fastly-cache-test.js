//
// This middleware function is intended to be used for testing caching behavior with Fastly.
// It will intercept ALL URLs that are routed to it and respond with a simple HTML body
//   containing a timestamp.
// The logic will detect certain values in the path and set the HTTP status and/or the
//   Surrogate-Control header value.
//
// NOTE: This middleware is intended to be removed once testing is complete!
//
export default function fastlyCacheTest(req, res, next) {
  // If X-CacheTest-Error is set, simulate the site being down (regardless of URL)
  if (req.get('X-CacheTest-Error')) {
    res.status(parseInt(req.get('X-CacheTest-Error'))).end()
    return
  }

  const staleIfErrorParam = req.get('X-CacheTest-StaleIfError') ?? '300'
  const staleWhileRevalidateParam = req.get('X-CacheTest-StaleWhileRevalidate') ?? '60'

  const path = req.params[0]

  let status = 200
  const surrogateControlValues = []

  if (path.includes('must-revalidate')) surrogateControlValues.push('must-revalidate')
  if (path.includes('no-cache')) surrogateControlValues.push('no-cache')
  if (path.includes('no-store')) surrogateControlValues.push('no-store')
  if (path.includes('private')) surrogateControlValues.push('private')
  if (path.includes('proxy-revalidate')) surrogateControlValues.push('proxy-revalidate')
  if (path.includes('public')) surrogateControlValues.push('public')

  if (path.includes('stale-if-error'))
    surrogateControlValues.push(`stale-if-error=${staleIfErrorParam}`)
  if (path.includes('stale-while-revalidate'))
    surrogateControlValues.push(`stale-while-revalidate=${staleWhileRevalidateParam}`)

  if (path.includes('no-cookies')) {
    res.removeHeader('Set-Cookie')
  }

  if (path.includes('error500')) {
    status = 500
  } else if (path.includes('error502')) {
    status = 502
  } else if (path.includes('error503')) {
    status = 503
  } else if (path.includes('error504')) {
    status = 504
  }

  if (surrogateControlValues.length > 0) {
    res.set({
      'surrogate-control': surrogateControlValues.join(', '),
    })
  }

  res.status(status)
  res.send(`<html>
  <body>
    <p>Timestamp: ${new Date()}</p>
  </body>
</html>`)
  res.end()
}
