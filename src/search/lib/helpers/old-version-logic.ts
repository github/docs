import { allVersions } from '@/versions/lib/all-versions'

// TODO: Old version logic
type VersionAliases = { [key: string]: string }
export const versionAliases: VersionAliases = {}
export const prefixVersionAliases: VersionAliases = {}

Object.values(allVersions).forEach((info) => {
  if (info.hasNumberedReleases) {
    versionAliases[info.currentRelease] = info.miscVersionName
  } else {
    versionAliases[info.version] = info.miscVersionName
    versionAliases[info.miscVersionName] = info.miscVersionName
  }
  prefixVersionAliases[info.plan] = info.shortName
  prefixVersionAliases[info.shortName] = info.shortName
})

// Temporary hard-coded switch
//
// We need to run workflows in production to index the search data
// We want the middleware + routes that consume the indexes to consume the old indexes
//  until the new indexes are ready.

// Once they are ready we can remove this file & cleanup the places it is used
export function isBeforeSearchIndexMigration() {
  if (process.env.NODE_ENV === 'production') return true
  return false
}

// Old test prefix helper function
export function getGeneralSearchIndexPrefix(): string {
  if (process.env.NODE_ENV === 'test') return 'tests_'
  return ''
}

export function getGeneralSearchIndexVersion(paramVersion: string): string {
  const version =
    prefixVersionAliases[paramVersion] ||
    versionAliases[paramVersion] ||
    allVersions[paramVersion].miscVersionName

  return version
}
