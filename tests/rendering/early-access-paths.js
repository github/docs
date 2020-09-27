const MockExpressResponse = require('mock-express-response')
const middleware = require('../../middleware/early-access-paths')

describe('GET /early-access-paths.json', () => {
  beforeEach(() => {
    delete process.env['early-access-shared-secret']
  })

  test('responds with 401 if shared secret is missing', async () => {
    const req = {
      path: '/early-access-paths.json',
      headers: {}
    }
    const res = new MockExpressResponse()
    const next = jest.fn()
    await middleware(req, res, next)

    expect(res._getJSON()).toEqual({ error: '401 Unauthorized' })
  })

  test('responds with an array of hidden paths', async () => {
    process.env.EARLY_ACCESS_SHARED_SECRET = 'bananas'

    const req = {
      path: '/early-access-paths.json',
      headers: {
        'early-access-shared-secret': 'bananas'
      },
      context: {
        pages: [
          {
            hidden: true,
            languageCode: 'en',
            permalinks: [
              { href: '/some-hidden-page' }
            ],
            redirects: {
              '/old-hidden-page': '/new-hidden-page'
            }
          },
          {
            hidden: false,
            languageCode: 'en'
          }
        ]
      }
    }
    const res = new MockExpressResponse()
    const next = jest.fn()
    await middleware(req, res, next)

    expect(res._getJSON()).toEqual(['/some-hidden-page', '/old-hidden-page'])
  })

  test('ignores requests to other paths', async () => {
    const req = {
      path: '/not-early-access'
    }
    const res = new MockExpressResponse()
    const next = jest.fn()
    await middleware(req, res, next)
    expect(next).toHaveBeenCalled()
  })
})
