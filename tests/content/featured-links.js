import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import { beforeAll, jest } from '@jest/globals'
import nock from 'nock'
import japaneseCharacters from 'japanese-characters'

import '../../lib/feature-flags.js'
import { getDOM, getJSON } from '../helpers/e2etest.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('featuredLinks', () => {
  jest.setTimeout(3 * 60 * 1000)

  beforeAll(async () => {
    const packagesFeedFixturePayload = await fs.readFile(
      path.join(__dirname, '../fixtures/github-blog-feed-packages-2021.xml'),
      'utf-8'
    )
    nock('https://github.blog')
      .get('/changelog/label/packages/feed')
      .reply(200, packagesFeedFixturePayload)
  })

  afterAll(() => nock.cleanAll())

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
      expect($featuredLinks.eq(8).children('p').text().startsWith('You can create a website')).toBe(
        true
      )
    })

    test('localized intro links link to localized pages', async () => {
      const $jaPages = await getDOM('/ja')
      const $enPages = await getDOM('/en')
      const $jaFeaturedLinks = $jaPages('[data-testid=article-list] a')
      const $enFeaturedLinks = $enPages('[data-testid=article-list] a')
      expect($jaFeaturedLinks.length).toBe($enFeaturedLinks.length)
      expect($jaFeaturedLinks.eq(0).attr('href').startsWith('/ja')).toBe(true)

      // Footer translations change very rarely if ever, so we can more
      // reliably test those text values for the language
      const footerText = []
      $jaPages('footer a').each((index, element) => {
        footerText.push($jaPages(element).text())
      })
      expect(footerText.some((elem) => japaneseCharacters.presentIn(elem)))
    })

    test('Enterprise user intro links have expected values', async () => {
      const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/user/get-started`)
      const $featuredLinks = $('[data-testid=article-list] a')
      expect($featuredLinks).toHaveLength(11)
      expect($featuredLinks.eq(0).attr('href')).toBe(
        `/en/enterprise-server@${enterpriseServerReleases.latest}/github/getting-started-with-github/githubs-products`
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
        href: '/en/get-started/quickstart/set-up-git',
        title: 'Set up Git',
      }
      expect(gettingStartedLinks[0].href).toEqual(expectedFirstLink.href)
      expect(gettingStartedLinks[0].title).toEqual(expectedFirstLink.title)
      expect(gettingStartedLinks[0].intro.startsWith('At the heart of GitHub')).toBe(true)
    })

    test('returns raw array of links on the page object', async () => {
      const rawGettingStartedLinks = await getJSON('/en?json=page.featuredLinks.gettingStarted')
      expect(rawGettingStartedLinks[0]).toEqual('/get-started/quickstart/set-up-git')
    })
  })
})
