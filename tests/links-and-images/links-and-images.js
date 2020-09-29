const cheerio = require('cheerio')
const loadPages = require('../../lib/pages')
const loadSiteData = require('../../lib/site-data')
const getApplicableVersions = require('../../lib/get-applicable-versions')
const renderContent = require('../../lib/render-content')
const checkImages = require('../../lib/check-images')
const checkLinks = require('../../lib/check-links')
const flat = require('flat')
const { last } = require('lodash')

// english only for now
const languageCode = 'en'

const context = { currentLanguage: languageCode }

const loadRedirects = require('../../lib/redirects/precompile')

describe('page rendering', () => {
  jest.setTimeout(1000 * 1000)

  const brokenImages = {}
  const brokenAnchors = {}
  const brokenLinks = {}

  let pages, siteData, redirects
  beforeAll(async (done) => {
    pages = await loadPages()
    siteData = await loadSiteData()
    redirects = await loadRedirects(pages)

    context.pages = pages
    context.site = siteData[languageCode].site
    context.redirects = redirects

    let checkedLinks = {}
    let checkedImages = {}

    const englishPages = pages
      .filter(page => page.languageCode === languageCode)
      // ignore developers content, to be checked separately
      .filter(page => !page.relativePath.match(/^(rest|graphql|developers)/))

    for (const page of englishPages) {
      // skip map topics because they have no content of their own
      if (page.mapTopic) continue

      const brokenImagesPerPage = {}
      const brokenAnchorsPerPage = {}
      const brokenLinksPerPage = {}

      // get an array of the pages product versions
      const pageVersions = getApplicableVersions(page.versions, page.relativePath)

      for (const pageVersion of pageVersions) {
        // attach page-specific properties to context
        page.version = pageVersion
        context.page = page
        context.currentVersion = pageVersion

        // collect elements of the page that may contain links
        const pageContent = page.intro + page.permissions + page.markdown

        // renderContent is much faster than page.render, even though we later have to run
        // rewriteLocalLinks in check-images and rewriteAssetPathsToS3 in check-links
        const pageHtml = await renderContent(pageContent, context)
        const $ = cheerio.load(pageHtml, { xmlMode: true })

        // check images
        const { brokenImages: brokenImagesPerVersion, checkedImageCache } = await checkImages($, pageVersion, page.relativePath, checkedImages)
        if (brokenImagesPerVersion.length) brokenImagesPerPage[pageVersion] = brokenImagesPerVersion
        checkedImages = checkedImageCache

        // check anchors and links
        const { brokenLinks: brokenLinksPerVersion, checkedLinkCache } = await checkLinks($, page, context, pageVersion, checkedLinks)
        if (brokenLinksPerVersion.anchors.length) brokenAnchorsPerPage[pageVersion] = brokenLinksPerVersion.anchors
        if (brokenLinksPerVersion.links.length) brokenLinksPerPage[pageVersion] = brokenLinksPerVersion.links
        checkedLinks = checkedLinkCache
      }

      if (Object.keys(brokenImagesPerPage).length) brokenImages[page.fullPath] = brokenImagesPerPage
      if (Object.keys(brokenAnchorsPerPage).length) brokenAnchors[page.fullPath] = brokenAnchorsPerPage
      if (Object.keys(brokenLinksPerPage).length) brokenLinks[page.fullPath] = brokenLinksPerPage
    }
    done()
  })

  test('every page has image references that can be resolved', async () => {
    const numbrokenImages = getNumBrokenItems(brokenImages)
    expect(numbrokenImages, `Found ${numbrokenImages} total broken images: ${JSON.stringify(brokenImages, null, 2)}`).toBe(0)
  })

  test('every page has links with anchors that can be resolved', async () => {
    const numbrokenAnchors = getNumBrokenItems(brokenAnchors)
    expect(numbrokenAnchors, `Found ${numbrokenAnchors} total broken anchors: ${JSON.stringify(brokenAnchors, null, 2)}`).toBe(0)
  })

  test('every page has links that can be resolved', async () => {
    const numbrokenLinks = getNumBrokenItems(brokenLinks)
    expect(numbrokenLinks, `Found ${numbrokenLinks} total broken links: ${JSON.stringify(brokenLinks, null, 2)}`).toBe(0)
  })
})

// count all the nested items
function getNumBrokenItems (items) {
  // filter for entries like this:
  // '/article-path-here.md.dotcom.1.broken link': '/en/articles/foo',
  return Object.keys(flat(items))
    .filter(key => last(key.split('.')).includes('broken'))
    .length
}
