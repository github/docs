import yaml from 'js-yaml'
import { readFileSync } from 'fs'
import { extname, basename } from 'path'

import walk from 'walk-sync'
import { beforeAll, describe, expect, test } from 'vitest'

import { getJsonValidator, validateJson } from '#src/tests/lib/validate-json-schema.js'
import { formatAjvErrors } from '#src/tests/helpers/schemas.js'
import dataSchemas from '#src/data-directory/lib/data-schemas/index.js'

const schemaPaths = Object.keys(dataSchemas)
const singleFilesSchemas = schemaPaths.filter((schemaPath) => extname(schemaPath))
const directorySchemas = schemaPaths.filter((schemaPath) => !extname(schemaPath))
const yamlWalkOptions = {
  globs: ['**/*.yml'],
  directories: false,
  includeBasePath: true,
}

for (const dataDir of directorySchemas) {
  let schema, validate
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
      const formattedErrors = isValid ? validate.errors : formatAjvErrors(validate.errors)
      expect(isValid, formattedErrors).toBe(true)
    })
  })
}

describe('single data files', () => {
  test.each(singleFilesSchemas)('%p', async (filepath) => {
    const ymlData = yaml.load(readFileSync(filepath, 'utf8'))
    const schema = (await import(dataSchemas[filepath])).default
    const { isValid, errors } = validateJson(schema, ymlData)
    expect(isValid, errors).toBe(true)
  })
})
