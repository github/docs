import semver from 'semver'

import { supported, deprecated } from '#src/versions/lib/enterprise-server-releases.js'
import getDataDirectory from '#src/data-directory/lib/data-directory.js'
import { FeatureData, FrontmatterVersions } from '#src/types.js'

const featureData = getDataDirectory('data/features') as FeatureData

// Return true if lowestSupportedVersion > semVerRange
export function isGhesReleaseDeprecated(lowestSupportedVersion: string, semVerRange: string) {
  const lowestSemver = semver.coerce(lowestSupportedVersion)
  if (!lowestSemver) return false
  return semver.gtr(lowestSemver.version, semVerRange)
}

/*
 * Looking for things like:
 * > 3.8, >= 3.11, > 3.10, >= 3.1
 * But not:
 * '>3.11' or '> 3.11' or '>= 3.12'
 * Multiple semvers will be ignored because
 * a case like >= 3.11 < 3.17 does not apply
 * to all GHES releases.
 * A case like < 3.10 >=3.11 is very unlikely.
 */
export function isInAllGhes(semverRange: string) {
  if (semverRange === '*') return true
  const regexGt = /(>|>=){1}\s?(\d+\.\d+)/g
  const regexLt = /(<|<=){1}\s?(\d+\.\d+)/g
  if (!regexGt.test(semverRange) || regexLt.test(semverRange)) return false
  const minVersionMatch = semverRange.match(/\d+\.\d+/g)
  const minVersion = minVersionMatch ? semver.coerce(minVersionMatch.pop())?.version : null
  const oldestSupportedVersion = semver.coerce(supported[supported.length - 1])
  const oldestSupported = oldestSupportedVersion ? oldestSupportedVersion.version : null
  if (!minVersion || !oldestSupported) return false
  if (!semverRange.includes('>=') && semver.eq(minVersion, oldestSupported)) return false
  return semver.lte(minVersion, oldestSupported)
}

// Return true when the feature version is GHES only and only
// in deprecated releases.
export function getIsFeatureInNone(feature: string) {
  const deprecatedRelease = deprecated[0]
  const oldestRelease = supported[supported.length - 1]
  const featureVersions = featureData[feature]
  if (!featureVersions) return false
  if (featureVersions.versions.ghec || featureVersions.versions.fpt) return false
  if (!featureVersions.versions.ghes) return false
  // If the feature based version now contains all supported versions
  // and GHES releases, update the frontmatter to use '*' for all versions.
  const deprecatedRegex = new RegExp(`(<|<=)\\s?${deprecatedRelease}`, 'g')
  const oldestRegex = new RegExp(`<\\s?${oldestRelease}`, 'g')

  // If the frontmatter versions.ghes property is now
  // deprecated, remove it. If the content file is only
  // versioned for GHES, remove the file and update index.md.
  return (
    deprecatedRegex.test(featureVersions.versions.ghes) ||
    oldestRegex.test(featureVersions.versions.ghes)
  )
}

// Return true when the feature version is in all versions
// and all GHES releases.
export function getIsFeatureInAll(feature: string) {
  const featureVersions = featureData[feature]
  // If the feature based version now contains all supported versions
  // and GHES releases, update the frontmatter to use '*' for all versions.
  if (
    !featureVersions ||
    !featureVersions.versions.ghes ||
    !featureVersions.versions.ghec ||
    !featureVersions.versions.fpt
  ) {
    return false
  }

  if (
    featureVersions.versions.ghec === '*' &&
    featureVersions.versions.fpt === '*' &&
    isInAllGhes(featureVersions.versions.ghes)
  ) {
    return true
  }
  return false
}

// A feature is deprecated if it only contains
// GHES releases and all releases are deprecated
export function isFeatureDeprecated(versions: FrontmatterVersions) {
  return (
    !!versions.ghes &&
    !versions.fpt &&
    !versions.ghec &&
    isGhesReleaseDeprecated(supported[supported.length - 1], versions.ghes)
  )
}
