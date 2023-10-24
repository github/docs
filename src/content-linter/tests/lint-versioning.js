import { jest } from '@jest/globals'
import Ajv from 'ajv'
import addErrors from 'ajv-errors'
import semver from 'semver'

import featureVersionsSchema from '../lib/feature-versions-schema.js'
import { getDeepDataByLanguage } from '../../../lib/get-data.js'
import { formatAjvErrors } from '../../../tests/helpers/schemas.js'

/*
  NOTE: This test suite does NOT validate the `versions` frontmatter in content files.
  That's because lib/page.js validates frontmatter when loading all the pages (which happens
  when running npm start or tests) and throws an error immediately if there are any issues.
  This test suite DOES validate the data/features `versions` according to the same FM schema.
  Some tests/unit/page.js tests also exercise the frontmatter validation.
*/

jest.useFakeTimers({ legacyFakeTimers: true })

const featureVersions = Object.entries(getDeepDataByLanguage('features', 'en'))

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true })
addErrors(ajv)
// *** TODO: We can drop this override once the frontmatter schema has been updated to work with AJV. ***
ajv.addFormat('semver', {
  validate: (x) => semver.validRange(x),
})
// *** End TODO ***
const validate = ajv.compile(featureVersionsSchema)

// Make sure data/features/*.yml contains valid versioning.
describe('lint feature versions', () => {
  test.each(featureVersions)('data/features/%s matches the schema', (name, featureVersion) => {
    const valid = validate(featureVersion)
    let errors

    if (!valid) {
      errors = formatAjvErrors(validate.errors)
    }

    expect(valid, errors).toBe(true)
  })
})
