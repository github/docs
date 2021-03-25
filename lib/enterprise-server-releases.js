const versionSatisfiesRange = require('./version-satisfies-range')

// GHES Release Lifecycle Dates:
// enterprise-releases/docs/supported-versions.md#release-lifecycle-dates
const dates = require('../lib/enterprise-dates.json')

// Some frontmatter may contain the upcoming GHES release number
const next = '3.1'

const supported = [
  '3.0',
  '2.22',
  '2.21'
]
const deprecated = [
  '2.20',
  '2.19',
  '2.18',
  '2.17',
  '2.16',
  '2.15',
  '2.14',
  '2.13',
  '2.12',
  '2.11',
  '2.10',
  '2.9',
  '2.8',
  '2.7',
  '2.6',
  '2.5',
  '2.4',
  '2.3',
  '2.2',
  '2.1',
  '2.0',
  '11.10.340'
]
const legacyAssetVersions = [
  '3.0',
  '2.22',
  '2.21'
]

const all = supported.concat(deprecated)
const latest = supported[0]
const oldestSupported = supported[supported.length - 1]
const nextDeprecationDate = dates[oldestSupported].deprecationDate
const isOldestReleaseDeprecated = new Date() > new Date(nextDeprecationDate)
const deprecatedOnNewSite = deprecated.filter(version => versionSatisfiesRange(version, '>=2.13'))
const firstVersionDeprecatedOnNewSite = '2.13'
// starting from 2.18, we updated the archival script to create a redirects.json top-level file in the archived repo
const lastVersionWithoutArchivedRedirectsFile = '2.17'
// last version using paths like /enterprise/<release>/<user>/<product>/<category>/<article>
// instead of /enterprise-server@<release>/<product>/<category>/<article>
const lastReleaseWithLegacyFormat = '2.18'
const deprecatedReleasesWithLegacyFormat = deprecated.filter(version => versionSatisfiesRange(version, '<=2.18'))
const deprecatedReleasesWithNewFormat = deprecated.filter(version => versionSatisfiesRange(version, '>2.18'))
const deprecatedReleasesOnDeveloperSite = deprecated.filter(version => versionSatisfiesRange(version, '<=2.16'))
const firstReleaseNote = '2.20'

module.exports = {
  next,
  supported,
  deprecated,
  legacyAssetVersions,
  all,
  latest,
  oldestSupported,
  nextDeprecationDate,
  isOldestReleaseDeprecated,
  deprecatedOnNewSite,
  dates,
  firstVersionDeprecatedOnNewSite,
  lastVersionWithoutArchivedRedirectsFile,
  lastReleaseWithLegacyFormat,
  deprecatedReleasesWithLegacyFormat,
  deprecatedReleasesWithNewFormat,
  deprecatedReleasesOnDeveloperSite,
  firstReleaseNote
}
