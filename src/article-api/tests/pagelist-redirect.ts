import { IncomingMessage, ServerResponse } from 'http'
import { Socket } from 'net'

import express from 'express'
import type { NextFunction, Response } from 'express'
import { describe, expect, test } from 'vitest'

import type { ExtendedRequest } from '@/types'
import pageList from '@/article-api/middleware/pagelist'
import safeRedirect from '@/frame/middleware/safe-redirect'
import urlDecode from '@/frame/middleware/url-decode'

// Mirrors the production order where urlDecode rewrites req.url after Express sets req.originalUrl.
function createApp() {
  const app = express()
  app.use(safeRedirect)
  app.use(urlDecode)
  app.use((req: ExtendedRequest, res: Response, next: NextFunction) => {
    req.context = {}
    next()
  })
  const api = express.Router()
  api.use('/pagelist', pageList)
  app.use('/api', api)
  return app
}

function dispatch(url: string): Promise<{ statusCode: number; location: string | undefined }> {
  const app = createApp()
  return new Promise((resolve) => {
    const req = new IncomingMessage(new Socket())
    req.method = 'GET'
    req.url = url
    const res = new ServerResponse(req)
    res.end = function () {
      resolve({
        statusCode: res.statusCode,
        location: res.getHeader('location') as string | undefined,
      })
      return res
    } as typeof res.end
    app(req, res)
  })
}

describe('pagelist one-segment redirects', () => {
  test('redirects a literal @ version to the English pagelist', async () => {
    const res = await dispatch('/api/pagelist/free-pro-team@latest')
    expect(res.statusCode).toBe(308)
    expect(res.location).toBe('/api/pagelist/en/free-pro-team@latest')
  })

  test('redirects a percent-encoded @ version instead of to itself', async () => {
    const res = await dispatch('/api/pagelist/enterprise-cloud%40latest')
    expect(res.statusCode).toBe(308)
    expect(res.location).toBe('/api/pagelist/en/enterprise-cloud@latest')
  })

  test('keeps the query string when redirecting a percent-encoded @ version', async () => {
    const res = await dispatch('/api/pagelist/free-pro-team%40latest?foo=bar')
    expect(res.statusCode).toBe(308)
    expect(res.location).toBe('/api/pagelist/en/free-pro-team@latest?foo=bar')
  })
})
