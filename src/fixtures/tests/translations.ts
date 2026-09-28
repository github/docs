import { describe, expect, test } from 'vitest'
import type { Cheerio, CheerioAPI } from 'cheerio'
import type { Element } from 'domhandler'

import { TRANSLATIONS_FIXTURE_ROOT } from '@/frame/lib/constants'
import { getDOM, head } from '@/tests/helpers/e2etest'

if (!TRANSLATIONS_FIXTURE_ROOT) {
  let msg = 'You have to set TRANSLATIONS_FIXTURE_ROOT to run this test.'
  msg += ' Add TRANSLATIONS_FIXTURE_ROOT=src/fixtures/fixtures/translations'
  throw new Error(msg)
}

describe('translations', () => {
  test('home page', async () => {
    const $: CheerioAPI = await getDOM('/ja')
    const h1 = $('h1').text()
    // src/fixtures/fixtures/translations/ja-jp/data/ui.yml localizes the home-page h1.
    expect(h1).toBe('日本 GitHub Docs')

    const links = $('[data-testid=product] a[href]')
    const hrefs = links
      .filter((i: number, link: Element) => {
        const href = $(link).attr('href')
        return href !== undefined && href.startsWith('/')
      })
      .map((i: number, link: Element) => $(link))
      .get()
    const linkTexts = Object.fromEntries(
      hrefs.map(($link: Cheerio<Element>) => [$link.attr('href'), $link.text()]),
    )
    expect(linkTexts['/ja/get-started']).toBe('はじめに')
  })

  test('hello world', async () => {
    const $: CheerioAPI = await getDOM('/ja/get-started/start-your-journey/hello-world')
    const h1 = $('h1').text()
    expect(h1).toBe('こんにちは World')
  })

  test('internal links get prefixed with /ja', async () => {
    const $: CheerioAPI = await getDOM('/ja/get-started/start-your-journey/link-rewriting')
    const links = $('#article-contents a[href]')
    const jaLinks = links.filter((i: number, element: Element) => {
      const href = $(element).attr('href')
      return href !== undefined && href.startsWith('/ja')
    })
    const enLinks = links.filter((i: number, element: Element) => {
      const href = $(element).attr('href')
      return href !== undefined && href.startsWith('/en')
    })
    expect(jaLinks.length).toBe(2)
    expect(enLinks.length).toBe(0)
  })

  test('internal links with AUTOTITLE resolves', async () => {
    const $: CheerioAPI = await getDOM('/ja/get-started/foo/autotitling')
    const links = $('#article-contents a[href]')
    links.each((i: number, element: Element) => {
      if ($(element).attr('href')?.includes('/ja/get-started/start-your-journey/hello-world')) {
        expect($(element).text()).toBe('こんにちは World')
      }
    })
    // autotitling.md has 4 AUTOTITLE links.
    expect.assertions(4)
  })

  test('correction of linebreaks in translations', async () => {
    {
      const $: CheerioAPI = await getDOM('/ja/get-started/foo/table-with-ifversions')

      const paragraph = $('#article-contents p').text()
      expect(paragraph).toMatch('mention of HubGit in Liquid')

      const tds = $('#article-contents td')
        .map((i: number, element: Element) => $(element).text())
        .get()
      expect(tds.length).toBe(2)
      expect(tds[1]).toBe('Not')
    }
    {
      const $: CheerioAPI = await getDOM(
        '/ja/enterprise-server@latest/get-started/foo/table-with-ifversions',
      )

      const paragraph = $('#article-contents p').text()
      expect(paragraph).toMatch('mention of HubGit Enterprise Server in Liquid')

      const tds = $('#article-contents td')
        .map((i: number, element: Element) => $(element).text())
        .get()
      expect(tds.length).toBe(2)
      expect(tds[1]).toBe('Present')
    }
  })

  // Japanese translation fixtures include malformed AUTOTITLE links in content and reusables.
  // Input: ["AUTOTITLE](/get-started/start-your-journey/hello-world)."
  // Bad output: <a href="/ja/get-started/start-your-journey/hello-world">&quot;AUTOTITLE</a>
  // Runtime correction must remove AUTOTITLE because translation CI does not catch this Markdown.
  test('automatic correction of bad AUTOTITLE in reusables', async () => {
    const $: CheerioAPI = await getDOM('/ja/get-started/start-your-journey/hello-world')
    const links = $('#article-contents a[href]')
    const texts = links.map((i: number, element: Element) => $(element).text()).get()
    const stillAutotitle = texts.filter((text: string) => /autotitle/i.test(text))
    expect(stillAutotitle.length).toBe(0)
  })

  // Translators wrote [[Bar](バー)](/get-started/foo/bar), which must render as
  // <a href="/ja/get-started/foo/bar">[Bar](バー)</a>.
  test('markdown link looking constructs inside links', async () => {
    const $: CheerioAPI = await getDOM('/ja/get-started/start-your-journey/hello-world')
    const links = $('#article-contents a[href]')
    const texts = links
      .filter((i: number, element: Element) => {
        const href = $(element).attr('href')
        return href !== undefined && href.includes('get-started/foo/bar')
      })
      .map((i: number, element: Element) => $(element).text())
      .get()
    const foundBarLink = texts.find(
      (text: string) => text.includes('[Bar]') && text.includes('(バー)'),
    )
    expect(foundBarLink).toBeDefined()
  })

  describe('localized category versioning', () => {
    test('category page works in all children versions', async () => {
      {
        const res = await head('/ja/get-started')
        expect(res.statusCode).toBe(200)
      }
      {
        // The category allows ghes, but its only child is ghec-only, so enterprise-server 404s.
        const res = await head('/ja/enterprise-server@latest/get-started/empty-categories')
        expect(res.statusCode).toBe(404)
      }
      {
        // The ghec-only child renders under enterprise-cloud.
        const res = await head('/ja/enterprise-cloud@latest/get-started/empty-categories/only-ghec')
        expect(res.statusCode).toBe(200)
      }
    })
  })
})
