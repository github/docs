import nock from 'nock'
import { expect, jest } from '@jest/globals'

import { get } from '../helpers/supertest.js'
import { checkCachingHeaders } from '../helpers/caching-headers.js'

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
