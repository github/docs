import { jest } from '@jest/globals'

import featureVersionsSchema from '../lib/feature-versions-schema.js'
import { getDeepDataByLanguage } from '#src/data-directory/lib/get-data.js'
import { getJsonValidator } from '#src/tests/lib/validate-json-schema.js'
import { formatAjvErrors } from '#src/tests/helpers/schemas.js'

/*
  NOTE: This test suite does NOT validate the `versions` frontmatter in content files.
  That's because lib/page.js validates frontmatter when loading all the pages (which happens
  when running npm start or tests) and throws an error immediately if there are any issues.
  This test suite DOES validate the data/features `versions` according to the same FM schema.
  Some tests/unit/page.js tests also exercise the frontmatter validation.
*/

jest.useFakeTimers({ legacyFakeTimers: true })

const featureVersions = Object.entries(getDeepDataByLanguage('features', 'en'))
const validate = getJsonValidator(featureVersionsSchema)

// Make sure data/features/*.yml contains valid versioning.
describe('lint feature versions', () => {
  test.each(featureVersions)('data/features/%s matches the schema', (name, featureVersion) => {
    const isValid = validate(featureVersion)
    let errors

    if (!isValid) {
      errors = formatAjvErrors(validate.errors)
    }

    expect(isValid, errors).toBe(true)
  })
})
