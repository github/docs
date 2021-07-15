import { getDOM } from '../helpers/supertest.js'
import languages from '../../lib/languages.js'
import { jest } from '@jest/globals'

describe('<head>', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('includes hreflangs (references to all language versions of the same page)', async () => {
    const $ = await getDOM('/en')
    const $hreflangs = $('link[rel="alternate"]')
    expect($hreflangs.length).toEqual(Object.keys(languages).length)
    expect($('link[href="https://docs.github.com/cn"]').length).toBe(1)
    expect($('link[href="https://docs.github.com/ja"]').length).toBe(1)
    expect($('link[hreflang="en"]').length).toBe(1)
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
      $('div.lead-mktg')
        .html()
        .startsWith('<p>You can <a href="/articles/merging-a-pull-request">merge pull requests</a>')
    )
  })
})
