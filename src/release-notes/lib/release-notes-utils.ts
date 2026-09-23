import semver from 'semver'
import { supported, latestStable, latest } from '@/versions/lib/enterprise-server-releases'
import { renderContent } from '@/content-render/index'
import type { Context, GHESReleasePatch, ReleaseNotes } from '@/types'

/**
 * Create an array of release note objects and sort them by number.
 * Turn { [key]: { notes, intro, date, sections... } }
 * Into [{ version, patches: [ {notes, intro, date, sections... }] }]
 */
export function formatReleases(releaseNotes: ReleaseNotes) {
  // Dot notation, highest first.
  const sortedReleaseNumbers = Object.keys(releaseNotes)
    .map((r) => r.replace(/-/g, '.'))
    .sort((a, b) => supported.indexOf(a) - supported.indexOf(b))

  return sortedReleaseNumbers.map((releaseNumber) => {
    const notesPerVersion = releaseNotes[releaseNumber.replace(/\./g, '-')]
    const patches = Object.keys(notesPerVersion)
      .filter((patchNumber) => !notesPerVersion[patchNumber].deprecated)
      .map((patchNumber) => {
        // Change version-rc1 to version-rc.1 to make these proper semver RC versions.
        const patchNumberSemver = patchNumber.replace(/rc/, 'rc.')
        return {
          ...notesPerVersion[patchNumber],
          version: `${releaseNumber}.${patchNumberSemver}`,
          patchVersion: patchNumberSemver,
          downloadVersion: `${releaseNumber}.${patchNumber.replace(/-rc\d*$/, '')}`,
          release: releaseNumber,
        }
      })
      .sort((a, b) => semver.compare(b.version, a.version))

    return {
      version: releaseNumber,
      patches,
      // Lets callers drop release candidates,
      // like the "Supported releases" list on the product landing page.
      // An RC only exists while `latestStable` isn't `latest`.
      isReleaseCandidate: latest !== latestStable && releaseNumber === latest,
    }
  })
}

/**
 * Render each note in the given patch, by looping through the
 * sections and rendering either `note` or `note.notes` in the
 * case of a sub-section.
 * Returns [{version, patchVersion, intro, date, sections: { features: [], bugs: []...}}]
 */
export async function renderPatchNotes(
  patches: GHESReleasePatch[],
  ctx: Context,
): Promise<GHESReleasePatch[]> {
  return await Promise.all(
    patches.map(async (patch) => {
      // Clone without `sections` so rendering them below doesn't mutate the input.
      const renderedPatch: GHESReleasePatch = { ...patch, sections: {} }
      renderedPatch.intro = await renderContent(patch.intro, ctx)

      // sections looks like { features: [], bugs: [], ... }
      const renderedSections = Object.fromEntries(
        await Promise.all(
          Object.entries(patch.sections).map(async ([sectionType, sectionArray]) => {
            // sectionType is things like 'features', 'bugs', etc.
            // sectionArray is things like [ { heading, notes: [] } ]
            const renderedSectionArray = await Promise.all(
              sectionArray.map(async (note) => {
                // `note` is either a string or { heading, notes: [] }
                if (typeof note === 'string') {
                  return renderContent(note, ctx)
                } else if (typeof note === 'object' && 'heading' in note && 'notes' in note) {
                  return {
                    heading: note.heading,
                    notes: await Promise.all(
                      note.notes.map(async (noteStr) => renderContent(noteStr, ctx)),
                    ),
                  }
                } else {
                  throw new Error('Unrecognized note type')
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
