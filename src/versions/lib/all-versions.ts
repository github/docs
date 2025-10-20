import fs from 'fs'
import type { AllVersions, Version } from '@/types'
import enterpriseServerReleases from './enterprise-server-releases'

// version = "plan"@"release"
// example: enterprise-server@2.21
// where "enterprise-server" is the plan and "2.21" is the release
const versionDelimiter = '@'
const latestNonNumberedRelease = 'latest'
const REST_DATA_META_FILE = 'src/rest/lib/config.json'

// Type for the plan configuration
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

// Type for the REST API config file
interface RestApiConfig {
  'api-versions': {
    [key: string]: string[]
  }
}

// !Explanation of versionless redirect fallbacks!
// This array is **in order** of the versions the site should try to fall back to if
// no version is provided in a URL. For example, if /foo refers to a page that is available
// in all versions, we should not redirect it (because /foo is the correct FPT versioned URL).
// But if /foo refers to a page that is only available in GHEC and GHES, we should redirect it
// to /enterprise-cloud@latest/foo (since GHEC comes first in the hierarchy of version fallbacks).
// The implementation lives in lib/redirects/permalinks.js.
const plans: PlanConfig[] = [
  {
    // free-pro-team is **not** a user-facing version and is stripped from URLs.
    // See lib/remove-fpt-from-path.js for details.
    plan: 'free-pro-team',
    planTitle: 'Free, Pro, & Team',
    shortName: 'fpt',
    releases: [latestNonNumberedRelease],
    latestRelease: latestNonNumberedRelease,
    nonEnterpriseDefault: true, // permanent way to refer to this plan if the name changes
    hasNumberedReleases: false,
    openApiBaseName: 'fpt', // used for REST
    miscBaseName: 'dotcom', // used for GraphQL and webhooks
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

// combine the plans and releases to get allVersions object
// e.g. free-pro-team@latest, enterprise-server@2.21, enterprise-server@2.20, etc.
plans.forEach((planObj) => {
  planObj.releases.forEach((release) => {
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
      apiVersions: [], // REST Calendar Date Versions, this may be empty for non calendar date versioned products
      latestApiVersion: '', // Latest REST Calendar Date Version, this may be empty for non calendar date versioned products
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
  })
})

// Adds the calendar date (or api versions) to the allVersions object
const apiVersions: RestApiConfig['api-versions'] = JSON.parse(
  fs.readFileSync(REST_DATA_META_FILE, 'utf8'),
)['api-versions']

Object.keys(apiVersions).forEach((key) => {
  const docsVersion = getDocsVersion(key)
  allVersions[docsVersion].apiVersions.push(...apiVersions[key].sort())
  // Create a copy of the array to avoid mutating the original when using pop()
  const sortedVersions = [...apiVersions[key].sort()]
  allVersions[docsVersion].latestApiVersion = sortedVersions.pop() || ''
})

export const allVersionKeys: string[] = Object.keys(allVersions)
export const allVersionShortnames: Record<string, string> = Object.fromEntries(
  Object.values(allVersions).map((v) => [v.shortName, v.plan]),
)

export function isApiVersioned(version: string): boolean {
  return allVersions[version] && allVersions[version].apiVersions.length > 0
}

// Currently the versions from the OpenAPI do not match the versions on Docs.
// There is a mapping between the version names. This gets the Docs version from
// the OpenAPI version name (the filename )
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
