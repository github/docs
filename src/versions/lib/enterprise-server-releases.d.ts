type Dates = {
  [key: string]: {
    // Templates read releaseDate as the display date: RC date until the GA date exists.
    releaseDate: string
    deprecationDate: string
    releaseCandidateDate?: string
    generalAvailabilityDate?: string
    // Templates hide release dates until each date has passed.
    displayCandidateDate?: string | null
    displayReleaseDate?: string | null
  }
}

export const next: string
export const nextNext: string
export const supported: string[]
export const releaseCandidate: null | string
export const deprecatedWithFunctionalRedirects: string[]
export const deprecated: string[]
export const legacyAssetVersions: string[]
export const firstReleaseStoredInBlobStorage: string
export const firstVersionDeprecatedOnNewSite: string
export const lastVersionWithoutArchivedRedirectsFile: string
export const lastReleaseWithLegacyFormat: string
export const firstReleaseNote: string
export const firstRestoredAdminGuides: string

export const all: string[]
export const latest: string
export const latestStable: string
export const oldestSupported: string
export const dates: Dates
export const nextDeprecationDate: string
export const isOldestReleaseDeprecated: boolean
export const releasesWithOldestDeprecationDate: string[]
export const deprecatedOnNewSite: string[]
export const deprecatedReleasesWithLegacyFormat: string[]
export const deprecatedReleasesWithNewFormat: string[]
export const deprecatedReleasesOnDeveloperSite: string[]

export declare function findReleaseNumberIndex(releaseNum: string): number
export declare function getNextReleaseNumber(releaseNum: string): string
export declare function getPreviousReleaseNumber(releaseNum: string): string

const allExports = {
  next,
  nextNext,
  supported,
  releaseCandidate,
  deprecatedWithFunctionalRedirects,
  deprecated,
  legacyAssetVersions,
  firstReleaseStoredInBlobStorage,
  firstVersionDeprecatedOnNewSite,
  lastVersionWithoutArchivedRedirectsFile,
  lastReleaseWithLegacyFormat,
  firstReleaseNote,
  firstRestoredAdminGuides,
  all,
  latest,
  latestStable,
  oldestSupported,
  dates,
  nextDeprecationDate,
  isOldestReleaseDeprecated,
  releasesWithOldestDeprecationDate,
  deprecatedOnNewSite,
  deprecatedReleasesWithLegacyFormat,
  deprecatedReleasesWithNewFormat,
  deprecatedReleasesOnDeveloperSite,
  findReleaseNumberIndex,
  getNextReleaseNumber,
  getPreviousReleaseNumber,
}

export default allExports
