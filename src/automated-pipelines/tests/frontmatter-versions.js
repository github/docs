import { describe, expect } from '@jest/globals'

import { supported } from '../../../lib/enterprise-server-releases.js'
import { allVersionKeys, allVersions } from '../../../lib/all-versions.js'
import { convertVersionsToFrontmatter } from '../lib/update-markdown.js'

describe('frontmatter versions are generated correctly from automated data', () => {
  test('non-continuous enterprise server versions', async () => {
    const fromVersions = allVersionKeys.filter(
      (version) =>
        version !== `enterprise-server@${supported[0]}` &&
        version !== `enterprise-server@${supported[2]}`
    )

    const expectedEneterpriseServerVersions = fromVersions
      .map(
        (version) =>
          version.includes('enterprise-server@') && version.replace('enterprise-server@', '')
      )
      .filter(Boolean)

    const expectedEnterpriseServerVersions = expectedEneterpriseServerVersions
      .sort()
      .map((version) => `=${version}`)
      .join(' || ')

    const expectedVersions = {
      fpt: '*',
      ghae: '*',
      ghec: '*',
      ghes: expectedEnterpriseServerVersions,
    }
    const toFrontmatter = await convertVersionsToFrontmatter(fromVersions)
    expect(toFrontmatter).toEqual(expectedVersions)
  })

  test('less than the latest enterprise server version', async () => {
    const fromVersions = Object.values(allVersions)
      .filter(
        (version) =>
          !(version.currentRelease === version.latestRelease && version.hasNumberedReleases)
      )
      .map((version) => version.version)
    const nextLatestRelease = [...supported].sort()[supported.length - 2]
    const expectedVersions = {
      fpt: '*',
      ghae: '*',
      ghec: '*',
      ghes: `<=${nextLatestRelease}`,
    }
    const toFrontmatter = await convertVersionsToFrontmatter(fromVersions)
    expect(toFrontmatter).toEqual(expectedVersions)
  })

  test('greater than the oldest enterprise server version', async () => {
    const oldestRelease = [...supported].sort()[0]
    const fromVersions = Object.values(allVersions)
      .filter((version) => !(version.version === `enterprise-server@${oldestRelease}`))
      .map((version) => version.version)

    const secondOldestRelease = [...supported].sort()[1]
    const expectedVersions = {
      fpt: '*',
      ghae: '*',
      ghec: '*',
      ghes: `>=${secondOldestRelease}`,
    }
    const toFrontmatter = await convertVersionsToFrontmatter(fromVersions)
    expect(toFrontmatter).toEqual(expectedVersions)
  })

  test('no non-numbered release versions', async () => {
    const fromVersions = Object.values(allVersions)
      .filter((version) => version.hasNumberedReleases)
      .map((version) => version.version)

    const expectedVersions = {
      ghes: `*`,
    }
    const toFrontmatter = await convertVersionsToFrontmatter(fromVersions)
    expect(toFrontmatter).toEqual(expectedVersions)
  })
})
