import yaml from 'js-yaml'
import { readFileSync } from 'fs'
import walk from 'walk-sync'

import { getJsonValidator, validateJson } from '#src/tests/lib/validate-json-schema.js'
import { formatAjvErrors } from '#src/tests/helpers/schemas.js'
import { getDeepDataByLanguage } from '#src/data-directory/lib/get-data.js'

import glossariesSchema from '#src/data-directory/lib/data-schemas/glossaries.js'
import fbvSchema from '#src/data-directory/lib/data-schemas/features.js'
import learningTrackSchema from '#src/data-directory/lib/data-schemas/learning-tracks.js'
import releaseNotesSchema from '#src/data-directory/lib/data-schemas/release-notes.js'
import secretScanningSchema from '#src/data-directory/lib/data-schemas/secret-scanning.js'
import codeLanguagesSchema from '#src/data-directory/lib/data-schemas/code-languages.js'
import variablesSchema from '#src/data-directory/lib/data-schemas/variables.js'

describe('glossaries', () => {
  const glossariesData = Object.entries(getDeepDataByLanguage('glossaries', 'en'))
  test.each(glossariesData)('data/glossaries/%s.yml matches schema', (name, data) => {
    const { isValid, errors } = validateJson(glossariesSchema[name], data)
    expect(isValid, errors).toBe(true)
  })
})

/*
  NOTE: This test suite does NOT validate the `versions` frontmatter in content files.
  That's because lib/page.js validates frontmatter when loading all the pages (which happens
  when running npm start or tests) and throws an error immediately if there are any issues.
  This test suite DOES validate the data/features `versions` according to the same FM schema.
  Some tests/unit/page.js tests also exercise the frontmatter validation.
*/
describe('features', () => {
  const featureData = Object.entries(getDeepDataByLanguage('features', 'en'))
  const validate = getJsonValidator(fbvSchema)

  test.each(featureData)('data/features/%s matches the schema', (name, data) => {
    const isValid = validate(data)
    const formattedErrors = isValid ? validate.errors : formatAjvErrors(validate.errors)
    expect(isValid, formattedErrors).toBe(true)
  })
})

describe('learning-tracks', () => {
  const learningTrackData = Object.entries(getDeepDataByLanguage('learning-tracks', 'en'))
  const validate = getJsonValidator(learningTrackSchema)

  test.each(learningTrackData)('data/learning-tracks/%s matches the schema', (name, data) => {
    const isValid = validate(data)
    const formattedErrors = isValid ? validate.errors : formatAjvErrors(validate.errors)
    expect(isValid, formattedErrors).toBe(true)
  })
})

describe('release-notes', () => {
  const yamlWalkOptions = {
    globs: ['**/*.yml'],
    directories: false,
    includeBasePath: true,
  }
  const yamlFileList = walk('data/release-notes', yamlWalkOptions).sort()
  const validate = getJsonValidator(releaseNotesSchema)

  test.each(yamlFileList)('%s matches the schema', (yamlAbsPath) => {
    const yamlContent = yaml.load(readFileSync(yamlAbsPath, 'utf8'))
    const isValid = validate(yamlContent)
    const formattedErrors = isValid ? validate.errors : formatAjvErrors(validate.errors)

    expect(isValid, formattedErrors).toBe(true)
  })
})

describe('secret-scanning', () => {
  const ymlData = yaml.load(readFileSync('data/secret-scanning.yml', 'utf8'))

  test('data/secret-scanning.yml matches the schema', () => {
    const { isValid, errors } = validateJson(secretScanningSchema, ymlData)
    const formattedErrors = isValid ? errors : formatAjvErrors(errors)

    expect(isValid, formattedErrors).toBe(true)
  })
})

describe('code-languages', () => {
  const ymlData = yaml.load(readFileSync('data/code-languages.yml', 'utf8'))

  test('data/code-languages.yml matches the schema', () => {
    const { isValid, errors } = validateJson(codeLanguagesSchema, ymlData)
    const formattedErrors = isValid ? errors : formatAjvErrors(errors)

    expect(isValid, formattedErrors).toBe(true)
  })
})

describe('variables', () => {
  const variablesData = Object.entries(getDeepDataByLanguage('variables', 'en'))
  const validate = getJsonValidator(variablesSchema)

  test.each(variablesData)('data/variables/%s matches the schema', (name, data) => {
    const isValid = validate(data)
    const formattedErrors = isValid ? validate.errors : formatAjvErrors(validate.errors)
    expect(isValid, formattedErrors).toBe(true)
  })
})
