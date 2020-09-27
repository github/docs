
const middleware = require('../../middleware/early-access-proxy')
const nock = require('nock')
const MockExpressResponse = require('mock-express-response')

describe('Early Access middleware', () => {
  const OLD_EARLY_ACCESS_HOSTNAME = process.env.EARLY_ACCESS_HOSTNAME

  beforeAll(() => {
    process.env.EARLY_ACCESS_HOSTNAME = 'https://secret-website.com'
  })

  afterAll(() => {
    process.env.EARLY_ACCESS_HOSTNAME = OLD_EARLY_ACCESS_HOSTNAME
  })

  const baseReq = {
    context: {
      earlyAccessPaths: ['/alpha-product/foo', '/beta-product/bar', '/baz']
    }
  }

  test('are proxied from an obscured host', async () => {
    const mock = nock('https://secret-website.com')
      .get('/alpha-product/foo')
      .reply(200, 'yay here is your proxied content', { 'content-type': 'text/html' })
    const req = { ...baseReq, path: '/alpha-product/foo' }
    const res = new MockExpressResponse()
    const next = jest.fn()
    await middleware(req, res, next)
    expect(mock.isDone()).toBe(true)
    expect(res._getString()).toBe('yay here is your proxied content')
  })

  test('follows redirects', async () => {
    const mock = nock('https://secret-website.com')
      .get('/alpha-product/foo')
      .reply(301, undefined, { Location: 'https://secret-website.com/alpha-product/foo2' })
      .get('/alpha-product/foo2')
      .reply(200, 'yay you survived the redirect', { 'content-type': 'text/html' })
    const req = { ...baseReq, path: '/alpha-product/foo' }
    const res = new MockExpressResponse()
    const next = jest.fn()
    await middleware(req, res, next)
    expect(mock.isDone()).toBe(true)
    expect(res._getString()).toBe('yay you survived the redirect')
  })

  test('calls next() if no redirect is found', async () => {
    const req = { ...baseReq, path: '/en' }
    const res = new MockExpressResponse()
    const next = jest.fn()
    await middleware(req, res, next)
    expect(next).toHaveBeenCalled()
  })

  test('calls next() if proxy request respond with 404', async () => {
    const mock = nock('https://secret-website.com')
      .get('/beta-product/bar')
      .reply(404, 'no dice', { 'content-type': 'text/html' })
    const req = { ...baseReq, path: '/beta-product/bar' }
    const res = new MockExpressResponse()
    const next = jest.fn()
    await middleware(req, res, next)
    expect(mock.isDone()).toBe(true)
    expect(next).toHaveBeenCalled()
  })

  test('calls next() if proxy request responds with 500', async () => {
    const mock = nock('https://secret-website.com')
      .get('/beta-product/bar')
      .reply(500, 'no dice', { 'content-type': 'text/html' })
    const req = { ...baseReq, path: '/beta-product/bar' }
    const res = new MockExpressResponse()
    const next = jest.fn()
    await middleware(req, res, next)
    expect(mock.isDone()).toBe(true)
    expect(next).toHaveBeenCalled()
  })
})
