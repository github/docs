import Permalink from '../../lib/permalink.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'

// Permalink constructor requires: languageCode, pageVersion, relativePath, title
// Permalink.derive requires: languageCode, relativePath, title, versions (<- FM prop)

describe('Permalink class', () => {
  test('derives info for unversioned homepage', () => {
    const versions = {
      'free-pro-team': '*',
      'enterprise-server': '*',
    }
    const permalinks = Permalink.derive(
      'en',
      'index.md',
      'Hello World',
      getApplicableVersions(versions)
    )
    expect(permalinks.length).toBeGreaterThan(1)
    const homepagePermalink = permalinks.find(
      (permalink) => permalink.pageVersion === nonEnterpriseDefaultVersion
    )
    expect(homepagePermalink.href).toBe('/en')
  })

  test('derives info for non-enterprise versioned homepage', () => {
    const permalink = new Permalink('en', nonEnterpriseDefaultVersion, 'index.md', 'Hello World')
    expect(permalink.pageVersionTitle).toBe('GitHub.com')
    expect(permalink.href).toBe('/en')
  })

  test('derives info for enterprise server versioned homepage', () => {
    const permalink = new Permalink(
      'en',
      `enterprise-server@${enterpriseServerReleases.latest}`,
      'index.md',
      'Hello World'
    )
    expect(permalink.pageVersionTitle).toBe(`Enterprise Server ${enterpriseServerReleases.latest}`)
    expect(permalink.href).toBe(`/en/enterprise-server@${enterpriseServerReleases.latest}`)
  })

  test('derives info for GitHub.com homepage', () => {
    const permalink = new Permalink(
      'en',
      nonEnterpriseDefaultVersion,
      'github/index.md',
      'Hello World'
    )
    expect(permalink.pageVersionTitle).toBe('GitHub.com')
    expect(permalink.href).toBe('/en/github')
  })

  test('derives info for enterprise version of GitHub.com homepage', () => {
    const permalink = new Permalink(
      'en',
      `enterprise-server@${enterpriseServerReleases.latest}`,
      'github/index.md',
      'Hello World'
    )
    expect(permalink.pageVersionTitle).toBe(`Enterprise Server ${enterpriseServerReleases.latest}`)
    expect(permalink.href).toBe(`/en/enterprise-server@${enterpriseServerReleases.latest}/github`)
  })

  test('preserves input properties', () => {
    const permalink = new Permalink('en', nonEnterpriseDefaultVersion, 'index.md', 'Hello World')
    expect(permalink.languageCode).toBe('en')
    expect(permalink.pageVersion).toBe(nonEnterpriseDefaultVersion)
    expect(permalink.relativePath).toBe('index.md')
    expect(permalink.title).toBe('Hello World')
  })
})
