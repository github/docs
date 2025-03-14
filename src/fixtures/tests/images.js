import { describe, expect, test } from 'vitest'
import sharp from 'sharp'

import { get, head, getDOM } from '#src/tests/helpers/e2etest.js'
import { MAX_WIDTH } from '#src/content-render/unified/rewrite-asset-img-tags.js'

describe('render Markdown image tags', () => {
  test('page with a single image', async () => {
    const $ = await getDOM('/get-started/images/single-image')

    const pictures = $('#article-contents picture')
    expect(pictures.length).toBe(1)

    const sources = $('source', pictures)
    expect(sources.length).toBe(1)
    const srcset = sources.attr('srcset')
    expect(srcset).toBe(`/assets/cb-646451/mw-${MAX_WIDTH}/images/_fixtures/screenshot.webp 2x`)
    const type = sources.attr('type')
    expect(type).toBe('image/webp')

    const imgs = $('img', pictures)
    expect(imgs.length).toBe(1)
    const src = imgs.attr('src')
    expect(src).toBe('/assets/cb-646451/images/_fixtures/screenshot.png')
    const alt = imgs.attr('alt')
    expect(alt).toBe('This is the alt text')

    const res = await get(srcset.split(' ')[0], { responseType: 'buffer' })
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe('image/webp')

    // The fixture image `_fixtures/screenshot.png` is known to be very
    // large. Larger than MAX_WIDTH pixels wide.
    // When transformed as a source in a `<picture>` tag, it's automatically
    // injected with the `mw-XXXXX` virtual indicator in the URL that
    // resizes it on-the-fly.
    const image = sharp(res.body)
    const { width, height } = await image.metadata()
    expect(width).toBe(MAX_WIDTH)
    // The `_fixtures/screenshot.png` is 2000x1494.
    // So if 2000/1494==MAX_WIDTH/x, then x becomes 1494*MAX_WIDTH/2000=1076
    expect(height).toBe(Math.round((1494 * MAX_WIDTH) / 2000))
  })

  test('images have density specified', async () => {
    const $ = await getDOM('/get-started/images/retina-image')

    const pictures = $('#article-contents picture')
    expect(pictures.length).toBe(3)

    const sources = $('source', pictures)
    expect(sources.length).toBe(3)

    expect(sources.eq(0).attr('srcset')).toContain('1x') // 0
    expect(sources.eq(1).attr('srcset')).toContain('2x') // 1
    expect(sources.eq(2).attr('srcset')).toContain('2x') // 2
  })

  test('image inside a list keeps its span', async () => {
    const $ = await getDOM('/get-started/images/images-in-lists')

    const imageSpan = $('#article-contents > div > ol > li > div.procedural-image-wrapper')
    expect(imageSpan.length).toBe(1)
  })

  test("links directly to images aren't rewritten", async () => {
    const $ = await getDOM('/get-started/images/link-to-image')
    // There is only 1 link inside that page
    const links = $('#article-contents a[href^="/"]') // exclude header link
    expect(links.length).toBe(1)
    // This proves that the link didn't get rewritten to `/en/...`
    expect(links.attr('href'), '/assets/images/_fixtures/screenshot.png')
    const res = await head(links.attr('href'))
    expect(res.statusCode).toBe(200)
  })
})
