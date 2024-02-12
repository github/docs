import fs from 'fs'
import yaml from 'js-yaml'
import { jest } from '@jest/globals'

import { ajvValidate } from '../../../lib/ajv-validate.js'
import { formatAjvErrors } from '../../../tests/helpers/schemas.js'
import secretScanningSchema from '../lib/secret-scanning-schema.js'

jest.useFakeTimers({ legacyFakeTimers: true })

describe('lint secret-scanning', () => {
  const yamlContent = yaml.load(fs.readFileSync('data/secret-scanning.yml', 'utf8'))
  const jsonValidate = ajvValidate(secretScanningSchema)

  test('matches the schema', () => {
    const valid = jsonValidate(yamlContent)
    let errors

    if (!valid) {
      errors = formatAjvErrors(jsonValidate.errors)
    }

    expect(valid, errors).toBe(true)
  })
})
