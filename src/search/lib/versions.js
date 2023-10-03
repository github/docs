import { allVersions } from '#src/versions/lib/all-versions.js'

export default Object.fromEntries(
  Object.entries(allVersions).map(([versionStr, versionObject]) => [
    versionStr,
    // if GHES, resolves to the release number like 2.21, 2.22, etc.
    // if FPT, resolves to 'dotcom'
    // if GHAE, resolves to 'ghae'
    versionObject.plan === 'enterprise-server'
      ? versionObject.currentRelease
      : versionObject.miscBaseName,
  ]),
)
