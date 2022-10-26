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
    }

    allVersions[version] = Object.assign(versionObj, planObj)
  })
})

export const allVersionKeys = Object.keys(allVersions)
export const allVersionShortnames = Object.fromEntries(
  Object.values(allVersions).map((v) => [v.shortName, v.plan])
)
export { allVersions }
