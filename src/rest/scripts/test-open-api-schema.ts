// [start-readme]
//
// Run this script to check if OpenAPI operations match versions in content/rest operations
//
// [end-readme]
import fs from 'fs'
import path from 'path'
import _ from 'lodash'

import frontmatter from '@/frame/lib/read-frontmatter'
import getApplicableVersions from '@/versions/lib/get-applicable-versions'
import { allVersions, getDocsVersion } from '@/versions/lib/all-versions'
import { REST_DATA_DIR, REST_SCHEMA_FILENAME } from '../lib/index'
import { nonAutomatedRestPaths } from '../lib/config'
import { deprecated } from '@/versions/lib/enterprise-server-releases'
import walkFiles from '@/workflows/walk-files'

type CheckObject = Record<string, Record<string, string[]>>

type DifferenceResult = Record<string, string[]>

type ErrorMessages = Record<string, Record<string, { contentDir: string[]; openAPI: string[] }>>

export async function getDiffOpenAPIContentRest(): Promise<ErrorMessages> {
  const contentFiles = getAutomatedMarkdownFiles('content/rest')
  // Creating the categories/subcategories based on the current content directory
  const checkContentDir = await createCheckContentDirectory(contentFiles)

  // Create categories/subcategories from OpenAPI Schemas
  const openAPISchemaCheck = await createOpenAPISchemasCheck()

  // Get Differences between categories/subcategories from dereferenced schemas and the content/rest directory frontmatter versions
  const differences = getDifferences(openAPISchemaCheck, checkContentDir)
  const errorMessages: ErrorMessages = {}

  if (Object.keys(differences).length > 0) {
    for (const schemaName in differences) {
      errorMessages[schemaName] = {}

      differences[schemaName].forEach((category) => {
        errorMessages[schemaName][category] = {
          contentDir: checkContentDir[schemaName][category],
          openAPI: openAPISchemaCheck[schemaName][category],
        }
      })
    }
  }

  return errorMessages
}

async function createOpenAPISchemasCheck(): Promise<CheckObject> {
  const openAPICheck = createCheckObj()
  const restDirectory = fs
    .readdirSync(REST_DATA_DIR)
    .filter((dir) => !dir.endsWith('.json'))
    // Allow the most recent deprecation to exist on disk until fully deprecated
    .filter((dir) => !dir.includes(deprecated[0]))

  restDirectory.forEach((dir) => {
    const filename = path.join(REST_DATA_DIR, dir, REST_SCHEMA_FILENAME)
    const fileSchema = JSON.parse(fs.readFileSync(filename, 'utf8'))
    const categories = Object.keys(fileSchema).sort()
    const version = getDocsVersion(dir)

    categories.forEach((category) => {
      const subcategories = Object.keys(fileSchema[category]) as string[]
      if (isApiVersioned(version)) {
        getOnlyApiVersions(version).forEach(
          (apiVersion) => (openAPICheck[apiVersion][category] = subcategories.sort()),
        )
      } else {
        openAPICheck[version][category] = subcategories.sort()
      }
    })
  })

  return openAPICheck
}

async function createCheckContentDirectory(contentFiles: string[]): Promise<CheckObject> {
  const checkContent = createCheckObj()

  for (const filename of contentFiles) {
    const { data } = frontmatter(await fs.promises.readFile(filename, 'utf8'))
    const applicableVersions = getApplicableVersions(data?.versions, filename)
    const splitPath = filename.split('/')
    const subCategory = splitPath[splitPath.length - 1].replace('.md', '')
    const category =
      splitPath[splitPath.length - 2] === 'rest' ? subCategory : splitPath[splitPath.length - 2]
    // All versions with appended calendar date versions if it exists
    const allCompleteVersions = applicableVersions.flatMap((version) => {
      return isApiVersioned(version)
        ? allVersions[version].apiVersions.map(
            (apiVersion) => `${allVersions[version].version}.${apiVersion}`,
          )
        : version
    })

    allCompleteVersions.forEach((version) => {
      !checkContent[version][category]
        ? (checkContent[version][category] = [subCategory])
        : checkContent[version][category].push(subCategory)
      checkContent[version][category].sort()
    })
  }

  return checkContent
}

function isApiVersioned(version: string): boolean {
  return allVersions[version] && allVersions[version].apiVersions.length > 0
}

function getOnlyApiVersions(version: string): string[] {
  return allVersions[version].apiVersions.map(
    (apiVersion) => `${allVersions[version].version}.${apiVersion}`,
  )
}

function createCheckObj(): CheckObject {
  const versions: CheckObject = {}
  Object.keys(allVersions).forEach((version) => {
    isApiVersioned(version)
      ? getOnlyApiVersions(version).forEach((apiVersion) => (versions[apiVersion] = {}))
      : (versions[`${allVersions[version].version}`] = {})
  })

  return versions
}

function getDifferences(
  openAPISchemaCheck: CheckObject,
  contentCheck: CheckObject,
): DifferenceResult {
  const differences: DifferenceResult = {}
  for (const version in openAPISchemaCheck) {
    const diffOpenApiContent = difference(openAPISchemaCheck[version], contentCheck[version])
    if (Object.keys(diffOpenApiContent).length > 0) differences[version] = diffOpenApiContent
  }

  return differences
}

function difference(obj1: Record<string, string[]>, obj2: Record<string, string[]>): string[] {
  const diff = Object.keys(obj1).reduce((result, key) => {
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      result.push(key)
    } else if (_.isEqual(obj1[key], obj2[key])) {
      const resultKeyIndex = result.indexOf(key)
      result.splice(resultKeyIndex, 1)
    }
    return result
  }, Object.keys(obj2))

  return diff
}

export function getAutomatedMarkdownFiles(rootDir: string): string[] {
  return walkFiles(rootDir, '.md')
    .filter((file) => !file.includes('index.md'))
    .filter((file) => !nonAutomatedRestPaths.some((path) => file.includes(path)))
}
