import semver from 'semver'
import { supported, latestStable, latest } from '@/versions/lib/enterprise-server-releases'
import { renderContent } from '@/content-render/index'
import type { Context, GHESReleasePatch, ReleaseNotes } from '@/types'

export function formatReleases(releaseNotes: ReleaseNotes) {
  // Sort dot-formatted release numbers from highest to lowest.
  const sortedReleaseNumbers = Object.keys(releaseNotes)
    .map((r) => r.replace(/-/g, '.'))
    .sort((a, b) => supported.indexOf(a) - supported.indexOf(b))

  return sortedReleaseNumbers.map((releaseNumber) => {
    const notesPerVersion = releaseNotes[releaseNumber.replace(/\./g, '-')]
    const patches = Object.keys(notesPerVersion)
      .filter((patchNumber) => !notesPerVersion[patchNumber].deprecated)
      .map((patchNumber) => {
        // Normalize rc1 to rc.1 for release-note version strings.
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
      // Lets consumers drop release candidates from supported-release lists.
      isReleaseCandidate: latest !== latestStable && releaseNumber === latest,
    }
  })
}

export async function renderPatchNotes(
  patches: GHESReleasePatch[],
  ctx: Context,
): Promise<GHESReleasePatch[]> {
  return await Promise.all(
    patches.map(async (patch) => {
      // Clone without `sections` so rendering them below doesn't mutate the input.
      const renderedPatch: GHESReleasePatch = { ...patch, sections: {} }
      renderedPatch.intro = await renderContent(patch.intro, ctx)

      const renderedSections = Object.fromEntries(
        await Promise.all(
          Object.entries(patch.sections).map(async ([sectionType, sectionArray]) => {
            const renderedSectionArray = await Promise.all(
              sectionArray.map(async (note) => {
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
