import { getDataByLanguage, getDeepDataByLanguage } from '../../lib/get-data.js'

// If we one day support release-notes for other products, add it here.
// Checking against this is only really to make sure there's no typos
// since we don't have TypeScript to make sure the argument is valid.
const VALID_PREFIXES = new Set(['enterprise-server', 'github-ae'])

export function getReleaseNotes(prefix, langCode) {
  if (!VALID_PREFIXES.has(prefix)) {
    throw new Error(
      `'${prefix}' is not a valid prefix for this function. Must be one of ${Array.from(
        VALID_PREFIXES
      )}`
    )
  }
  // Use English as the foundation, then we'll try to load each individual
  // data/release-notes/**/*.yml file from the translation.
  // If the language is 'en', don't even bother merging.
  const releaseNotes = getDeepDataByLanguage(`release-notes.${prefix}`, 'en')

  // The reason we're doing this is because we can't trust
  // getDeepDataByLanguage() in the translations because it depends on
  // loading in all possible files in the directory. Translations often
  // don't delete files, so we use the English data as a guide for which
  // data files to bother reading.
  if (langCode !== 'en') {
    // Now, let's iterated over all nested keys and for each one load in the
    // translated value.
    for (const [key, value] of Object.entries(releaseNotes)) {
      for (const subKey of Object.keys(value)) {
        const data = getDataByLanguage(`release-notes.${prefix}.${key}.${subKey}`, langCode)
        // A simple but powerful validation. If the `sections:` key/value
        // is incorrectly translated so it's no longer an array, then we
        // don't pick this up from the translation.
        const validSections = Object.values(data.sections).every((sectionValue) =>
          Array.isArray(sectionValue)
        )
        if (validSections) {
          value[subKey] = data
        }
      }
    }
  }

  return releaseNotes
}
