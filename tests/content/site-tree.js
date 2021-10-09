import revalidator from 'revalidator'
import schema from '../helpers/schemas/site-tree-schema.js'
import EnterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import { loadSiteTree } from '../../lib/page-data.js'
import japaneseCharacters from 'japanese-characters'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
import { jest } from '@jest/globals'

const latestEnterpriseRelease = EnterpriseServerReleases.latest

describe('siteTree', () => {
  jest.setTimeout(3 * 60 * 1000)

  let siteTree
  beforeAll(async () => {
    siteTree = await loadSiteTree()
  })

  test('has language codes as top-level keys', () => {
    expect('en' in siteTree).toBe(true)
    expect('ja' in siteTree).toBe(true)
  })

  test('object order and structure', () => {
    expect(siteTree.en[nonEnterpriseDefaultVersion].childPages[0].href).toBe('/en/get-started')
    expect(siteTree.en[nonEnterpriseDefaultVersion].childPages[0].childPages[0].href).toBe(
      '/en/get-started/quickstart'
    )
  })

  describe('localized titles', () => {
    test('titles for categories', () => {
      const japaneseTitle =
        siteTree.ja[nonEnterpriseDefaultVersion].childPages[0].childPages[0].page.title
      expect(typeof japaneseTitle).toBe('string')
      expect(japaneseCharacters.presentIn(japaneseTitle)).toBe(true)

      const englishTitle =
        siteTree.en[nonEnterpriseDefaultVersion].childPages[0].childPages[0].page.title
      expect(typeof englishTitle).toBe('string')
      expect(japaneseCharacters.presentIn(englishTitle)).toBe(false)
    })

    test('articles that include site data in liquid templating', async () => {
      const ghesLatest = `enterprise-server@${latestEnterpriseRelease}`
      const ghesSiteTree = siteTree.en[ghesLatest]

      // Find a page in the tree that we know contains Liquid
      // TODO: use new findPageInSiteTree helper when it's available
      const pageWithDynamicTitle = ghesSiteTree.childPages
        .find((child) => child.href === `/en/${ghesLatest}/admin`)
        .childPages.find((child) => child.href === `/en/${ghesLatest}/admin/enterprise-support`)

      // Confirm the raw title contains Liquid
      expect(pageWithDynamicTitle.page.title).toEqual(
        'Working with {% data variables.contact.github_support %}'
      )

      // Confirm a new property contains the rendered title
      expect(pageWithDynamicTitle.renderedFullTitle).toEqual('Working with GitHub Support')
    })
  })

  test('object validation', () => {
    const childPages = siteTree.en[nonEnterpriseDefaultVersion].childPages
    expect(childPages.length).toBeGreaterThan(0)

    validate(siteTree.en[nonEnterpriseDefaultVersion])
  })
})

function validate(currentPage) {
  ;(currentPage.childPages || []).forEach((childPage) => {
    const { valid, errors } = revalidator.validate(childPage, schema.childPage)
    const expectation = JSON.stringify(errors, null, 2)
    expect(valid, expectation).toBe(true)

    // Run recurisvely until we run out of child pages
    validate(childPage)
  })
}
