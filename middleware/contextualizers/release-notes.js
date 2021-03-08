const enterpriseReleases = require('../../lib/enterprise-server-releases').supported
const { sortReleasesByDate, sortPatchKeys, renderPatchNotes, getAllReleases } = require('../../lib/release-notes-utils')

module.exports = async (req, res, next) => {
  // The `/release-notes` sub-path
  if (!req.path.endsWith('/release-notes')) return next()

  const [requestedPlan, requestedRelease] = req.context.currentVersion.split('@')
  const releaseNotesPerPlan = req.context.site.data['release-notes'][requestedPlan]

  // 404 if no release notes can be found
  if (!releaseNotesPerPlan) return next()

  // Release notes handling differs if version has numbered releases (like GHES) or not (like GHAE)
  const hasNumberedReleases = !(requestedRelease === 'latest')

  // GHES gets handled here...
  if (hasNumberedReleases) {
    const currentReleaseNotes = releaseNotesPerPlan[`${requestedRelease.replace(/\./g, '-')}`]

    if (!currentReleaseNotes) {
      // If the GHES version doesn't have any release notes, let's be helpful and redirect to `enterprise.github.com`
      return requestedPlan === 'enterprise-server'
        ? res.redirect(`https://enterprise.github.com/releases/${requestedRelease}.0/notes`)
        : next()
    }

    const patches = sortPatchKeys(currentReleaseNotes, requestedRelease, { semverSort: hasNumberedReleases })
    req.context.releaseNotes = await Promise.all(patches.map(async patch => renderPatchNotes(patch, req.context)))
    req.context.releases = getAllReleases(enterpriseReleases, releaseNotesPerPlan, hasNumberedReleases)

    const releaseIndex = enterpriseReleases.findIndex(release => release === requestedRelease)
    req.context.nextRelease = enterpriseReleases[releaseIndex - 1]
    req.context.prevRelease = enterpriseReleases[releaseIndex + 1]
  }

  // GHAE gets handled here...
  if (!hasNumberedReleases) {
    const sortedReleases = sortReleasesByDate(releaseNotesPerPlan)
    const sortedNotes = sortedReleases.map(release => sortPatchKeys(releaseNotesPerPlan[release], release, { semverSort: false })).flat()

    req.context.releaseNotes = await Promise.all(sortedNotes.map(async patch => renderPatchNotes(patch, req.context)))
    req.context.releases = getAllReleases(sortedReleases, releaseNotesPerPlan, hasNumberedReleases)
  }

  return next()
}
