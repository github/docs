const semver = require('semver')
const renderContent = require('./render-content')

/**
 * Turn { [key]: { notes, intro, date } }
 * into [{ version, notes, intro, date }]
 */
function sortPatchKeys (release, version, options = {}) {
  const keys = Object.keys(release)
    .map(key => {
      const keyWithDots = key.replace(/-/g, '.')
      return {
        version: `${version}.${keyWithDots}`,
        patchVersion: keyWithDots,
        ...release[key]
      }
    })
    // Filter out any deprecated patches
    .filter(key => !key.deprecated)

  // Versions with numbered releases like GHES 2.22, 3.0, etc. need additional semver sorting;
  // Versions with date releases do not.
  return options.semverSort ? semverSort(keys) : keys
}

function semverSort (keys) {
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

module.exports = {
  sortPatchKeys,
  renderPatchNotes
}
