import { jest } from '@jest/globals'

import { getDOM } from '../helpers/e2etest.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'

describe('featuredLinks', () => {
  jest.setTimeout(3 * 60 * 1000)

  describe('rendering', () => {
    test('non-TOC pages do not have intro links', async () => {
      const $ = await getDOM('/en/get-started/quickstart/set-up-git')
      expect($('[data-testid=article-list]')).toHaveLength(0)
    })

    test('landing page intro links have expected properties', async () => {
      const $ = await getDOM('/en')
      const $featuredLinks = $('[data-testid=article-list] a')
      expect($featuredLinks).toHaveLength(9)
      expect($featuredLinks.eq(0).attr('href')).toBe('/en/get-started/quickstart/set-up-git')
      expect($featuredLinks.eq(0).children('h3').text().startsWith('Set up Git')).toBe(true)
      expect($featuredLinks.eq(0).children('p').text().startsWith('At the heart of GitHub')).toBe(
        true
      )

      expect($featuredLinks.eq(8).attr('href')).toBe('/en/pages')
      expect($featuredLinks.eq(8).children('h3').text().startsWith('GitHub Pages')).toBe(true)
      expect(
        $featuredLinks.eq(8).children('p').text().startsWith('Learn how to create a website')
      ).toBe(true)
    })

    test('Enterprise user intro links have expected values', async () => {
      const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/user/get-started`)
      const $featuredLinks = $('[data-testid=article-list] a')
      expect($featuredLinks.length > 0).toBeTruthy()
      expect($featuredLinks.eq(0).attr('href')).toBe(
        `/en/enterprise-server@${enterpriseServerReleases.latest}/get-started/learning-about-github/githubs-products`
      )
      expect($featuredLinks.eq(0).children('h3').text().startsWith('GitHub’s products')).toBe(true)
      expect(
        $featuredLinks
          .eq(0)
          .children('p')
          .text()
          .startsWith("An overview of GitHub's products and pricing plans.")
      ).toBe(true)
    })

    // If any of these tests fail, check to see if the content has changed and update text if needed.
    test('product articles links respect versioning', async () => {
      const enterpriseVersionedLandingPage = `/en/enterprise-server@${enterpriseServerReleases.latest}/billing`
      const $ = await getDOM(enterpriseVersionedLandingPage)
      const $productArticlesLinks = $('[data-testid=product-articles-list] a')
      let msg = `Product article links are not rendered as expected on ${enterpriseVersionedLandingPage}`
      expect($productArticlesLinks.length, msg).toBeGreaterThan(2)

      // Confirm that the following Enterprise link IS included on this Enterprise page.
      msg = `Enterprise article link is not rendered as expected on ${enterpriseVersionedLandingPage}`
      expect(
        $productArticlesLinks.text().includes('About licenses for GitHub Enterprise'),
        msg
      ).toBe(true)

      // Confirm that the following Dotcom-only links are NOT included on this Enterprise page.
      msg = `Dotcom-only article link is rendered, but should not be, on ${enterpriseVersionedLandingPage}`
      expect($productArticlesLinks.text().includes('Adding or editing a payment method')).toBe(
        false
      )
      expect($productArticlesLinks.text().includes('Setting your billing email'), msg).toBe(false)
    })
  })
})
