import { describe, expect, test } from 'vitest'
import type { NextFunction, Response } from 'express'

import handleRedirects from '@/redirects/middleware/handle-redirects'
import type { Context, ExtendedRequest } from '@/types'

type TestResponse = {
  headers: Record<string, string>
  statusCode?: number
  location?: string
}

function run(
  url: string,
  {
    userLanguage = 'en',
    userVersion,
    pages = {},
    redirects = {},
  }: {
    userLanguage?: string
    userVersion?: string
    pages?: Record<string, unknown>
    redirects?: Record<string, string>
  } = {},
) {
  const parsed = new URL(url, 'https://docs.github.com')
  const req = {
    path: parsed.pathname,
    url,
    originalUrl: url,
    query: Object.fromEntries(parsed.searchParams),
    userVersion,
    context: { userLanguage, pages, redirects } as unknown as Context,
  } as unknown as ExtendedRequest

  const result: TestResponse = { headers: {} }
  const res = {
    set(key: string, value: string) {
      result.headers[key.toLowerCase()] = value
      return res
    },
    append(key: string, value: string) {
      const name = key.toLowerCase()
      result.headers[name] = result.headers[name] ? `${result.headers[name]}, ${value}` : value
      return res
    },
    hasHeader(key: string) {
      return key.toLowerCase() in result.headers
    },
    safeRedirect(status: number, location: string) {
      result.statusCode = status
      result.location = location
    },
  } as unknown as Response

  let nextCalled = false
  const next: NextFunction = () => {
    nextCalled = true
  }
  handleRedirects(req, res, next)
  return { ...result, nextCalled }
}

describe('handleRedirects with :// in the query string', () => {
  test('language redirect stays temporary and varies by language', () => {
    const result = run('/actions?ref=https://github.com', {
      userLanguage: 'ja',
      pages: { '/en/actions': {}, '/ja/actions': {} },
    })
    expect(result.statusCode).toBe(302)
    expect(result.location).toBe('/ja/actions?ref=https://github.com')
    expect(result.headers.vary).toMatch(/accept-language/)
    expect(result.headers.vary).toMatch(/x-user-language/)
  })

  test('version cookie still redirects to the preferred version', () => {
    const result = run('/en/actions?utm_source=https://x.example', {
      userVersion: 'enterprise-cloud@latest',
      pages: { '/en/actions': {}, '/en/enterprise-cloud@latest/actions': {} },
    })
    expect(result.statusCode).toBe(302)
    expect(result.location).toBe('/en/enterprise-cloud@latest/actions?utm_source=https://x.example')
    expect(result.headers.vary).toMatch(/x-user-version/)
  })

  test('internal redirect to a missing page falls through', () => {
    const result = run('/old-article?ref=https://github.com', {
      redirects: { '/old-article': '/missing-article' },
    })
    expect(result.nextCalled).toBe(true)
    expect(result.statusCode).toBeUndefined()
  })

  test('external redirect stays permanent', () => {
    const result = run('/external?ref=abc', {
      redirects: { '/external': 'https://example.com/docs' },
    })
    expect(result.statusCode).toBe(301)
    expect(result.location).toBe('https://example.com/docs?ref=abc')
  })
})
