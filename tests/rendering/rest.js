import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'
import { difference } from 'lodash-es'
import { getDOM } from '../helpers/supertest.js'
import getRest, { getEnabledForApps } from '../../lib/rest/index.js'
import { jest } from '@jest/globals'
import { allVersions } from '../../lib/all-versions.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// list of REST markdown files that do not correspond to REST API resources
// TODO could we get this list dynamically, say via page frontmatter?
const excludeFromResourceNameCheck = [
  'endpoints-available-for-github-apps.md',
  'permissions-required-for-github-apps.md',
  'index.md',
]

describe('REST references docs', () => {
  jest.setTimeout(3 * 60 * 1000)

  let operations

  beforeAll(async () => {
    operations = await getRest()
  })

  test('markdown file exists for every operationId prefix in the api.github.com schema', async () => {
    const categories = [
      ...new Set(
        Object.values(operations)
          .map((version) => Object.keys(version))
          .flat()
      ),
    ]
    const referenceDir = path.join(__dirname, '../../content/rest/reference')
    const filenames = (await fs.readdir(referenceDir))
      .filter(
        (filename) =>
          !excludeFromResourceNameCheck.find((excludedFile) => filename.endsWith(excludedFile))
      )
      .map((filename) => filename.replace('.md', ''))

    const missingResource =
      'Found a markdown file in content/rest/reference that is not represented by an OpenAPI REST operation category.'
    expect(difference(filenames, categories), missingResource).toEqual([])

    const missingFile =
      'Found an OpenAPI REST operation category that is not represented by a markdown file in content/rest/reference.'
    expect(difference(categories, filenames), missingFile).toEqual([])
  })

  test('loads schema data for all versions', async () => {
    for (const version in allVersions) {
      const $ = await getDOM(`/en/${version}/rest/reference/checks`)
      const domH3Ids = $('h3')
        .map((i, h3) => $(h3).attr('id'))
        .get()
      const schemaSlugs = Object.values(operations[version].checks)
        .flat()
        .map((operation) => operation.slug)
      expect(schemaSlugs.every((slug) => domH3Ids.includes(slug))).toBe(true)
    }
  })

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

  test('no wrongly detected AppleScript syntax highlighting in schema data', async () => {
    const operations = await getRest()
    expect(JSON.stringify(operations).includes('hljs language-applescript')).toBe(false)
  })
})
