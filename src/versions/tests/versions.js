import { describe, expect, test } from 'vitest'

import { getJsonValidator } from '#src/tests/lib/validate-json-schema.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { latest } from '#src/versions/lib/enterprise-server-releases.js'
import schema from '#src/tests/helpers/schemas/versions-schema.js'
import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'
import { formatAjvErrors } from '#src/tests/helpers/schemas.js'

const validate = getJsonValidator(schema)

describe('versions module', () => {
  test('is an object with versions as keys', () => {
    expect(nonEnterpriseDefaultVersion in allVersions).toBe(true)
    expect(`enterprise-server@${latest}` in allVersions).toBe(true)
  })

  test('every version is valid', () => {
    Object.values(allVersions).forEach((versionObj) => {
      const isValid = validate(versionObj)
      let errors

      if (!isValid) {
        errors = `version '${versionObj.version}': ${formatAjvErrors(validate.errors)}`
      }

      expect(isValid, errors).toBe(true)
    })
  })

  test('check REST api calendar date versioned versions set to correct latestApiVersion', () => {
    Object.values(allVersions).forEach((versionObj) => {
      if (versionObj.apiVersions.length > 0) {
        const latestApiVersion = versionObj.latestApiVersion
        const apiVersions = versionObj.apiVersions
        expect(apiVersions).toContain(latestApiVersion)

        const latestApiDate = new Date(latestApiVersion).getTime()
        for (const version of apiVersions) {
          expect(latestApiDate).toBeGreaterThanOrEqual(new Date(version).getTime())
        }
      }
    })
  })
})
