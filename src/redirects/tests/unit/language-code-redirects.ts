import { describe, expect, test, vi } from 'vitest'
import type { NextFunction, Response } from 'express'

import languageCodeRedirects from '@/redirects/middleware/language-code-redirects'
import type { ExtendedRequest } from '@/types'

// Tests default to English only, which leaves no redirect patterns to check.
vi.mock('@/languages/lib/languages-server', async () => {
  const { languages } = await import('@/languages/lib/languages')
  return { default: languages }
})

function run(url: string) {
  const req = { url, path: url.split('?')[0] } as ExtendedRequest
  const res = { hasHeader: () => false, set: vi.fn(), safeRedirect: vi.fn() }
  const next = vi.fn()
  languageCodeRedirects(req, res as unknown as Response, next as NextFunction)
  return { res, next }
}

describe('languageCodeRedirects', () => {
  test.each([
    ['/jp', '/ja'],
    ['/cn/get-started', '/zh/get-started'],
    ['/cn/rest/repos', '/zh/rest/repos'],
    ['/zh-CN', '/zh'],
    ['/zh-TW/get-started', '/zh/get-started'],
    ['/zh-Hans', '/zh'],
    ['/zh-Hans/get-started', '/zh/get-started'],
    ['/zh-hant/get-started', '/zh/get-started'],
    ['/zh-Hans-CN/get-started', '/zh/get-started'],
    ['/jp/search?query=actions', '/ja/search?query=actions'],
    ['/cn/rest/repos?apiVersion=2022-11-28', '/zh/rest/repos?apiVersion=2022-11-28'],
    ['/zh-TW/actions?tool=cli&platform=mac', '/zh/actions?tool=cli&platform=mac'],
  ])('redirects %s to %s', (from, to) => {
    const { res, next } = run(from)
    expect(res.safeRedirect).toHaveBeenCalledWith(301, to)
    expect(next).not.toHaveBeenCalled()
  })

  test.each(['/zh', '/zh/get-started', '/en/zh-Hans', '/ja/search?query=jp'])(
    'passes %s through',
    (url) => {
      const { res, next } = run(url)
      expect(res.safeRedirect).not.toHaveBeenCalled()
      expect(next).toHaveBeenCalledOnce()
    },
  )
})
