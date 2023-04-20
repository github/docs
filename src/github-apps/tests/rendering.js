import { jest, test } from '@jest/globals'

import { get, getDOM } from '../../../tests/helpers/e2etest.js'
import { categoriesWithoutSubcategories } from '../../rest/lib/index.js'
import { getEnabledForApps } from '../lib/index.js'
import { isApiVersioned, allVersions } from '../../../lib/all-versions.js'

describe('REST references docs', () => {
  jest.setTimeout(3 * 60 * 1000)

  // Checks every version of the
  // /rest/overview/endpoints-available-for-github-apps page
  // and ensures that all sections in the openapi schema
  // are present in the page.
  test('loads operations enabled for GitHub Apps', async () => {
    const flatMapping = getFlatMappingWithCalendarDates()

    for (const [version, versionValue] of Object.entries(flatMapping)) {
      const schemaSlugs = []
      const enabledForApps = await getEnabledForApps(version, versionValue.apiVersion)

      // using the static file, generate the expected slug for each operation
      for (const [key, value] of Object.entries(enabledForApps)) {
        schemaSlugs.push(
          ...value.map(
            (item) =>
              `/en${
                versionValue.url === '' ? versionValue.url : `/${versionValue.url}`
              }/rest/${key}${
                categoriesWithoutSubcategories.includes(key) ? '' : '/' + item.subcategory
              }#${item.slug}`
          )
        )
      }
      // get all of the href attributes in the anchor tags
      const $ = await getDOM(
        `/en/${versionValue.url}/rest/overview/endpoints-available-for-github-apps${
          versionValue.apiVersion ? `?apiVersion=${versionValue.apiVersion}` : ''
        }`
      )
      const domH3Ids = $('#article-contents a')
        .map((i, a) => $(a).attr('href'))
        .get()
      expect(schemaSlugs.every((slug) => domH3Ids.includes(slug))).toBe(true)
    }
  })

  test('falls back when unsupported calendar version provided', async () => {
    const res = await get(
      `/en/rest/overview/endpoints-available-for-github-apps?${new URLSearchParams({
        apiVersion: 'junk',
      })}`
    )
    expect(res.statusCode).toBe(200)
  })
})

// This gets a flat mapping for all REST versions (versioned and unversioned) and creates a mapping between
// the full name of the version including calendar dates to its url name and apiVersion if it exists.
// Example:
// {
// free-pro-team@latest: { url: '', apiVersion: 2022-08-09 }
// free-pro-team@latest: { url: '', apiVersion: 2022-11-14 }
// enterprise-cloud@latest: { url: 'enterprise-cloud@latest, apiVersion: 2022-11-14 }
// enterprise-server@3.6: { url: enterprise-server@3.6 }
// }
function getFlatMappingWithCalendarDates() {
  const flatMapping = {}

  for (const version in allVersions) {
    if (isApiVersioned(version)) {
      for (const apiVersion of allVersions[version].apiVersions) {
        flatMapping[allVersions[version].version] = {
          url: `${version === 'free-pro-team@latest' ? '' : allVersions[version].version}`,
          apiVersion,
        }
      }
    } else {
      flatMapping[allVersions[version].version] = { url: allVersions[version].version }
    }
  }

  return flatMapping
}
