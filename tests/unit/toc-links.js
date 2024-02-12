import { jest } from '@jest/globals'
import { loadPageMap, loadPages } from '../../lib/page-data.js'
import { renderContent } from '#src/content-render/index.js'
import { allVersions } from '#src/versions/lib/all-versions.js'

describe('toc links', () => {
  jest.setTimeout(3 * 60 * 1000)

  test('every toc link works without redirects', async () => {
    const pageList = await loadPages()

    const englishIndexPages = pageList.filter(
      (page) => page.languageCode === 'en' && page.relativePath.endsWith('index.md'),
    )
    const pages = await loadPageMap(pageList)

    const issues = []

    for (const pageVersion of Object.keys(allVersions)) {
      for (const page of englishIndexPages) {
        // skip page if it doesn't have a permalink for the current product version
        if (!page.permalinks.some((permalink) => permalink.pageVersion === pageVersion)) continue

        // build fake context object for rendering the page
        const context = {
          page,
          pages,
          redirects: {},
          currentLanguage: 'en',
          currentVersion: pageVersion,
          currentVersionObj: allVersions[pageVersion],
        }

        // ensure all toc pages can render
        try {
          await renderContent(page.markdown, context)
        } catch (err) {
          issues.push({
            'TOC path': page.relativePath,
            error: err.message,
            pageVersion,
          })
        }
      }
    }

    const message = 'broken link in a TOC: ' + JSON.stringify(issues, null, 2)
    expect(issues.length, message).toBe(0)
  })
})
