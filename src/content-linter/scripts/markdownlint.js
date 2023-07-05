#!/usr/bin/env node
import { program } from 'commander'
import markdownlint from 'markdownlint'
import { applyFixes } from 'markdownlint-rule-helpers'
import { readFile, writeFile } from 'fs/promises'

import walkFiles from '../../../script/helpers/walk-files.js'

import { incorrectAltTextLength } from '../lib/linting-rules/image-alt-text-length.js'
import { internalLinksLang } from '../lib/linting-rules/internal-links-lang.js'
import { internalLinksSlash } from '../lib/linting-rules/internal-links-slash.js'
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
    MD001: true,
    MD002: { level: 2 },
    MD004: { style: 'dash' },
    MD009: true,
    MD011: true,
    MD012: true,
    MD018: true,
    MD019: true,
    MD014: true,
    MD022: true,
    MD023: true,
    MD024: true,
    MD027: true,
    MD029: { style: 'one' },
    MD030: true,
    MD031: true,
    MD037: true,
    MD039: true,
    MD040: {
      allowed_languages: [
        'bash',
        'csharp',
        'geojson',
        'go',
        'golang',
        'graphql',
        'groovy',
        'html',
        'http',
        'java',
        'javascript',
        'json',
        'markdown',
        'math',
        'md',
        'mermaid',
        'powershell',
        'python',
        'ruby',
        'scss',
        'shell',
        'sh',
        'stl',
        'tasklist',
        'text',
        'topojson',
        'xml',
        'yaml',
        'yml',
      ],
    },
    MD047: true,
    MD049: { style: 'underscore' },
    MD050: { style: 'asterisk' },
    MD111: true,
    MD112: true,
    MD113: true,
    MD114: true,
    MD115: true,
  }

  const files = walkFiles(path, ['.md'], { includeBasePath: true })
  const options = {
    files,
    customRules: [
      incorrectAltTextLength,
      imageAltTextEndPunctuation,
      internalLinksLang,
      internalLinksSlash,
      imageFileKebab,
    ],
    config,
  }

  const result = await markdownlint.promises.markdownlint(options)

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
