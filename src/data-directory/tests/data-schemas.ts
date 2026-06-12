import yaml from 'js-yaml'
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
    test.each(yamlFileList)('%p', async (yamlAbsPath) => {
      const yamlContent = yaml.load(readFileSync(yamlAbsPath, 'utf8'))
      const isValid = validate(yamlContent)
      const formattedErrors = isValid ? undefined : formatAjvErrors(validate.errors || [])
      expect(isValid, formattedErrors).toBe(true)
    })
  })
}

describe('single data files', () => {
  test.each(singleFilesSchemas)('%p', async (filepath) => {
    const ymlData = yaml.load(readFileSync(filepath, 'utf8'))
    const schema = (await import(dataSchemas[filepath])).default
    const { isValid, errors } = validateJson(schema, ymlData)
    const formattedErrors = isValid ? undefined : formatAjvErrors(errors || [])
    expect(isValid, formattedErrors).toBe(true)
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

        // Also verify it's registered in the dataSchemas
        const dataKey = `data/tables/${yamlFile}`
        expect(dataSchemas[dataKey]).toBeDefined()
      }
    }
  })
})
