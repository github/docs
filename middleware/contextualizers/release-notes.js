const { all, supported } = require('../../lib/enterprise-server-releases')
const { sortReleasesByDate, sortPatchKeys, renderPatchNotes, getAllReleases } = require('../../lib/release-notes-utils')

module.exports = async (req, res, next) => {
  // The `/release-notes` sub-path
  if (!(req.path.endsWith('/release-notes') || req.path.endsWith('/admin'))) return next()

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
    req.context.releases = getAllReleases(supported, releaseNotesPerPlan, hasNumberedReleases)

    req.context.releases.firstPreviousRelease = all[all.findIndex(v => v === version) + 1]
    req.context.releases.secondPreviousRelease = all[all.findIndex(v => v === req.context.releases.firstPreviousRelease) + 1]

    const releaseIndex = supported.findIndex(release => release === requestedRelease)
    req.context.nextRelease = supported[releaseIndex - 1]
    req.context.prevRelease = supported[releaseIndex + 1]
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
