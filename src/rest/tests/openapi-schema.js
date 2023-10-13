import fs from 'fs'
import path from 'path'

import { describe } from '@jest/globals'
import walk from 'walk-sync'
import { isPlainObject, difference } from 'lodash-es'

import { isApiVersioned, allVersions } from '#src/versions/lib/all-versions.js'
import getRest from '../lib/index.js'
import readFrontmatter from '../../../lib/read-frontmatter.js'
import frontmatter from '../../../lib/frontmatter.js'
import getApplicableVersions from '../../versions/lib/get-applicable-versions.js'

const schemasPath = 'src/rest/data'

async function getFlatListOfOperations(version) {
  const flatList = []

  if (isApiVersioned(version)) {
    const apiVersions = allVersions[version].apiVersions

    for (const apiVersion of apiVersions) {
      const operations = await getRest(version, apiVersion)
      flatList.push(...createCategoryList(operations))
    }
  } else {
    const operations = await getRest(version)
    flatList.push(...createCategoryList(operations))
  }

  return flatList
}

function createCategoryList(operations) {
  const catSubCatList = []
  for (const category of Object.keys(operations)) {
    const subcategories = Object.keys(operations[category])
    for (const subcategory of subcategories) {
      catSubCatList.push(...operations[category][subcategory])
    }
  }

  return catSubCatList
}

describe('markdown for each rest version', () => {
  // Unique set of all categories across all versions of the OpenAPI schema
  const allCategories = new Set()
  // Entire schema including categories and subcategories
  const openApiSchema = {}
  // All applicable version of categories based on frontmatter in the categories index.md file
  const categoryApplicableVersions = {}
  const referenceDir = path.join(process.cwd(), 'content/rest')
  const excludeFromResourceNameCheck = [
    'README.md',
    'index.md',
    'guides',
    'overview',
    'quickstart.md',
  ]

  function getApplicableVersionFromFile(file) {
    const currentFile = fs.readFileSync(file, 'utf8')
    const { data } = frontmatter(currentFile)
    return getApplicableVersions(data.versions, file)
  }

  function getCategorySubcategory(file) {
    const fileSplit = file.split('/')
    const cat = fileSplit[fileSplit.length - 2]
    const subCat = fileSplit[fileSplit.length - 1].replace('.md', '')
    return { category: cat, subCategory: subCat }
  }

  beforeAll(async () => {
    for (const version in allVersions) {
      if (isApiVersioned(version)) {
        for (const apiVersion of allVersions[version].apiVersions) {
          const apiOperations = await getRest(version, apiVersion)
          Object.keys(apiOperations).forEach((category) => allCategories.add(category))
          openApiSchema[version] = apiOperations
        }
      } else {
        const apiOperations = await getRest(version)
        Object.keys(apiOperations).forEach((category) => allCategories.add(category))
        openApiSchema[version] = apiOperations
      }
    }

    walk(referenceDir, { includeBasePath: true, directories: false })
      .filter((filename) => filename.includes('index.md'))
      .forEach((file) => {
        const applicableVersions = getApplicableVersionFromFile(file)
        const { category } = getCategorySubcategory(file)
        categoryApplicableVersions[category] = applicableVersions
      })
  })

  test('markdown file exists for every operationId prefix in all versions of the OpenAPI schema', async () => {
    // list of REST markdown files that do not correspond to REST API resources
    // TODO could we get this list dynamically, say via page frontmatter?
    const filenames = fs
      .readdirSync(referenceDir)
      .filter(
        (filename) =>
          !excludeFromResourceNameCheck.find((excludedFile) => filename.endsWith(excludedFile)),
      )
      .map((filename) => filename.replace('.md', ''))

    const missingResource =
      'Found a markdown file in content/rest that is not represented by an OpenAPI REST operation category.'
    expect(difference(filenames, [...allCategories]), missingResource).toEqual([])

    const missingFile =
      'Found an OpenAPI REST operation category that is not represented by a markdown file in content/rest.'
    expect(difference([...allCategories], filenames), missingFile).toEqual([])
  })

  test('category and subcategory exist in OpenAPI schema for every applicable version in markdown frontmatter', async () => {
    walk(referenceDir, { includeBasePath: true, directories: false })
      .filter(
        (filename) => !excludeFromResourceNameCheck.some((pattern) => filename.includes(pattern)),
      )
      .forEach((file) => {
        const applicableVersions = getApplicableVersionFromFile(file)
        const { category, subCategory } = getCategorySubcategory(file)

        for (const version of applicableVersions) {
          expect(
            Object.keys(openApiSchema[version][category]),
            `The REST version: ${version}'s category: ${category} does not include the subcategory: ${subCategory}. Please check file: ${file}`,
          ).toContain(subCategory)
          expect(categoryApplicableVersions[category]).toContain(version)
        }
      })
  })
})

describe('rest file structure', () => {
  test('children of content/rest/index.md are in alphabetical order', async () => {
    const indexContent = fs.readFileSync('content/rest/index.md', 'utf8')
    const { data } = readFrontmatter(indexContent)
    const sortableChildren = data.children.filter(
      (child) => child !== '/quickstart' && child !== '/overview' && child !== '/guides',
    )
    expect(sortableChildren).toStrictEqual([...sortableChildren].sort())
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
        // Because the rest calendar dates now have latest, next, or calendar date attached to the name, we're
        // now checking if the decorated file names now start with an openApiBaseName
        expect(
          decoratedFilenames.some((versionFile) => versionFile.startsWith(openApiBaseName)),
        ).toBe(true)
      })
  })

  test('operations object structure organized by version, category, and subcategory', async () => {
    for (const version in allVersions) {
      const operations = await getFlatListOfOperations(version)
      expect(operations.every((operation) => operation.verb)).toBe(true)
    }
  })

  test('no wrongly detected AppleScript syntax highlighting in schema data', async () => {
    const countAssertions = Object.keys(allVersions)
      .map((version) => allVersions[version].apiVersions.length)
      .reduce((prevLength, currLength) => prevLength + currLength)

    expect.assertions(countAssertions)
    await Promise.all(
      Object.keys(allVersions).map(async (version) => {
        for (const apiVersion of allVersions[version].apiVersions) {
          const operations = await getRest(version, apiVersion)
          expect(JSON.stringify(operations).includes('hljs language-applescript')).toBe(false)
        }
      }),
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
