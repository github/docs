const path = require('path')
const { difference } = require('lodash')
const walk = require('walk-sync').entries
const languages = require('../../lib/languages')

module.exports = function findExtraneousTranslatedFiles () {
  const files = []
  const relativePaths = {}

  // group page.relativePath lists by language
  for (const languageCode in languages) {
    const language = languages[languageCode]
    const languageDir = path.join(__dirname, '..', language.dir)
    relativePaths[languageCode] = walk(languageDir, { directories: false })
      .map(file => file.relativePath)
  }

  for (const languageCode in languages) {
    if (languageCode === 'en') continue
    const language = languages[languageCode]
    /* istanbul ignore next */
    difference(relativePaths[languageCode], relativePaths.en).forEach(file => {
      files.push(path.join(__dirname, '..', language.dir, file))
    })
  }

  return files
}
