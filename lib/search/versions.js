const allVersions = require('../all-versions')

module.exports = new Set(
  Object.values(allVersions)
    .map(version =>
      // if GHES, resolves to the release number like 2.21, 2.22, etc.
      // if FPT, resolves to 'dotcom'
      // if GHAE, resolves to 'ghae'
      version.plan === 'enterprise-server'
        ? version.currentRelease
        : version.miscBaseName
    )
)
