#!/usr/bin/env node
import { program } from 'commander'
import markdownlint from 'markdownlint'
import { applyFixes } from 'markdownlint-rule-helpers'
import { readFile, writeFile } from 'fs/promises'

import walkFiles from '../../../script/helpers/walk-files.js'

import { incorrectAltTextLength } from '../lib/linting-rules/image-alt-text-length.js'
import { imageAltTextEndPunctuation } from '../lib/linting-rules/image-alt-text-end-punctuation.js'
import { imageFileKebab } from '../lib/linting-rules/image-file-kebab.js'

program
  .description('Run markdownlint.')
  .option('-p, --path <path>', 'Specify filepaths to include.')
  .option('-f, --fix', 'Fix linting errors.')
  .parse(process.argv)

const { path, fix } = program.opts()

main()

async function main() {
  const start = Date.now()
  const config = {
    default: false,
    // MD001: true,
    // MD041: { level: 2 },
    // MD111: true,
    // MD112: true,
    // MD113: true,
    MD115: true,
  }

  const files = walkFiles(path, ['.md'], { includeBasePath: true })
  const options = {
    files,
    customRules: [incorrectAltTextLength, imageAltTextEndPunctuation, imageFileKebab],
    config,
  }

  const result = markdownlint.sync(options)

  if (fix) {
    for (const file of files) {
      const content = await readFile(file, 'utf8')
      const applied = applyFixes(content, result[file])
      await writeFile(file, applied)
    }
  }

  Object.keys(result).forEach((key) => {
    if (result[key].length > 0) {
      console.log(key, result[key])
    }
  })

  const end = Date.now()
  console.log(`markdownlint finished in ${(end - start) / 1000} s`)
}
