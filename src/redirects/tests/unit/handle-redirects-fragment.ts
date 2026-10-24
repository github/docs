import { describe, expect, test } from 'vitest'
import type { NextFunction, Response } from 'express'

import handleRedirects from '@/redirects/middleware/handle-redirects'
import type { Context, ExtendedRequest } from '@/types'

const redirects = {
  '/v4/enum/searchtype': '/graphql/reference/enums#searchtype',
  '/v4/scalar/boolean': '/graphql/reference/scalars#boolean',
}

const pages = {
  '/en/graphql/reference/search': {},
  '/en/graphql/reference/other': {},
  '/en/enterprise-cloud@latest/graphql/reference/search': {},
  '/en/enterprise-cloud@latest/graphql/reference/other': {},
}

function run(url: string, userVersion?: string) {
  const parsed = new URL(url, 'https://docs.github.com')
  const req = {
    path: parsed.pathname,
    url,
    originalUrl: url,
    query: Object.fromEntries(parsed.searchParams),
    userVersion,
    context: { userLanguage: 'en', pages, redirects } as unknown as Context,
  } as unknown as ExtendedRequest

  const result: { statusCode?: number; location?: string } = {}
  const res = {
    set() {
      return res
    },
    append() {
      return res
    },
    hasHeader() {
      return false
    },
    safeRedirect(status: number, location: string) {
      result.statusCode = status
      result.location = location
    },
  } as unknown as Response

  const next: NextFunction = () => {}
  handleRedirects(req, res, next)
  return result
}

describe('handleRedirects with fragment targets', () => {
  test('puts the query string before the fragment', () => {
    const result = run('/en/v4/scalar/boolean?utm_source=foo')
    expect(result.statusCode).toBe(301)
    expect(result.location).toBe('/en/graphql/reference/other?utm_source=foo#scalar-boolean')
  })

  test('keeps the fragment on version cookie redirects', () => {
    const result = run('/en/v4/enum/searchtype', 'enterprise-cloud@latest')
    expect(result.statusCode).toBe(302)
    expect(result.location).toBe(
      '/en/enterprise-cloud@latest/graphql/reference/search#enum-searchtype',
    )
  })

  test('keeps the fragment on language-less version cookie redirects', () => {
    const result = run('/v4/enum/searchtype', 'enterprise-cloud@latest')
    expect(result.statusCode).toBe(302)
    expect(result.location).toBe(
      '/en/enterprise-cloud@latest/graphql/reference/search#enum-searchtype',
    )
  })

  test('puts the query string before the fragment on version cookie redirects', () => {
    const result = run('/en/v4/scalar/boolean?utm_source=foo', 'enterprise-cloud@latest')
    expect(result.statusCode).toBe(302)
    expect(result.location).toBe(
      '/en/enterprise-cloud@latest/graphql/reference/other?utm_source=foo#scalar-boolean',
    )
  })
})
