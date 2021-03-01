const patterns = require('../../lib/patterns')
const enterpriseReleases = require('../../lib/enterprise-server-releases').supported
const { sortPatchKeys, renderPatchNotes } = require('../../lib/release-notes-utils')

module.exports = async (req, res, next) => {
  // The `/release-notes` sub-path
  if (!req.path.endsWith('/release-notes')) return next()

  // ignore paths that don't have an enterprise version number
  if (!patterns.getEnterpriseServerNumber.test(req.path)) return next()

  // extract enterprise version from path, e.g. 2.16
  const requestedVersion = req.path.match(patterns.getEnterpriseServerNumber)[1]

  const versionString = `${requestedVersion.replace(/\./g, '-')}`

  const allReleaseNotes = req.context.site.data['release-notes']['enterprise-server']

  // This version doesn't have any release notes - let's be helpful and redirect
  // to the notes on `enterprise.github.com`
  if (!allReleaseNotes || !allReleaseNotes[versionString]) {
    return res.redirect(`https://enterprise.github.com/releases/${requestedVersion}.0/notes`)
  }

  const releaseNotes = allReleaseNotes[versionString]
  const patches = sortPatchKeys(releaseNotes, requestedVersion, { semverSort: true })

  req.context.releaseNotes = await Promise.all(patches.map(async patch => renderPatchNotes(patch, req.context)))

  // Put together information about other releases
  req.context.releases = enterpriseReleases.map(version => {
    const ret = { version }
    if (!req.context.site.data['release-notes']) return ret
    const release = allReleaseNotes[version.replace(/\./g, '-')]
    if (!release) return ret
    const patches = sortPatchKeys(release, version, { semverSort: true })
    return { ...ret, patches }
  })

  const releaseIndex = enterpriseReleases.findIndex(release => release === requestedVersion)
  req.context.nextRelease = enterpriseReleases[releaseIndex - 1]
  req.context.prevRelease = enterpriseReleases[releaseIndex + 1]

  return next()
}
