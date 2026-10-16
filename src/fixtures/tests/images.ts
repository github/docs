import { describe, expect, test } from 'vitest'
import sharp from 'sharp'
import type { Cheerio, CheerioAPI } from 'cheerio'
import type { Element } from 'domhandler'

import { get, head, getDOM } from '@/tests/helpers/e2etest'
import { MAX_WIDTH } from '@/content-render/unified/rewrite-asset-img-tags'

// getDOM parses in xmlMode, so attribute names are case-sensitive.
// The string render path emits srcset, and the React render path emits srcSet.
// Browsers treat both as valid HTML, so read either spelling.
function srcsetOf(el: Cheerio<Element>): string | undefined {
  return el.attr('srcset') ?? el.attr('srcSet')
}

describe('render Markdown image tags', () => {
  // _fixtures/screenshot.png is 2000x1494 and wider than MAX_WIDTH, so picture
  // sources include mw-XXXXX resizing and preserve aspect ratio at 1076px tall.
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
    expect(imgs.attr('class')).toMatch(/Image/)

    const res = await get(srcset!.split(' ')[0], { responseType: 'buffer' })
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe('image/webp')

    const image = sharp(Buffer.from(res.body as ArrayBuffer))
    const { width, height } = await image.metadata()
    expect(width).toBe(MAX_WIDTH)
    expect(height).toBe(Math.round((1494 * MAX_WIDTH) / 2000))
  })

  test('images have density specified', async () => {
    const $: CheerioAPI = await getDOM('/get-started/images/retina-image')

    const pictures = $('#article-contents picture')
    expect(pictures.length).toBe(3)

    const sources = $('source', pictures)
    expect(sources.length).toBe(3)

    expect(srcsetOf(sources.eq(0))).toContain('1x')
    expect(srcsetOf(sources.eq(1))).toContain('2x')
    expect(srcsetOf(sources.eq(2))).toContain('2x')
  })

  test('image inside a list keeps its span', async () => {
    const $: CheerioAPI = await getDOM('/get-started/images/images-in-lists')

    const imageSpan = $('#article-contents > div > ol > li > div.procedural-image-wrapper')
    expect(imageSpan.length).toBe(1)
  })

  // A div inside a paragraph is invalid HTML and breaks hydration.
  test('linked image in a list paragraph has no wrapper', async () => {
    const $: CheerioAPI = await getDOM('/get-started/images/images-in-lists')

    const link = $('#article-contents ol > li > p > a[href="https://github.com"]')
    expect(link.length).toBe(1)
    expect($('div', link).length).toBe(0)
    expect($('img', link).attr('alt')).toBe('Linked test image')
  })

  test("links directly to images aren't rewritten", async () => {
    const $: CheerioAPI = await getDOM('/get-started/images/link-to-image')
    // The fixture has one article link; header links are out of scope.
    const links = $('#article-contents a[href^="/"]')
    expect(links.length).toBe(1)
    // Asset links must stay under /assets instead of gaining a language prefix.
    expect(links.attr('href'), '/assets/images/_fixtures/screenshot.png')
    const res = await head(links.attr('href')!)
    expect(res.statusCode).toBe(200)
  })

  test('emoji images stay plain img elements', async () => {
    const $: CheerioAPI = await getDOM('/get-started/images/emoji-and-decorative-images')
    const emoji = $(
      '#article-contents img[src^="https://github.githubassets.com/images/icons/emoji"]',
    )
    expect(emoji.length).toBe(1)
    expect(emoji.attr('alt')).toBe(':strawberry:')
    expect(emoji.attr('class')).toBeUndefined()
  })

  test('images without alt text render an empty alt', async () => {
    const $: CheerioAPI = await getDOM('/get-started/images/emoji-and-decorative-images')
    const imgs = $('#article-contents img[src*="/images/_fixtures/screenshot.png"]')
    expect(imgs.length).toBe(1)
    expect(imgs.attr('alt')).toBe('')
    expect(imgs.attr('class')).toMatch(/Image/)
  })

  test('images in RenderedHTML intros use the Brand Image component', async () => {
    const $: CheerioAPI = await getDOM('/get-started/images/emoji-and-decorative-images')
    const lead = $('[data-container="lead"]')
    const image = $('img[src*="/images/_fixtures/electrocat.png"]', lead)
    expect(image.length).toBe(1)
    expect(image.attr('alt')).toBe('Intro image')
    expect(image.attr('class')).toMatch(/Image/)
    const emoji = $('img[src^="https://github.githubassets.com/images/icons/emoji"]', lead)
    expect(emoji.length).toBe(1)
    expect(emoji.attr('class')).toBeUndefined()
  })
})
