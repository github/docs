const flat = require('flat')
const { last } = require('lodash')
const cheerio = require('cheerio')
const loadPages = require('../../lib/pages')
const loadSiteData = require('../../lib/site-data')
const getApplicableVersions = require('../../lib/get-applicable-versions')
const loadRedirects = require('../../lib/redirects/precompile')
const { getVersionedPathWithLanguage } = require('../../lib/path-utils')
const renderContent = require('../../lib/render-content')
const checkImages = require('../../lib/check-images')
const checkLinks = require('../../lib/check-developer-links')
const { getOldVersionFromNewVersion } = require('../../lib/old-versions-utils')

// schema-derived data to add to context object
const rest = require('../../lib/rest')
const previews = require('../../lib/graphql/static/previews')
const upcomingChanges = require('../../lib/graphql/static/upcoming-changes')
const changelog = require('../../lib/graphql/static/changelog')
const prerenderedObjects = require('../../lib/graphql/static/prerendered-objects')

// english only
const languageCode = 'en'

const context = {
  currentLanguage: languageCode,
  rest
}

// developer content only
const developerContentRegex = /^(rest|graphql|developers)/

describe('page rendering', () => {
  jest.setTimeout(1000 * 1000)

  const brokenImages = {}
  const brokenAnchors = {}
  const brokenLinks = {}

  beforeAll(async (done) => {
    const pages = await loadPages()
    const siteData = await loadSiteData()
    const redirects = await loadRedirects(pages)

    context.pages = pages
    context.site = siteData[languageCode].site
    context.redirects = redirects

    const developerPages = pages
      .filter(page => page.relativePath.match(developerContentRegex) && page.languageCode === languageCode)

    let checkedLinks = {}
    let checkedImages = {}

    for (const page of developerPages) {
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

        const relevantPermalink = page.permalinks.find(permalink => permalink.pageVersion === pageVersion)

        const currentOldVersion = getOldVersionFromNewVersion(pageVersion)

        // borrowed from middleware/contextualizers/graphql.js
        context.graphql = {
          schemaForCurrentVersion: require(`../../lib/graphql/static/schema-${currentOldVersion}`),
          previewsForCurrentVersion: previews[currentOldVersion],
          upcomingChangesForCurrentVersion: upcomingChanges[currentOldVersion],
          prerenderedObjectsForCurrentVersion: prerenderedObjects[currentOldVersion],
          changelog
        }

        // borrowed from middleware/contextualizers/rest.js
        context.restGitHubAppsLink = getVersionedPathWithLanguage(
          '/developers/apps',
          pageVersion,
          languageCode
        )

        context.operationsForCurrentProduct = context.rest.operations[currentOldVersion] || []

        if (relevantPermalink.href.includes('rest/reference/')) {
          const docsPath = relevantPermalink.href
            .split('rest/reference/')[1]
            .split('#')[0] // do not include #fragments

          // find all operations that with an operationID that matches the requested docs path
          context.currentRestOperations = context.operationsForCurrentProduct
            .filter(operation => operation.operationId.startsWith(docsPath))
        }

        // collect elements of the page that may contain links
        const pageContent = relevantPermalink.href.includes('graphql/reference/objects')
          ? page.markdown + context.graphql.prerenderedObjectsForCurrentVersion.html
          : page.intro + page.permissions + page.markdown

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

  test.skip('every page has links with anchors that can be resolved', async () => {
    const numbrokenAnchors = getNumBrokenItems(brokenAnchors)
    expect(numbrokenAnchors, `Found ${numbrokenAnchors} total broken anchors: ${JSON.stringify(brokenAnchors, null, 2)}`).toBe(0)
  })

  // disable anchor test til we resolve broken anchors
  test.skip('every page has links that can be resolved', async () => {
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
