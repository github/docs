import { jest, test } from '@jest/globals'
import { slug } from 'github-slugger'

import { get, getDOM } from '../../../tests/helpers/e2etest.js'
import { isApiVersioned, allVersions } from '#src/versions/lib/all-versions.js'
import { getDiffOpenAPIContentRest } from '../scripts/test-open-api-schema.js'
import getRest from '#src/rest/lib/index.js'

describe('REST references docs', () => {
  jest.setTimeout(3 * 60 * 1000)

  // This test ensures that the page component and the Markdown file are
  // in sync. It checks that every version of the /rest/checks
  // page has every operation defined in the openapi schema.
  test('loads schema data for all versions', async () => {
    for (const version in allVersions) {
      const calendarDate = allVersions[version].latestApiVersion
      const checksRestOperations = await getRest(version, calendarDate, 'checks', 'runs')
      const $ = await getDOM(`/en/${version}/rest/checks/runs?restVersion=${calendarDate}`)
      const domH2Ids = $('h2')
        .map((i, h2) => $(h2).attr('id'))
        .get()
      const schemaSlugs = checksRestOperations.map((operation) => slug(operation.title))
      expect(schemaSlugs.every((slug) => domH2Ids.includes(slug))).toBe(true)
    }
  })

  // These tests exists because of issue #1960
  test('rest subcategory with fpt in URL', async () => {
    for (const category of [
      'migrations',
      'actions',
      'activity',
      'apps',
      'billing',
      'checks',
      'codes-of-conduct',
      'code-scanning',
      'codespaces',
      'emojis',
      'gists',
      'git',
      'gitignore',
      'interactions',
      'issues',
      'licenses',
      'markdown',
      'meta',
      'orgs',
      'projects',
      'pulls',
      'rate-limit',
      'reactions',
      'repos',
      'scim',
      'search',
      'teams',
      'users',
    ]) {
      // Without language prefix
      {
        const res = await get(`/free-pro-team@latest/rest/reference/${category}`)
        expect(res.statusCode).toBe(302)
        expect(
          res.headers.location === `/en/rest/${category}` ||
            res.headers.location === `/en/rest/${category}/${category}`,
        )
      }
      // With language prefix
      {
        const res = await get(`/en/free-pro-team@latest/rest/reference/${category}`)
        expect(res.statusCode).toBe(301)
        expect(
          res.headers.location === `/en/rest/${category}` ||
            res.headers.location === `/en/rest/${category}/${category}`,
        )
      }
    }
  })

  test('test the latest version of the OpenAPI schema categories/subcategories to see if it matches the content/rest directory', async () => {
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

  test('REST pages show the correct versions in the api version picker', async () => {
    for (const version in allVersions) {
      if (isApiVersioned(version)) {
        for (const apiVersion of allVersions[version].apiVersions) {
          const $ = await getDOM(`/en/${version}/rest?apiVersion=${apiVersion}`)
          const versionName = $('[data-testid=api-version-picker] [data-testid=version]')
            .text()
            .trim()
          if (apiVersion === allVersions[version].latestApiVersion) {
            expect(versionName).toBe(apiVersion + ' (latest)')
          } else {
            expect(versionName).toBe(apiVersion)
          }
        }
      } else {
        const $ = await getDOM(`/en/${version}/rest`)
        expect($('[data-testid=api-version-picker] button span').text()).toBe('')
      }
    }
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
  errorMessage += `
This test checks that the categories and subcategories in the content/rest directory matches the decorated schemas in src/rest/data for each version of the REST API.

If you have made changes to the categories or subcategories in the content/rest directory, either in the frontmatter or the structure of the directory, you will need to ensure that it matches the operations in the OpenAPI description. For example, if an operation is available in GHAE, the frontmatter versioning in the relevant docs category and subcategory files also need to be versioned for GHAE. If you are adding category or subcategory files to the content/rest directory, the OpenAPI dereferenced files must have at least one operation that will be shown for the versions in the category or subcategory files. If this is the case, it is likely that the description files have not been updated from github/github yet.

If you come across this error in an Update OpenAPI Descriptions PR it's likely that a category/subcategory has been added or removed and our content/rest directory no longer in sync with our OpenAPI Descriptions. First, please check for an open docs-internal PR that updates the content/rest directory. If you find one, merge that PR into the Update OpenAPI Descriptions PR to fix this failure. Otherwise, follow the link in the Update OpenAPI Descriptions PR body to find the author of the PR that introduced this change. Verify that the new operations are ready to be published. If yes, ask them to follow these instructions to open a docs-internal PR: https://thehub.github.com/epd/engineering/products-and-services/public-apis/rest/openapi/openapi-in-the-docs/#adding-or-changing-category-or-subcategory. If no, ask them to open a github/github PR to unpublish the operations.

If you have any questions contact #docs-engineering, #docs-content, or #docs-apis-and-events if you need help.`
  return errorMessage
}
