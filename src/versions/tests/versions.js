import { describe, expect, test } from 'vitest'

import { getJsonValidator } from '@/tests/lib/validate-json-schema'
import { allVersions } from '@/versions/lib/all-versions'
import { latest } from '@/versions/lib/enterprise-server-releases'
import schema from '@/tests/helpers/schemas/versions-schema'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { formatAjvErrors } from '@/tests/helpers/schemas'

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
