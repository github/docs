import { getDataByLanguage, getDeepDataByLanguage } from '@/data-directory/lib/get-data.js'
import type { ReleaseNotes } from '@/types'

// If we one day support release-notes for other products, add it here.
// Checking against this is only really to make sure there's no typos
// since we don't have TypeScript to make sure the argument is valid.
const VALID_PREFIXES = new Set(['enterprise-server', 'github-ae'])

export function getReleaseNotes(prefix: string, langCode: string) {
  if (!VALID_PREFIXES.has(prefix)) {
    throw new Error(
      `'${prefix}' is not a valid prefix for this function. Must be one of ${Array.from(
        VALID_PREFIXES,
      )}`,
    )
  }
  // Use English as the foundation, then we'll try to load each individual
  // data/release-notes/**/*.yml file from the translation.
  // If the language is 'en', don't even bother merging.
  const releaseNotes = getDeepDataByLanguage(`release-notes.${prefix}`, 'en') as ReleaseNotes
  if (langCode === 'en') {
    // Exit early because nothing special needs to be done.
    return releaseNotes
  }

  // The reason we're doing this is because we can't trust
  // getDeepDataByLanguage() in the translations because it depends on
  // loading in all possible files in the directory. Translations often
  // don't delete files, so we use the English data as a guide for which
  // data files to bother reading.

  // We start with the English release notes and iterate over the keys,
  // then for each nested key, try to pull it from the translation.
  // If we encounter valid sections, use it. If not valid,
  // use the English ones.
  // The output of `getDeepDataByLanguage()` is a mutable object
  // from a memoize cache, so don't mutate it to avoid confusing bugs.
  const translatedReleaseNotes: ReleaseNotes = {}

  // Now, let's iterated over all nested keys and for each one load in the
  // translated releases.
  for (const [majorVersion, releases] of Object.entries(releaseNotes)) {
    // Major version is things like '3-7'
    translatedReleaseNotes[majorVersion] = {}
    for (const minorVersion of Object.keys(releases)) {
      // Minor version is things like '0-rc1' or '3'
      const data = getDataByLanguage(
        `release-notes.${prefix}.${majorVersion}.${minorVersion}`,
        langCode,
      )
      // A simple but powerful validation. If the `sections:` thing
      // is incorrectly translated so it's no longer an array, then we
      // don't pick this up from the translation.
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
