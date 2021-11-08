#!/usr/bin/env node

import program from 'commander'
import { languageFiles, compareLiquidTags } from '../../lib/liquid-tags/tokens.js'
import languages from '../../lib/languages.js'
import fs from 'fs'

program
  .description('show-liquid-tags-diff')
  .requiredOption('-l, --language <language>', 'The language to compare')
  .option('-d, --dry-run', 'Just pretend to reset files')
  .parse(process.argv)

function resetFiles(files) {
  console.log(`Files to be reset (${files.length}): \n${files.join('\n')}`)

  files.forEach((file) => {
    // remove file so it falls back to English
    console.log(`removing ${file}`)

    if (!program.opts().dryRun) {
      fs.unlinkSync(file)
    }
  })
}

async function main() {
  const options = program.opts()
  const language = languages[options.language]

  if (!language) {
    throw new Error(`Language ${options.language} not found`)
  }

  const files = languageFiles(language, 'content')
  const brokenFiles = []

  files.forEach((file) => {
    try {
      // it throws error if the the syntax is invalid
      const comparison = compareLiquidTags(file, language)

      if (comparison.diff.count === 0) {
        return
      }

      brokenFiles.push(comparison.translation)
    } catch (e) {
      brokenFiles.push(e.filePath)
    }
  })

  await resetFiles(brokenFiles)
}

main()
