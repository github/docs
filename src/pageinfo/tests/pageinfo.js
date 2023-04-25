import { get } from '../../../tests/helpers/e2etest.js'
import { SURROGATE_ENUMS } from '../../../middleware/set-fastly-surrogate-key.js'

describe('pageinfo api', () => {
  test('redirects without version suffix', async () => {
    const res = await get('/api/pageinfo')
    expect(res.statusCode).toBe(307)
    expect(res.headers.location).toBe('/api/pageinfo/v1')
  })

  test('happy path', async () => {
    const res = await get('/api/pageinfo/v1?pathname=/en/get-started/quickstart')
    expect(res.statusCode).toBe(200)
    const { info } = JSON.parse(res.body)
    expect(info.product).toBe('Get started')
    expect(info.title).toBe('Quickstart')
    expect(info.intro).toBe(
      'Get started using GitHub to manage Git repositories and collaborate with others.'
    )
    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe(`${SURROGATE_ENUMS.DEFAULT} language:en`)
  })

  test('a pathname that does not exist', async () => {
    const res = await get('/api/pageinfo/v1?pathname=/en/never/heard/of')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("No page found for '/en/never/heard/of'")
  })

  test("no 'pathname' query string at all", async () => {
    const res = await get('/api/pageinfo/v1')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("No 'pathname' query")
  })

  test("empty 'pathname' query string", async () => {
    const res = await get('/api/pageinfo/v1?pathname=%20')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("'pathname' query empty")
  })

  test('redirects are automatically respected', async () => {
    // This is based on the fixture content content/index.md which
    // has a `redirect_from`.
    const res = await get('/api/pageinfo/v1?pathname=/en/olden-days')
    expect(res.statusCode).toBe(200)
    const { info } = JSON.parse(res.body)
    expect(info.title).toBe('GitHub Fixture Documentation')
  })

  test('a page that uses non-trivial Liquid to render', async () => {
    // This page uses `{% ifversion not fpt %}` in the intro.

    // First on the fpt version
    {
      const res = await get('/api/pageinfo/v1?pathname=/en/get-started/liquid/ifversion')
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.intro).toMatch(/\(on fpt\)/)
    }
    // Second on any other version
    {
      const res = await get(
        `/api/pageinfo/v1?pathname=/en/enterprise-server@latest/get-started/liquid/ifversion`
      )
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.intro).toMatch(/\(not on fpt\)/)
    }
  })
})
