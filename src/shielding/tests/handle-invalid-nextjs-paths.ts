import type { NextFunction, Response } from 'express'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import handleInvalidNextPaths from '@/shielding/middleware/handle-invalid-nextjs-paths'
import type { ExtendedRequest } from '@/types'

vi.mock('@/observability/lib/statsd', () => ({
  default: { increment: vi.fn() },
}))

describe('handleInvalidNextPaths middleware', () => {
  beforeEach(() => {
    vi.stubEnv('NODE_ENV', 'production')
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  test.each([
    '/_next/database',
    '/_next/datafoo',
    '/_next/data',
    '/_next/data/development/junk.css',
  ])('blocks invalid production _next paths that resemble data routes: %s', (path) => {
    const { next, res } = runMiddleware(path)

    expect(next).not.toHaveBeenCalled()
    expect(res.statusCode).toBe(404)
    expect(res.contentType).toBe('text')
    expect(res.body).toBe('Not found')
    expect(res.headers['cache-control']).toMatch('public')
  })

  test('allows real Next.js data routes through the scanner', () => {
    const { next, res } = runMiddleware(
      '/_next/data/development/en/free-pro-team%40latest/pages.json',
    )

    expect(next).toHaveBeenCalledOnce()
    expect(res.statusCode).toBeUndefined()
  })

  test('allows invalid _next paths in development', () => {
    vi.stubEnv('NODE_ENV', 'development')

    const { next, res } = runMiddleware('/_next/database')

    expect(next).toHaveBeenCalledOnce()
    expect(res.statusCode).toBeUndefined()
  })
})

function runMiddleware(path: string) {
  const req = { path, query: {} } as ExtendedRequest
  const res = buildResponse()
  const next = vi.fn() as NextFunction

  handleInvalidNextPaths(req, res as unknown as Response, next)

  return { next, res }
}

function buildResponse() {
  const res = {
    headers: {} as Record<string, string>,
    statusCode: undefined as number | undefined,
    contentType: undefined as string | undefined,
    body: undefined as string | undefined,
    hasHeader: vi.fn(() => false),
    set(name: string, value: string) {
      res.headers[name] = value
      return res
    },
    status(code: number) {
      res.statusCode = code
      return res
    },
    type(value: string) {
      res.contentType = value
      return res
    },
    send(body: string) {
      res.body = body
      return res
    },
  }

  return res
}
