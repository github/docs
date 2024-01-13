import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { mkdirp } from 'mkdirp'

import { updateRestFiles } from './update-markdown.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { createOperations, processOperations } from './get-operations.js'
import { REST_DATA_DIR, REST_SCHEMA_FILENAME } from '../../lib/index.js'

// All of the schema releases that we store in allVersions
//  Ex: 'api.github.com', 'ghec', 'ghes-3.6', 'ghes-3.5',
// 'ghes-3.4', 'ghes-3.3', 'ghes-3.2', 'github.ae'
const OPENAPI_VERSION_NAMES = Object.keys(allVersions).map(
  (elem) => allVersions[elem].openApiVersionName,
)

export async function syncRestData(sourceDirectory, restSchemas) {
  await Promise.all(
    restSchemas.map(async (schemaName) => {
      const file = path.join(sourceDirectory, schemaName)
      const schema = JSON.parse(await readFile(file, 'utf-8'))

      const operations = []
      try {
        const newOperations = await createOperations(schema)
        operations.push(...newOperations)
        await processOperations(operations)
      } catch (error) {
        throw new Error(
          "🐛 Whoops! It looks like the script wasn't able to parse the dereferenced schema. A recent change may not yet be supported by the decorator. Please reach out in the #docs-engineering slack channel for help.",
        )
      }
      const formattedOperations = await formatRestData(operations)
      const versionDirectoryName = schemaName.replace('.json', '')
      const targetDirectoryPath = path.join(REST_DATA_DIR, versionDirectoryName)

      if (Object.keys(formattedOperations).length === 0) {
        throw new Error(
          `Generating REST data failed for ${sourceDirectory}/${schemaName}. The generated data file was empty.`,
        )
      }
      if (!existsSync(targetDirectoryPath)) {
        await mkdirp(targetDirectoryPath)
      }
      const targetPath = path.join(targetDirectoryPath, REST_SCHEMA_FILENAME)
      await writeFile(targetPath, JSON.stringify(formattedOperations, null, 2))
      console.log(`✅ Wrote ${targetPath}`)
    }),
  )
  await updateRestFiles()
  await updateRestConfigData(restSchemas)
}

/*
  Orders the operations by their category and subcategories.
  All operations must have a category, but operations don't need
  a subcategory. When no subcategory is present, the subcategory
  property is an empty string ('').

  Example:
  {
    [category]: {
      '': {
        "description": "",
        "operations": []
      },
      [subcategory sorted alphabetically]: {
        "description": "",
        "operations": []
      }
    }
  }
*/
async function formatRestData(operations) {
  const categories = [...new Set(operations.map((operation) => operation.category))].sort()

  const operationsByCategory = {}
  categories.forEach((category) => {
    operationsByCategory[category] = {}
    const categoryOperations = operations.filter((operation) => operation.category === category)

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

    subcategories.forEach((subcategory) => {
      operationsByCategory[category][subcategory] = {}

      const subcategoryOperations = categoryOperations.filter(
        (operation) => operation.subcategory === subcategory,
      )

      operationsByCategory[category][subcategory] = subcategoryOperations
    })
  })
  return operationsByCategory
}

// Every time we update the REST data files, we'll want to make sure the
// config.json file is updated with the latest api versions.
async function updateRestConfigData(schemas) {
  const restConfigFilename = 'src/rest/lib/config.json'
  const restConfigData = JSON.parse(await readFile(restConfigFilename, 'utf8'))
  const restApiVersionData = restConfigData['api-versions'] || {}
  // If the version isn't one of the OpenAPI version,
  // then it's an api-versioned schema
  for (const schema of schemas) {
    const schemaBaseName = path.basename(schema, '.json')
    if (!OPENAPI_VERSION_NAMES.includes(schemaBaseName)) {
      const openApiVer = OPENAPI_VERSION_NAMES.find((ver) => schemaBaseName.startsWith(ver))
      const date = schemaBaseName.split(`${openApiVer}-`)[1]

      if (!restApiVersionData[openApiVer]) {
        restApiVersionData[openApiVer] = []
      }
      if (!restApiVersionData[openApiVer].includes(date)) {
        const dates = restApiVersionData[openApiVer]
        dates.push(date)
        restApiVersionData[openApiVer] = dates
      }
    }
    restConfigData['api-versions'] = restApiVersionData
  }
  await writeFile(restConfigFilename, JSON.stringify(restConfigData, null, 2))
}

export async function getOpenApiSchemaFiles(schemas) {
  const restSchemas = []
  const webhookSchemas = []
  // The full list of dereferened OpenAPI schemas received from
  // bundling the OpenAPI in github/github
  const schemaNames = schemas.map((schema) => path.basename(schema, '.json'))

  const OPENAPI_VERSION_NAMES = Object.keys(allVersions).map(
    (elem) => allVersions[elem].openApiVersionName,
  )

  for (const schema of schemaNames) {
    const schemaBasename = `${schema}.json`
    // If the version doesn't have calendar date versioning
    // it should have an exact match with one of the versions defined
    // in the allVersions object.
    if (OPENAPI_VERSION_NAMES.includes(schema)) {
      webhookSchemas.push(schemaBasename)
    }

    // If the schema version has calendar date versioning, then one of
    // the versions defined in allVersions should be a substring of the
    // schema version. This means the schema version is a supported version
    if (OPENAPI_VERSION_NAMES.some((elem) => schema.startsWith(elem))) {
      // If the schema being evaluated is a calendar-date version, then
      // there would only be one exact match in the list of schema names.
      // If the schema being evaluated is a non-calendar-date version, then
      // there will be two matches.
      // Ex: api.github.com would match api.github.com and
      // api.github.com.2022-09-09
      const filteredMatches = schemaNames.filter((elem) => elem.includes(schema))
      // If there is only one match then it's either a calendar-date version
      // or the version doesn't support calendar dates yet. We favor calendar-date
      // versions but default to non calendar-date versions.
      if (filteredMatches.length === 1) {
        restSchemas.push(schemaBasename)
      }
    }
  }
  return { restSchemas, webhookSchemas }
}
