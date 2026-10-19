import { describe, expect, test, vi } from 'vitest'
import type { Response } from 'express'

import dynamicAssets from '@/assets/middleware/dynamic-assets'
import type { ExtendedRequest } from '@/types'

function mockRequest(requestPath: string) {
  return {
    path: requestPath,
    url: requestPath,
    method: 'GET',
    query: {},
  } as unknown as ExtendedRequest
}

function mockResponse() {
  const res = {
    statusCode: 200,
    contentType: '',
    body: undefined as unknown,
    headers: {} as Record<string, string>,
    status(code: number) {
      res.statusCode = code
      return res
    },
    type(value: string) {
      res.contentType = value
      return res
    },
    send(body: unknown) {
      res.body = body
      return res
    },
    set(key: string, value: string) {
      res.headers[key.toLowerCase()] = value
      return res
    },
    hasHeader(key: string) {
      return key.toLowerCase() in res.headers
    },
  }
  return res
}

describe('dynamic assets middleware', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('converts a PNG inside assets/ to WebP', async () => {
    const req = mockRequest('/assets/images/_fixtures/electrocat.webp')
    const res = mockResponse()
    const next = vi.fn()
    await dynamicAssets(req, res as unknown as Response, next)
    expect(next).not.toHaveBeenCalled()
    expect(res.statusCode).toBe(200)
    expect(res.contentType).toBe('image/webp')
  })

  test('does not read PNG files outside assets/', async () => {
    // src/rest/rest-pipeline-flowchart.png exists on disk outside assets/.
    const req = mockRequest('/assets/../src/rest/rest-pipeline-flowchart.webp')
    const res = mockResponse()
    const next = vi.fn()
    await dynamicAssets(req, res as unknown as Response, next)
    expect(next).not.toHaveBeenCalled()
    expect(res.statusCode).toBe(404)
    expect(res.contentType).toBe('text/plain')
    expect(res.body).toBe('Asset not found')
  })

  test('does not read PNG files outside assets/ with a max-width segment', async () => {
    const req = mockRequest('/assets/mw-1000/../src/rest/rest-pipeline-flowchart.webp')
    const res = mockResponse()
    const next = vi.fn()
    await dynamicAssets(req, res as unknown as Response, next)
    expect(res.statusCode).toBe(404)
    expect(res.body).toBe('Asset not found')
  })
})
