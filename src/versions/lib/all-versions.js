import fs from 'fs'

import enterpriseServerReleases from './enterprise-server-releases.js'
// version = "plan"@"release"
// example: enterprise-server@2.21
// where "enterprise-server" is the plan and "2.21" is the release
const versionDelimiter = '@'
const latestNonNumberedRelease = 'latest'
const REST_DATA_META_FILE = 'src/rest/lib/config.json'

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
  // github-ae is gone, but we need to keep it in the array
  // for the validation of front matter when it checks the `versions`
  // keys.
  // All requests for github-ae@latest will be redirected in getRedirect().
  {
    plan: 'github-ae',
    planTitle: 'GitHub AE',
    shortName: 'ghae',
    releases: [latestNonNumberedRelease],
    latestRelease: latestNonNumberedRelease,
    // The below is used in lib/liquid-tags/ifversion.js and lib/get-applicable-versions.js.
    // It lets us do semantic comparison internally while only exposing `@latest` in the UI.
    internalLatestRelease: '3.6',
    hasNumberedReleases: false,
    openApiBaseName: 'ghae',
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

// Adds the calendar date (or api versions) to the allVersions object
const apiVersions = JSON.parse(fs.readFileSync(REST_DATA_META_FILE, 'utf8'))['api-versions']
Object.keys(apiVersions).forEach((key) => {
  const docsVersion = getDocsVersion(key)
  allVersions[docsVersion].apiVersions.push(...apiVersions[key].sort())
  allVersions[docsVersion].latestApiVersion = apiVersions[key].pop()
})

export const allVersionKeys = Object.keys(allVersions)
export const allVersionShortnames = Object.fromEntries(
  Object.values(allVersions).map((v) => [v.shortName, v.plan]),
)

export function isApiVersioned(version) {
  return allVersions[version] && allVersions[version].apiVersions.length > 0
}

// Currently the versions from the OpenAPI do not match the versions on Docs.
// There is a mapping between the version names. This gets the Docs version from
// the OpenAPI version name (the filename )
export function getDocsVersion(openApiVersion) {
  const matchingVersion = Object.values(allVersions).find((version) =>
    openApiVersion.startsWith(version.openApiVersionName),
  )

  if (!matchingVersion) {
    throw new Error(`Error: Could not find a matching version for ${openApiVersion}.`)
  }

  return matchingVersion.version
}

export function getOpenApiVersion(version) {
  if (!(version in allVersions)) {
    throw new Error(`Unrecognized version '${version}'. Not found in ${Object.keys(allVersions)}`)
  }
  return allVersions[version].openApiVersionName
}

export const allTestableVersions = Object.keys(allVersions).filter(
  // Because of the deprecation of GHAE we can't delete it from `allVersions`
  // until ALL cleaning up is done. Since we're now always redirecting
  // all requests for `.../github-ae@latest/...` we also shouldn't test it.
  // Other end-to-end tests will test the redirects of that legacy.
  // The day `github-ae@latest` is no longer in all-versions.js
  // this filtering can be deleted.
  (version) => version !== 'github-ae@latest',
)

export { allVersions }
