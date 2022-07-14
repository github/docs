import enterpriseServerReleases from './enterprise-server-releases.js'

// version = "plan"@"release"
// example: enterprise-server@2.21
// where "enterprise-server" is the plan and "2.21" is the release
const versionDelimiter = '@'
const latestNonNumberedRelease = 'latest'

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
    openApiBaseName: 'api.github.com',
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
    hasNumberedReleases: false,
    openApiBaseName: 'github.ae',
    miscBaseName: 'ghae',
    allowedFrontmatterPattern: '^issue-\\d+?$',
    allowedInlinePattern: '^ghae-issue-\\d+?$',
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
