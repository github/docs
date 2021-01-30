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
// script/reset-translated-file.js <filename>
//
// Examples:
//
// reset a single translated file using a relative path:
// $ script/reset-translated-file.js translations/es-XL/content/actions/index.md
//
// reset a single translated file using a full path:
// $ script/reset-translated-file.js /Users/z/git/github/docs-internal/translations/es-XL/content/actions/index.md
//
// reset all language variants of a single English file (using a relative path):
// $ script/reset-translated-file.js content/actions/index.md
// $ script/reset-translated-file.js data/ui.yml
//
// reset all language variants of a single English file (using a full path):
// $ script/reset-translated-file.js /Users/z/git/github/docs-internal/content/desktop/index.md
// $ script/reset-translated-file.js /Users/z/git/github/docs-internal/data/ui.yml
//
// [end-readme]

const assert = require('assert')
const fs = require('fs')
const path = require('path')
const languages = require('../lib/languages')

const [pathArg] = process.argv.slice(2)
assert(pathArg, 'first arg must be a target filename')
let languageCode

// Is the arg a fully-qualified path?
let relativePath = fs.existsSync(pathArg)
  ? path.relative(process.cwd(), pathArg)
  : pathArg

// extract relative path and language code if pathArg is in the format `translations/<lang>/path/to/file`
if (relativePath.startsWith('translations/')) {
  languageCode = Object.values(languages).find(language => relativePath.startsWith(language.dir) && language.code !== 'en').code
  relativePath = relativePath.split(path.sep).slice(2).join(path.sep)
}

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
