const MockExpressResponse = require('mock-express-response')
const middleware = require('../../../../middleware/redirects/help-to-docs')

describe('help.github.com redirect middleware', () => {
  it('redirects help.github.com homepage requests', async () => {
    const req = {
      hostname: 'help.github.com',
      protocol: 'https',
      originalUrl: '/'
    }
    const res = new MockExpressResponse()
    const next = () => { /* no op */ }

    await middleware(req, res, next)

    expect(res._getString()).toEqual('<p>Moved Permanently. Redirecting to <a href="https://docs.github.com/">https://docs.github.com/</a></p>')
  })

  it('redirects help.github.com requests to deep pages', async () => {
    const req = {
      hostname: 'help.github.com',
      protocol: 'https',
      originalUrl: '/en/actions/configuring-and-managing-workflows/using-environment-variables'
    }
    const res = new MockExpressResponse()
    const next = () => { /* no op */ }

    await middleware(req, res, next)

    expect(res._getString()).toEqual('<p>Moved Permanently. Redirecting to <a href="https://docs.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables">https://docs.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables</a></p>')
  })

  it('preserves query params', async () => {
    const req = {
      hostname: 'help.github.com',
      protocol: 'https',
      originalUrl: '/en?foo=bar'
    }
    const res = new MockExpressResponse()
    const next = () => { /* no op */ }

    await middleware(req, res, next)

    expect(res._getString()).toEqual('<p>Moved Permanently. Redirecting to <a href="https://docs.github.com/en?foo=bar">https://docs.github.com/en?foo=bar</a></p>')
  })

  it('does not redirect docs.github.com requests', async () => {
    const req = {
      hostname: 'docs.github.com',
      protocol: 'https',
      originalUrl: '/'
    }
    const res = new MockExpressResponse()
    const next = jest.fn()
    await middleware(req, res, next)
    expect(next).toHaveBeenCalled()
  })

  it('only redirects to a docs.github.com path', async () => {
    const req = {
      hostname: 'help.github.com',
      protocol: 'https',
      originalUrl: '//evil.com//'
    }
    const res = new MockExpressResponse()
    const next = jest.fn()
    await middleware(req, res, next)
    const expectedRedirect = 'https://docs.github.com/evil.com//'
    expect(res._getString()).toEqual(`<p>Moved Permanently. Redirecting to <a href="${expectedRedirect}">${expectedRedirect}</a></p>`)
  })
})
