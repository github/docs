import { getDataByLanguage, getDeepDataByLanguage } from '@/data-directory/lib/get-data'
import type { GHESReleasePatch, ReleaseNotes } from '@/types'

type ReleaseNotesPrefix = 'enterprise-server'

export function getReleaseNotes(prefix: ReleaseNotesPrefix, langCode: string) {
  // English release notes define the file set because translation directories can retain stale files.
  const releaseNotes = getDeepDataByLanguage(`release-notes.${prefix}`, 'en') as ReleaseNotes
  if (langCode === 'en') {
    return releaseNotes
  }

  // getDeepDataByLanguage returns a mutable object from a memoize cache.
  const translatedReleaseNotes: ReleaseNotes = {}

  for (const [majorVersion, releases] of Object.entries(releaseNotes)) {
    translatedReleaseNotes[majorVersion] = {}
    for (const minorVersion of Object.keys(releases)) {
      const data = getDataByLanguage(
        `release-notes.${prefix}.${majorVersion}.${minorVersion}`,
        langCode,
      ) as GHESReleasePatch
      // Fall back to English when a translated section is not an array.
      const validSections = Object.values(data.sections).every((sectionValue) =>
        Array.isArray(sectionValue),
      )
      if (validSections) {
        translatedReleaseNotes[majorVersion][minorVersion] = data
      } else {
        translatedReleaseNotes[majorVersion][minorVersion] = releases[minorVersion]
      }
    }
  }
  return translatedReleaseNotes
}
