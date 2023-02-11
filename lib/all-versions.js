import fs from 'fs'
import path from 'path'

import enterpriseServerReleases from './enterprise-server-releases.js'

// version = "plan"@"release"
// example: enterprise-server@2.21
// where "enterprise-server" is the plan and "2.21" is the release
const versionDelimiter = '@'
const latestNonNumberedRelease = 'latest'

// !Explanation of versionless redirect fallbacks!
// This array is **in order** of the versions the site should try to fall back to if
// no version is provided in a URL. For example, if /foo refers to a page that is available
// in all versions, we should not redirect it (because /foo is the correct FPT versioned URL).
// But if /foo refers to a page that is only available in GHEC and GHES, we should redirect it
// to /enterprise-cloud@latest/foo (since GHEC comes first in the hierarchy of version fallbacks).
// The implementation lives in lib/redirects/permalinks.js.
const plans = [
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
    openApiBaseName: 'api.github.com', // used for REST
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
  {
    plan: 'github-ae',
    planTitle: 'GitHub AE',
    shortName: 'ghae',
    releases: [latestNonNumberedRelease],
    latestRelease: latestNonNumberedRelease,
    // The below is used in lib/liquid-tags/ifversion.js and lib/get-applicable-versions.js.
    // It lets us do semantic comparison internally while only exposing `@latest` in the UI.
    internalLatestRelease: '3.4',
    hasNumberedReleases: false,
    openApiBaseName: 'github.ae',
    miscBaseName: 'ghae',
  },
]

const allVersions = {}

// combine the plans and releases to get allVersions object
// e.g. free-pro-team@latest, enterprise-server@2.21, enterprise-server@2.20, etc.
plans.forEach((planObj) => {
  planObj.releases.forEach((release) => {
    const version = `${planObj.plan}${versionDelimiter}${release}`

    const versionObj = {
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
    }

    allVersions[version] = Object.assign(versionObj, planObj)
  })
})

const apiFilesPath = path.join(process.cwd(), 'lib/rest/static/decorated')
// This is what determines which versions are calendar date versioned for the REST API docs
// This is the source of truth for which versions are calendar date versioned.
fs.readdirSync(apiFilesPath)
  .filter((file) => file.endsWith('.json'))
  .forEach((file) => {
    const fileName = file.split('.json')[0]
    const version = getDocsVersion(fileName)
    const apiVersion = fileName.split(allVersions[version].openApiVersionName)[1].replace('.', '')

    if (apiVersion !== '') {
      allVersions[version].apiVersions.push(apiVersion)
      if (
        allVersions[version].latestApiVersion === '' ||
        apiVersion > allVersions[version].latestApiVersion
      ) {
        allVersions[version].latestApiVersion = apiVersion
      }
    }
  })

export const allVersionKeys = Object.keys(allVersions)
export const allVersionShortnames = Object.fromEntries(
  Object.values(allVersions).map((v) => [v.shortName, v.plan])
)

export function isApiVersioned(version) {
  return allVersions[version] && allVersions[version].apiVersions.length > 0
}

// Currently the versions from the OpenAPI do not match the versions on Docs.
// There is a mapping between the version names. This gets the Docs version from
// the OpenAPI version name (the filename )
export function getDocsVersion(openApiVersion) {
  const matchingVersion = Object.values(allVersions).find((version) =>
    openApiVersion.startsWith(version.openApiVersionName)
  )

  if (!matchingVersion) {
    throw new Error(`Error: Could not find a matching version for ${openApiVersion}.`)
  }

  return matchingVersion.version
}

export { allVersions }
