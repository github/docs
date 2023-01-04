import { fileURLToPath } from 'url'
import path from 'path'
import http from 'http'

import { expect, describe, test } from '@jest/globals'

import Page from '../../lib/page.js'
import findPage from '../../middleware/find-page.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function makeRequestResponse(url, currentVersion = 'free-pro-team@latest') {
  const req = new http.IncomingMessage(null)
  req.method = 'GET'
  req.url = url
  req.path = url
  req.cookies = {}
  req.headers = {}

  // Custom keys on the request
  req.pagePath = url
  req.context = {}
  req.context.currentVersion = currentVersion
  req.context.pages = {}

  const res = new http.ServerResponse(req)
  res.status = function (code) {
    this._status = code
    return {
      send: function (message) {
        this._message = message
      }.bind(this),
    }
  }

  return [req, res]
}

describe('find page middleware', () => {
  test('attaches page on req.context', async () => {
    const url = '/en/foo/bar'
    const [req, res] = makeRequestResponse(url)
    req.context.pages = {
      '/en/foo/bar': await Page.init({
        relativePath: 'page-with-redirects.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      }),
    }

    let nextCalls = 0
    await findPage(req, res, () => {
      nextCalls++
    })
    expect(nextCalls).toBe(1)
    expect(req.context.page).toBeInstanceOf(Page)
  })

  test('does not attach page on req.context if not found', async () => {
    const [req, res] = makeRequestResponse('/en/foo/bar')

    let nextCalls = 0
    await findPage(req, res, () => {
      nextCalls++
    })
    expect(nextCalls).toBe(1)
    expect(req.context.page).toBe(undefined)
  })

  test('re-reads from disk if in development mode', async () => {
    const [req, res] = makeRequestResponse('/en/page-with-redirects')
    req.context.pages = {
      '/en/page-with-redirects': await Page.init({
        relativePath: 'page-with-redirects.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      }),
    }

    await findPage(req, res, () => {}, {
      isDev: true,
      contentRoot: path.join(__dirname, '../fixtures'),
    })
    expect(req.context.page).toBeInstanceOf(Page)
  })
  test('finds it for non-fpt version URLS', async () => {
    const [req, res] = makeRequestResponse('/en/page-with-redirects', 'enterprise-cloud@latest')
    req.context.pages = {
      '/en/page-with-redirects': await Page.init({
        relativePath: 'page-with-redirects.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      }),
    }

    await findPage(req, res, () => {}, {
      isDev: true,
      contentRoot: path.join(__dirname, '../fixtures'),
    })
    expect(req.context.page).toBeInstanceOf(Page)
  })

  test("will 404 if the request version doesn't match the page", async () => {
    // The 'versions:' frontmatter on 'page-with-redirects.md' does
    // not include ghes. So this'll eventually 404.
    const [req, res] = makeRequestResponse('/en/page-with-redirects', 'enterprise-server@latest')
    req.context.pages = {
      '/en/page-with-redirects': await Page.init({
        relativePath: 'page-with-redirects.md',
        basePath: path.join(__dirname, '../fixtures'),
        languageCode: 'en',
      }),
    }

    await findPage(req, res, () => {}, {
      isDev: true,
      contentRoot: path.join(__dirname, '../fixtures'),
    })
    expect(res._status).toBe(404)
    expect(res._message).toMatch('')
    expect(req.context.page).toBeUndefined()
  })

  test('re-reads from disk if in development mode and finds nothing', async () => {
    const [req, res] = makeRequestResponse('/en/never/heard/of')

    await findPage(req, res, () => {}, {
      isDev: true,
      contentRoot: path.join(__dirname, '../fixtures'),
    })
    expect(req.context.page).toBe(undefined)
  })
})
