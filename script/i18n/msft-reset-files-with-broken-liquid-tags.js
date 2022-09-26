#!/usr/bin/env node

import { program } from 'commander'
import { execFileSync } from 'child_process'
import { languageFiles, compareLiquidTags } from './msft-tokens.js'
import languages from '../../lib/languages.js'

program
  .description('show-liquid-tags-diff')
  .requiredOption('-l, --language <language>', 'The language to compare')
  .option('-d, --dry-run', 'Just pretend to reset files')
  .parse(process.argv)

function resetFiles(files) {
  console.log(`Reseting ${files.length} files:`)

  const dryRun = program.opts().dryRun ? '--dry-run' : ''

  files.forEach((file) => {
    const cmd = 'script/i18n/reset-translated-file.js'
    const args = [file, '--reason', 'broken liquid tags', dryRun]
    execFileSync(cmd, args, { stdio: 'inherit' })
  })
}

function deleteFiles(files) {
  console.log(`Deleting ${files.length} files:`)

  const dryRun = program.opts().dryRun ? '--dry-run' : ''

  files.forEach((file) => {
    const cmd = 'script/i18n/reset-translated-file.js'
    const args = [
      file,
      '--remove',
      '--reason',
      'file deleted because it no longer exists in main',
      dryRun,
    ]
    execFileSync(cmd, args, { stdio: 'inherit' })
  })
}

async function main() {
  const options = program.opts()
  const language = languages[options.language]

  if (!language) {
    throw new Error(`Language ${options.language} not found`)
  }

  // languageFiles() returns an array indexed as follows:
  // [0]: intersection of the files that exist in both main and the language-specific branch
  // [1]: files that exist only in the language-specific branch, not in main
  const allContentFiles = languageFiles(language, 'content')
  const allDataFiles = languageFiles(language, 'data')
  const files = [allContentFiles[0], allDataFiles[0]].flat()
  const nonexitentFiles = [allContentFiles[1], allDataFiles[1]].flat()
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
  await deleteFiles(nonexitentFiles)
}

main()
