import { getDOM } from '../helpers/e2etest.js'
import { jest } from '@jest/globals'

jest.useFakeTimers({ legacyFakeTimers: true })

describe('<head>', () => {
  jest.setTimeout(5 * 60 * 1000)

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
