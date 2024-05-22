import { describe, expect, test } from 'vitest'
import sharp from 'sharp'

import { SURROGATE_ENUMS } from '#src/frame/middleware/set-fastly-surrogate-key.js'
import { get, getDOM } from '#src/tests/helpers/e2etest.js'

describe('manifest', () => {
  test('download manifest from HTML and check content', async () => {
    const $ = await getDOM('/')
    const url = $('link[rel="manifest"]').attr('href')
    const res = await get(url)
    expect(res.statusCode).toBe(200)

    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe(`${SURROGATE_ENUMS.DEFAULT} no-language`)

    const manifest = JSON.parse(res.body)
    expect(manifest.name).toBe('GitHub Docs')
    expect(manifest.short_name).toBe('GitHub Docs')
    expect(manifest.start_url).toBe('/')
    expect(manifest.display).toBe('standalone')
    expect(manifest.icons.length).toBeGreaterThan(0)
    await Promise.all(
      manifest.icons.map(async (icon) => {
        const res = await get(icon.src, { responseType: 'buffer' })
        expect(res.statusCode).toBe(200)
        expect(res.headers['content-type']).toBe(icon.type)
        // The `sizes` should match the payload
        const image = sharp(res.body)
        const [width, height] = icon.sizes.split('x').map((s) => parseInt(s))
        const dimensions = await image.metadata()
        expect(dimensions.width).toBe(width)
        expect(dimensions.height).toBe(height)
      }),
    )
  })

  test('/manifest.json is the only valid URL (query string)', async () => {
    const res = await get('/manifest.json?foo=bar')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/manifest.json')
    expect(res.headers['cache-control']).toMatch(/public/)
    expect(res.headers['cache-control']).toMatch(/max-age=\d\d+/)
  })

  test('/manifest.json is the only valid URL (more path)', async () => {
    const res = await get('/manifest.json/something/else')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/manifest.json')
    expect(res.headers['cache-control']).toMatch(/public/)
    expect(res.headers['cache-control']).toMatch(/max-age=\d\d+/)
  })
})
