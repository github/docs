import { jest } from '@jest/globals'
import Ajv from 'ajv'

import { allVersions } from '#src/versions/lib/all-versions.js'
import { latest } from '#src/versions/lib/enterprise-server-releases.js'
import schema from '../../../tests/helpers/schemas/versions-schema.js'
import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'
import { formatAjvErrors } from '../../../tests/helpers/schemas.js'

jest.useFakeTimers({ legacyFakeTimers: true })

const ajv = new Ajv({ allErrors: true })
const validate = ajv.compile(schema)

describe('versions module', () => {
  test('is an object with versions as keys', () => {
    expect(nonEnterpriseDefaultVersion in allVersions).toBe(true)
    expect(`enterprise-server@${latest}` in allVersions).toBe(true)
  })

  test('every version is valid', () => {
    Object.values(allVersions).forEach((versionObj) => {
      const valid = validate(versionObj)
      let errors

      if (!valid) {
        errors = `version '${versionObj.version}': ${formatAjvErrors(validate.errors)}`
      }

      expect(valid, errors).toBe(true)
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
