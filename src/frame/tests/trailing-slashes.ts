import { describe, expect, test } from 'vitest'
import type { Response } from 'express'

import trailingSlashes from '@/frame/middleware/trailing-slashes'
import { safeRedirectUrl } from '@/frame/middleware/safe-redirect'
import type { ExtendedRequest } from '@/types'

function run(url: string) {
  const req = { method: 'GET', url } as ExtendedRequest
  const headers: Record<string, string> = {}
  const result: { status?: number; location?: string; nextCalled: boolean } = {
    nextCalled: false,
  }
  const res = {
    set(key: string, value: string) {
      headers[key.toLowerCase()] = value
      return this
    },
    hasHeader(key: string) {
      return key.toLowerCase() in headers
    },
    safeRedirect(status: number, location: string) {
      result.status = status
      result.location = safeRedirectUrl(location)
    },
  } as unknown as Response
  trailingSlashes(req, res, () => {
    result.nextCalled = true
  })
  return { ...result, headers }
}

describe('trailingSlashes middleware', () => {
  test('redirects a path of only slashes to the homepage', () => {
    const result = run('//')
    expect(result.status).toBe(301)
    expect(result.location).toBe('/')
    expect(result.headers['cache-control']).toMatch(/max-age=\d+/)
  })

  test('keeps the query string when redirecting a path of only slashes', () => {
    const result = run('//?foo=1')
    expect(result.status).toBe(301)
    expect(result.location).toBe('/?foo=1')
  })

  test('keeps double slashes inside query values', () => {
    expect(run('//?next=https://github.com').location).toBe('/?next=https://github.com')
    expect(run('/en//search/?query=a//b').location).toBe('/en/search?query=a//b')
  })

  test('removes a trailing slash and keeps the query string', () => {
    const result = run('/foo/?a=1')
    expect(result.status).toBe(301)
    expect(result.location).toBe('/foo?a=1')
  })

  test('removes trailing double slashes', () => {
    const result = run('/en//')
    expect(result.status).toBe(301)
    expect(result.location).toBe('/en')
  })

  test('calls next for the homepage', () => {
    const result = run('/')
    expect(result.nextCalled).toBe(true)
    expect(result.status).toBeUndefined()
  })
})
