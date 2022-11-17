import { describe, jest } from '@jest/globals'

import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import { get } from '../helpers/e2etest.js'
import languages from '../../lib/languages.js'
import Page from '../../lib/page.js'

describe('server', () => {
  jest.setTimeout(60 * 1000)

  test('basic redirecting', async () => {
    const res = await get('/admin/release-notes')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(
      // Note that English is the default fallback for redirects
      `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/release-notes`
    )
  })
  test('basic rendering', async () => {
    const res = await get('/admin/release-notes', { followAllRedirects: true })
    expect(res.statusCode).toBe(200)
  })

  test('every version that has release-notes', async () => {
    // The English content page's `versions:` frontmatter is the source
    // of (convenient) truth about which versions of this page is available.
    const page = await Page.init({
      basePath: 'content',
      relativePath: 'admin/release-notes.md',
      languageCode: 'en',
    })
    const testLanguages = []
    for (const [langCode, langObj] of Object.entries(languages)) {
      if (!langObj.wip) {
        testLanguages.push(langCode)
      }
    }
    await Promise.all(
      page.applicableVersions.map(async (version) => {
        await Promise.all(
          testLanguages.map(async (language) => {
            const url = `/${language}/${version}/admin/release-notes`
            const res = await get(url)
            expect(res.statusCode).toBe(200)
          })
        )
      })
    )
  })
})
