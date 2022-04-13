import { jest } from '@jest/globals'

import { getDOM } from '../helpers/e2etest.js'
import getRest, { getEnabledForApps } from '../../lib/rest/index.js'
import { allVersions } from '../../lib/all-versions.js'

describe('REST references docs', () => {
  jest.setTimeout(3 * 60 * 1000)

  // Checks that every version of the /rest/references/checks
  // page has every operation defined in the openapi schema.
  test('loads schema data for all versions', async () => {
    for (const version in allVersions) {
      const checksRestOperations = getRest(version, 'checks')
      const $ = await getDOM(`/en/${version}/rest/reference/checks`)
      const domH3Ids = $('h3')
        .map((i, h3) => $(h3).attr('id'))
        .get()
      const schemaSlugs = Object.values(checksRestOperations)
        .flat()
        .map((operation) => operation.slug)
      expect(schemaSlugs.every((slug) => domH3Ids.includes(slug))).toBe(true)
    }
  })

  // Checks every version of the
  // /rest/overview/endpoints-available-for-github-apps page
  // and ensures that all sections in the openapi schema
  // are present in the page.
  test('loads operations enabled for GitHub Apps', async () => {
    const enableForApps = await getEnabledForApps()

    for (const version in allVersions) {
      const schemaSlugs = []
      // using the static file, generate the expected slug for each operation
      for (const [key, value] of Object.entries(enableForApps[version])) {
        schemaSlugs.push(...value.map((item) => `/en/rest/reference/${key}#${item.slug}`))
      }
      // get all of the href attributes in the anchor tags
      const $ = await getDOM(`/en/${version}/rest/overview/endpoints-available-for-github-apps`)
      const domH3Ids = $('#article-contents a')
        .map((i, a) => $(a).attr('href'))
        .get()
      expect(schemaSlugs.every((slug) => domH3Ids.includes(slug))).toBe(true)
    }
  })
})
