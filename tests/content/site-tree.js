const revalidator = require('revalidator')
const schema = require('../helpers/schemas/site-tree-schema')
const latestEnterpriseRelease = require('../../lib/enterprise-server-releases').latest
const { loadSiteTree } = require('../../lib/page-data')
const loadData = require('../../lib/site-data')
const japaneseCharacters = require('japanese-characters')
const nonEnterpriseDefaultVersion = require('../../lib/non-enterprise-default-version')
const renderTreeTitlesMiddleware = require('../../middleware/contextualizers/render-tree-titles')

describe('siteTree', () => {
  jest.setTimeout(3 * 60 * 1000)

  let siteTree, siteData
  beforeAll(async (done) => {
    siteTree = await loadSiteTree()
    siteData = await loadData()
    done()
  })

  test('has language codes as top-level keys', () => {
    expect('en' in siteTree).toBe(true)
    expect('ja' in siteTree).toBe(true)
  })

  test('object order and structure', () => {
    expect(Object.keys(siteTree)[0]).toBe('en')
    expect(Object.keys(siteTree.en)[0]).toBe(nonEnterpriseDefaultVersion)
    expect(siteTree.en[nonEnterpriseDefaultVersion].childPages[0].href).toBe('/en/github')
    expect(siteTree.en[nonEnterpriseDefaultVersion].childPages[0].childPages[0].href).toBe('/en/github/getting-started-with-github')
  })

  describe('localized titles', () => {
    test('titles for categories', () => {
      const japaneseTitle = siteTree.ja[nonEnterpriseDefaultVersion].childPages[0].childPages[0].page.title
      expect(typeof japaneseTitle).toBe('string')
      expect(japaneseCharacters.presentIn(japaneseTitle)).toBe(true)

      const englishTitle = siteTree.en[nonEnterpriseDefaultVersion].childPages[0].childPages[0].page.title
      expect(typeof englishTitle).toBe('string')
      expect(japaneseCharacters.presentIn(englishTitle)).toBe(false)
    })

    test('articles that include site data in liquid templating', async () => {
      const ghesLatest = `enterprise-server@${latestEnterpriseRelease}`
      const ghesSiteTree = siteTree.en[ghesLatest]

      // Find a page in the tree that we know contains Liquid
      const pageWithDynamicTitle = ghesSiteTree
        .childPages.find(child => child.href === `/en/${ghesLatest}/admin`)
        .childPages.find(child => child.href === `/en/${ghesLatest}/admin/enterprise-support`)

      // Confirm the raw title contains Liquid
      expect(pageWithDynamicTitle.page.title).toEqual('Working with {% data variables.contact.github_support %}')

      // Create a req so we can apply middleware
      const req = {
        context: {
          page: ghesSiteTree.childPages[0].page, // this can be any non-homepage page
          siteTree,
          currentLanguage: 'en',
          currentVersion: ghesLatest,
          site: siteData.en.site
        }
      }

      // Pass the test req and an empty res and next
      await renderTreeTitlesMiddleware(req, {}, () => {})

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

function validate (currentPage) {
  (currentPage.childPages || []).forEach(childPage => {
    const { valid, errors } = revalidator.validate(childPage, schema.childPage)
    const expectation = JSON.stringify(errors, null, 2)
    expect(valid, expectation).toBe(true)

    // Run recurisvely until we run out of child pages
    validate(childPage)
  })
}
