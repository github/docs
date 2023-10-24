import { get } from '../../../tests/helpers/e2etest.js'

describe('honeypotting', () => {
  test('any GET with survey-vote and survey-token query strings is 400', async () => {
    const res = await get('/en?survey-vote=1&survey-token=2')
    expect(res.statusCode).toBe(400)
    expect(res.body).toMatch(/Honeypotted/)
    expect(res.headers['cache-control']).toMatch('private')
  })
})

describe('junk paths', () => {
  test('junk full pathname', async () => {
    const res = await get('/xmlrpc.php')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch('text/plain')
    expect(res.headers['cache-control']).toMatch('public')
  })

  test('junk base name', async () => {
    const res = await get('/en/get-started/.env.local')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch('text/plain')
    expect(res.headers['cache-control']).toMatch('public')
  })

  test.each(['/_nextanything', '/_next/data', '/_next/data/', '/_next/cgi/bin.foo'])(
    'invalid requests for _next prefix %s',
    async (path) => {
      const res = await get(path)
      expect(res.statusCode).toBe(404)
      expect(res.headers['content-type']).toMatch('text/plain')
      expect(res.headers['cache-control']).toMatch('public')
    },
  )

  test('any URL that ends with /index.md redirects', async () => {
    const res = await get('/en/get-started/index.md')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en/get-started')
  })
})

describe('rate limiting', () => {
  // We can't actually trigger a full rate limit because
  // then all other tests will all fail. And we can't rely on this
  // test always being run last.

  test('only happens if you have junk query strings', async () => {
    const res = await get('/robots.txt?foo=bar')
    expect(res.statusCode).toBe(200)
    const limit = parseInt(res.headers['ratelimit-limit'])
    const remaining = parseInt(res.headers['ratelimit-remaining'])
    expect(limit).toBeGreaterThan(0)
    expect(remaining).toBeLessThan(limit)

    // A second request
    {
      const res = await get('/robots.txt?foo=buzz')
      expect(res.statusCode).toBe(200)
      const newLimit = parseInt(res.headers['ratelimit-limit'])
      const newRemaining = parseInt(res.headers['ratelimit-remaining'])
      expect(newLimit).toBe(limit)
      // Can't rely on `newRemaining == remaining - 1` because of
      // concurrency of jest-running.
      expect(newRemaining).toBeLessThan(remaining)
    }
  })

  test('nothing happens if no unrecognized query string', async () => {
    const res = await get('/robots.txt')
    expect(res.statusCode).toBe(200)
    expect(res.headers['ratelimit-limit']).toBeUndefined()
    expect(res.headers['ratelimit-remaining']).toBeUndefined()
  })
})

describe('404 pages and their content-type', () => {
  const exampleNonLanguage404s = [
    '/_next/image/foo',
    '/wp-content/themes/seotheme/db.php?u',
    '/enterprise/3.1/_next/static/chunks/616-910d0397bafa52e0.js',
    '/~root',
  ]
  test.each(exampleNonLanguage404s)(
    'non-language 404 response is plain text and cacheable: %s',
    async (pathname) => {
      const res = await get(pathname)
      expect(res.statusCode).toBe(404)
      expect(res.headers['content-type']).toMatch('text/plain')
      expect(res.headers['cache-control']).toMatch('public')
    },
  )
  test('valid language prefix 404 response is HTML', async () => {
    const res = await get('/en/something-that-doesnt-existent')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch('text/html')
  })
})

describe('/_next/data/... paths', () => {
  test('invalid build ID', async () => {
    const res = await get('/_next/data/madeupbutnotvalid/en/free-pro-team%40latest/pages.json')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch('text/plain')
    expect(res.headers['cache-control']).toMatch('public')
  })
})
