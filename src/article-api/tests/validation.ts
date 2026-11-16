import { describe, expect, test, vi } from 'vitest'
import type { Response } from 'express'

import { pageValidationMiddleware } from '@/article-api/middleware/validation'
import type { ExtendedRequestWithPageInfo } from '@/article-api/types'
import type { Context, Page } from '@/types'

const helloWorld = { title: 'Hello World' } as unknown as Page
const helloWorldGhec = { title: 'Hello World GHEC' } as unknown as Page

const pages: Record<string, Page> = {
  '/en/get-started/start-your-journey/hello-world': helloWorld,
  '/en/enterprise-cloud@latest/get-started/start-your-journey/hello-world': helloWorldGhec,
}

function createRequest(pathname: string): ExtendedRequestWithPageInfo {
  return {
    context: { pages, redirects: {}, currentLanguage: 'en' } as unknown as Context,
    pageinfo: { pathname, page: {} as Page },
  } as unknown as ExtendedRequestWithPageInfo
}

function createResponse() {
  const res = {
    status: vi.fn(),
    json: vi.fn(),
  }
  res.status.mockReturnValue(res)
  res.json.mockReturnValue(res)
  return res
}

describe('pageValidationMiddleware', () => {
  test('adds the current language to a language-less canonical pathname', () => {
    const req = createRequest('/get-started/start-your-journey/hello-world')
    const res = createResponse()
    const next = vi.fn()
    pageValidationMiddleware(req, res as unknown as Response, next)
    expect(res.status).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledOnce()
    expect(req.pageinfo.page).toBe(helloWorld)
    expect(req.pageinfo.pathname).toBe('/en/get-started/start-your-journey/hello-world')
    expect(req.pageinfo.redirectedFrom).toBe('/get-started/start-your-journey/hello-world')
  })

  test('adds the current language to a language-less versioned pathname', () => {
    const req = createRequest(
      '/enterprise-cloud@latest/get-started/start-your-journey/hello-world/',
    )
    const res = createResponse()
    const next = vi.fn()
    pageValidationMiddleware(req, res as unknown as Response, next)
    expect(res.status).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledOnce()
    expect(req.pageinfo.page).toBe(helloWorldGhec)
    expect(req.pageinfo.pathname).toBe(
      '/en/enterprise-cloud@latest/get-started/start-your-journey/hello-world',
    )
    expect(req.pageinfo.redirectedFrom).toBe(
      '/enterprise-cloud@latest/get-started/start-your-journey/hello-world',
    )
  })

  test('returns 404 for a language-less pathname with no page', () => {
    const req = createRequest('/never/heard/of')
    const res = createResponse()
    const next = vi.fn()
    pageValidationMiddleware(req, res as unknown as Response, next)
    expect(next).not.toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.json).toHaveBeenCalledWith({ error: "No page found for '/never/heard/of'" })
  })
})
