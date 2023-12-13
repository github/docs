import fs from 'fs'
import yaml from 'js-yaml'
import { jest } from '@jest/globals'

import { getJsonValidator } from '#src/tests/lib/validate-json-schema.js'
import { formatAjvErrors } from '#src/tests/helpers/schemas.js'
import secretScanningSchema from '../lib/secret-scanning-schema.js'

jest.useFakeTimers({ legacyFakeTimers: true })

describe('lint secret-scanning', () => {
  const yamlContent = yaml.load(fs.readFileSync('data/secret-scanning.yml', 'utf8'))
  const validate = getJsonValidator(secretScanningSchema)

  test('matches the schema', () => {
    const isValid = validate(yamlContent)
    let errors

    if (!isValid) {
      errors = formatAjvErrors(validate.errors)
    }

    expect(isValid, errors).toBe(true)
  })
})
