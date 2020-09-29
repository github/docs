const enterpriseServerReleases = require('./enterprise-server-releases')

// version = "plan"@"release"
// example: enterprise-server@2.21
// where "enterprise-server" is the plan and "2.21" is the release
const versionDelimiter = '@'
const latestNonNumberedRelease = 'latest'

const plans = [
  {
    plan: 'free-pro-team',
    planTitle: 'Free, Pro, and Team',
    releases: [latestNonNumberedRelease],
    latestRelease: latestNonNumberedRelease,
    nonEnterpriseDefault: true // permanent way to refer to this plan if the name changes
  },
  {
    plan: 'enterprise-server',
    planTitle: 'Enterprise Server',
    releases: enterpriseServerReleases.supported,
    latestRelease: enterpriseServerReleases.latest,
    hasNumberedReleases: true
  }
]

const allVersions = {}

// combine the plans and releases to get allVersions object
// e.g. free-pro-team@latest, enterprise-server@2.21, enterprise-server@2.20, etc.
plans.forEach(planObj => {
  planObj.releases.forEach(release => {
    const version = `${planObj.plan}${versionDelimiter}${release}`

    const versionObj = {
      version,
      versionTitle: planObj.hasNumberedReleases ? `${planObj.planTitle} ${release}` : planObj.planTitle,
      latestVersion: `${planObj.plan}${versionDelimiter}${planObj.latestRelease}`,
      currentRelease: release
    }

    allVersions[version] = Object.assign(versionObj, planObj)
  })
})

module.exports = allVersions
