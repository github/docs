import { fileURLToPath } from 'url'
import path from 'path'
import http from 'http'
import { Socket } from 'net'

import { describe, expect, test } from 'vitest'
import type { Response } from 'express'

import Page from '@/frame/lib/page'
import findPage from '@/frame/middleware/find-page'
import type { ExtendedRequest, Context } from '@/types'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

type TestResponse = Response & { _status?: number; _message?: string }

function makeRequestResponse(
  url: string,
  currentVersion = 'free-pro-team@latest',
): [ExtendedRequest, TestResponse] {
  const req = new http.IncomingMessage(new Socket()) as ExtendedRequest

  Object.defineProperty(req, 'path', {
    value: url,
    writable: true,
  })

  req.method = 'GET'
  req.url = url
  req.cookies = {}
  req.headers = {}

  const context: Context = {
    currentVersion,
    pages: {},
  }

  req.pagePath = url
  req.context = context

  const res = new http.ServerResponse(req) as TestResponse
  res.status = function status(this: TestResponse, code: number) {
    this._status = code
    return Object.assign(this, {
      send: (message: string) => {
        this._message = message
        return this
      },
    })
  }

  return [req, res]
}

describe('find page middleware', () => {
  test('attaches page on req.context', async () => {
    const url = '/en/foo/bar'
    const [req, res] = makeRequestResponse(url)
    const page = await Page.init({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../../../src/fixtures/fixtures'),
      languageCode: 'en',
    })
    if (page && req.context) {
      req.context.pages = {
        '/en/foo/bar': page,
      }
    }

    let nextCalls = 0
    await findPage(req, res, () => {
      nextCalls++
    })
    expect(nextCalls).toBe(1)
    expect(req.context?.page).toBeInstanceOf(Page)
  })

  test('does not attach page on req.context if not found', async () => {
    const [req, res] = makeRequestResponse('/en/foo/bar')

    let nextCalls = 0
    await findPage(req, res, () => {
      nextCalls++
    })
    expect(nextCalls).toBe(1)
    expect(req.context?.page).toBe(undefined)
  })

  test('re-reads from disk if in development mode', async () => {
    const [req, res] = makeRequestResponse('/en/page-with-redirects')
    const page = await Page.init({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../../../src/fixtures/fixtures'),
      languageCode: 'en',
    })
    if (page && req.context) {
      req.context.pages = {
        '/en/page-with-redirects': page,
      }
    }

    await findPage(req, res, () => {}, {
      isDev: true,
      contentRoot: path.join(__dirname, '../../../src/fixtures/fixtures'),
    })
    expect(req.context?.page).toBeInstanceOf(Page)
  })

  test('finds it for non-fpt version URLS', async () => {
    const [req, res] = makeRequestResponse('/en/page-with-redirects', 'enterprise-cloud@latest')
    const page = await Page.init({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../../../src/fixtures/fixtures'),
      languageCode: 'en',
    })
    if (page && req.context) {
      req.context.pages = {
        '/en/page-with-redirects': page,
      }
    }

    await findPage(req, res, () => {}, {
      isDev: true,
      contentRoot: path.join(__dirname, '../../../src/fixtures/fixtures'),
    })
    expect(req.context?.page).toBeInstanceOf(Page)
  })

  test("will 404 if the request version doesn't match the page", async () => {
    // The 'versions:' frontmatter on 'page-with-redirects.md' does
    // not include ghes. So this'll eventually 404.
    const [req, res] = makeRequestResponse('/en/page-with-redirects', 'enterprise-server@latest')
    const page = await Page.init({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../../../src/fixtures/fixtures'),
      languageCode: 'en',
    })
    if (page && req.context) {
      req.context.pages = {
        '/en/page-with-redirects': page,
      }
    }

    await findPage(req, res, () => {}, {
      isDev: true,
      contentRoot: path.join(__dirname, '../../../src/fixtures/fixtures'),
    })
    expect(res._status).toBe(404)
    expect(res._message).toMatch('')
    expect(req.context?.page).toBeUndefined()
  })

  test('re-reads from disk if in development mode and finds nothing', async () => {
    const [req, res] = makeRequestResponse('/en/never/heard/of')

    await findPage(req, res, () => {}, {
      isDev: true,
      contentRoot: path.join(__dirname, '../../../src/fixtures/fixtures'),
    })
    expect(req.context?.page).toBe(undefined)
  })
})
