import { jest } from '@jest/globals'

import { SURROGATE_ENUMS } from '../../middleware/set-fastly-surrogate-key.js'
import { get, head } from '../helpers/e2etest.js'

const POSSIBLE_EXTENSIONS = ['webp', 'avif']

const EXPECTED_MIMETYPES = {
  webp: 'image/webp',
  avif: 'image/avif',
}

describe('dynamic assets', () => {
  jest.setTimeout(3 * 60 * 1000)

  test.each(POSSIBLE_EXTENSIONS)('GET logo PNG as a %s', async (extension) => {
    const res = await get(`/assets/images/site/logo.${extension}`)
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe(EXPECTED_MIMETYPES[extension])
  })

  test.each(POSSIBLE_EXTENSIONS)('HEAD logo PNG as a %s', async (extension) => {
    const res = await head(`/assets/images/site/logo.${extension}`)
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe(EXPECTED_MIMETYPES[extension])
  })

  test.each(POSSIBLE_EXTENSIONS)('get PNG as a %s with cache busting prefix', async (extension) => {
    const res = await get(`/assets/cb-12345/images/site/logo.${extension}`)
    expect(res.statusCode).toBe(200)
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
  })

  test('unrecognized extensions get a 404', async () => {
    const res = await get('/assets/images/site/logo.xxx')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch(/text\/plain/)
  })

  test('unrecognized as source PNG get a 404', async () => {
    const res = await get('/assets/images/site/loooogo.png')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch(/text\/plain/)
  })

  test('recognized extensions but no equivalent .png get a 404', async () => {
    const res = await get('/assets/images/site/neverheardof.webp')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch(/text\/plain/)
  })

  test.each(['key', 'key=value'])('any query string (%p) triggers a redirect', async (qs) => {
    const res = await get('/assets/images/site/logo.webp?' + qs)
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/assets/images/site/logo.webp')
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
  })
})
