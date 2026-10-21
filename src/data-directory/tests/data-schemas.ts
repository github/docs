import { load } from 'js-yaml'
import { readFileSync, existsSync, readdirSync } from 'fs'
import { extname, basename, join } from 'path'

import walk from 'walk-sync'
import { beforeAll, describe, expect, test } from 'vitest'
import type { ValidateFunction, SchemaObject } from 'ajv'

import { getJsonValidator, validateJson } from '@/tests/lib/validate-json-schema'
import { formatAjvErrors } from '@/tests/helpers/schemas'
import dataSchemas from '@/data-directory/lib/data-schemas/index'

const schemaPaths = Object.keys(dataSchemas)
const singleFilesSchemas = schemaPaths.filter((schemaPath) => extname(schemaPath))
const directorySchemas = schemaPaths.filter((schemaPath) => !extname(schemaPath))
const yamlWalkOptions = {
  globs: ['**/*.yml'],
  directories: false,
  includeBasePath: true,
}

for (const dataDir of directorySchemas) {
  let schema: SchemaObject
  let validate: ValidateFunction
  const dataDirectoryName = basename(dataDir)
  const yamlFileList = walk(dataDir, yamlWalkOptions).sort()

  beforeAll(async () => {
    schema = (await import(dataSchemas[dataDir])).default
    validate = getJsonValidator(schema)
  })

  describe(dataDirectoryName, () => {
    // '%s' rather than '%p' so the failing filename appears in the test title.
    test.each(yamlFileList)('%s', async (yamlAbsPath) => {
      const yamlContent = load(readFileSync(yamlAbsPath, 'utf8'))
      const isValid = validate(yamlContent)
      const formattedErrors = isValid ? undefined : formatAjvErrors(validate.errors || [])
      expect(isValid, formattedErrors).toBe(true)
    })
  })
}

describe('single data files', () => {
  test.each(singleFilesSchemas)('%s', async (filepath) => {
    const ymlData = load(readFileSync(filepath, 'utf8'))
    const schema = (await import(dataSchemas[filepath])).default
    const { isValid, errors } = validateJson(schema, ymlData)
    const formattedErrors = isValid ? undefined : formatAjvErrors(errors || [])
    expect(isValid, formattedErrors).toBe(true)
  })
})

describe('Copilot model supported clients table', () => {
  const filepath = 'data/tables/copilot/model-supported-clients.yml'

  test('rejects rows with invalid client columns', async () => {
    expect(dataSchemas[filepath]).toBeDefined()
    const schema = (await import(dataSchemas[filepath])).default
    const loadRows = () => load(readFileSync(filepath, 'utf8')) as Record<string, unknown>[]

    expect(validateJson(schema, loadRows()).isValid).toBe(true)

    const stringValue = loadRows()
    stringValue[0].cli = 'yes'
    expect(validateJson(schema, stringValue).isValid).toBe(false)

    const missingColumn = loadRows()
    delete missingColumn[0].cli
    expect(validateJson(schema, missingColumn).isValid).toBe(false)

    const misspelledColumn = loadRows()
    delete misspelledColumn[0].jetbrains
    misspelledColumn[0].jetbrain = true
    expect(validateJson(schema, misspelledColumn).isValid).toBe(false)
  })
})

describe('YAML-powered tables', () => {
  test('all table files have corresponding schemas', () => {
    const tablesDir = join(process.cwd(), 'data/tables')
    const schemasDir = join(__dirname, '../lib/data-schemas/tables')

    if (existsSync(tablesDir)) {
      const yamlFiles = readdirSync(tablesDir).filter((file) => file.endsWith('.yml'))

      for (const yamlFile of yamlFiles) {
        const name = basename(yamlFile, '.yml')
        const schemaPath = join(schemasDir, `${name}.ts`)
        expect(existsSync(schemaPath)).toBe(true)

        const dataKey = `data/tables/${yamlFile}`
        expect(dataSchemas[dataKey]).toBeDefined()
      }
    }
  })

  test('nested auto-model-selection table has a registered schema', () => {
    expect(dataSchemas['data/tables/copilot/auto-model-selection.yml']).toBeDefined()
  })
})

describe('Copilot models and pricing table', () => {
  test('rejects a wrongly cased provider and a misspelled price key', async () => {
    const schema = (await import(dataSchemas['data/tables/copilot/models-and-pricing.yml'])).default
    const entry = {
      model: 'Claude Example',
      provider: 'Anthropic',
      release_status: 'GA',
      category: 'Versatile',
      input: '$1.00',
      cached_input: '$0.10',
      ouput: '$5.00',
    }
    const { isValid, errors } = validateJson(schema, [entry])
    expect(isValid).toBe(false)
    const messages = (errors || []).map((error) => `${error.instancePath} ${error.message}`)
    expect(messages).toContain('/0/provider must be equal to one of the allowed values')
    expect(messages).toContain("/0 must have required property 'output'")
    expect(messages).toContain('/0 must NOT have additional properties')
  })
})
