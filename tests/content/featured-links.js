import '../../lib/feature-flags.js'
import { jest } from '@jest/globals'
import { getDOM, getJSON } from '../helpers/supertest.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import japaneseCharacters from 'japanese-characters'

describe('featuredLinks', () => {
  jest.setTimeout(3 * 60 * 1000)

  describe('rendering', () => {
    test('non-TOC pages do not have intro links', async () => {
      const $ = await getDOM('/en/github/getting-started-with-github/set-up-git')
      expect($('[data-testid=article-list]')).toHaveLength(0)
    })

    test('landing page intro links have expected properties', async () => {
      const $ = await getDOM('/en')
      const $featuredLinks = $('[data-testid=article-list] a')
      expect($featuredLinks).toHaveLength(9)
      expect($featuredLinks.eq(0).attr('href')).toBe(
        '/en/github/getting-started-with-github/set-up-git'
      )
      expect($featuredLinks.eq(0).children('h4').text().startsWith('Set up Git')).toBe(true)
      expect($featuredLinks.eq(0).children('p').text().startsWith('At the heart of GitHub')).toBe(
        true
      )

      expect($featuredLinks.eq(8).attr('href')).toBe('/en/github/working-with-github-pages')
      expect($featuredLinks.eq(8).children('h4').text().startsWith('GitHub Pages')).toBe(true)
      expect($featuredLinks.eq(8).children('p').text().startsWith('You can create a website')).toBe(
        true
      )
    })

    test('localized intro links link to localized pages', async () => {
      const $ = await getDOM('/ja')
      const $featuredLinks = $('[data-testid=article-list] a')
      expect($featuredLinks).toHaveLength(9)
      expect($featuredLinks.eq(0).attr('href').startsWith('/ja')).toBe(true)
      expect(japaneseCharacters.presentIn($featuredLinks.eq(1).children('h4').text())).toBe(true)
      expect(japaneseCharacters.presentIn($featuredLinks.eq(1).children('p').text())).toBe(true)
    })

    test('Enterprise user intro links have expected values', async () => {
      const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/user/get-started`)
      const $featuredLinks = $('[data-testid=article-list] a')
      console.log($featuredLinks.eq(0).attr('href'))
      expect($featuredLinks).toHaveLength(9)
      expect($featuredLinks.eq(0).attr('href')).toBe(
        `/en/enterprise-server@${enterpriseServerReleases.latest}/github/getting-started-with-github/githubs-products`
      )
      expect($featuredLinks.eq(0).children('h4').text().startsWith("GitHub's products")).toBe(true)
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
      const enterpriseVersionedLandingPage = `/en/enterprise-server@${enterpriseServerReleases.latest}/packages`
      const $ = await getDOM(enterpriseVersionedLandingPage)
      const $productArticlesLinks = $('[data-testid=product-articles-list] a')
      let msg = `Product article links are not rendered as expected on ${enterpriseVersionedLandingPage}`
      expect($productArticlesLinks.length, msg).toBeGreaterThan(2)

      // Confirm that the following Enterprise link IS included on this Enterprise page.
      msg = `Enterprise article link is not rendered as expected on ${enterpriseVersionedLandingPage}`
      expect(
        $productArticlesLinks.text().includes('Working with a GitHub Packages registry'),
        msg
      ).toBe(true)

      // Confirm that the following Dotcom-only links are NOT included on this Enterprise page.
      msg = `Dotcom-only article link is rendered, but should not be, on ${enterpriseVersionedLandingPage}`
      expect($productArticlesLinks.text().includes('Working with the Container registry')).toBe(
        false
      )
      expect(
        $productArticlesLinks
          .text()
          .includes('Migrating to the Container registry from the Docker registry'),
        msg
      ).toBe(false)
    })
  })

  describe('context.page object', () => {
    test('returns modified array of links', async () => {
      const gettingStartedLinks = await getJSON('/en?json=featuredLinks.gettingStarted')
      const expectedFirstLink = {
        href: '/en/github/getting-started-with-github/set-up-git',
        title: 'Set up Git',
      }
      expect(gettingStartedLinks[0].href).toEqual(expectedFirstLink.href)
      expect(gettingStartedLinks[0].title).toEqual(expectedFirstLink.title)
      expect(gettingStartedLinks[0].intro.startsWith('At the heart of GitHub')).toBe(true)
    })

    test('returns raw array of links on the page object', async () => {
      const rawGettingStartedLinks = await getJSON('/en?json=page.featuredLinks.gettingStarted')
      expect(rawGettingStartedLinks[0]).toEqual('/github/getting-started-with-github/set-up-git')
    })
  })
})
