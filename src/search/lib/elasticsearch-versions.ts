// Elasticsearch index names use compact version segments. Multiple accepted
// request identifiers can share one segment, such as free-pro-team, dotcom,
// and free-pro-team@latest all mapping to fpt.

import { allVersions } from '@/versions/lib/all-versions'

// versionToIndexVersionMap examples:
// free-pro-team@latest -> fpt
// free-pro-team -> fpt
// dotcom -> fpt
// enterprise-cloud@latest -> ghec
// enterprise-server@X -> ghes-X
// X -> ghes-X
export const versionToIndexVersionMap: { [key: string]: string } = {}

for (const versionSource of Object.values(allVersions)) {
  if (versionSource.hasNumberedReleases) {
    versionToIndexVersionMap[versionSource.currentRelease] = versionSource.miscVersionName
    versionToIndexVersionMap[versionSource.version] = versionSource.miscVersionName
    if (versionSource.latestRelease === versionSource.currentRelease) {
      // The plan or short name, such as ghes or enterprise-server, maps to the latest release only.
      versionToIndexVersionMap[versionSource.plan] = versionSource.miscVersionName
      versionToIndexVersionMap[versionSource.shortName] = versionSource.miscVersionName
    }
  } else {
    versionToIndexVersionMap[versionSource.version] = versionSource.shortName
    versionToIndexVersionMap[versionSource.miscVersionName] = versionSource.shortName
    // Plan names accepted by request queries map to compact index names.
    versionToIndexVersionMap[versionSource.plan] = versionSource.shortName
    versionToIndexVersionMap[versionSource.shortName] = versionSource.shortName
  }
}

// Compact-name aliases let already-normalized requests validate.
for (const [, value] of Object.entries(versionToIndexVersionMap)) {
  versionToIndexVersionMap[value] = value
}

export const allIndexVersionKeys = Array.from(
  new Set([...Object.keys(versionToIndexVersionMap), ...Object.keys(allVersions)]),
)

// Elasticsearch indexes accept only compact segments such as fpt, ghec, and ghes-X.
export const allIndexVersionOptions = Array.from(
  new Set([...Object.values(versionToIndexVersionMap)]),
)

// Autocomplete data lives under plan directories: free-pro-team,
// enterprise-cloud, and enterprise-server. It does not split by GHES release.
const allVersionPlans: string[] = []
for (const version of Object.values(allVersions)) {
  if (version.plan) {
    allVersionPlans.push(version.plan)
  }
}
export const supportedAutocompletePlanVersions = Array.from(new Set(allVersionPlans))

// docs-internal-data paths require plan names such as free-pro-team, not
// compact index names such as fpt.
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

// Scraping uses allVersions keys for page versions, not compact index names.
export function getAllVersionsKeyFromIndexVersion(indexVersion: string): string {
  const key = Object.keys(allVersions).find(
    (versionKey) =>
      versionKey === indexVersion ||
      allVersions[versionKey].shortName === indexVersion ||
      allVersions[versionKey].plan === indexVersion ||
      allVersions[versionKey].miscVersionName === indexVersion,
  )

  if (!key) {
    throw new Error(`No key found for index version ${indexVersion}`)
  }

  return key
}
