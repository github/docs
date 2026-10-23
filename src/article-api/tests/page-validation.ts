import { describe, expect, test, vi } from 'vitest'
import type { Response } from 'express'

import { pageValidationMiddleware } from '@/article-api/middleware/validation'
import type { ExtendedRequestWithPageInfo } from '@/article-api/types'
import { latest } from '@/versions/lib/enterprise-server-releases'
import type { Page } from '@/types'

const restPage = { title: 'Activity' } as unknown as Page
const checksPage = { title: 'Checks' } as unknown as Page
const referencePage = { title: 'Reference' } as unknown as Page

const pages: Record<string, Page> = {
  [`/en/enterprise-server@${latest}/rest/activity`]: restPage,
  '/en/graphql/reference/checks': checksPage,
  '/en/graphql/reference': referencePage,
}

// Mirrors developer.json entries after precompile resolves enterprise-server@latest.
const redirects: Record<string, string> = {
  '/enterprise/v3/activity/events': `/enterprise-server@${latest}/rest/activity#events`,
  '/v4/enum/checkruntype': '/graphql/reference/enums#checkruntype',
  '/v4/mutation': '/graphql/reference/mutations',
}

function run(pathname: string) {
  const req = {
    pageinfo: { pathname, page: {} as Page },
    context: { pages, redirects, currentLanguage: 'en', userLanguage: 'en' },
  } as unknown as ExtendedRequestWithPageInfo
  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
  } as unknown as Response
  const next = vi.fn()
  pageValidationMiddleware(req, res, next)
  return { req, res, next }
}

describe('pageValidationMiddleware redirects', () => {
  test('drops the fragment from a redirect destination before the page lookup', () => {
    const { req, res, next } = run('/en/enterprise/v3/activity/events')
    expect(res.status).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
    expect(req.pageinfo.page).toBe(restPage)
    expect(req.pageinfo.pathname).toBe(`/en/enterprise-server@${latest}/rest/activity`)
    expect(req.pageinfo.redirectedFrom).toBe('/en/enterprise/v3/activity/events')
  })

  test('maps legacy GraphQL kind redirects with a type fragment to category pages', () => {
    const { req, res, next } = run('/en/v4/enum/checkruntype')
    expect(res.status).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
    expect(req.pageinfo.page).toBe(checksPage)
    expect(req.pageinfo.pathname).toBe('/en/graphql/reference/checks')
    expect(req.pageinfo.redirectedFrom).toBe('/en/v4/enum/checkruntype')
  })

  test('maps legacy GraphQL kind redirects without a fragment to the reference root', () => {
    const { req, res, next } = run('/en/v4/mutation')
    expect(res.status).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
    expect(req.pageinfo.page).toBe(referencePage)
    expect(req.pageinfo.pathname).toBe('/en/graphql/reference')
    expect(req.pageinfo.redirectedFrom).toBe('/en/v4/mutation')
  })
})
