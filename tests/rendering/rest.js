import { jest } from '@jest/globals'
import slugger from 'github-slugger'

import { getDOM } from '../helpers/e2etest.js'
import getRest, { getEnabledForApps } from '../../lib/rest/index.js'
import { allVersions } from '../../lib/all-versions.js'
import { getDiffOpenAPIContentRest } from '../../script/rest/test-open-api-schema.js'

describe('REST references docs', () => {
  jest.setTimeout(3 * 60 * 1000)

  // Checks that every version of the /rest/checks
  // page has every operation defined in the openapi schema.
  test('loads schema data for all versions', async () => {
    for (const version in allVersions) {
      const checksRestOperations = await getRest(version, 'checks', 'runs')
      const $ = await getDOM(`/en/${version}/rest/checks/runs`)
      const domH2Ids = $('h2')
        .map((i, h2) => $(h2).attr('id'))
        .get()
      const schemaSlugs = checksRestOperations.map((operation) => slugger.slug(operation.title))
      expect(schemaSlugs.every((slug) => domH2Ids.includes(slug))).toBe(true)
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

  test('test OpenAPI schema categories/subcategories by versions matches content/rest directory', async () => {
    const differences = await getDiffOpenAPIContentRest()
    const errorMessage = formatErrors(differences)
    expect(Object.keys(differences).length, errorMessage).toBe(0)
  })
})

function formatErrors(differences) {
  let errorMessage = 'There are differences in Categories/Subcategories in:\n'
  for (const schema in differences) {
    errorMessage += 'Version: ' + schema + '\n'
    for (const category in differences[schema]) {
      errorMessage += 'Category: ' + category + '\nSubcategories: \n'
      errorMessage +=
        '  - content/rest directory: ' + differences[schema][category].contentDir + '\n'
      errorMessage += '  - OpenAPI Schema: ' + differences[schema][category].openAPI + '\n'
      errorMessage += '---\n'
    }
  }
  return errorMessage
}
