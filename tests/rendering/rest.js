import { jest, test } from '@jest/globals'
import slugger from 'github-slugger'

import { getDOM } from '../helpers/e2etest.js'
import getRest, { getEnabledForApps, categoriesWithoutSubcategories } from '../../lib/rest/index.js'
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
    const enabledForApps = await getEnabledForApps()

    for (const version in allVersions) {
      const schemaSlugs = []
      // One off edge case where secret-scanning should be removed from FPT. Docs Content #6637
      const noSecretScanning = { ...enabledForApps[version] }
      delete noSecretScanning['secret-scanning']
      const overrideEnabledForApps =
        version === 'free-pro-team@latest' ? noSecretScanning : enabledForApps[version]

      // using the static file, generate the expected slug for each operation
      for (const [key, value] of Object.entries(overrideEnabledForApps)) {
        schemaSlugs.push(
          ...value.map(
            (item) =>
              `/en${version === 'free-pro-team@latest' ? '' : '/' + version}/rest/${key}${
                categoriesWithoutSubcategories.includes(key) ? '' : '/' + item.subcategory
              }#${item.slug}`
          )
        )
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

  test('REST reference pages have DOM markers needed for extracting search content', async () => {
    // Pick an arbitrary REST reference page that is build from React
    const $ = await getDOM('/en/rest/actions/artifacts')
    const rootSelector = '[data-search=article-body]'
    const $root = $(rootSelector)
    expect($root.length).toBe(1)
    // Within that, should expect a "lead" text.
    // Note! Not all REST references pages have a lead. The one in this
    // test does.
    const leadSelector = '[data-search=lead] p'
    const $lead = $root.find(leadSelector)
    expect($lead.length).toBe(1)
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
  errorMessage +=
    'If you have made changes to the categories or subcategories in the content/rest directory, either in the frontmatter or the structure of the directory, you will need to ensure that it matches the operations in the OpenAPI description. For example, if an operation is available in GHAE, the frontmatter versioning in the relevant docs category and subcategory files also need to be versioned for GHAE. If you are adding category or subcategory files to the content/rest directory, the OpenAPI dereferenced files must have at least one operation that will be shown for the versions in the category or subcategory files. If this is the case, it is likely that the description files have not been updated from github/github yet. Please contact  #docs-engineering or #docs-apis-and-events if you need help.\n'
  return errorMessage
}
