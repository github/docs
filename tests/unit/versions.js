import { jest } from '@jest/globals'
import revalidator from 'revalidator'
import { allVersions } from '../../lib/all-versions.js'
import { latest } from '../../lib/enterprise-server-releases.js'
import schema from '../helpers/schemas/versions-schema.js'
import { getJSON } from '../helpers/supertest.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'

jest.useFakeTimers()

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

describe('versions middleware', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('adds res.context.allVersions object', async () => {
    const allVersionsFromMiddleware = await getJSON('/en?json=allVersions')
    expect(allVersionsFromMiddleware).toEqual(allVersions)
  })

  test('adds res.context.currentVersion string', async () => {
    let currentVersion = await getJSON('/en?json=currentVersion')
    expect(currentVersion).toBe(nonEnterpriseDefaultVersion)

    currentVersion = await getJSON(`/en/${nonEnterpriseDefaultVersion}?json=currentVersion`)
    expect(currentVersion).toBe(nonEnterpriseDefaultVersion)

    currentVersion = await getJSON(`/en/enterprise-server@${latest}?json=currentVersion`)
    expect(currentVersion).toBe(`enterprise-server@${latest}`)
  })
})
