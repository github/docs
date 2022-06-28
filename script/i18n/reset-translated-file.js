#!/usr/bin/env node

// [start-readme]
//
// This is a convenience script for replacing the contents of translated
// files with the English content from their corresponding source file.
//
// It's intended to be a workaround to temporarily bypass Crowdin parser bugs
// while we wait for translators to fix them.
//
// Usage:
// script/i18n/reset-translated-file.js <filename>
//
// Examples:
//
// $ script/i18n/reset-translated-file.js translations/es-XL/content/actions/index.md
//
// [end-readme]

import { program } from 'commander'
import { execSync } from 'child_process'
import assert from 'assert'
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

program
  .description('reset translated files')
  .option(
    '-m, --prefer-main',
    'Reset file to the translated file, try using the file from `main` branch first, if not found (usually due to renaming), fall back to English source.'
  )
  .option('-d, --dry-run', 'Just pretend to reset files')
  .option('-r, --reason <reason>', 'A reason why the file is getting reset')
  .parse(process.argv)

const dryRun = program.opts().dryRun
const reason = program.opts().reason
const reasonMessage = reason ? `Reason: ${reason}` : ''

const resetToEnglishSource = (translationFilePath) => {
  assert(
    translationFilePath.startsWith('translations/'),
    'path argument must be in the format `translations/<lang>/path/to/file`'
  )

  if (!fs.existsSync(translationFilePath)) {
    return
  }

  const relativePath = translationFilePath.split(path.sep).slice(2).join(path.sep)
  const englishFile = path.join(process.cwd(), relativePath)

  if (!dryRun && !fs.existsSync(englishFile)) {
    fs.unlinkSync(translationFilePath)
    return
  }

  if (!dryRun) {
    // it is important to replace the file with English source instead of
    // removing it, and relying on the fallback, because redired_from frontmatter
    // won't work in fallbacks
    const englishContent = fs.readFileSync(englishFile, 'utf8')
    fs.writeFileSync(translationFilePath, englishContent)
  }

  console.log(
    '-> reverted to English: %s %s',
    path.relative(process.cwd(), translationFilePath),
    reasonMessage
  )
}

const [pathArg] = program.args
assert(pathArg, 'first arg must be a target filename')

// Is the arg a fully-qualified path?
const relativePath = fs.existsSync(pathArg) ? path.relative(process.cwd(), pathArg) : pathArg

if (program.opts().preferMain) {
  try {
    if (!dryRun) {
      execSync(`git checkout main -- ${relativePath}`, { stdio: 'pipe' })
    }
    console.log('-> reverted to file from main branch: %s %s', relativePath, reasonMessage)
  } catch (e) {
    if (e.message.includes('pathspec')) {
      console.warn(
        chalk.red(
          `cannot find ${relativePath} in main branch (likely because it was renamed); falling back to English source file.`
        )
      )
      resetToEnglishSource(relativePath)
    } else {
      console.warn(e.message)
    }
  }
} else {
  resetToEnglishSource(relativePath)
}
