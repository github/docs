/*
 * Source of truth for versioning in the context of Elasticsearch
 * We have a unique index for each version of the docs
 * so consistency is important for creating/accessing ES Indexes.
 *
 * Example versions (these may not be up to date):
 *
 * 1. free-pro-team@latest. Previously known as "dotcom". This is the default version of the docs.
 *   - short name: fpt
 * 2. enterprise-cloud@latest
 *   - short name: ghec
 * 3. enterprise-server@X: This is the source of versioning complexity since the version is dynamic
 *   - short name: ghes-X
 *
 * However, for (3) someone might enter `&version=3.5` as the version in the request query string.
 * This would map to `ghes-3.5`
 */

import { allVersions } from '@/versions/lib/all-versions'

// versionToIndexVersionMap examples:
// free-pro-team@latest -> fpt
// free-pro-team -> fpt
// dotcom -> fpt
// enterprise-cloud@latest -> ghec
// enterprise-server@3.5 -> ghes-3.5
// 3.5 -> ghes-3.5
export const versionToIndexVersionMap: { [key: string]: string } = {}

// For each potential input (from request query string, CLI, etc), map it to the appropriate index version
for (const versionSource of Object.values(allVersions)) {
  if (versionSource.hasNumberedReleases) {
    // Map version number to corresponding release, e.g. `3.14` -> `ghes-3.14`
    versionToIndexVersionMap[versionSource.currentRelease] = versionSource.miscVersionName
    // Map full release name to corresponding release, e.g. `enterprise-server@3.14` -> `ghes-3.14`
    versionToIndexVersionMap[versionSource.version] = versionSource.miscVersionName
    // Map shortname or plan, e.g. `ghes` or `enterprise-server` to the latest release, e.g. `ghes-3.14`
    if (versionSource.latestRelease === versionSource.currentRelease) {
      versionToIndexVersionMap[versionSource.plan] = versionSource.miscVersionName
      versionToIndexVersionMap[versionSource.shortName] = versionSource.miscVersionName
    }
  } else {
    versionToIndexVersionMap[versionSource.version] = versionSource.shortName
    versionToIndexVersionMap[versionSource.miscVersionName] = versionSource.shortName
    // The next two lines map things like `?version=free-pro-team` -> `?version=fpt`
    versionToIndexVersionMap[versionSource.plan] = versionSource.shortName
    versionToIndexVersionMap[versionSource.shortName] = versionSource.shortName
  }
}

// Add the values to the keys as well so that the map value -> value works for versions that are already conformed to the indexVersion syntax
for (const [, value] of Object.entries(versionToIndexVersionMap)) {
  versionToIndexVersionMap[value] = value
}

// All of the possible keys that can be input to access a version
export const allIndexVersionKeys = Array.from(
  new Set([...Object.keys(versionToIndexVersionMap), ...Object.keys(allVersions)]),
)

// These should be the only possible values that an ES index will use (source of truth)
// allIndexVersionOptions example:
// fpt, ghec, ghes-3.14, ghes-3.13, ghes-3.12, ghes-3.11, ghes-3.10
export const allIndexVersionOptions = Array.from(
  new Set([...Object.values(versionToIndexVersionMap)]),
)

// Autocomplete only supports 3 "versions": free-pro-team, enterprise-cloud, and enterprise-server
// docs-internal-data stores data under directories with these names. It does not account for individual enterprise-server versions
// These are the "plan" names on the allVersions object
const allVersionPlans: string[] = []
for (const version of Object.values(allVersions)) {
  if (version.plan) {
    allVersionPlans.push(version.plan)
  }
}
// Remove duplicates
export const supportedAutocompletePlanVersions = Array.from(new Set(allVersionPlans))

// Returns the plan name for the given version
// Needed because {version} in the docs-internal-data paths use the version's 'plan' name, e.g. `free-pro-team` instead of `fpt`
export function getPlanVersionFromIndexVersion(indexVersion: string): string {
  const planVersion =
    Object.values(allVersions).find(
      (info) =>
        info.shortName === indexVersion ||
        info.plan === indexVersion ||
        info.miscVersionName === indexVersion ||
        info.currentRelease === indexVersion,
    )?.plan || ''

  if (!planVersion) {
    throw new Error(`Plan version not found for index version ${indexVersion}`)
  }

  return planVersion
}

// Gets the matching key from allVersions for the given index version
// This is needed for scraping since the pages use the 'allVersions' key as their version
export function getAllVersionsKeyFromIndexVersion(indexVersion: string): string {
  const key = Object.keys(allVersions).find(
    (key) =>
      key === indexVersion ||
      allVersions[key].shortName === indexVersion ||
      allVersions[key].plan === indexVersion ||
      allVersions[key].miscVersionName === indexVersion,
  )

  if (!key) {
    throw new Error(`No key found for index version ${indexVersion}`)
  }

  return key
}
