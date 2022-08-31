import { jest } from '@jest/globals'
import revalidator from 'revalidator'
import { allVersions } from '../../lib/all-versions.js'
import { latest } from '../../lib/enterprise-server-releases.js'
import schema from '../helpers/schemas/versions-schema.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'

jest.useFakeTimers({ legacyFakeTimers: true })

describe('versions module', () => {
  test('is an object with versions as keys', () => {
    expect(nonEnterpriseDefaultVersion in allVersions).toBe(true)
    expect(`enterprise-server@${latest}` in allVersions).toBe(true)
  })

  test('every version is valid', () => {
    Object.values(allVersions).forEach((versionObj) => {
      const { valid, errors } = revalidator.validate(versionObj, schema)
      const expectation = JSON.stringify({ versionObj, errors }, null, 2)
      expect(valid, expectation).toBe(true)
    })
  })
})
