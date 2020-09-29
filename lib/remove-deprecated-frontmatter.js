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
    if (!data.versions) return data
    if (!data.versions.enterprise) return data

    // change frontmatter like enterprise: '>=2.13' to enterprise: '*'
    if (data.versions.enterprise === `>=${versionToDeprecate}` || data.versions.enterprise === `>=${nextOldestVersion}`) {
      data.versions.enterprise = '*'
    }
  }

  return data
}
