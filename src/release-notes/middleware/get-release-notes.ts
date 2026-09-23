import { getDataByLanguage, getDeepDataByLanguage } from '@/data-directory/lib/get-data'
import type { GHESReleasePatch, ReleaseNotes } from '@/types'

// Widen the union if we ever support release notes for another product.
type ReleaseNotesPrefix = 'enterprise-server'

export function getReleaseNotes(prefix: ReleaseNotesPrefix, langCode: string) {
  // Use English as the foundation, then we'll try to load each individual
  // data/release-notes/**/*.yml file from the translation.
  // If the language is 'en', don't even bother merging.
  const releaseNotes = getDeepDataByLanguage(`release-notes.${prefix}`, 'en') as ReleaseNotes
  if (langCode === 'en') {
    return releaseNotes
  }

  // The reason we're doing this is because we can't trust
  // getDeepDataByLanguage() in the translations because it depends on
  // loading in all possible files in the directory. Translations often
  // don't delete files, so we use the English data as a guide for which
  // data files to bother reading.

  // `getDeepDataByLanguage()` returns a mutable object from a memoize cache,
  // so build a new one rather than mutating it.
  const translatedReleaseNotes: ReleaseNotes = {}

  for (const [majorVersion, releases] of Object.entries(releaseNotes)) {
    // Major version is things like '3-7'
    translatedReleaseNotes[majorVersion] = {}
    for (const minorVersion of Object.keys(releases)) {
      // Minor version is things like '0-rc1' or '3'
      const data = getDataByLanguage(
        `release-notes.${prefix}.${majorVersion}.${minorVersion}`,
        langCode,
      ) as GHESReleasePatch
      // If any section was mistranslated into something other than an array,
      // fall back to English.
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
