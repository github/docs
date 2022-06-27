#!/usr/bin/env node

import { program } from 'commander'
import { compareLiquidTags } from '../../lib/liquid-tags/tokens.js'
import languages from '../../lib/languages.js'

program
  .argument('<files...>', 'The file name(s) without the language dir. \nI.E. content/foo.md')
  .description('Shows the differences of liquid tags between two files')
  .requiredOption(
    '-l, --language <language>',
    `Choose one of these languages to compare: ${Object.keys(languages).filter((l) => l !== 'en')}`
  )
  .parse(process.argv)

function reportFileDifference(diff) {
  console.log(`File: ${diff.file}`)
  console.log(`Translation: ${diff.translation}`)
  console.log(`Differences:`)
  console.log(diff.diff.output)
}

function main() {
  const files = program.args
  const options = program.opts()

  files.forEach((file) => {
    const language = languages[options.language]
    if (!language) throw new Error(`${options.language} is not a recognized language`)
    const diff = compareLiquidTags(file, language)
    reportFileDifference(diff)
  })
}

main()
