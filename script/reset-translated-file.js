#!/usr/bin/env node
import program from 'commander'
import { execSync } from 'child_process'
import assert from 'assert'
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

// [start-readme]
//
// This is a convenience script for replacing the contents of translated
// files with the English content from their corresponding source file.
//
// It's intended to be a workaround to temporarily bypass Crowdin parser bugs
// while we wait for translators to fix them.
//
// Usage:
// script/reset-translated-file.js <filename>
//
// Examples:
//
// $ script/reset-translated-file.js translations/es-XL/content/actions/index.md
//
// [end-readme]

program
  .description('reset translated files')
  .option(
    '-m, --prefer-main',
    'Reset file to the translated file, try using the file from `main` branch first, if not found (usually due to renaming), fall back to English source.'
  )
  .parse(process.argv)

const resetToEnglishSource = (translationFilePath) => {
  assert(
    translationFilePath.startsWith('translations/'),
    'path argument must be in the format `translations/<lang>/path/to/file`'
  )
  assert(fs.existsSync(translationFilePath), `file does not exist: ${translationFilePath}`)

  const relativePath = translationFilePath.split(path.sep).slice(2).join(path.sep)
  const englishFile = path.join(process.cwd(), relativePath)
  assert(fs.existsSync(englishFile), `file does not exist: ${englishFile}`)

  // replace file with English source
  const englishContent = fs.readFileSync(englishFile, 'utf8')
  fs.writeFileSync(translationFilePath, englishContent)
  console.log('-> reverted to English: %s', path.relative(process.cwd(), translationFilePath))
}

const [pathArg] = program.args
assert(pathArg, 'first arg must be a target filename')

// Is the arg a fully-qualified path?
const relativePath = fs.existsSync(pathArg) ? path.relative(process.cwd(), pathArg) : pathArg

if (program.opts().preferMain) {
  try {
    execSync(`git checkout main -- ${relativePath}`, { stdio: 'pipe' })
    console.log('-> reverted to file from main branch: %s', relativePath)
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
