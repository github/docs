import semver from 'semver'
import { renderContent } from '#src/content-render/index.js'

/**
 * Create an array of release note objects and sort them by number.
 * Turn { [key]: { notes, intro, date, sections... } }
 * Into [{ version, patches: [ {notes, intro, date, sections... }] }]
 */
export function formatReleases(releaseNotes) {
  // Get release note numbers in dot notation and sort from highest to lowest.
  const sortedReleaseNumbers = Object.keys(releaseNotes)
    .reverse()
    .map((r) => r.replace(/-/g, '.'))

  return sortedReleaseNumbers.map((releaseNumber) => {
    const notesPerVersion = releaseNotes[releaseNumber.replace(/\./g, '-')]
    const patches = Object.keys(notesPerVersion)
      .filter((patchNumber) => !notesPerVersion[patchNumber].deprecated)
      .map((patchNumber) => {
        // Change version-rc1 to version-rc.1 to make these proper semver RC versions.
        const patchNumberSemver = patchNumber.replace(/rc/, 'rc.')
        return {
          version: `${releaseNumber}.${patchNumberSemver}`,
          patchVersion: patchNumberSemver,
          downloadVersion: `${releaseNumber}.${patchNumber.replace(/-rc\d*$/, '')}`, // Remove RC
          release: releaseNumber,
          ...notesPerVersion[patchNumber],
        }
      })
      .sort((a, b) => semver.compare(b.version, a.version))

    return {
      version: releaseNumber,
      patches,
    }
  })
}

/**
 * Render each note in the given patch, by looping through the
 * sections and rendering either `note` or `note.notes` in the
 * case of a sub-section.
 * Returns [{version, patchVersion, intro, date, sections: { features: [], bugs: []...}}]
 */
export async function renderPatchNotes(patches, ctx) {
  return await Promise.all(
    patches.map(async (patch) => {
      // Clone the patch object but drop 'sections' so we can render them below without mutations
      const { sections, ...renderedPatch } = patch
      renderedPatch.intro = await renderContent(patch.intro, ctx)

      // Now render the sections...
      // E.g., sections: { features: [], bugs: []...}}
      const renderedSections = Object.fromEntries(
        await Promise.all(
          Object.entries(patch.sections).map(async ([sectionType, sectionArray]) => {
            // sectionType is things like 'features', 'bugs', etc.
            // sectionArray is things like [ { heading, notes: [] } ]
            const renderedSectionArray = await Promise.all(
              sectionArray.map(async (note) => {
                // where `note` may be a string or an object like { heading, notes: []}
                if (typeof note === 'string') {
                  return renderContent(note, ctx)
                } else {
                  const renderedNoteObj = {}
                  renderedNoteObj.heading = note.heading
                  renderedNoteObj.notes = await Promise.all(
                    note.notes.map(async (noteStr) => renderContent(noteStr, ctx)),
                  )

                  return renderedNoteObj
                }
              }),
            )
            return [sectionType, renderedSectionArray]
          }),
        ),
      )

      renderedPatch.sections = renderedSections
      return renderedPatch
    }),
  )
}

export default {
  formatReleases,
  renderPatchNotes,
}
