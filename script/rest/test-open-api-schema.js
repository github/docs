#!/usr/bin/env node

// [start-readme]
//
// Run this script to check if OpenAPI operations match versions in content/rest operations
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import { readFile, readdir } from 'fs/promises'
import readFileAsync from '../../lib/readfile-async.js'
import getOperations from './utils/get-operations.js'
import frontmatter from '../../lib/read-frontmatter.js'
import _ from 'lodash'
import { supported } from '../../lib/enterprise-server-releases.js'

const supportedVersions = supported.map(Number)
const LOWEST_SUPPORTED_GHES_VERSION = Math.min(...supportedVersions)
const HIGHEST_SUPPORTED_GHES_VERSION = Math.max(...supportedVersions)

const dereferencedPath = path.join(process.cwd(), 'lib/rest/static/dereferenced')
const contentPath = path.join(process.cwd(), 'content/rest')
const schemas = await readdir(dereferencedPath)
const contentFiles = []
const contentCheck = {}
const openAPISchemaCheck = {}
const dereferencedSchemas = {}

export async function getDiffOpenAPIContentRest() {
  // Recursively go through the content/rest directory and add all categories/subcategories to contentFiles
  throughDirectory(contentPath)

  // Add version keys to contentCheck and dereferencedSchema objects
  await addVersionKeys()

  // Creating the categories/subcategories based on the current content directory
  await createCheckContentDirectory()

  // Create categories/subcategories from OpenAPI Schemas
  await createOpenAPISchemasCheck()

  // Get Differences between categories/subcategories from dereferenced schemas and the content/rest directory frontmatter versions
  const differences = getDifferences(openAPISchemaCheck, contentCheck)
  const errorMessages = {}

  if (Object.keys(differences).length > 0) {
    for (const schemaName in differences) {
      errorMessages[schemaName] = {}
      for (const category of differences[schemaName]) {
        if (!errorMessages[schemaName]) errorMessages[schemaName] = category
        errorMessages[schemaName][category] = {
          contentDir: contentCheck[schemaName][category],
          openAPI: openAPISchemaCheck[schemaName][category],
        }
      }
    }
  }
  return errorMessages
}

async function addVersionKeys() {
  for (const filename of schemas) {
    const schema = JSON.parse(await readFile(path.join(dereferencedPath, filename)))
    const key = filename.replace('.deref.json', '')
    contentCheck[key] = {}
    dereferencedSchemas[key] = schema
  }
  // GitHub Enterprise Cloud is just github.com bc it is not in the OpenAPI schema yet. Once it is, this should be updated
  contentCheck['ghec.github.com'] = {}
  dereferencedSchemas['ghec.github.com'] = dereferencedSchemas['api.github.com']
}

async function createOpenAPISchemasCheck() {
  for (const [schemaName, schema] of Object.entries(dereferencedSchemas)) {
    try {
      const operationsByCategory = {}
      // munge OpenAPI definitions object in an array of operations objects
      const operations = await getOperations(schema)
      // process each operation, asynchronously rendering markdown and stuff
      await Promise.all(operations.map((operation) => operation.process()))

      // Remove any keys not needed in the decorated files
      const decoratedOperations = operations.map(
        ({
          tags,
          description,
          serverUrl,
          operationId,
          categoryLabel,
          subcategoryLabel,
          contentType,
          externalDocs,
          ...props
        }) => props
      )

      const categories = [
        ...new Set(decoratedOperations.map((operation) => operation.category)),
      ].sort()

      categories.forEach((category) => {
        operationsByCategory[category] = {}
        const categoryOperations = decoratedOperations.filter(
          (operation) => operation.category === category
        )
        categoryOperations
          .filter((operation) => !operation.subcategory)
          .map((operation) => (operation.subcategory = operation.category))

        const subcategories = [
          ...new Set(categoryOperations.map((operation) => operation.subcategory)),
        ].sort()
        // the first item should be the item that has no subcategory
        // e.g., when the subcategory = category
        const firstItemIndex = subcategories.indexOf(category)
        if (firstItemIndex > -1) {
          const firstItem = subcategories.splice(firstItemIndex, 1)[0]
          subcategories.unshift(firstItem)
        }
        operationsByCategory[category] = subcategories.sort()
      })
      openAPISchemaCheck[schemaName] = operationsByCategory
      // One off edge case where secret-scanning should be removed from FPT. Docs Content #6637
      delete openAPISchemaCheck['api.github.com']['secret-scanning']
    } catch (error) {
      console.error(error)
      console.log('🐛 Whoops! Could not get operations by category!')
      process.exit(1)
    }
  }
}

async function createCheckContentDirectory() {
  for (const filename of contentFiles) {
    const { data } = frontmatter(await readFileAsync(filename, 'utf8'))
    const splitPath = filename.split('/')
    const subCategory = splitPath[splitPath.length - 1].replace('.md', '')
    const category =
      splitPath[splitPath.length - 2] === 'rest' ? subCategory : splitPath[splitPath.length - 2]
    const versions = data.versions

    for (const version in versions) {
      const schemaNames = getSchemaName(version, versions[version])

      for (const name of schemaNames) {
        if (!contentCheck[name][category]) {
          contentCheck[name][category] = [subCategory]
        } else {
          contentCheck[name][category].push(subCategory)
        }
        contentCheck[name][category].sort()
      }
    }
  }
}

function getDifferences(openAPISchemaCheck, contentCheck) {
  const differences = {}
  for (const version in openAPISchemaCheck) {
    const diffOpenApiContent = difference(openAPISchemaCheck[version], contentCheck[version])
    if (Object.keys(diffOpenApiContent).length > 0) differences[version] = diffOpenApiContent
  }

  return differences
}

function getSchemaName(version, versionValues) {
  const versions = []
  if (version === 'fpt') {
    if (versionValues === '*') versions.push('api.github.com')
  } else if (version === 'ghec') {
    if (versionValues === '*') versions.push('ghec.github.com')
  } else if (version === 'ghae') {
    if (versionValues === '*') versions.push('github.ae')
  } else if (version === 'ghes') {
    if (versionValues === '*') {
      for (const numVer of supported) {
        versions.push('ghes-' + numVer)
      }
    } else {
      let ver = ''
      let includeVersion = false
      let goUp
      for (const char of versionValues) {
        if ((char >= '0' && char <= '9') || char === '.') {
          ver += char
        } else if (char === '=') {
          includeVersion = true
        } else if (char === '>') {
          goUp = true
        } else if (char === '<') {
          goUp = false
        }
      }
      let numVersion = parseFloat(ver).toFixed(1)

      if (!includeVersion) {
        numVersion = goUp
          ? (parseFloat(numVersion) + 0.1).toFixed(1)
          : (parseFloat(numVersion) - 0.1).toFixed(1)
      }

      while (
        numVersion <= HIGHEST_SUPPORTED_GHES_VERSION &&
        numVersion >= LOWEST_SUPPORTED_GHES_VERSION
      ) {
        numVersion = parseFloat(numVersion).toFixed(1)
        versions.push('ghes-' + numVersion)
        numVersion = goUp
          ? (parseFloat(numVersion) + 0.1).toFixed(1)
          : (parseFloat(numVersion) - 0.1).toFixed(1)
      }
    }
  }
  return versions
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
