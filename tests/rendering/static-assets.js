import fs from 'fs'
import path from 'path'

import nock from 'nock'
import { expect, jest } from '@jest/globals'

import { SURROGATE_ENUMS } from '../../middleware/set-fastly-surrogate-key.js'
import { get } from '../helpers/supertest.js'

function getNextStaticAsset(directory) {
  const root = path.join('.next', 'static', directory)
  const files = fs.readdirSync(root)
  if (!files.length) throw new Error(`Can't find any files in ${root}`)
  return path.join(root, files[0])
}

function checkCachingHeaders(res, defaultSurrogateKey = false, minMaxAge = 60 * 60) {
  expect(res.headers['set-cookie']).toBeUndefined()
  expect(res.headers['cache-control']).toContain('public')
  const maxAgeSeconds = parseInt(res.header['cache-control'].match(/max-age=(\d+)/)[1], 10)
  // Let's not be too specific in the tests, just as long as it's testing
  // that it's a reasonably large number of seconds.
  expect(maxAgeSeconds).toBeGreaterThanOrEqual(minMaxAge)
  // Because it doesn't have have a unique URL
  expect(res.headers['surrogate-key']).toBe(
    defaultSurrogateKey ? SURROGATE_ENUMS.DEFAULT : SURROGATE_ENUMS.MANUAL
  )
}

describe('static assets', () => {
  it('should serve /assets/cb-* with optimal headers', async () => {
    const res = await get('/assets/cb-1234/images/site/logo.png')
    expect(res.statusCode).toBe(200)
    checkCachingHeaders(res)
  })

  it('should serve /assets/ with optimal headers', async () => {
    const res = await get('/assets/images/site/logo.png')
    expect(res.statusCode).toBe(200)
    checkCachingHeaders(res, true)
  })

  it('should serve /_next/static/ with optimal headers', async () => {
    // This picks the first one found. We just need it to be anything
    // that actually resolves.
    const filePath = getNextStaticAsset('css')
    const asURL = '/' + filePath.replace('.next', '_next').split(path.sep).join('/')
    const res = await get(asURL)
    expect(res.statusCode).toBe(200)
    checkCachingHeaders(res)
  })

  it('should 404 on /assets/cb-* with plain text', async () => {
    const res = await get('/assets/cb-1234/never/heard/of.png')
    expect(res.statusCode).toBe(404)
    expect(res.header['content-type']).toContain('text/plain')
    // Only a tiny amount of Cache-Control on these
    checkCachingHeaders(res, true, 60)
  })
  it('should 404 on /assets/ with plain text', async () => {
    const res = await get('/assets/never/heard/of.png')
    expect(res.statusCode).toBe(404)
    expect(res.header['content-type']).toContain('text/plain')
    checkCachingHeaders(res, true, 60)
  })
  it('should 404 on /_next/static/ with plain text', async () => {
    const res = await get('/_next/static/never/heard/of.css')
    expect(res.statusCode).toBe(404)
    expect(res.header['content-type']).toContain('text/plain')
    checkCachingHeaders(res, true, 60)
  })
})

describe('archived enterprise static assets', () => {
  // Sometimes static assets are proxied. The URL for the static asset
  // might not indicate it's based on archived enterprise version.

  jest.setTimeout(60 * 1000)

  beforeAll(async () => {
    // The first page load takes a long time so let's get it out of the way in
    // advance to call out that problem specifically rather than misleadingly
    // attributing it to the first test
    // await get('/')

    const sampleCSS = '/* nice CSS */'

    nock('https://github.github.com')
      .get('/help-docs-archived-enterprise-versions/2.21/_next/static/foo.css')
      .reply(200, sampleCSS, {
        'content-type': 'text/css',
        'content-length': sampleCSS.length,
      })
    nock('https://github.github.com')
      .get('/help-docs-archived-enterprise-versions/2.21/_next/static/only-on-proxy.css')
      .reply(200, sampleCSS, {
        'content-type': 'text/css',
        'content-length': sampleCSS.length,
      })
    nock('https://github.github.com')
      .get('/help-docs-archived-enterprise-versions/2.3/_next/static/only-on-2.3.css')
      .reply(200, sampleCSS, {
        'content-type': 'text/css',
        'content-length': sampleCSS.length,
      })
    nock('https://github.github.com')
      .get('/help-docs-archived-enterprise-versions/2.3/_next/static/fourofour.css')
      .reply(404, 'Not found', {
        'content-type': 'text/plain',
      })
    nock('https://github.github.com')
      .get('/help-docs-archived-enterprise-versions/2.3/assets/images/site/logo.png')
      .reply(404, 'Not found', {
        'content-type': 'text/plain',
      })
  })

  afterAll(() => nock.cleanAll())

  it('should proxy if the static asset is prefixed', async () => {
    const res = await get('/enterprise/2.21/_next/static/foo.css', {
      headers: {
        Referrer: '/enterprise/2.21',
      },
    })
    expect(res.statusCode).toBe(200)
    checkCachingHeaders(res, true, 60)
  })
  it('should proxy if the Referrer header indicates so', async () => {
    const res = await get('/_next/static/only-on-proxy.css', {
      headers: {
        Referrer: '/enterprise/2.21',
      },
    })
    expect(res.statusCode).toBe(200)
    checkCachingHeaders(res, true, 60)
  })
  it('should proxy if the Referrer header indicates so', async () => {
    const res = await get('/_next/static/only-on-2.3.css', {
      headers: {
        Referrer: '/en/enterprise-server@2.3/some/page',
      },
    })
    expect(res.statusCode).toBe(200)
    checkCachingHeaders(res, true, 60)
  })
  it('might still 404 even with the right referrer', async () => {
    const res = await get('/_next/static/fourofour.css', {
      headers: {
        Referrer: '/en/enterprise-server@2.3/some/page',
      },
    })
    expect(res.statusCode).toBe(404)
    checkCachingHeaders(res, true, 60)
  })

  it('404 on the proxy but actually present here', async () => {
    const res = await get('/assets/images/site/logo.png', {
      headers: {
        Referrer: '/en/enterprise-server@2.3/some/page',
      },
    })
    // It tried to go via the proxy, but it wasn't there, but then it
    // tried "our disk" and it's eventually there.
    expect(res.statusCode).toBe(200)
    checkCachingHeaders(res, true, 60)
  })
})
