#!/usr/bin/env node

import { program } from 'commander'
import { execSync } from 'child_process'
import { languageFiles, compareLiquidTags } from '../../lib/liquid-tags/tokens.js'
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
    execSync(
      `script/i18n/reset-translated-file.js ${file} --reason="broken liquid tags" ${dryRun}`,
      { stdio: 'inherit' }
    )
  })
}

async function main() {
  const options = program.opts()
  const language = languages[options.language]

  if (!language) {
    throw new Error(`Language ${options.language} not found`)
  }

  const files = [languageFiles(language, 'content'), languageFiles(language, 'data')].flat()

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
