const versionsProp = process.env.FEATURE_NEW_VERSIONS
  ? 'versions'
  : 'productVersions'

module.exports = function removeDeprecatedFrontmatter (data, devCheckout, versionToDeprecate, nextOldestVersion) {
  // there are currently different frontmatter conventions for developer docs vs. help docs
  if (devCheckout) {
    // skip files with no exclude_version frontmatter
    if (!data.exclude_version) return data

    // remove frontmatter like exclude_version: - "2.13"
    if (data.exclude_version.includes(`${versionToDeprecate}`)) {
      data.exclude_version = data.exclude_version.filter(version => !version.match(versionToDeprecate))

      if (!data.exclude_version.length) delete data.exclude_version
    }
  } else {
    // skip files with no versions or Enterprise versions frontmatter
    if (!data[versionsProp]) return data
    if (!data[versionsProp].enterprise) return data

    // change frontmatter like enterprise: '>=2.13' to enterprise: '*'
    if (data[versionsProp].enterprise === `>=${versionToDeprecate}` || data[versionsProp].enterprise === `>=${nextOldestVersion}`) {
      data[versionsProp].enterprise = '*'
    }
  }

  return data
}
