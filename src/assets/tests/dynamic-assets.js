import { jest } from '@jest/globals'
import sharp from 'sharp'
import { fileTypeFromBuffer } from 'file-type'

import { SURROGATE_ENUMS } from '../../../middleware/set-fastly-surrogate-key.js'
import { get, head } from '../../../tests/helpers/e2etest.js'

describe('dynamic assets', () => {
  jest.setTimeout(3 * 60 * 1000)

  test('GET PNG as a WebP', async () => {
    const res = await get('/assets/images/_fixtures/screenshot.webp', {
      responseType: 'buffer',
    })
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe('image/webp')
    const { mime } = await fileTypeFromBuffer(res.body)
    expect(mime).toBe('image/webp')
  })

  test('HEAD PNG as a WebP', async () => {
    const res = await head('/assets/images/_fixtures/screenshot.webp')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe('image/webp')
  })

  test('get PNG as a WebP with cache busting prefix', async () => {
    const res = await get('/assets/cb-12345/images/_fixtures/screenshot.webp')
    expect(res.statusCode).toBe(200)
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
  })

  test('max-width=1000 as a WebP', async () => {
    // The _fixtures/screenshot.png is 2000(x1494) which is *more than 1000*
    const res = await get('/assets/images/mw-1000/_fixtures/screenshot.webp', {
      responseType: 'buffer',
    })
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe('image/webp')
    const image = sharp(res.body)
    const { width, height } = await image.metadata()
    expect(width).toBe(1000)
    expect(height).toBe(747)
  })

  test('max-width not necessary as a WebP', async () => {
    // The _fixtures/electrocat.png is 448(x448) which is *less than 1000*
    const res = await get('/assets/images/mw-1000/_fixtures/electrocat.webp', {
      responseType: 'buffer',
    })
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe('image/webp')
    const image = sharp(res.body)
    const { width, height } = await image.metadata()
    expect(width).toBe(448)
    expect(height).toBe(448)
  })

  test("can't set set max-width indicator on the PNG that is already on disk", async () => {
    const res = await get(`/assets/images/mw-1000/_fixtures/screenshot.png`)
    expect(res.statusCode).toBe(404)
  })

  test('max-width has to be a valid number when converting to WebP', async () => {
    // 0 is too small
    {
      const res = await get('/assets/images/mw-0/_fixtures/screenshot.webp')
      expect(res.statusCode).toBe(400)
      expect(res.headers['content-type']).toMatch('text/plain')
      expect(res.body).toMatch('Error: width number (0) is not a valid number')
    }
    // 1234 is not a number that is recognized
    {
      const res = await get('/assets/images/mw-1234/_fixtures/screenshot.webp')
      expect(res.statusCode).toBe(400)
      expect(res.headers['content-type']).toMatch('text/plain')
      expect(res.body).toMatch('Error: width number (1234) is not a valid number')
    }
  })

  test('unrecognized extensions get a 404', async () => {
    const res = await get('/assets/images/_fixtures/screenshot.xxx')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch(/text\/plain/)
  })

  test('unrecognized as source PNG get a 404', async () => {
    const res = await get('/assets/images/_fixtures/sceeeeenshoot.png')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch(/text\/plain/)
  })

  test('recognized extensions but no equivalent .png get a 404', async () => {
    const res = await get('/assets/images/_fixtures/neverheardof.webp')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch(/text\/plain/)
  })

  test.each(['key', 'key=value'])('any query string (%p) triggers a redirect', async (qs) => {
    const res = await get('/assets/images/_fixtures/screenshot.webp?' + qs)
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/assets/images/_fixtures/screenshot.webp')
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
  })
})
