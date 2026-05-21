import fs from 'fs'

import { beforeAll, describe, expect, test } from 'vitest'
import walk from 'walk-sync'
import { isPlainObject, difference } from 'lodash-es'

import { isApiVersioned, allVersions } from '@/versions/lib/all-versions'
import getRest, { getRestCategories } from '../lib/index'
import readFrontmatter from '@/frame/lib/read-frontmatter'
import frontmatter from '@/frame/lib/frontmatter'
import getApplicableVersions from '../../versions/lib/get-applicable-versions'
import { getAutomatedMarkdownFiles } from '../scripts/test-open-api-schema'
import { nonAutomatedRestPaths } from '../lib/config'

const schemasPath = 'src/rest/data'

// Operations have dynamic structure from OpenAPI schema - using any to avoid complex type definitions
async function getFlatListOfOperations(version: string): Promise<any[]> {
  const flatList = []

  if (isApiVersioned(version)) {
    for (const apiVersion of allVersions[version].apiVersions) {
      for (const category of getRestCategories(version, apiVersion)) {
        const ops = await getRest(version, apiVersion, category)
        flatList.push(...Object.values(ops).flat())
      }
    }
  } else {
    for (const category of getRestCategories(version)) {
      const ops = await getRest(version, undefined, category)
      flatList.push(...Object.values(ops).flat())
    }
  }

  return flatList
}

describe('markdown for each rest version', () => {
  // Unique set of all categories across all versions of the OpenAPI schema
  const allCategories = new Set<string>()
  // Entire schema including categories and subcategories - using any due to dynamic OpenAPI structure
  const openApiSchema: Record<string, any> = {}
  // All applicable version of categories based on frontmatter in the categories index.md file
  const categoryApplicableVersions: Record<string, any> = {}

  function getApplicableVersionFromFile(file: string) {
    const currentFile = fs.readFileSync(file, 'utf8')
    // Frontmatter data structure is dynamic based on file content
    const { data } = frontmatter(currentFile) as { data: any }
    return getApplicableVersions(data.versions, file)
  }

  function getCategorySubcategory(file: string) {
    const fileSplit = file.split('/')
    const cat = fileSplit[fileSplit.length - 2]
    const subCat = fileSplit[fileSplit.length - 1].replace('.md', '')
    return { category: cat, subCategory: subCat }
  }

  beforeAll(async () => {
    for (const version in allVersions) {
      openApiSchema[version] = {}
      if (isApiVersioned(version)) {
        for (const apiVersion of allVersions[version].apiVersions) {
          for (const category of getRestCategories(version, apiVersion)) {
            allCategories.add(category)
            openApiSchema[version][category] = await getRest(version, apiVersion, category)
          }
        }
      } else {
        for (const category of getRestCategories(version)) {
          allCategories.add(category)
          openApiSchema[version][category] = await getRest(version, undefined, category)
        }
      }
    }

    // Read the versions from each index.md file to build a list of
    // applicable versions for each category
    for (const file of walk('content/rest', { includeBasePath: true, directories: false }).filter(
      (filename) => filename.includes('index.md'),
    )) {
      const applicableVersions = getApplicableVersionFromFile(file)
      const { category } = getCategorySubcategory(file)
      categoryApplicableVersions[category] = applicableVersions
    }
  })

  test('markdown file exists for every operationId prefix in all versions of the OpenAPI schema', async () => {
    // List of categories derived from disk
    const filenames = new Set(
      getAutomatedMarkdownFiles('content/rest')
        // Gets just category level files (paths directly under /rest)
        .map((filename) => filename.split('/')[2])
        .sort(),
    )

    const missingResource =
      'Found a markdown file in content/rest that is not represented by an OpenAPI REST operation category.'
    expect(difference([...filenames], [...allCategories]), missingResource).toEqual([])

    const missingFile =
      'Found an OpenAPI REST operation category that is not represented by a markdown file in content/rest.'
    expect(difference([...allCategories], [...filenames]), missingFile).toEqual([])
  })

  test('category and subcategory exist in OpenAPI schema for every applicable version in markdown frontmatter', async () => {
    const automatedFiles = getAutomatedMarkdownFiles('content/rest')
    for (const file of automatedFiles) {
      const applicableVersions = getApplicableVersionFromFile(file)
      const { category, subCategory } = getCategorySubcategory(file)

      for (const version of applicableVersions) {
        expect(
          Object.keys(openApiSchema[version][category]),
          `The REST version: ${version}'s category: ${category} does not include the subcategory: ${subCategory}. Please check file: ${file}`,
        ).toContain(subCategory)
        expect(
          categoryApplicableVersions[category],
          `The versions that apply to category ${category} does not contain the ${version}, as is expected. Please check the versions for file ${file} or look at the index that governs that file (in its parent directory).`,
        ).toContain(version)
      }
    }
  })
})

describe('rest file structure', () => {
  test('children of content/rest/index.md are in alphabetical order', async () => {
    const indexContent = fs.readFileSync('content/rest/index.md', 'utf8')
    // Frontmatter data structure is dynamic based on file content
    const { data } = readFrontmatter(indexContent) as { data: any }
    const nonAutomatedChildren = nonAutomatedRestPaths.map((child: string) =>
      child.replace('/rest', ''),
    )
    const sortableChildren = data.children.filter(
      (child: string) => !nonAutomatedChildren.includes(child),
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
    const versionDirs = fs
      .readdirSync(schemasPath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
    const openApiBaseNames = Object.values(allVersions).map((v) => v.openApiVersionName)
    for (const openApiBaseName of openApiBaseNames) {
      expect(versionDirs.some((dir) => dir.startsWith(openApiBaseName))).toBe(true)
    }
  })

  test('operations object structure organized by version, category, and subcategory', async () => {
    for (const version in allVersions) {
      const operations = await getFlatListOfOperations(version)
      expect(operations.every((operation) => operation.verb)).toBe(true)
    }
  })

  test('no wrongly detected AppleScript syntax highlighting in schema data', async () => {
    await Promise.all(
      Object.keys(allVersions).map(async (version) => {
        if (isApiVersioned(version)) {
          for (const apiVersion of allVersions[version].apiVersions) {
            for (const category of getRestCategories(version, apiVersion)) {
              const ops = await getRest(version, apiVersion, category)
              expect(JSON.stringify(ops).includes('hljs language-applescript')).toBe(false)
            }
          }
        } else {
          for (const category of getRestCategories(version)) {
            const ops = await getRest(version, undefined, category)
            expect(JSON.stringify(ops).includes('hljs language-applescript')).toBe(false)
          }
        }
      }),
    )
  })
})

async function findOperation(version: string, method: string, requestPath: string) {
  const allOperations = await getFlatListOfOperations(version)
  return allOperations.find((operation) => {
    return (
      operation.requestPath === requestPath && operation.verb.toLowerCase() === method.toLowerCase()
    )
  })
}

describe('code examples are defined', () => {
  test('GET', async () => {
    for (const version in allVersions) {
      if (version === 'enterprise-server@3.2' || version === 'enterprise-server@3.1') continue

      let domain = 'https://api.github.com'
      if (version.includes('enterprise-server')) {
        domain = 'http(s)://HOSTNAME/api/v3'
      }

      const operation = await findOperation(version, 'GET', '/repos/{owner}/{repo}')
      expect(operation.serverUrl).toBe(domain)
      expect(isPlainObject(operation)).toBe(true)
      expect(operation.codeExamples).toBeDefined()
      // Code examples have dynamic structure from OpenAPI schema
      for (const example of operation.codeExamples as any[]) {
        expect(isPlainObject(example.request)).toBe(true)
        expect(isPlainObject(example.response)).toBe(true)
      }
    }
  })
})
