import type { NextFunction, Response } from 'express'
import { afterEach, describe, expect, test, vi } from 'vitest'

import { getSearchRequestParamsObject } from '@/search/lib/search-request-params/search-params-objects'
import handleInvalidQuerystrings, {
  MAX_UNFAMILIAR_KEYS_REDIRECT,
} from '@/shielding/middleware/handle-invalid-query-strings'
import type { ExtendedRequest } from '@/types'

vi.mock('@/observability/lib/statsd', () => ({
  default: { increment: vi.fn() },
}))

describe('handleInvalidQuerystrings middleware', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test.each<{ name: string; query: Record<string, string> }>([
    {
      name: 'local search proxy request',
      query: {
        query: 'actions',
        version: 'free-pro-team',
        language: 'en',
        page: '1',
        aggregate: 'toplevel',
        toplevel: 'GitHub Actions',
        size: '10',
        include: 'toplevel',
        client_name: 'docs.github.com-client',
      },
    },
    {
      name: 'size, sort, and highlights',
      query: { query: 'foo', size: '20', sort: 'relevance', highlights: 'title' },
    },
    {
      name: 'debug, include, and toplevel',
      query: { query: 'git', debug: '1', include: 'intro', toplevel: 'Get started' },
    },
  ])('allows /api/search/v1 params: $name', ({ query }) => {
    const { next, res } = runMiddleware('/api/search/v1', query)

    expect(res.redirect).toBeUndefined()
    expect(next).toHaveBeenCalledOnce()
  })

  const generalSearchKeys = [
    ...new Set(getSearchRequestParamsObject('generalSearch').map(({ key }) => key)),
  ]

  test.each(generalSearchKeys)('allows general search param %s on /api/search/v1', (key) => {
    // One short of the redirect threshold, so a missing allowlist entry tips it over.
    const query: Record<string, string> = { [key]: 'x' }
    for (let i = 1; i < MAX_UNFAMILIAR_KEYS_REDIRECT; i++) {
      query[`unfamiliar${i}`] = 'x'
    }

    const { next, res } = runMiddleware('/api/search/v1', query)

    expect(res.redirect).toBeUndefined()
    expect(next).toHaveBeenCalledOnce()
  })

  test('redirects /api/search/v1 requests with too many unrecognized params', () => {
    const { next, res } = runMiddleware('/api/search/v1', {
      query: 'foo',
      a: '1',
      b: '2',
      c: '3',
    })

    expect(next).not.toHaveBeenCalled()
    expect(res.redirect).toEqual({ status: 302, url: '/api/search/v1?query=foo' })
  })
})

function runMiddleware(path: string, query: Record<string, string>) {
  const req = { method: 'GET', path, query } as unknown as ExtendedRequest
  const res = buildResponse()
  const next = vi.fn() as NextFunction

  handleInvalidQuerystrings(req, res as unknown as Response, next)

  return { next, res }
}

function buildResponse() {
  const res = {
    headers: {} as Record<string, string>,
    redirect: undefined as { status: number; url: string } | undefined,
    hasHeader: vi.fn(() => false),
    set(name: string, value: string) {
      res.headers[name] = value
      return res
    },
    safeRedirect(status: number, url: string) {
      res.redirect = { status, url }
    },
  }

  return res
}
