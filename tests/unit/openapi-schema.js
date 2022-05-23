import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

import { describe } from '@jest/globals'
import walk from 'walk-sync'
import { isPlainObject, difference } from 'lodash-es'

import { allVersions } from '../../lib/all-versions.js'
import getRest from '../../lib/rest/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schemasPath = path.join(__dirname, '../../lib/rest/static/decorated')

async function getFlatListOfOperations(version) {
  const flatList = []
  const operations = await getRest(version)

  for (const category of Object.keys(operations)) {
    const subcategories = Object.keys(operations[category])
    for (const subcategory of subcategories) {
      flatList.push(...operations[category][subcategory])
    }
  }
  return flatList
}

describe('markdown for each rest version', () => {
  test('markdown file exists for every operationId prefix in all versions of the OpenAPI schema', async () => {
    // list of REST markdown files that do not correspond to REST API resources
    // TODO could we get this list dynamically, say via page frontmatter?
    const excludeFromResourceNameCheck = ['README.md', 'index.md', 'guides', 'overview']

    // Unique set of all categories across all versions of the OpenAPI schema
    const allCategories = new Set()

    for (const version in allVersions) {
      const restOperations = await getRest(version)
      Object.keys(restOperations).forEach((category) => allCategories.add(category))
    }

    const referenceDir = path.join(__dirname, '../../content/rest')
    const filenames = (await fs.readdir(referenceDir))
      .filter(
        (filename) =>
          !excludeFromResourceNameCheck.find((excludedFile) => filename.endsWith(excludedFile))
      )
      .map((filename) => filename.replace('.md', ''))

    const missingResource =
      'Found a markdown file in content/rest that is not represented by an OpenAPI REST operation category.'
    expect(difference(filenames, [...allCategories]), missingResource).toEqual([])

    const missingFile =
      'Found an OpenAPI REST operation category that is not represented by a markdown file in content/rest.'
    expect(difference([...allCategories], filenames), missingFile).toEqual([])
  })
})

describe('OpenAPI schema validation', () => {
  // ensure every version defined in allVersions has a correlating static
  // decorated file, while allowing decorated files to exist when a version
  // is not yet defined in allVersions (e.g., a GHEC static file can exist
  // even though the version is not yet supported in the docs)
  test('every OpenAPI version must have a schema file in the docs', async () => {
    const decoratedFilenames = walk(schemasPath).map((filename) => path.basename(filename, '.json'))

    Object.values(allVersions)
      .map((version) => version.openApiVersionName)
      .forEach((openApiBaseName) => {
        expect(decoratedFilenames.includes(openApiBaseName)).toBe(true)
      })
  })

  test('operations object structure organized by version, category, and subcategory', async () => {
    for (const version in allVersions) {
      const operations = await getFlatListOfOperations(version)
      expect(operations.every((operation) => operation.verb)).toBe(true)
    }
  })

  test('no wrongly detected AppleScript syntax highlighting in schema data', async () => {
    expect.assertions(Object.keys(allVersions).length)
    await Promise.all(
      Object.keys(allVersions).map(async (version) => {
        const operations = await getRest(version)
        expect(JSON.stringify(operations).includes('hljs language-applescript')).toBe(false)
      })
    )
  })
})

async function findOperation(version, method, path) {
  const allOperations = await getFlatListOfOperations(version)
  return allOperations.find((operation) => {
    return operation.requestPath === path && operation.verb.toLowerCase() === method.toLowerCase()
  })
}

describe('code examples are defined', () => {
  test('GET', async () => {
    for (const version in allVersions) {
      if (version === 'enterprise-server@3.2' || version === 'enterprise-server@3.1') continue

      let domain = 'https://api.github.com'
      if (version.includes('enterprise-server')) {
        domain = 'http(s)://HOSTNAME/api/v3'
      } else if (version === 'github-ae@latest') {
        domain = 'https://HOSTNAME/api/v3'
      }

      const operation = await findOperation(version, 'GET', '/repos/{owner}/{repo}')
      expect(operation.serverUrl).toBe(domain)
      expect(isPlainObject(operation)).toBe(true)
      expect(operation.codeExamples).toBeDefined()
      operation.codeExamples.forEach((example) => {
        expect(isPlainObject(example.request)).toBe(true)
        expect(isPlainObject(example.response)).toBe(true)
      })
    }
  })
})
