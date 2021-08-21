import versionSatisfiesRange from './version-satisfies-range.js'
import path from 'path'
import readFileAsync from './readfile-async.js'

export const dates = JSON.parse(
  await readFileAsync(path.join(process.cwd(), './lib/enterprise-dates.json'))
)

// GHES Release Lifecycle Dates:
// enterprise-releases/docs/supported-versions.md#release-lifecycle-dates

// Some frontmatter may contain the upcoming GHES release number
export const next = '3.2'

export const supported = ['3.1', '3.0', '2.22']
export const deprecated = [
  '2.21',
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
  '11.10.340',
]
export const legacyAssetVersions = ['3.0', '2.22', '2.21']

export const all = supported.concat(deprecated)
export const latest = supported[0]
export const oldestSupported = supported[supported.length - 1]
export const nextDeprecationDate = dates[oldestSupported].deprecationDate
export const isOldestReleaseDeprecated = new Date() > new Date(nextDeprecationDate)
export const deprecatedOnNewSite = deprecated.filter((version) =>
  versionSatisfiesRange(version, '>=2.13')
)
export const firstVersionDeprecatedOnNewSite = '2.13'
// starting from 2.18, we updated the archival script to create a redirects.json top-level file in the archived repo
export const lastVersionWithoutArchivedRedirectsFile = '2.17'
// last version using paths like /enterprise/<release>/<user>/<product>/<category>/<article>
// instead of /enterprise-server@<release>/<product>/<category>/<article>
export const lastReleaseWithLegacyFormat = '2.18'
export const deprecatedReleasesWithLegacyFormat = deprecated.filter((version) =>
  versionSatisfiesRange(version, '<=2.18')
)
export const deprecatedReleasesWithNewFormat = deprecated.filter((version) =>
  versionSatisfiesRange(version, '>2.18')
)
export const deprecatedReleasesOnDeveloperSite = deprecated.filter((version) =>
  versionSatisfiesRange(version, '<=2.16')
)
export const firstReleaseNote = '2.20'
export const firstRestoredAdminGuides = '2.21'

export const findReleaseNumberIndex = (releaseNum) => {
  return all.findIndex((i) => i === releaseNum)
}
export const getNextReleaseNumber = (releaseNum) => {
  return all[findReleaseNumberIndex(releaseNum) - 1]
}
export const getPreviousReleaseNumber = (releaseNum) => {
  return all[findReleaseNumberIndex(releaseNum) + 1]
}

export default {
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
  firstReleaseNote,
  firstRestoredAdminGuides,
  getNextReleaseNumber,
  getPreviousReleaseNumber,
}
