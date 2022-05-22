const { getEnterpriseServerNumber } = require('./patterns')

module.exports = function removeDeprecatedFrontmatter (file, frontmatterVersions, versionToDeprecate, nextOldestVersion) {
  // skip files with no versions or Enterprise Server versions frontmatter
  if (!frontmatterVersions) return
  if (!frontmatterVersions['enterprise-server']) return

  const enterpriseRange = frontmatterVersions['enterprise-server']

  // skip files with versions frontmatter that applies to all enterprise-server releases
  if (enterpriseRange === '*') return

  // get the release numbers alone
  const releaseToDeprecate = versionToDeprecate.match(getEnterpriseServerNumber)[1]
  const nextOldestRelease = nextOldestVersion.match(getEnterpriseServerNumber)[1]

  // if the release to deprecate is 2.13, and the FM is either '>=2.13' or '>=2.14',
  // we can safely change the FM to enterprise-server: '*'
  if (enterpriseRange === `>=${releaseToDeprecate}` || enterpriseRange === `>=${nextOldestRelease}`) {
    frontmatterVersions['enterprise-server'] = '*'
  }
}
