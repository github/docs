import type { NextFunction, Response } from 'express'
import { describe, expect, test, vi } from 'vitest'

import handleInvalidPaths from '@/shielding/middleware/handle-invalid-paths'
import type { ExtendedRequest } from '@/types'

describe('handleInvalidPaths /index.md redirects', () => {
  test.each([
    ['/index.md', '/index.md', '/'],
    ['/index.md', '/index.md?foo=bar', '/?foo=bar'],
    ['/en/index.md', '/en/index.md', '/en'],
    ['/get-started/index.md', '/get-started/index.md?foo=bar', '/get-started?foo=bar'],
  ])('%s with URL %s redirects to %s', (path, originalUrl, expected) => {
    const req = { path, originalUrl } as ExtendedRequest
    const res = {
      headers: {} as Record<string, string>,
      hasHeader: vi.fn(() => false),
      set(name: string, value: string) {
        res.headers[name] = value
        return res
      },
      safeRedirect: vi.fn(),
    }
    const next = vi.fn() as NextFunction

    handleInvalidPaths(req, res as unknown as Response, next)

    expect(next).not.toHaveBeenCalled()
    expect(res.safeRedirect).toHaveBeenCalledWith(expected)
    expect(res.headers['cache-control']).toMatch('public')
  })
})
