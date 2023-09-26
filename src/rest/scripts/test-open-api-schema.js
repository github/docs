#!/usr/bin/env node

// [start-readme]
//
// Run this script to check if OpenAPI operations match versions in content/rest operations
//
// [end-readme]
import fs from 'fs'
import path from 'path'
import _ from 'lodash'

import frontmatter from '../../../lib/read-frontmatter.js'
import getApplicableVersions from '#src/versions/lib/get-applicable-versions.js'
import { allVersions, getDocsVersion } from '#src/versions/lib/all-versions.js'
import { REST_DATA_DIR, REST_SCHEMA_FILENAME } from '../lib/index.js'
import { deprecated } from '#src/versions/lib/enterprise-server-releases.js'

const contentFiles = []

export async function getDiffOpenAPIContentRest() {
  const contentPath = 'content/rest'

  // Recursively go through the content/rest directory and add all categories/subcategories to contentFiles
  throughDirectory(contentPath)

  // Creating the categories/subcategories based on the current content directory
  const checkContentDir = await createCheckContentDirectory(contentFiles)

  // Create categories/subcategories from OpenAPI Schemas
  const openAPISchemaCheck = await createOpenAPISchemasCheck()

  // Get Differences between categories/subcategories from dereferenced schemas and the content/rest directory frontmatter versions
  const differences = getDifferences(openAPISchemaCheck, checkContentDir)
  const errorMessages = {}

  if (Object.keys(differences).length > 0) {
    for (const schemaName in differences) {
      errorMessages[schemaName] = {}

      differences[schemaName].forEach((category) => {
        if (!errorMessages[schemaName]) errorMessages[schemaName] = category

        errorMessages[schemaName][category] = {
          contentDir: checkContentDir[schemaName][category],
          openAPI: openAPISchemaCheck[schemaName][category],
        }
      })
    }
  }

  return errorMessages
}

async function createOpenAPISchemasCheck() {
  const openAPICheck = createCheckObj()
  const restDirectory = fs
    .readdirSync(REST_DATA_DIR)
    .filter((dir) => !dir.endsWith('.json'))
    // Allow the most recent deprecation to exist on disk until fully deprecated
    .filter((dir) => !dir.includes(deprecated[0]))

  restDirectory.forEach((dir) => {
    const filename = path.join(REST_DATA_DIR, dir, REST_SCHEMA_FILENAME)
    const fileSchema = JSON.parse(fs.readFileSync(filename))
    const categories = Object.keys(fileSchema).sort()
    const version = getDocsVersion(dir)

    categories.forEach((category) => {
      const subcategories = Object.keys(fileSchema[category])
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

async function createCheckContentDirectory(contentFiles) {
  const checkContent = createCheckObj()

  for (const filename of contentFiles) {
    const { data } = frontmatter(await fs.promises.readFile(filename, 'utf8'))
    const applicableVersions = getApplicableVersions(data.versions, filename)
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

function isApiVersioned(version) {
  return allVersions[version] && allVersions[version].apiVersions.length > 0
}

function getOnlyApiVersions(version) {
  return allVersions[version].apiVersions.map(
    (apiVersion) => `${allVersions[version].version}.${apiVersion}`,
  )
}

function createCheckObj() {
  const versions = {}
  Object.keys(allVersions).forEach((version) => {
    isApiVersioned(version)
      ? getOnlyApiVersions(version).forEach((apiVersion) => (versions[apiVersion] = {}))
      : (versions[`${allVersions[version].version}`] = {})
  })

  return versions
}

function getDifferences(openAPISchemaCheck, contentCheck) {
  const differences = {}
  for (const version in openAPISchemaCheck) {
    const diffOpenApiContent = difference(openAPISchemaCheck[version], contentCheck[version])
    if (Object.keys(diffOpenApiContent).length > 0) differences[version] = diffOpenApiContent
  }

  return differences
}

function throughDirectory(directory) {
  fs.readdirSync(directory).forEach((file) => {
    const absolute = path.join(directory, file)
    if (fs.statSync(absolute).isDirectory()) {
      return throughDirectory(absolute)
    } else if (
      !directory.includes('rest/guides') &&
      !directory.includes('rest/overview') &&
      !file.includes('index.md') &&
      !file.includes('quickstart.md') &&
      !file.includes('README.md')
    ) {
      return contentFiles.push(absolute)
    }
  })
}

function difference(obj1, obj2) {
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
