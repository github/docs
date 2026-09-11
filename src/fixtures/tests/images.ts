import { describe, expect, test } from 'vitest'
import sharp from 'sharp'
import type { Cheerio, CheerioAPI } from 'cheerio'
import type { Element } from 'domhandler'

import { get, head, getDOM } from '@/tests/helpers/e2etest'
import { MAX_WIDTH } from '@/content-render/unified/rewrite-asset-img-tags'

// `getDOM` parses with `xmlMode: true`, which is case-sensitive on attribute
// names. The legacy string render path emits a lowercase `srcset`, but the
// React render path (hast -> JSX) emits React 19's camelCase `srcSet`. Both are
// valid HTML (attribute names are case-insensitive in browsers), so read either.
function srcsetOf(el: Cheerio<Element>): string | undefined {
  return el.attr('srcset') ?? el.attr('srcSet')
}

describe('render Markdown image tags', () => {
  test('page with a single image', async () => {
    const $: CheerioAPI = await getDOM('/get-started/images/single-image')

    const pictures = $('#article-contents picture')
    expect(pictures.length).toBe(1)

    const sources = $('source', pictures)
    expect(sources.length).toBe(1)
    const srcset = srcsetOf(sources)
    expect(srcset).toMatch(
      new RegExp(`^/assets/cb-\\w+/mw-${MAX_WIDTH}/images/_fixtures/screenshot\\.webp 2x$`),
    )
    const type = sources.attr('type')
    expect(type).toBe('image/webp')

    const imgs = $('img', pictures)
    expect(imgs.length).toBe(1)
    const src = imgs.attr('src')
    expect(src).toMatch(/^\/assets\/cb-\w+\/images\/_fixtures\/screenshot\.png$/)
    const alt = imgs.attr('alt')
    expect(alt).toBe('This is the alt text')

    const res = await get(srcset!.split(' ')[0], { responseType: 'buffer' })
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe('image/webp')

    // The fixture image `_fixtures/screenshot.png` is known to be very
    // large. Larger than MAX_WIDTH pixels wide.
    // When transformed as a source in a `<picture>` tag, it's automatically
    // injected with the `mw-XXXXX` virtual indicator in the URL that
    // resizes it on-the-fly.
    const image = sharp(Buffer.from(res.body as ArrayBuffer))
    const { width, height } = await image.metadata()
    expect(width).toBe(MAX_WIDTH)
    // The `_fixtures/screenshot.png` is 2000x1494.
    // So if 2000/1494==MAX_WIDTH/x, then x becomes 1494*MAX_WIDTH/2000=1076
    expect(height).toBe(Math.round((1494 * MAX_WIDTH) / 2000))
  })

  test('images have density specified', async () => {
    const $: CheerioAPI = await getDOM('/get-started/images/retina-image')

    const pictures = $('#article-contents picture')
    expect(pictures.length).toBe(3)

    const sources = $('source', pictures)
    expect(sources.length).toBe(3)

    expect(srcsetOf(sources.eq(0))).toContain('1x') // 0
    expect(srcsetOf(sources.eq(1))).toContain('2x') // 1
    expect(srcsetOf(sources.eq(2))).toContain('2x') // 2
  })

  test('image inside a list keeps its span', async () => {
    const $: CheerioAPI = await getDOM('/get-started/images/images-in-lists')

    const imageSpan = $('#article-contents > div > ol > li > div.procedural-image-wrapper')
    expect(imageSpan.length).toBe(1)
  })

  test("links directly to images aren't rewritten", async () => {
    const $: CheerioAPI = await getDOM('/get-started/images/link-to-image')
    // There is only 1 link inside that page
    const links = $('#article-contents a[href^="/"]') // exclude header link
    expect(links.length).toBe(1)
    // This proves that the link didn't get rewritten to `/en/...`
    expect(links.attr('href'), '/assets/images/_fixtures/screenshot.png')
    const res = await head(links.attr('href')!)
    expect(res.statusCode).toBe(200)
  })
})
