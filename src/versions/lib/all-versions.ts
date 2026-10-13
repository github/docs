import fs from 'fs'
import type { AllVersions, Version } from '@/types'
import enterpriseServerReleases from './enterprise-server-releases'

// Version keys combine plan and release, for example enterprise-server@2.21.
const versionDelimiter = '@'
const latestNonNumberedRelease = 'latest'
const REST_DATA_META_FILE = 'src/rest/lib/config.json'

interface PlanConfig {
  plan: string
  planTitle: string
  shortName: string
  releases: string[]
  latestRelease: string
  nonEnterpriseDefault?: boolean
  hasNumberedReleases: boolean
  openApiBaseName: string
  miscBaseName: string
}

interface RestApiConfig {
  'api-versions': {
    [key: string]: string[]
  }
}

// Versionless redirects try these plans in order. If /foo supports every plan, it
// stays the Free, Pro, and Team URL. If it supports only Enterprise Cloud and
// Enterprise Server, src/redirects/lib/permalinks.ts redirects it to
// /enterprise-cloud@latest/foo.
const plans: PlanConfig[] = [
  {
    // free-pro-team is not user-facing.
    // src/versions/lib/remove-fpt-from-path.ts strips it from URLs.
    plan: 'free-pro-team',
    planTitle: 'Free, Pro, & Team',
    shortName: 'fpt',
    releases: [latestNonNumberedRelease],
    latestRelease: latestNonNumberedRelease,
    nonEnterpriseDefault: true, // Marks the non-enterprise default independently of the plan name.
    hasNumberedReleases: false,
    openApiBaseName: 'fpt', // REST base name.
    miscBaseName: 'dotcom', // Search index version map base name.
  },
  {
    plan: 'enterprise-cloud',
    planTitle: 'Enterprise Cloud',
    shortName: 'ghec',
    releases: [latestNonNumberedRelease],
    latestRelease: latestNonNumberedRelease,
    hasNumberedReleases: false,
    openApiBaseName: 'ghec',
    miscBaseName: 'ghec',
  },
  {
    plan: 'enterprise-server',
    planTitle: 'Enterprise Server',
    shortName: 'ghes',
    releases: enterpriseServerReleases.supported,
    latestRelease: enterpriseServerReleases.latest,
    hasNumberedReleases: true,
    openApiBaseName: 'ghes-',
    miscBaseName: 'ghes-',
  },
]

const allVersions: AllVersions = {}

for (const planObj of plans) {
  for (const release of planObj.releases) {
    const version = `${planObj.plan}${versionDelimiter}${release}`

    const versionObj: Version = {
      version,
      versionTitle: planObj.hasNumberedReleases
        ? `${planObj.planTitle} ${release}`
        : planObj.planTitle,
      latestVersion: `${planObj.plan}${versionDelimiter}${planObj.latestRelease}`,
      currentRelease: release,
      openApiVersionName: planObj.hasNumberedReleases
        ? `${planObj.openApiBaseName}${release}`
        : planObj.openApiBaseName,
      miscVersionName: planObj.hasNumberedReleases
        ? `${planObj.miscBaseName}${release}`
        : planObj.miscBaseName,
      // REST calendar date versions; empty for products without calendar date API versions.
      apiVersions: [],
      // Latest REST calendar date version; empty for products without calendar date API versions.
      latestApiVersion: '',
      plan: planObj.plan,
      planTitle: planObj.planTitle,
      shortName: planObj.shortName,
      releases: planObj.releases,
      latestRelease: planObj.latestRelease,
      hasNumberedReleases: planObj.hasNumberedReleases,
      openApiBaseName: planObj.openApiBaseName,
      miscBaseName: planObj.miscBaseName,
      ...(planObj.nonEnterpriseDefault && { nonEnterpriseDefault: planObj.nonEnterpriseDefault }),
    }

    allVersions[version] = versionObj
  }
}

// REST config adds calendar date API versions after the version objects exist.
const apiVersions: RestApiConfig['api-versions'] = JSON.parse(
  fs.readFileSync(REST_DATA_META_FILE, 'utf8'),
)['api-versions']

for (const key of Object.keys(apiVersions)) {
  const docsVersion = getDocsVersion(key)
  allVersions[docsVersion].apiVersions.push(...apiVersions[key].sort().reverse())
  // Copy before pop so latestApiVersion does not remove a version from apiVersions.
  const sortedVersions = [...apiVersions[key].sort()]
  allVersions[docsVersion].latestApiVersion = sortedVersions.pop() || ''
}

export const allVersionKeys: string[] = Object.keys(allVersions)
export const allVersionShortnames: Record<string, string> = Object.fromEntries(
  Object.values(allVersions).map((v) => [v.shortName, v.plan]),
)

export function isApiVersioned(version: string): boolean {
  return allVersions[version] && allVersions[version].apiVersions.length > 0
}

// OpenAPI names do not match Docs version names, so this maps one to its Docs version.
export function getDocsVersion(openApiVersion: string): string {
  const matchingVersion = Object.values(allVersions).find((version) =>
    openApiVersion.startsWith(version.openApiVersionName),
  )

  if (!matchingVersion) {
    throw new Error(`Error: Could not find a matching version for ${openApiVersion}.`)
  }

  return matchingVersion.version
}

export function getOpenApiVersion(version: string): string {
  if (!(version in allVersions)) {
    throw new Error(`Unrecognized version '${version}'. Not found in ${Object.keys(allVersions)}`)
  }
  return allVersions[version].openApiVersionName
}

export { allVersions }
