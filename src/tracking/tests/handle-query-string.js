import { describe, expect, test } from 'vitest'

import { get } from '#src/tests/helpers/e2etest.js'
import {
  DOMAIN_QUERY_PARAM,
  DOMAIN_COOKIE_NAME,
  MAX_DOMAINS_SAVED,
} from '../middleware/handle-query-strings.js'

describe('setting a cookie', () => {
  test('on home page', async () => {
    const res = await get(`/en?${DOMAIN_QUERY_PARAM}=acme.example.com`)
    expect(res.statusCode).toBe(302)
    const setCookie = res.headers['set-cookie'][0]
    expect(setCookie).toMatch(/github_domains=acme.example.com/)
    expect(res.headers.location).toBe('/en')
    expect(res.headers['cache-control']).toMatch(/private/)
    expect(res.headers['cache-control']).toMatch(/max-age=0/)
  })

  test('with other query string things', async () => {
    const res = await get(`/en?${DOMAIN_QUERY_PARAM}=acme.example.com&foo=bar`)
    expect(res.statusCode).toBe(302)
    const setCookie = res.headers['set-cookie'][0]
    expect(setCookie).toMatch(/github_domains=acme.example.com/)
    expect(res.headers.location).toBe('/en?foo=bar')
  })

  test('always lowercase', async () => {
    const res = await get(`/en?${DOMAIN_QUERY_PARAM}=Acme.example.COM`)
    expect(res.statusCode).toBe(302)
    const setCookie = res.headers['set-cookie'][0]
    expect(setCookie).toMatch(/github_domains=acme.example.com/)
  })

  test('on root page', async () => {
    const res = await get(`/?${DOMAIN_QUERY_PARAM}=acme.example.com`)
    expect(res.statusCode).toBe(302)
    const setCookie = res.headers['set-cookie'][0]
    expect(setCookie).toMatch(/github_domains=acme.example.com/)
    expect(res.headers.location).toBe('/')
  })

  test('empty value does nothing if nothing previous', async () => {
    const res = await get(`/?${DOMAIN_QUERY_PARAM}=`)
    expect(res.statusCode).toBe(302)
    expect(res.headers['set-cookie']).toBeUndefined()
  })

  test('empty value, when trimmed, does nothing if nothing previous', async () => {
    const res = await get(`/?${DOMAIN_QUERY_PARAM}=%20`)
    expect(res.statusCode).toBe(302)
    expect(res.headers['set-cookie']).toBeUndefined()
  })

  test('empty value resets previous cookie', async () => {
    const res = await get(`/?${DOMAIN_QUERY_PARAM}=`, {
      headers: {
        cookie: `${DOMAIN_COOKIE_NAME}=acme.example.com`,
      },
    })
    expect(res.statusCode).toBe(302)
    const setCookie = res.headers['set-cookie'][0]
    expect(setCookie).toMatch(/github_domains=;/)
  })

  test('append with previous', async () => {
    const res = await get(`/?${DOMAIN_QUERY_PARAM}=next.example.com`, {
      headers: {
        cookie: `${DOMAIN_COOKIE_NAME}=previous.example.com`,
      },
    })
    expect(res.statusCode).toBe(302)
    const setCookie = res.headers['set-cookie'][0]
    // %2C is a comma
    expect(setCookie).toMatch(/github_domains=next.example.com%2Cprevious.example.com;/)
  })

  test('append with too many', async () => {
    let cookie = ''
    for (const letter of Array.from('abcdef')) {
      const next = `${letter}.example.com`
      const res = await get(`/?${DOMAIN_QUERY_PARAM}=${next}`, {
        headers: { cookie },
      })
      const setCookie = res.headers['set-cookie'][0]
      cookie = setCookie.split(';').filter((x) => x.startsWith(DOMAIN_COOKIE_NAME))[0]
      if (letter === 'a') {
        // first
        expect(cookie).toBe(`${DOMAIN_COOKIE_NAME}=a.example.com`)
      } else if (letter === 'f') {
        // last
        expect(cookie.split('%2C').length).toBe(MAX_DOMAINS_SAVED)
        expect(cookie.startsWith(`${DOMAIN_COOKIE_NAME}=f.example.com`)).toBe(true)
      }
    }
  })

  test('append with same as before', async () => {
    const res = await get(`/?${DOMAIN_QUERY_PARAM}=Acme.example.com`, {
      headers: {
        cookie: `${DOMAIN_COOKIE_NAME}=acme.example.com`,
      },
    })
    expect(res.statusCode).toBe(302)
    const setCookie = res.headers['set-cookie'][0]
    expect(setCookie).toMatch(/github_domains=acme.example.com;/)
  })

  test('trying to set multiple', async () => {
    const res = await get(
      `/?${DOMAIN_QUERY_PARAM}=a.example.com&${DOMAIN_QUERY_PARAM}=b.example.com`,
    )
    expect(res.statusCode).toBe(400)
    expect(res.body).toMatch(/can only be one/)
  })
})
