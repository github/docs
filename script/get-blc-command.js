#!/usr/bin/env node

const supportedLanguages = Object.values(require('../lib/languages')).map(language => language.code)
const excludedLinks = require('../lib/excluded-links')
const program = require('commander')

// [start-readme]
//
// This script parses options for `script/check-external-links`.
//
// [end-readme]

program
  .description('Construct a blc command to run in script/check-external-links')
  .option('-L, --language <lang_code>', 'required language code')
  .option('-i, --internalOnly', 'check internal links only')
  .parse(process.argv)

const languageCode = program.language

if (!languageCode || !supportedLanguages.includes(languageCode)) {
  console.error(`error: you must provide a currently supported language code: ${supportedLanguages.join(', ')}\n`)
  process.exit(1)
}

// options for blc: https://github.com/stevenvachon/broken-link-checker#command-line-usage
const blcPackage = './node_modules/broken-link-checker/bin/blc'
const host = 'http://localhost:4000'
const hostWithLanguage = `${host}/${languageCode}`
const maintainOrder = '--ordered' // maintain order of links in html
const recursive = '--recursive'
const requestMethod = '--get'
const filterLevel = '--filter-level 3' // level 3 checks the most assets
const excludeExternal = program.internalOnly ? ' --exclude-external' : ''

let command = `${blcPackage} ${hostWithLanguage} ${maintainOrder} ${recursive} ${requestMethod} ${filterLevel}${excludeExternal}`

let excludeStrings = ''

// blc can only except one string per --exclude option
// so we need to construct multiple strings from exclusions array
excludedLinks.forEach(excludedLink => {
  excludeStrings = `${excludeStrings} --exclude ${excludedLink}`
})

// prevent link checker from crawling other languages
// for example, if we're checking links on the English site
// we need to exclude links on Japanese, Chinese, Spanish, etc.
supportedLanguages.forEach(supportedLanguage => {
  if (supportedLanguage === languageCode) return
  const internalLink = `${host}/${supportedLanguage}/*`
  const externalLink = `https://help.github.com/${supportedLanguage}/*`
  excludeStrings = `${excludeStrings} --exclude ${internalLink}`
  excludeStrings = `${excludeStrings} --exclude ${externalLink}`
})

// get final command
command = command + excludeStrings

// output final command
console.log(command)
