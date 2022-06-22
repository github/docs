#!/usr/bin/env node

// [start-readme]
//
// Run this script to check if OpenAPI operations match versions in content/rest operations
//
// [end-readme]
import fs from 'fs'
import path from 'path'
import _ from 'lodash'

import frontmatter from '../../lib/read-frontmatter.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'
import { allVersions } from '../../lib/all-versions.js'

const contentFiles = []

export async function getDiffOpenAPIContentRest() {
  const contentPath = path.join(process.cwd(), 'content/rest')

  // Recursively go through the content/rest directory and add all categories/subcategories to contentFiles
  throughDirectory(contentPath)

  // Creating the categories/subcategories based on the current content directory
  const checkContentDir = await createCheckContentDirectory(contentFiles)

  // Create categories/subcategories from OpenAPI Schemas
  const openAPISchemaCheck = await createOpenAPISchemasCheck()

  // One off edge case for secret-scanning Docs-content issue 6637
  delete openAPISchemaCheck['free-pro-team@latest']['secret-scanning']

  // Get Differences between categories/subcategories from dereferenced schemas and the content/rest directory frontmatter versions
  const differences = getDifferences(openAPISchemaCheck, checkContentDir)
  const errorMessages = {}

  if (Object.keys(differences).length > 0) {
    for (const schemaName in differences) {
      errorMessages[schemaName] = {}
      for (const category of differences[schemaName]) {
        if (!errorMessages[schemaName]) errorMessages[schemaName] = category
        errorMessages[schemaName][category] = {
          contentDir: checkContentDir[schemaName][category],
          openAPI: openAPISchemaCheck[schemaName][category],
        }
      }
    }
  }

  return errorMessages
}

async function createOpenAPISchemasCheck() {
  const schemasPath = path.join(process.cwd(), 'lib/rest/static/decorated')
  const openAPICheck = Object.keys(allVersions).reduce((acc, val) => {
    return { ...acc, [val]: [] }
  }, {})
  // ghec does not exist in the OpenAPI yet, so we'll copy over FPT to ghec
  openAPICheck['enterprise-cloud@latest'] = []

  const schemas = fs.readdirSync(schemasPath)

  schemas.forEach((file) => {
    const version = getVersion(file.replace('.json', ''))
    const fileData = fs.readFileSync(path.join(schemasPath, file))
    const fileSchema = JSON.parse(fileData.toString())
    const categories = Object.keys(fileSchema).sort()

    for (const category of categories) {
      const subcategories = Object.keys(fileSchema[category])
      openAPICheck[version][category] = subcategories.sort()

      if (version === 'free-pro-team@latest') {
        openAPICheck['enterprise-cloud@latest'][category] = [...subcategories.sort()]
      }
    }
  })

  return openAPICheck
}

async function createCheckContentDirectory(contentFiles) {
  const checkContent = Object.keys(allVersions).reduce((acc, val) => {
    return { ...acc, [val]: [] }
  }, {})

  for (const filename of contentFiles) {
    const { data } = frontmatter(await fs.promises.readFile(filename, 'utf8'))
    const applicableVersions = getApplicableVersions(data.versions, filename)
    const splitPath = filename.split('/')
    const subCategory = splitPath[splitPath.length - 1].replace('.md', '')
    const category =
      splitPath[splitPath.length - 2] === 'rest' ? subCategory : splitPath[splitPath.length - 2]

    for (const version of applicableVersions) {
      if (!checkContent[version][category]) {
        checkContent[version][category] = [subCategory]
      } else {
        checkContent[version][category].push(subCategory)
      }
      checkContent[version][category].sort()
    }
  }

  return checkContent
}

function getVersion(curVersion) {
  for (const version in allVersions) {
    if (Object.values(allVersions[version]).indexOf(curVersion) > -1) {
      return version
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
