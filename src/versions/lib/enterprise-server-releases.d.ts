type Dates = {
  [key: string]: {
    releaseDate: string
    deprecationDate: string
  }
}

export const dates: Dates

export const next: string

export const nextNext: string

export const supported: string[]

export const releaseCandidate: null | string

export const deprecatedWithFunctionalRedirects: string[]

export const deprecated: string[]

export const legacyAssetVersions: string[]

export const firstReleaseStoredInBlobStorage: string

export const all: string[]
export const latest: string
export const latestStable: string
export const oldestSupported: string
export const nextDeprecationDate: string
export const isOldestReleaseDeprecated: boolean
export const deprecatedOnNewSite: string[]

export const firstVersionDeprecatedOnNewSite: string
export const lastVersionWithoutArchivedRedirectsFile: string
export const lastReleaseWithLegacyFormat: string
export const deprecatedReleasesWithLegacyFormat: string[]

export const deprecatedReleasesWithNewFormat: string[]

export const deprecatedReleasesOnDeveloperSite: string[]

export const firstReleaseNote: string
export const firstRestoredAdminGuides: string

export declare function findReleaseNumberIndex(releaseNum: number): number
export declare function getNextReleaseNumber(releaseNum: number): string
export declare function getPreviousReleaseNumber(releaseNum: number): string

const allExports = {
  dates,
  next,
  nextNext,
  supported,
  releaseCandidate,
  deprecatedWithFunctionalRedirects,
  deprecated,
  legacyAssetVersions,
  firstReleaseStoredInBlobStorage,
  all,
  latest,
  latestStable,
  oldestSupported,
  nextDeprecationDate,
  isOldestReleaseDeprecated,
  deprecatedOnNewSite,
  firstVersionDeprecatedOnNewSite,
  lastVersionWithoutArchivedRedirectsFile,
  lastReleaseWithLegacyFormat,
  deprecatedReleasesWithLegacyFormat,
  deprecatedReleasesWithNewFormat,
  deprecatedReleasesOnDeveloperSite,
  firstReleaseNote,
  firstRestoredAdminGuides,
  findReleaseNumberIndex,
  getNextReleaseNumber,
  getPreviousReleaseNumber,
}

export default allExports
