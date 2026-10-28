import { describe, expect, test } from 'vitest'
import type { NextFunction, Response } from 'express'

import handleRedirects from '@/redirects/middleware/handle-redirects'
import { getLanguageCodeFromPath } from '@/languages/middleware/detect-language'
import type { Context, ExtendedRequest } from '@/types'

function run(url: string, userLanguage?: string) {
  const parsed = new URL(url, 'https://docs.github.com')
  const language = getLanguageCodeFromPath(parsed.pathname)
  const req = {
    path: parsed.pathname,
    url,
    originalUrl: url,
    query: Object.fromEntries(parsed.searchParams),
    language,
    context: {
      currentLanguage: language,
      userLanguage,
      currentVersion: 'free-pro-team@latest',
      pages: {},
      redirects: {},
    } as unknown as Context,
  } as unknown as ExtendedRequest

  const headers: Record<string, string> = {}
  const result: { statusCode?: number; location?: string } = {}
  const res = {
    set(key: string, value: string) {
      headers[key.toLowerCase()] = value
      return res
    },
    append(key: string, value: string) {
      const name = key.toLowerCase()
      headers[name] = headers[name] ? `${headers[name]}, ${value}` : value
      return res
    },
    hasHeader(key: string) {
      return key.toLowerCase() in headers
    },
    safeRedirect(status: number, location: string) {
      result.statusCode = status
      result.location = location
    },
  } as unknown as Response

  const next: NextFunction = () => {}
  handleRedirects(req, res, next)
  return { ...result, headers }
}

describe('handleRedirects search query redirects', () => {
  test('keeps the path language for q= on the search page', () => {
    const result = run('/en/search?q=pulls', 'ja')
    expect(result.statusCode).toBe(301)
    expect(result.location).toBe('/en/search?query=pulls')
    expect(result.headers['cache-control']).toMatch(/public/)
    expect(result.headers.vary || '').not.toMatch(/accept-language/)
  })

  test('keeps the path language for query= on a non-search page', () => {
    const result = run('/en/actions?query=foo', 'ja')
    expect(result.statusCode).toBe(301)
    expect(result.location).toBe('/en/search?query=foo')
  })

  test('uses the preferred language with a temporary redirect when the path has no language', () => {
    const result = run('/search?q=pulls', 'ja')
    expect(result.statusCode).toBe(302)
    expect(result.location).toBe('/ja/search?query=pulls')
    expect(result.headers['cache-control']).toMatch(/public/)
    expect(result.headers.vary).toMatch(/accept-language/)
    expect(result.headers.vary).toMatch(/x-user-language/)
  })

  test('defaults to English when the path has no language and no preference is set', () => {
    const result = run('/actions?query=foo')
    expect(result.statusCode).toBe(302)
    expect(result.location).toBe('/en/search?query=foo')
  })
})
