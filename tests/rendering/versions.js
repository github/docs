import { describe, jest } from '@jest/globals'

import { allVersions } from '../../lib/all-versions.js'
import { latest } from '../../lib/enterprise-server-releases.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
import { getJSON } from '../helpers/e2etest.js'

describe('versions middleware', () => {
  jest.setTimeout(60 * 1000)

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
