require('../../lib/feature-flags')
const Permalink = require('../../lib/permalink')
const enterpriseServerReleases = require('../../lib/enterprise-server-releases')
const nonEnterpriseDefaultVersion = require('../../lib/non-enterprise-default-version')

const testFeatureNewVersions = process.env.FEATURE_NEW_VERSIONS ? test : test.skip
const testFeatureOldVersions = process.env.FEATURE_NEW_VERSIONS ? test.skip : test

// Permalink constructor requires: languageCode, pageVersion, relativePath, title
// Permalink.derive requires: languageCode, relativePath, title, versions (<- FM prop)

describe('Permalink class', () => {
  // We can only use Permalink.derive to get the special 'homepage' permalink
  testFeatureNewVersions('derives info for unversioned homepage', () => {
    const versions = {
      'free-pro-team': '*',
      'enterprise-server': '*'
    }
    const permalinks = Permalink.derive('en', 'index.md', 'Hello World', versions)
    expect(permalinks.length).toBeGreaterThan(1)
    const homepagePermalink = permalinks.find(permalink => permalink.pageVersion === 'homepage')
    expect(homepagePermalink.href).toBe('/en')
  })

  testFeatureOldVersions('derives info for homepage', () => {
    const permalink = new Permalink('en', 'dotcom', 'index.md', 'Hello World')
    expect(permalink.pageVersionTitle).toBe('GitHub.com')
    expect(permalink.href).toBe('/en')
  })

  testFeatureNewVersions('derives info for non-enterprise versioned homepage', () => {
    const permalink = new Permalink('en', nonEnterpriseDefaultVersion, 'index.md', 'Hello World')
    expect(permalink.pageVersionTitle).toBe('Free, Pro, and Team')
    expect(permalink.href).toBe(`/en/${nonEnterpriseDefaultVersion}`)
  })

  testFeatureNewVersions('derives info for enterprise server versioned homepage', () => {
    const permalink = new Permalink('en', `enterprise-server@${enterpriseServerReleases.latest}`, 'index.md', 'Hello World')
    expect(permalink.pageVersionTitle).toBe(`Enterprise Server ${enterpriseServerReleases.latest}`)
    expect(permalink.href).toBe(`/en/enterprise-server@${enterpriseServerReleases.latest}`)
  })

  testFeatureNewVersions('derives info for GitHub.com homepage', () => {
    const permalink = new Permalink('en', nonEnterpriseDefaultVersion, 'github/index.md', 'Hello World')
    expect(permalink.pageVersionTitle).toBe('Free, Pro, and Team')
    expect(permalink.href).toBe(`/en/${nonEnterpriseDefaultVersion}/github`)
  })

  testFeatureOldVersions('derives info for GitHub.com homepage', () => {
    const permalink = new Permalink('en', 'dotcom', 'github/index.md', 'Hello World')
    expect(permalink.pageVersionTitle).toBe('GitHub.com')
    expect(permalink.href).toBe('/en/github')
  })

  testFeatureNewVersions('derives info for enterprise version of GitHub.com homepage', () => {
    const permalink = new Permalink('en', `enterprise-server@${enterpriseServerReleases.latest}`, 'github/index.md', 'Hello World')
    expect(permalink.pageVersionTitle).toBe(`Enterprise Server ${enterpriseServerReleases.latest}`)
    expect(permalink.href).toBe(`/en/enterprise-server@${enterpriseServerReleases.latest}/github`)
  })

  testFeatureOldVersions('derives info for enterprise version of GitHub.com homepage', () => {
    const permalink = new Permalink('en', enterpriseServerReleases.latest, 'github/index.md', 'Hello World')
    expect(permalink.pageVersionTitle).toBe(`Enterprise Server ${enterpriseServerReleases.latest}`)
    expect(permalink.href).toBe(`/en/enterprise/${enterpriseServerReleases.latest}/user/github`)
  })

  // Note enterprise/index.md no longer exists after the latest versioning changes
  testFeatureOldVersions('derives info for enterprise homepage', () => {
    const permalink = new Permalink('en', enterpriseServerReleases.latest, 'enterprise/index.md', 'Hello World')
    expect(permalink.pageVersionTitle).toBe(`Enterprise Server ${enterpriseServerReleases.latest}`)
    expect(permalink.href).toBe(`/en/enterprise/${enterpriseServerReleases.latest}`)
  })

  testFeatureNewVersions('preserves input properties', () => {
    const permalink = new Permalink('en', nonEnterpriseDefaultVersion, 'index.md', 'Hello World')
    expect(permalink.languageCode).toBe('en')
    expect(permalink.pageVersion).toBe(nonEnterpriseDefaultVersion)
    expect(permalink.relativePath).toBe('index.md')
    expect(permalink.title).toBe('Hello World')
  })

  testFeatureOldVersions('preserves input properties', () => {
    const permalink = new Permalink('en', 'dotcom', 'index.md', 'Hello World')
    expect(permalink.languageCode).toBe('en')
    expect(permalink.pageVersion).toBe('dotcom')
    expect(permalink.relativePath).toBe('index.md')
    expect(permalink.title).toBe('Hello World')
  })
})
