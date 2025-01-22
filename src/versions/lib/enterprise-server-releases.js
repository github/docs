import fs from 'fs/promises'
import semver from 'semver'

import versionSatisfiesRange from './version-satisfies-range.js'

export const dates = JSON.parse(await fs.readFile('src/ghes-releases/lib/enterprise-dates.json'))

// GHES Release Lifecycle Dates:
// enterprise-releases/docs/supported-versions.md#release-lifecycle-dates

// Some frontmatter may contain the upcoming GHES release number
export const next = '3.16'
export const nextNext = '3.17'

export const supported = ['3.15', '3.14', '3.13', '3.12', '3.11', '3.10']

// Edit this to `null` when it's no longer the release candidate
export const releaseCandidate = null

// Ensure that:
// "next" is ahead of "latest" by one minor or major release.
// "nextNext" is ahead of "next" by one minor or major release.
isValidNext(supported[0], next)
isValidNext(next, nextNext)

function isValidNext(v1, v2) {
  const semverV1 = semver.coerce(v1).raw
  const semverV2 = semver.coerce(v2).raw
  const isValid =
    semverV2 === semver.inc(semverV1, 'minor') || semverV2 === semver.inc(semverV1, 'major')
  if (!isValid)
    throw new Error(`The version "${v2}" is not one version ahead of "${v1}" as expected`)
}

// This indicates the point where we started treating redirect lookups
// to be a *function* rather than a big *lookup object*.
// This is important distinguish because we need to leverage that
// when dealing with redirects specifically in these archived
// enterprise versions.
// When you're archiving a version, add the new archived number to this
// array and you should never need to touch the `deprecated` array
// on the line just below.
export const deprecatedWithFunctionalRedirects = [
  '3.9',
  '3.8',
  '3.7',
  '3.6',
  '3.5',
  '3.4',
  '3.3',
  '3.2',
  '3.1',
  '3.0',
]
export const deprecated = [
  ...deprecatedWithFunctionalRedirects,
  '2.22',
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

// As of GHES 3.2, we started storing the scraped assets and html
// in Azure blob storage. All enterprise deprecated veresions are
// now stored in individual docs-ghes-<release number> repos. This
// release number now indicates a change in the way the archived html
// references assets.
export const firstReleaseStoredInBlobStorage = '3.2'

export const all = supported.concat(deprecated)
export const latest = supported[0]
export const latestStable = releaseCandidate ? supported[1] : latest
export const oldestSupported = supported[supported.length - 1]
export const nextDeprecationDate = dates[oldestSupported].deprecationDate
export const isOldestReleaseDeprecated = new Date() > new Date(nextDeprecationDate)
export const deprecatedOnNewSite = deprecated.filter((version) =>
  versionSatisfiesRange(version, '>=2.13'),
)
export const firstVersionDeprecatedOnNewSite = '2.13'
// starting from 2.18, we updated the archival script to create a redirects.json top-level file in the archived repo
export const lastVersionWithoutArchivedRedirectsFile = '2.17'
// last version using paths like /enterprise/<release>/<user>/<product>/<category>/<article>
// instead of /enterprise-server@<release>/<product>/<category>/<article>
export const lastReleaseWithLegacyFormat = '2.18'
export const deprecatedReleasesWithLegacyFormat = deprecated.filter((version) =>
  versionSatisfiesRange(version, '<=2.18'),
)
export const deprecatedReleasesWithNewFormat = deprecated.filter((version) =>
  versionSatisfiesRange(version, '>2.18'),
)
export const deprecatedReleasesOnDeveloperSite = deprecated.filter((version) =>
  versionSatisfiesRange(version, '<=2.16'),
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
  nextNext,
  supported,
  deprecated,
  legacyAssetVersions,
  all,
  latest,
  latestStable,
  releaseCandidate,
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
