import semver from 'semver'

import { supported } from '@/versions/lib/enterprise-server-releases'
import getDataDirectory from '@/data-directory/lib/data-directory'
import { FeatureData, FrontmatterVersions } from '@/types'

export function isGhesReleaseDeprecated(lowestSupportedVersion: string, semVerRange: string) {
  const lowestSemver = semver.coerce(lowestSupportedVersion)
  if (!lowestSemver) return false
  return semver.gtr(lowestSemver.version, semVerRange)
}

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

// GHES-only features disappear when their GHES range is fully deprecated.
export function isFeatureDeprecated(versions: FrontmatterVersions) {
  return (
    !!versions.ghes &&
    !versions.fpt &&
    !versions.ghec &&
    isGhesReleaseDeprecated(supported[supported.length - 1], versions.ghes)
  )
}

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
