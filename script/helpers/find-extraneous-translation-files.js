#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import { difference } from 'lodash-es'
import walkSync from 'walk-sync'
import languages from '../../lib/languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const walk = walkSync.entries

export default function findExtraneousTranslatedFiles() {
  const files = []
  const relativePaths = {}

  // group page.relativePath lists by language
  for (const languageCode in languages) {
    const language = languages[languageCode]
    const languageDir = path.join(__dirname, '..', language.dir)
    relativePaths[languageCode] = walk(languageDir, { directories: false }).map(
      (file) => file.relativePath
    )
  }

  for (const languageCode in languages) {
    if (languageCode === 'en') continue
    const language = languages[languageCode]
    /* istanbul ignore next */
    difference(relativePaths[languageCode], relativePaths.en).forEach((file) => {
      files.push(path.join(__dirname, '..', language.dir, file))
    })
  }

  return files
}
