export default function fastlyCacheTest(req, res, next) {
  // If CACHE_TEST_ERROR is set, simulate the site being down (regardless of URL)
  if (process.env.CACHE_TEST_ERROR) {
    res.status(parseInt(process.env.CACHE_TEST_ERROR)).end()
    return
  }

  const staleIfErrorParam = process.env.CACHE_TEST_STALE_IF_ERROR ?? '300'
  const staleWhileRevalidateParam = process.env.CACHE_TEST_STALE_WHILE_REVALIDATE ?? '60'

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
