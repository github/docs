import { getDOM } from '../helpers/e2etest.js'
import languages from '../../lib/languages.js'
import { jest } from '@jest/globals'

jest.useFakeTimers({ legacyFakeTimers: true })

describe('<head>', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('includes hreflangs (references to all language versions of the same page)', async () => {
    const $ = await getDOM('/en')
    const $hreflangs = $('link[rel="alternate"]')
    expect($hreflangs.length).toEqual(Object.keys(languages).length)
    expect($('link[href="https://docs.github.com/cn"]').length).toBe(1)
    expect($('link[href="https://docs.github.com/ja"]').length).toBe(1)
    // Due to a bug in either NextJS, JSX, or TypeScript,
    // when put `<link hrefLang="xxx">` in a .tsx file, this incorrectly
    // gets rendered out as `<link hrefLang="xxx">` in the final HTML.
    // Note the uppercase L. It's supposed to become `<link hreflang="xxx">`.
    // When cheerio serializes to HTML, it gets this right so it lowercases
    // the attribute. So if this rendering in this jest test was the first
    // ever cold hit, you might get the buggy HTML from React or you
    // might get the correct HTML from cheerio's `.html()` serializer.
    // This is why we're looking for either.
    expect($('link[hreflang="en"]').length + $('link[hrefLang="en"]').length).toBe(1)
  })

  test('includes page intro in `description` meta tag', async () => {
    const $ = await getDOM('/en/articles/about-ssh')
    const $description = $('meta[name="description"]')
    expect($description.attr('content').startsWith('Using the SSH protocol')).toBe(true)
  })

  test('renders `description` meta tag in plaintext (no HTML)', async () => {
    const $ = await getDOM('/en/articles/about-pull-request-merges')
    const $description = $('meta[name="description"]')
    // plain text intro
    expect(
      $description.attr('content').startsWith('You can merge pull requests by retaining')
    ).toBe(true)
    // HTML intro
    expect(
      $('[data-testid="lead"]')
        .html()
        .startsWith('<p>You can <a href="/articles/merging-a-pull-request">merge pull requests</a>')
    )
  })
})
