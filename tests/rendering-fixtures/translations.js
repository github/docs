import { expect } from '@jest/globals'

import { TRANSLATIONS_FIXTURE_ROOT } from '../../lib/constants.js'
import { getDOM } from '../helpers/e2etest.js'

if (!TRANSLATIONS_FIXTURE_ROOT) {
  let msg = 'You have to set TRANSLATIONS_FIXTURE_ROOT to run this test.'
  msg += ' Add TRANSLATIONS_FIXTURE_ROOT=tests/fixtures/translations'
  throw new Error(msg)
}

describe('translations', () => {
  test('home page', async () => {
    const $ = await getDOM('/ja')
    const h1 = $('h1').text()
    // You gotta know your tests/fixtures/translations/ja-jp/data/ui.yml
    expect(h1).toBe('日本 GitHub Docs')

    const links = $('[data-testid=product] a[href]')
    const hrefs = links
      .filter((i, link) => $(link).attr('href').startsWith('/'))
      .map((i, link) => $(link))
      .get()
    const linkTexts = Object.fromEntries(hrefs.map(($link) => [$link.attr('href'), $link.text()]))
    expect(linkTexts['/ja/get-started']).toBe('はじめに')
  })

  test('hello world', async () => {
    const $ = await getDOM('/ja/get-started/quickstart/hello-world')
    const h1 = $('h1').text()
    expect(h1).toBe('こんにちは World')
  })

  test('internal links get prefixed with /ja', async () => {
    const $ = await getDOM('/ja/get-started/quickstart/link-rewriting')
    const links = $('#article-contents a[href]')
    const jaLinks = links.filter((i, element) => $(element).attr('href').startsWith('/ja'))
    const enLinks = links.filter((i, element) => $(element).attr('href').startsWith('/en'))
    expect(jaLinks.length).toBe(2)
    expect(enLinks.length).toBe(0)
  })

  test('internal links with AUTOTITLE resolves', async () => {
    const $ = await getDOM('/ja/get-started/foo/autotitling')
    const links = $('#article-contents a[href]')
    links.each((i, element) => {
      if ($(element).attr('href').includes('/ja/get-started/quickstart/hello-world')) {
        expect($(element).text()).toBe('こんにちは World')
      }
    })
    // There are 4 links on the `autotitling.md` content.
    expect.assertions(4)
  })

  test('correction of linebreaks in translations', async () => {
    // free-pro-team
    {
      const $ = await getDOM('/ja/get-started/foo/table-with-ifversions')

      const paragraph = $('#article-contents p').text()
      expect(paragraph).toMatch('mention of GitHub in Liquid')

      const tds = $('#article-contents td')
        .map((i, element) => $(element).text())
        .get()
      expect(tds.length).toBe(2)
      expect(tds[1]).toBe('Not')
    }
    // enterprise-server
    {
      const $ = await getDOM('/ja/enterprise-server@latest/get-started/foo/table-with-ifversions')

      const paragraph = $('#article-contents p').text()
      expect(paragraph).toMatch('mention of GitHub Enterprise Server in Liquid')

      const tds = $('#article-contents td')
        .map((i, element) => $(element).text())
        .get()
      expect(tds.length).toBe(2)
      expect(tds[1]).toBe('Present')
    }
  })

  test('automatic correction of bad AUTOTITLE in reusables', async () => {
    const $ = await getDOM('/ja/get-started/quickstart/hello-world')
    const links = $('#article-contents a[href]')
    const texts = links.map((i, element) => $(element).text()).get()
    // That Japanese page uses AUTOTITLE links. Both in the main `.md` file
    // but also inside a reusable.
    // E.g. `["AUTOTITLE](/get-started/quickstart/hello-world)."`
    // If we didn't do the necessary string corrections on translations'
    // content and reusables what *would* remain is a HTML link that
    // would look like this:
    //
    //    <a href="/ja/get-started/quickstart/hello-world">&quot;AUTOTITLE</a>
    //
    // This test makes sure no such string is left in any of the article
    // content links.
    // Note that, in English, it's not acceptable to have such a piece of
    // Markdown. It would not be let into `main` by our CI checks. But
    // by their nature, translations are not checked by CI in the same way.
    // Its "flaws" have to be corrected at runtime.
    const stillAutotitle = texts.filter((text) => /autotitle/i.test(text))
    expect(stillAutotitle.length).toBe(0)
  })
})
