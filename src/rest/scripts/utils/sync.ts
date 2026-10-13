import { mkdir, readFile, writeFile, readdir, unlink } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

import { updateRestFiles } from './update-markdown'
import { allVersions } from '@/versions/lib/all-versions'
import { createOperations, processOperations } from './get-operations'
import { getProgAccessData } from '@/github-apps/scripts/sync'
import { REST_DATA_DIR } from '../../lib/index'
import type { OpenApiSchema } from './openapi-types'
import type Operation from './operation'

type OperationsByCategory = Record<string, Record<string, Operation[]>>

const OPENAPI_VERSION_NAMES = Object.keys(allVersions).map(
  (elem) => allVersions[elem].openApiVersionName,
)

export async function syncRestData(
  sourceDirectory: string,
  restSchemas: string[],
  progAccessSource: string,
  injectIntoSchema?: (
    schema: OpenApiSchema,
    schemaName: string,
  ) => OpenApiSchema | Promise<OpenApiSchema>,
): Promise<void> {
  const writeTasks: Promise<void>[] = []
  // Track written category files so stale upstream removals delete matching data files after sync.
  const writtenFilesByVersion = new Map<string, Set<string>>()

  await Promise.all(
    restSchemas.map(async (schemaName) => {
      const file = path.join(sourceDirectory, schemaName)
      let schema = JSON.parse(await readFile(file, 'utf-8')) as OpenApiSchema

      if (injectIntoSchema) {
        const injectedSchema = await injectIntoSchema(schema, schemaName)
        schema = injectedSchema || schema
      }

      const operations: Operation[] = []
      console.log('Instantiating operation instances from schema ', schemaName)
      try {
        const newOperations = await createOperations(schema)
        operations.push(...newOperations)
      } catch (error) {
        throw new Error(
          `${error}\n\n🐛 Whoops! It looks like the script wasn't able to parse the dereferenced schema. A recent change may not yet be supported by the decorator. Please reach out in the #technical-content slack channel for help.`,
        )
      }
      try {
        const { progAccessData } = await getProgAccessData(progAccessSource, true)
        await processOperations(operations, progAccessData)
      } catch (error) {
        throw new Error(
          `${error}\n\n🐛 Whoops! It looks like some Markdown in the dereferenced schema wasn't able to be rendered. Please reach out in the #technical-content slack channel for help.`,
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
        await mkdir(targetDirectoryPath, { recursive: true })
      }

      const writtenFiles = new Set<string>()
      writtenFilesByVersion.set(targetDirectoryPath, writtenFiles)

      for (const [category, categoryData] of Object.entries(formattedOperations)) {
        const categoryFilename = `${category}.json`
        const categoryPath = path.join(targetDirectoryPath, categoryFilename)
        writtenFiles.add(categoryFilename)
        writeTasks.push(
          (async () => {
            await writeFile(categoryPath, JSON.stringify(categoryData, null, 2))
            console.log(`✅ Wrote ${categoryPath}`)
          })(),
        )
      }
    }),
  )

  await Promise.all(writeTasks)
  await removeStaleRestDataFiles(writtenFilesByVersion)
  await updateRestFiles()
  await updateRestConfigData(restSchemas)
}

// After syncing, removes every .json file in each version directory that this
// run didn't write. Without it, a category removed upstream would leave stale
// data files behind that keep generating docs pages.
export async function removeStaleRestDataFiles(
  writtenFilesByVersion: Map<string, Set<string>>,
): Promise<void> {
  for (const [versionDir, writtenFiles] of writtenFilesByVersion) {
    if (!existsSync(versionDir)) continue

    const filesOnDisk = (await readdir(versionDir)).filter((f) => f.endsWith('.json'))
    for (const file of filesOnDisk) {
      if (!writtenFiles.has(file)) {
        const filePath = path.join(versionDir, file)
        await unlink(filePath)
        console.log(`🗑️  Removed stale data file ${filePath}`)
      }
    }
  }
}

async function formatRestData(operations: Operation[]): Promise<OperationsByCategory> {
  const categories = [...new Set(operations.map((operation) => operation.category))].sort()

  const operationsByCategory: OperationsByCategory = {}
  for (const category of categories) {
    operationsByCategory[category] = {}
    const categoryOperations = operations.filter((operation) => operation.category === category)

    const subcategories = [
      ...new Set(categoryOperations.map((operation) => operation.subcategory)),
    ].sort()
    // Put the category-level subcategory first so it renders before nested subcategories.
    const firstItemIndex = subcategories.indexOf(category)
    if (firstItemIndex > -1) {
      const firstItem = subcategories.splice(firstItemIndex, 1)[0]
      subcategories.unshift(firstItem)
    }

    for (const subcategory of subcategories) {
      operationsByCategory[category][subcategory] = []

      const subcategoryOperations = categoryOperations.filter(
        (operation) => operation.subcategory === subcategory,
      )

      operationsByCategory[category][subcategory] = subcategoryOperations
    }
  }
  return operationsByCategory
}

// updateRestConfigData keeps config.json date arrays in step with synced
// calendar-date schemas. Deprecated dates drop out because each touched version
// key is rebuilt from this sync run.
// Partial --versions runs leave untouched keys alone, and GitHub Enterprise
// Server deprecation removes entire version keys such as ghes-<release>.
async function updateRestConfigData(schemas: string[]): Promise<void> {
  const restConfigFilename = 'src/rest/lib/config.json'
  const restConfigData = JSON.parse(await readFile(restConfigFilename, 'utf8')) as Record<
    string,
    unknown
  >
  const restApiVersionData = (restConfigData['api-versions'] as Record<string, string[]>) || {}

  // Calendar-date schemas start with an OPENAPI_VERSION_NAMES entry without exactly matching it.
  const incomingDates: Record<string, Set<string>> = {}

  for (const schema of schemas) {
    const schemaBaseName = path.basename(schema, '.json')
    if (!OPENAPI_VERSION_NAMES.includes(schemaBaseName)) {
      const openApiVer = OPENAPI_VERSION_NAMES.find((ver) => schemaBaseName.startsWith(`${ver}-`))
      if (!openApiVer) {
        throw new Error(`Could not find the OpenAPI version for schema ${schemaBaseName}`)
      }
      const date = schemaBaseName.slice(openApiVer.length + 1)
      if (!incomingDates[openApiVer]) incomingDates[openApiVer] = new Set()
      incomingDates[openApiVer].add(date)
    }
  }

  // Replacing each touched date array removes deprecated dates missing from upstream schemas.
  for (const [openApiVer, dates] of Object.entries(incomingDates)) {
    restApiVersionData[openApiVer] = [...dates].sort()
  }

  restConfigData['api-versions'] = restApiVersionData
  await writeFile(restConfigFilename, JSON.stringify(restConfigData, null, 2))
}

export async function getOpenApiSchemaFiles(
  schemas: string[],
): Promise<{ restSchemas: string[]; webhookSchemas: string[] }> {
  const restSchemas: string[] = []
  const webhookSchemas: string[] = []
  const schemaNames = schemas.map((schema) => path.basename(schema, '.json'))

  const versionNames = Object.keys(allVersions).map((elem) => allVersions[elem].openApiVersionName)

  for (const schema of schemaNames) {
    const schemaBasename = `${schema}.json`
    // Non-calendar schemas must exactly match an allVersions OpenAPI version name.
    if (versionNames.includes(schema)) {
      webhookSchemas.push(schemaBasename)
    }

    // Supported schemas start with an allVersions OpenAPI version name.
    if (versionNames.some((elem) => schema.startsWith(elem))) {
      // Base names match themselves and dated schemas, such as api.github.com.YYYY-MM-DD.
      const filteredMatches = schemaNames.filter((elem) => elem.includes(schema))
      // One match means a dated schema or a version without dates; REST data favors dated schemas.
      if (filteredMatches.length === 1) {
        restSchemas.push(schemaBasename)
      }
    }
  }
  return { restSchemas, webhookSchemas }
}
