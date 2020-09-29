const loadPages = require('../../lib/pages')
const renderContent = require('../../lib/render-content')
const allVersions = Object.keys(require('../../lib/all-versions'))

describe('toc links', () => {
  jest.setTimeout(3 * 60 * 1000)

  test('every toc link works without redirects', async () => {
    const pages = await loadPages()

    const englishIndexPages = pages
      .filter(page => page.languageCode === 'en' && page.relativePath.endsWith('index.md'))

    const issues = []

    for (const pageVersion of allVersions) {
      for (const page of englishIndexPages) {
        // skip page if it doesn't have a permalink for the current product version
        if (!page.permalinks.some(permalink => permalink.pageVersion === pageVersion)) continue

        // build fake context object for rendering the page
        const context = {
          page,
          pages,
          redirects: {},
          currentLanguage: 'en',
          currentVersion: pageVersion
        }

        // ensure all toc pages can render
        try {
          await renderContent(page.markdown, context)
        } catch (err) {
          issues.push({
            'TOC path': page.relativePath,
            error: err.message,
            pageVersion
          })
        }
      }
    }

    const message = 'broken link in a TOC: ' + JSON.stringify(issues, null, 2)
    expect(issues.length, message).toBe(0)
  })
})
