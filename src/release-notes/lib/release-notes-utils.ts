import semver from 'semver'
import { supported, latestStable, latest } from '@/versions/lib/enterprise-server-releases.js'
import { renderContent } from '@/content-render/index.js'
import type { Context, GHESReleasePatch, ReleaseNotes } from '@/types'

/**
 * Create an array of release note objects and sort them by number.
 * Turn { [key]: { notes, intro, date, sections... } }
 * Into [{ version, patches: [ {notes, intro, date, sections... }] }]
 */
export function formatReleases(releaseNotes: ReleaseNotes) {
  // Get release note numbers in dot notation and sort from highest to lowest.
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
          downloadVersion: `${releaseNumber}.${patchNumber.replace(/-rc\d*$/, '')}`, // Remove RC
          release: releaseNumber,
        }
      })
      .sort((a, b) => semver.compare(b.version, a.version))

    return {
      version: releaseNumber,
      patches,
      // This is useful information when displaying a list of releases
      // but want to omit the latest release candidate. For example,
      // on the product landing page, we refer to a list of
      // "Supported releases" and that should omit release candidates.
      // Note that a release candidate is temporary. It only happens
      // when `latestStable` isn't `latest`.
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
      // Clone the patch object but drop 'sections' so we can render them below without mutations
      // const { sections } = patch
      const renderedPatch: GHESReleasePatch = { ...patch, sections: {} }
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
