import fs from 'fs'
import yaml from 'js-yaml'
import { get } from 'lodash-es'
import Ajv from 'ajv'
import addErrors from 'ajv-errors'
import semver from 'semver'

import schema from '../lib/secret-scanning-schema.js'

const data = yaml.load(fs.readFileSync('data/secret-scanning.yml', 'utf8'))

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true })
addErrors(ajv)

// *** TODO: We can drop this override once the frontmatter schema has been updated to work with AJV. ***
ajv.addFormat('semver', {
  validate: (x) => semver.validRange(x),
})
// *** End TODO ***

const validate = ajv.compile(schema)

test('make sure secret scanning data matches the schema', () => {
  validate(data)

  const errors = (validate.errors || []).map((errorObj) => {
    // We have to use AJV's instancePath, which is an index number, to find out which entries are invalid.
    const split = errorObj.instancePath.split('/')
    split.shift()
    const index = split.shift()
    const entry = data[index]
    const path = split.length ? split.join('.') : null
    return path
      ? `The entry with provider '${entry.provider}' (at '${path}: ${get(entry, path)}') ${
          errorObj.message
        }`
      : `The entry with provider '${entry.provider}' ${errorObj.message}`
  })

  expect(errors.length, errors.join('\n  ')).toBe(0)
})
