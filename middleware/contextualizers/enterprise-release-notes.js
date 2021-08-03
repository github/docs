const semver = require('semver')
const renderContent = require('../../lib/render-content')
const patterns = require('../../lib/patterns')
const { all, firstReleaseNote, latest } = require('../../lib/enterprise-server-releases')

// Display all GHES release notes, regardless of deprecation status,
// starting with the first release notes in 2.20
const supported = all.filter(release => {
  return semver.gte(
    semver.coerce(release), semver.coerce(firstReleaseNote)
  ) && release !== '11.10.340'
})

/**
 * Turn { [key]: { notes, intro, date } }
 * into [{ version, notes, intro, date }]
 */
function sortPatchKeys (release, version) {
  const keys = Object.keys(release)
    .map(key => {
      const keyWithDots = key.replace(/-/g, '.')
      return {
        version: `${version}.${keyWithDots}`,
        patchVersion: keyWithDots,
        downloadVersion: `${version}.${keyWithDots.replace(/\.rc\d*$/, '')}`,
        ...release[key]
      }
    })
    // Filter out any deprecated patches
    .filter(key => !key.deprecated)
  return keys
    .sort((a, b) => {
      let aTemp = a.version
      let bTemp = b.version

      // There's an RC version here, so doing regular semver
      // comparisons won't work. So, we'll convert the incompatible version
      // strings to real semver strings, then compare.
      const [aBase, aRc] = a.version.split('.rc')
      if (aRc) aTemp = `${aBase}-rc.${aRc}`

      const [bBase, bRc] = b.version.split('.rc')
      if (bRc) bTemp = `${bBase}-rc.${bRc}`

      if (semver.gt(aTemp, bTemp)) return -1
      if (semver.lt(aTemp, bTemp)) return 1
      return 0
    })
}

/**
 * Render each note in the given patch, by looping through the
 * sections and rendering either `note` or `note.notes` in the
 * case of a sub-section
 */
async function renderPatchNotes (patch, ctx) {
  // Run the notes through the markdown rendering pipeline
  for (const key in patch.sections) {
    await Promise.all(patch.sections[key].map(async (noteOrHeading, index) => {
      patch.sections[key][index] = typeof noteOrHeading === 'string'
        ? await renderContent(noteOrHeading, ctx)
        : {
            ...noteOrHeading,
            notes: await Promise.all(noteOrHeading.notes.map(note => renderContent(note, ctx)))
          }
    }))
  }

  // Also render the patch's intro
  if (patch.intro) {
    patch.intro = await renderContent(patch.intro, ctx)
  }

  return patch
}

module.exports = async function enterpriseReleaseNotesContext (req, res, next) {
  // The `/release-notes` sub-path
  if (!(req.path.endsWith('/release-notes') || req.path.endsWith('/admin'))) return next()

  // ignore paths that don't have an enterprise version number
  if (!patterns.getEnterpriseServerNumber.test(req.path)) return next()

  // extract enterprise version from path, e.g. 2.16
  const requestedVersion = req.path.match(patterns.getEnterpriseServerNumber)[1]

  const versionString = `${requestedVersion.replace(/\./g, '-')}`

  const allReleaseNotes = req.context.site.data['release-notes']

  // This version doesn't have any release notes - let's be helpful and redirect
  // to the notes on `enterprise.github.com`
  if (!allReleaseNotes || !allReleaseNotes[versionString]) {
    return res.redirect(`https://enterprise.github.com/releases/${requestedVersion}.0/notes`)
  }

  const releaseNotes = allReleaseNotes[versionString]
  const patches = sortPatchKeys(releaseNotes, requestedVersion)

  req.context.releaseNotes = await Promise.all(patches.map(async patch => renderPatchNotes(patch, req.context)))

  // Put together information about other releases
  req.context.releases = supported.map(version => {
    const ret = { version }
    if (!req.context.site.data['release-notes']) return ret
    const release = req.context.site.data['release-notes'][version.replace(/\./g, '-')]
    if (!release) return ret
    const patches = sortPatchKeys(release, version)

    const firstPreviousRelease = all[all.findIndex(v => v === version) + 1]
    const secondPreviousRelease = all[all.findIndex(v => v === firstPreviousRelease) + 1]

    return { ...ret, patches, firstPreviousRelease, secondPreviousRelease }
  })

  const releaseIndex = supported.findIndex(release => release === requestedVersion)
  req.context.nextRelease = supported[releaseIndex - 1]
  req.context.prevRelease = supported[releaseIndex + 1]

  req.context.latestPatch = patches[0].version
  req.context.latestRelease = latest

  return next()
}
