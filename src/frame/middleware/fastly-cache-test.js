//
// This middleware function is intended to be used for testing caching behavior with Fastly.
// It will intercept ALL URLs that are routed to it and respond with a simple HTML body
//   containing a timestamp.
// The logic will detect certain values in the path and set the HTTP status and/or the
//   Surrogate-Control header value.
//
// NOTE: This middleware is intended to be removed once testing is complete!
//
import express from 'express'
import crypto from 'crypto'

const router = express.Router()

router.get('/*', function (req, res) {
  // If X-CacheTest-Error is set, simulate the site being down (regardless of URL)
  if (req.get('X-CacheTest-Error')) {
    res.status(parseInt(req.get('X-CacheTest-Error'))).end()
    return
  }

  const cacheControlModeParam = req.get('X-CacheTest-CCMode') ?? 'none'
  const staleIfErrorParam = req.get('X-CacheTest-StaleIfError') ?? '300'
  const staleWhileRevalidateParam = req.get('X-CacheTest-StaleWhileRevalidate') ?? '60'
  const maxAgeParam = req.get('X-CacheTest-MaxAge') ?? '300'

  const path = req.params[0]

  const content = `<html>
  <body>
    <p>Timestamp: ${new Date()}</p>
  </body>
</html>`

  let status = 200
  const surrogateControlValues = []

  if (path.includes('max-age')) surrogateControlValues.push(`max-age=${maxAgeParam}`)

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

  if (path.includes('etag')) {
    res.set({
      ETag: `"${crypto.createHash('md5').update(content).digest('hex')}"`,
    })
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
    switch (cacheControlModeParam) {
      case 'none':
        res.set({
          'surrogate-control': surrogateControlValues.join(', '),
        })
        break

      case 'both':
        res.set({
          'surrogate-control': surrogateControlValues.join(', '),
          'cache-control': surrogateControlValues.join(', ').replace('max-age', 's-maxage'),
        })
        break

      case 'only':
        res.set({
          'cache-control': surrogateControlValues.join(', ').replace('max-age', 's-maxage'),
        })
        break
    }
  }

  res.status(status)
  res.send(content)
  res.end()
})

export default router
