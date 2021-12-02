import languages from '../../lib/languages.js'
import { languageFiles, compareLiquidTags } from '../../lib/liquid-tags/tokens.js'

const currentTranslations = []

// populate currentTranslations
Object.keys(languages).forEach((code) => {
  const language = languages[code]
  if (!language.wip && code !== 'en') {
    currentTranslations.push(language)
  }
})

function diffToErrorString(diff) {
  return `
    ${diff.translation} does not match liquid tags in ${diff.file}:

    ${diff.diff.output}
  `
}

function formatMessage(parsingErrors, mismatches) {
  return `
    ${parsingErrors.length} files have parsing errors.
    ${mismatches.length} files have mismatching liquid tags.

    ${'#'.repeat(80)}
    Parsing errors were found in the following files:
    ${'#'.repeat(80)}

    ${parsingErrors.map((error) => `- ${error.message}`).join('\n')}

    ${'#'.repeat(80)}
    ${mismatches.length} files do not match liquid tags:
    ${'#'.repeat(80)}

    ${mismatches.map((diff) => diffToErrorString(diff)).join('\n')}
  `
}

describe('translated pages', () => {
  currentTranslations.forEach((language) => {
    test.skip(`every ${language.name} has the same number of liquid tags as the English one`, () => {
      const mismatches = []
      const files = languageFiles(language)
      const parsingErrors = []

      files.forEach((file) => {
        try {
          const comparison = compareLiquidTags(file, language)

          if (comparison.diff.count > 0) {
            mismatches.push(comparison)
          }
        } catch (e) {
          parsingErrors.push(e)
        }
      })

      const message = formatMessage(parsingErrors, mismatches)

      expect(mismatches.length, message).toEqual(0)
    })
  })
})
