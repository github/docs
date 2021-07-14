#!/usr/bin/env node
import fs from 'fs'
import findExtraneousFiles from './helpers/find-extraneous-translation-files.js'

// [start-readme]
//
// An [automated test](/tests/extraneous-translation-files.js) checks for files in the `translations/` directory
// that do not have an equivalent English file in the `content/` directory, and fails if it finds extraneous files.
// When the test fails, a human needs to run this script to remove the files.
//
// [end-readme]

main()

async function main() {
  const files = findExtraneousFiles()
  console.log(
    `Found ${files.length} extraneous translation ${files.length === 1 ? 'file' : 'files'}\n\n`
  )
  files.forEach((file) => {
    console.log(file)
    fs.unlinkSync(file)
  })
}
