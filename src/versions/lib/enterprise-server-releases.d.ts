// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type Dates = {
  [key: string]: {
    releaseDate: string // For backward compatibility - will be RC date initially, then GA date once available
    deprecationDate: string
    releaseCandidateDate?: string // Release Candidate date
    generalAvailabilityDate?: string // General Availability date
    displayCandidateDate?: string | null // Computed: RC date if in past, null if future
    displayReleaseDate?: string | null // Computed: GA date if in past, null if future
  }
}

// ============================================================================
// STATICALLY DEFINED VALUES
// ============================================================================

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

// ============================================================================
// COMPUTED VALUES
// ============================================================================

export const all: string[]
export const latest: string
export const latestStable: string
export const oldestSupported: string
export const dates: Dates
export const nextDeprecationDate: string
export const isOldestReleaseDeprecated: boolean
export const deprecatedOnNewSite: string[]
export const deprecatedReleasesWithLegacyFormat: string[]
export const deprecatedReleasesWithNewFormat: string[]
export const deprecatedReleasesOnDeveloperSite: string[]

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export declare function findReleaseNumberIndex(releaseNum: string): number
export declare function getNextReleaseNumber(releaseNum: string): string
export declare function getPreviousReleaseNumber(releaseNum: string): string

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

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
  deprecatedOnNewSite,
  deprecatedReleasesWithLegacyFormat,
  deprecatedReleasesWithNewFormat,
  deprecatedReleasesOnDeveloperSite,
  findReleaseNumberIndex,
  getNextReleaseNumber,
  getPreviousReleaseNumber,
}

export default allExports
