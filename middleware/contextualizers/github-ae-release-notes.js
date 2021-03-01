const { sortPatchKeys, renderPatchNotes } = require('../../lib/release-notes-utils')

module.exports = async (req, res, next) => {
  // The `/release-notes` sub-path
  if (!req.path.endsWith('/release-notes')) return next()
  if (!req.context.currentVersion.startsWith('github-ae')) return next()

  const allGhaeReleaseNotes = req.context.site.data['release-notes']['github-ae']

  // 404 if no release notes can be found
  if (!allGhaeReleaseNotes) return next()

  const sortedReleases = Object.keys(allGhaeReleaseNotes)
  // Sort the subdirs from most recent date to oldest
    .map(release => {
      const [month, year] = release.split('-')
      return {
        name: release,
        date: new Date(`20${year}`, month - 1, '1')
      }
    })
    .sort((releaseEntry1, releaseEntry2) => releaseEntry2.date - releaseEntry1.date)
    .map(releaseEntry => releaseEntry.name)

  const sortedNotes = sortedReleases.map(release => sortPatchKeys(allGhaeReleaseNotes[release], release, { semverSort: false })).flat()

  req.context.releaseNotes = await Promise.all(sortedNotes.map(async patch => renderPatchNotes(patch, req.context)))

  // Put together information about other releases
  req.context.releases = sortedReleases.map(version => {
    const notesPerVersion = allGhaeReleaseNotes[version]
    const patches = sortPatchKeys(notesPerVersion, version, { semverSort: false })
    return { version, patches }
  })

  return next()
}
