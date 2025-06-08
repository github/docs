import semver from 'semver'

import { supported } from '@/versions/lib/enterprise-server-releases.js'
import getDataDirectory from '@/data-directory/lib/data-directory.js'
import { FeatureData, FrontmatterVersions } from '@/types.js'

// Return true if lowestSupportedVersion > semVerRange
export function isGhesReleaseDeprecated(lowestSupportedVersion: string, semVerRange: string) {
  const lowestSemver = semver.coerce(lowestSupportedVersion)
  if (!lowestSemver) return false
  return semver.gtr(lowestSemver.version, semVerRange)
}

// Return true if the semver range is greater than the
// lowest supported GHES version
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

// A feature is deprecated if it only contains
// GHES releases and all releases are deprecated
// or all releases are supported.
export function isFeatureDeprecated(versions: FrontmatterVersions) {
  // All GHES releases are deprecated
  return (
    !!versions.ghes &&
    !versions.fpt &&
    !versions.ghec &&
    isGhesReleaseDeprecated(supported[supported.length - 1], versions.ghes)
  )
}

// Return true when the feature version is in all versions
// and all GHES releases.
export function isAllVersions(versions: FrontmatterVersions) {
  if (
    versions &&
    versions.ghec === '*' &&
    versions.fpt === '*' &&
    versions.ghes &&
    isInAllGhes(versions.ghes)
  ) {
    return true
  }
  return false
}

export function getFeatureVersionsObject(feature: string) {
  const featureDataDir = process.env.ROOT ? `${process.env.ROOT}/data/features` : 'data/features'
  const featureData = getDataDirectory(featureDataDir) as FeatureData
  const featureValue = featureData[feature]
  if (!featureValue) return {}
  return featureData[feature].versions
}
