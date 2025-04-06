import { readFile } from 'fs/promises'

import { describe, expect, test, vi } from 'vitest'

import { allVersions } from '#src/versions/lib/all-versions.js'
import { get, getDOM } from '#src/tests/helpers/e2etest.js'
import { categoriesWithoutSubcategories } from '#src/rest/lib/index.js'
import { getAppsData } from '#src/github-apps/lib/index.js'

const configContent = JSON.parse(await readFile('src/github-apps/lib/config.json', 'utf8'))
const pageTypes = Object.keys(configContent.pages)
const permissionPages = pageTypes.filter((pageType) => pageType.includes('permissions'))
const enabledPages = pageTypes.filter((pageType) => !pageType.includes('permissions'))
const defaultVersion = Object.values(allVersions)
  .filter((version) => version.nonEnterpriseDefault)
  .shift()
const version = defaultVersion.version
const apiVersion = defaultVersion.latestApiVersion

describe('REST references docs', () => {
  vi.setConfig({ testTimeout: 3 * 60 * 1000 })
  // This test ensures that the page component and the Markdown file are
  // in sync. It also checks that all expected items are present.
  // For every version of /rest/overview/endpoints-available-for-github-apps
  test('loads enabled list pages', async () => {
    for (const page of enabledPages) {
      const schemaSlugs = []

      const enabledForApps = await getAppsData(page, version, apiVersion)

      // using the static file, generate the expected slug for each operation
      for (const [key, value] of Object.entries(enabledForApps)) {
        schemaSlugs.push(
          ...value.map(
            (item) =>
              `/en/rest/${key}${
                categoriesWithoutSubcategories.includes(key) ? '' : '/' + item.subcategory
              }#${item.slug}`,
          ),
        )
      }
      // get all of the href attributes in the anchor tags
      const contentPath = configContent.pages[page].targetFilename
        .replace('content/', '')
        .replace('.md', '')
      const $ = await getDOM(`/en/${contentPath}${apiVersion ? `?apiVersion=${apiVersion}` : ''}`)
      const domH3Ids = $('#article-contents a')
        .map((i, a) => $(a).attr('href'))
        .get()
      expect(schemaSlugs.every((slug) => domH3Ids.includes(slug))).toBe(true)
    }
  })

  test('loads permission list pages', async () => {
    // permissions pages
    for (const page of permissionPages) {
      const schemaSlugs = []

      const permissionsData = await getAppsData(page, version, apiVersion)

      // using the static file, generate the expected slug for each operation
      for (const value of Object.values(permissionsData)) {
        schemaSlugs.push(
          ...value.permissions.map(
            (item) =>
              `/en/rest/${item.category}${
                categoriesWithoutSubcategories.includes(item.category) ? '' : '/' + item.subcategory
              }#${item.slug}`,
          ),
        )
      }

      // get all of the href attributes in the anchor tags
      const contentPath = configContent.pages[page].targetFilename
        .replace('content/', '')
        .replace('.md', '')
      const $ = await getDOM(`/en/${contentPath}${apiVersion ? `?apiVersion=${apiVersion}` : ''}`)
      const domH3Ids = $('#article-contents table tbody tr td a')
        .map((i, a) => $(a).attr('href'))
        .get()
      expect(schemaSlugs.every((slug) => domH3Ids.includes(slug))).toBe(true)
    }
  })

  for (const page of pageTypes) {
    const contentPath = configContent.pages[page].targetFilename
      .replace('content/', '')
      .replace('.md', '')
    const url = `/${contentPath}?${new URLSearchParams({ apiVersion: 'junk' })}`

    test(`falls back when unsupported calendar version provided for ${contentPath}`, async () => {
      const res = await get(url, { followRedirects: true })
      expect(res.statusCode).toBe(200)
    })
  }
})
