#!/usr/bin/env node

// [start-readme]
//
// This is a convenience script for replacing the contents of translated
// files with the English content from their corresponding source file.
//
// It's intended to be a workaround to temporarily bypass Crowdin parser bugs
// while we wait for Crowdin to fix them.
//
// Usage:
// script/reset-translated-File.js <relative-filename> [<two-letter-language-code>]
//
// script/reset-translated-File.js content/desktop/foo.md
// -> resets all translations of foo.md
//
// script/reset-translated-File.js content/desktop/foo.md de
// -> resets german translation of foo.md
//
//
// [end-readme]

const assert = require('assert')
const fs = require('fs')
const path = require('path')
const languages = require('../lib/languages')

const [relativePath, languageCode] = process.argv.slice(2)
assert(relativePath, 'first arg must be a target filename')

const englishFile = path.join(process.cwd(), relativePath)
assert(fs.existsSync(englishFile), `file does not exist: ${englishFile}`)
const englishContent = fs.readFileSync(englishFile, 'utf8')

Object.values(languages).forEach(({ code }) => {
  if (code === 'en') return
  if (languageCode && languageCode !== code) return

  const translatedFile = path.join(process.cwd(), languages[code].dir, relativePath)
  fs.writeFileSync(translatedFile, englishContent)
  console.log('reverted to English: %s', path.relative(process.cwd(), translatedFile))
})
