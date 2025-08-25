import fs from 'fs/promises'
import semver from 'semver'

import versionSatisfiesRange from './version-satisfies-range'

const rawDates = JSON.parse(await fs.readFile('src/ghes-releases/lib/enterprise-dates.json'))

// ============================================================================
// STATICALLY DEFINED VALUES
// ============================================================================

// Upcoming GHES release numbers (used in frontmatter and release planning)
export const next = '3.18'
export const nextNext = '3.19'

// Currently supported GHES versions (in descending order, latest first)
export const supported = ['3.17', '3.16', '3.15', '3.14']

// Set to version number when in RC phase, null when no RC is active
export const releaseCandidate = null

// Deprecated versions with functional redirect handling (3.0+)
// When archiving a new version, add it here and update the archival process
export const deprecatedWithFunctionalRedirects = [
  '3.13',
  '3.12',
  '3.11',
  '3.10',
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

// All deprecated versions (combines functional + legacy redirect handling)
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

// Versions with legacy asset handling (stored in separate repos before blob storage)
export const legacyAssetVersions = ['3.0', '2.22', '2.21']

// Historical milestones that mark feature/process changes
export const firstReleaseStoredInBlobStorage = '3.2'
export const firstVersionDeprecatedOnNewSite = '2.13'
export const lastVersionWithoutArchivedRedirectsFile = '2.17'
export const lastReleaseWithLegacyFormat = '2.18' // Last to use /enterprise/<release>/... paths
export const firstReleaseNote = '2.20'
export const firstRestoredAdminGuides = '2.21'

// ============================================================================
// COMPUTED VALUES
// ============================================================================

// All versions (supported + deprecated)
export const all = supported.concat(deprecated)

// Latest and stable version helpers
export const latest = supported[0]
export const latestStable = releaseCandidate ? supported[1] : latest
export const oldestSupported = supported[supported.length - 1]

// Enhanced dates object with computed display values for templates
export const dates = Object.fromEntries(
  Object.entries(rawDates).map(([version, versionData]) => [
    version,
    {
      ...versionData,
      displayCandidateDate: processDateForDisplay(versionData.releaseCandidateDate),
      displayReleaseDate: processDateForDisplay(versionData.generalAvailabilityDate),
    },
  ]),
)

// Deprecation tracking
export const nextDeprecationDate = dates[oldestSupported].deprecationDate
export const isOldestReleaseDeprecated = new Date() > new Date(nextDeprecationDate)

// Filtered version arrays for different use cases
export const deprecatedOnNewSite = deprecated.filter((version) =>
  versionSatisfiesRange(version, '>=2.13'),
)

export const deprecatedReleasesWithLegacyFormat = deprecated.filter((version) =>
  versionSatisfiesRange(version, '<=2.18'),
)

export const deprecatedReleasesWithNewFormat = deprecated.filter((version) =>
  versionSatisfiesRange(version, '>2.18'),
)

export const deprecatedReleasesOnDeveloperSite = deprecated.filter((version) =>
  versionSatisfiesRange(version, '<=2.16'),
)

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Determines if a release date should be displayed based on current time.
 * Only shows dates that have already occurred to avoid showing future release dates.
 * @param {string|null} date - ISO date string
 * @returns {string|null} - Date string if in the past, null if future or invalid
 */
function processDateForDisplay(date) {
  if (!date) return null
  const currentTimestamp = Math.floor(Date.now() / 1000)
  const dateTimestamp = Math.floor(new Date(date).getTime() / 1000)
  return dateTimestamp <= currentTimestamp ? date : null
}

/**
 * Validates that version sequence is correct (each version is exactly one release ahead)
 * @param {string} v1 - Current version
 * @param {string} v2 - Next version
 * @throws {Error} If version sequence is invalid
 */
function isValidNext(v1, v2) {
  const semverV1 = semver.coerce(v1).raw
  const semverV2 = semver.coerce(v2).raw
  const isValid =
    semverV2 === semver.inc(semverV1, 'minor') || semverV2 === semver.inc(semverV1, 'major')
  if (!isValid)
    throw new Error(`The version "${v2}" is not one version ahead of "${v1}" as expected`)
}

export const findReleaseNumberIndex = (releaseNum) => {
  return all.findIndex((i) => i === releaseNum)
}

export const getNextReleaseNumber = (releaseNum) => {
  return all[findReleaseNumberIndex(releaseNum) - 1]
}

export const getPreviousReleaseNumber = (releaseNum) => {
  return all[findReleaseNumberIndex(releaseNum) + 1]
}

// Validate that version sequence is correct
isValidNext(supported[0], next)
isValidNext(next, nextNext)

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

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
