import { describe, expect, test } from 'vitest'

import { SURROGATE_ENUMS } from '@/frame/middleware/set-fastly-surrogate-key.js'
import { get } from '@/tests/helpers/e2etest.js'
import { DEFAULT_FASTLY_IPS } from '@/shielding/lib/fastly-ips'

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

  test('just _next', async () => {
    const res = await get('/_next')
    expect(res.statusCode).toBe(404)
  })

  test('with a starting /en/ but with a junk end', async () => {
    const res = await get('/en/package-lock.json')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch('text/plain')
  })
})

describe('index.md and .md suffixes', () => {
  test('any URL that ends with /index.md redirects', async () => {
    // With language prefix
    {
      const res = await get('/en/get-started/index.md')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en/get-started')
    }
    // Without language prefix
    {
      const res = await get('/get-started/index.md')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/get-started')
    }
    // With query string
    {
      const res = await get('/get-started/index.md?foo=bar')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/get-started?foo=bar')
    }
  })

  // TODO-ARTICLEAPI: unskip tests or replace when ready to ship article API
  test.skip('any URL that ends with /.md redirects', async () => {
    // With language prefix
    {
      const res = await get('/en/get-started/hello.md')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en/get-started/hello')
    }
    // Without language prefix
    {
      const res = await get('/get-started/hello.md')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/get-started/hello')
    }
    // With query string
    {
      const res = await get('/get-started/hello.md?foo=bar')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/get-started/hello?foo=bar')
    }
  })
})

describe('rate limiting', () => {
  // We can't actually trigger a full rate limit because
  // then all other tests will all fail. And we can't rely on this
  // test always being run last.

  test('only happens if you have junk query strings', async () => {
    const res = await get('/robots.txt?foo=bar', {
      headers: {
        // Rate limiting only happens in production, so we need to
        // make the environment look like production.
        'fastly-client-ip': 'abc',
      },
    })
    expect(res.statusCode).toBe(200)
    const limit = parseInt(res.headers['ratelimit-limit'])
    const remaining = parseInt(res.headers['ratelimit-remaining'])
    expect(limit).toBeGreaterThan(0)
    expect(remaining).toBeLessThan(limit)

    // A second request
    {
      const res = await get('/robots.txt?foo=buzz', {
        headers: {
          'fastly-client-ip': 'abc',
        },
      })
      expect(res.statusCode).toBe(200)
      const newLimit = parseInt(res.headers['ratelimit-limit'])
      const newRemaining = parseInt(res.headers['ratelimit-remaining'])
      expect(newLimit).toBe(limit)
      // Can't rely on `newRemaining == remaining - 1` because of
      // concurrency of test-running.
      expect(newRemaining).toBeLessThan(remaining)
    }
  })

  test('nothing happens if no unrecognized query string', async () => {
    const res = await get('/robots.txt')
    expect(res.statusCode).toBe(200)
    expect(res.headers['ratelimit-limit']).toBeUndefined()
    expect(res.headers['ratelimit-remaining']).toBeUndefined()
  })

  test('/api/cookies only allows 1 request per minute', async () => {
    // Cookies only allows 1 request per minute
    const res1 = await get('/api/cookies', {
      headers: {
        'fastly-client-ip': 'abc123',
      },
    })
    expect(res1.statusCode).toBe(200)
    expect(res1.headers['ratelimit-limit']).toBe('1')
    expect(res1.headers['ratelimit-remaining']).toBe('0')

    // A second request should be rate limited
    const res2 = await get('/api/cookies', {
      headers: {
        'fastly-client-ip': 'abc123',
      },
    })
    expect(res2.statusCode).toBe(429)
    expect(res2.headers['ratelimit-limit']).toBe('1')
    expect(res2.headers['ratelimit-remaining']).toBe('0')
  })

  test('Fastly IPs are not rate limited', async () => {
    // Fastly IPs are in the form `X.X.X.X/Y`
    // Rate limited IPs are in the form `X.X.X.X`
    // Where the last X could be any 2-3 digit number
    const mockFastlyIP =
      DEFAULT_FASTLY_IPS[0].split('.').slice(0, 3).join('.') + `.${Math.floor(Math.random() * 100)}`
    // Cookies only allows 1 request per minute
    const res1 = await get('/api/cookies', {
      headers: {
        'fastly-client-ip': mockFastlyIP,
      },
    })
    expect(res1.statusCode).toBe(200)

    // A second request shouldn't be rate limited because it's from a Fastly IP
    const res2 = await get('/api/cookies', {
      headers: {
        'fastly-client-ip': mockFastlyIP,
      },
    })
    expect(res2.statusCode).toBe(200)
  })
})

describe('404 pages and their content-type', () => {
  const exampleNonLanguage404plain = ['/_next/image/foo']
  test.each(exampleNonLanguage404plain)(
    'non-language 404 response is plain text and cacheable: %s',
    async (pathname) => {
      const res = await get(pathname)
      expect(res.statusCode).toBe(404)
      expect(res.headers['content-type']).toMatch('text/plain')
      expect(res.headers['cache-control']).toMatch('public')
    },
  )

  const exampleNonLanguage404s = [
    '/wp-content/themes/seotheme/db.php?u',
    '/enterprise/3.1/_next/static/chunks/616-910d0397bafa52e0.js',
    '/~root',
  ]
  test.each(exampleNonLanguage404s)(
    'non-language 404 response is html text and cacheable: %s',
    async (pathname) => {
      const res = await get(pathname)
      expect(res.statusCode).toBe(404)
      expect(res.headers['content-type']).toMatch('text/html; charset=utf-8')
      expect(res.headers['cache-control']).toMatch('public')
    },
  )
  test('valid language prefix 404 response is HTML', async () => {
    const res = await get('/en/something-that-doesnt-existent')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch('text/html')
    expect(res.headers['cache-control']).toMatch('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d\d+/)
    const surrogateKeySplit = res.headers['surrogate-key'].split(/\s/g)
    // The default is that it'll be purged at the next deploy.
    expect(surrogateKeySplit.includes(SURROGATE_ENUMS.DEFAULT)).toBeTruthy()
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
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
