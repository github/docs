const { LinksChecker, buildInitialContext, buildPathContext } = require('../helpers/links-checker')
const { uniq } = require('lodash')
const languageCode = 'en'

// TODO set to true when we're ready to report and fix broken anchors
const checkExternalAnchors = false

describe('page rendering', () => {
  jest.setTimeout(1000 * 1000)

  const linksChecker = new LinksChecker()

  beforeAll(async (done) => {
    // fetch context.pages, context.redirects, etc.
    // we only want to build these one time
    const context = await buildInitialContext()

    const englishPages = uniq(Object.values(context.pages))
      .filter(page => page.languageCode === languageCode)

    for (const page of englishPages) {
      for (const permalink of page.permalinks) {
        const pathContext = await buildPathContext(context, page, permalink)
        await linksChecker.checkPage(pathContext, checkExternalAnchors)
      }
    }

    done()
  })

  test('every page has image references that can be resolved', async () => {
    const result = await linksChecker.getBrokenImages()
    expect(result.size, `Found ${result.size} total broken images: ${JSON.stringify([...result], null, 2)}`).toBe(0)
  })

  // When ready to unskip this,
  test.skip('every page has links with anchors that can be resolved', async () => {
    const result = await linksChecker.getBrokenAnchors()
    const numBrokenAnchors = [...result].reduce((accumulator, [path, anchors]) => accumulator + Object.keys(anchors).length, 0)
    expect(numBrokenAnchors, `Found ${numBrokenAnchors} total broken anchors in ${result.size} pages: ${JSON.stringify([...result], null, 2)}`).toBe(0)
  })

  test('every page has links that can be resolved', () => {
    const result = linksChecker.getBrokenLinks()
    expect(result.size, `Found ${result.size} total broken links: ${JSON.stringify([...result], null, 2)}`).toBe(0)
  })
})
