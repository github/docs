#!/usr/bin/env node

// [start-readme]
//
// Makes sure that all the image assets in `assets/` are safe.
//
// Generally writers don't check in bogus/corrupt images but mistakes
// can happen and it's ideally spotted in other processes such as
// reviewing PR preview environment.
// This script also makes sure that all images really are what they're
// called. For example, an image might be named `screenshot.png` but
// it might actually be something mischievous.
//
// [end-readme]

import fs from 'fs/promises'
import path from 'path'

import { program } from 'commander'
import chalk from 'chalk'
import cheerio from 'cheerio'
import { fileTypeFromFile } from 'file-type'
import walk from 'walk-sync'
import isSVG from 'is-svg'

const ASSETS_ROOT = path.resolve('assets')
const ROOT = path.dirname(ASSETS_ROOT)

// We put images that are used by the React components in with the assets
// directory. These aren't really content-contibuted.
const EXCLUDE_DIR = path.join(ASSETS_ROOT, 'images', 'site')

const IGNORE_EXTENSIONS = new Set([
  // Currently has no known test for these
  '.csv',
])

const EXPECT = {
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.webp': 'image/webp',
}

const CRITICAL = 'critical'
const WARNING = 'warning'

program
  .description('Make sure all asset images are valid')
  .option('--dry-run', "Don't actually write changes to disk")
  .option('-v, --verbose', 'Verbose outputs')
  .parse(process.argv)

main(program.opts())

async function main(opts) {
  let errors = 0

  const files = walk(ASSETS_ROOT, { includeBasePath: true, directories: false }).filter(
    (filePath) => {
      const basename = path.basename(filePath)
      const extension = path.extname(filePath)
      return (
        !IGNORE_EXTENSIONS.has(extension) &&
        basename !== '.DS_Store' &&
        basename !== 'README.md' &&
        !filePath.startsWith(EXCLUDE_DIR)
      )
    },
  )
  const results = (await Promise.all(files.map(checkFile))).filter(Boolean)
  for (const [level, filePath, error] of results) {
    console.log(
      level === CRITICAL ? chalk.red(level) : chalk.yellow(level),
      chalk.bold(path.relative(ROOT, filePath)),
      error,
    )
    if (level === CRITICAL) {
      errors++
    }
  }

  if (opts.verbose) {
    console.log(`Checked ${files.length.toLocaleString()} images`)
    const countWarnings = results.filter(([level]) => level === WARNING).length
    const countCritical = results.filter(([level]) => level === CRITICAL).length
    const wrap = countCritical ? chalk.red : countWarnings ? chalk.yellow : chalk.green
    console.log(wrap(`Found ${countCritical} critical errors and ${countWarnings} warnings`))
  }

  process.exitCode = errors
}

async function checkFile(filePath) {
  const ext = path.extname(filePath)

  const { size } = await fs.stat(filePath)
  if (!size) {
    return [CRITICAL, filePath, 'file is 0 bytes']
  }

  if (ext === '.svg') {
    // Can't use `fileTypeFromFile` so have to check "manually"
    const content = await fs.readFile(filePath, 'utf-8')
    if (!content.trim()) {
      return [CRITICAL, filePath, 'file is empty']
    }
    if (!isSVG(content)) {
      return [CRITICAL, filePath, 'not a valid SVG file']
    }
    try {
      checkSVGContent(content)
    } catch (error) {
      return [CRITICAL, filePath, error.message]
    }
  } else if (EXPECT[ext]) {
    const fileType = await fileTypeFromFile(filePath)
    if (!fileType) {
      return [CRITICAL, filePath, "can't extract file type"]
    }
    const { mime } = fileType
    const expect = EXPECT[ext]
    if (expect !== mime) {
      return [CRITICAL, filePath, `Expected mime type '${expect}' but was '${mime}'`]
    }
  } else if (!ext) {
    return [WARNING, filePath, 'Has no file extension']
  } else {
    return [WARNING, filePath, `Don't know how to validate '${ext}'`]
  }

  // All is well. Nothing to complain about.
}

function checkSVGContent(content) {
  const $ = cheerio.load(content)
  const disallowedTagNames = new Set(['script', 'object', 'iframe', 'embed'])
  $('*').each((i, element) => {
    const { tagName } = element
    if (disallowedTagNames.has(tagName)) {
      throw new Error(`contains a <${tagName}> tag`)
    }
    for (const key in element.attribs) {
      // Looks for suspicious event handlers on tags.
      // For example `<path oNload="alert(1)"" d="M28 0l4.59 4.59-9.76`
      // We don't need to do a case-sensitive regex here because cheerio
      // will have normalized all the element attribute keys to lowercase.
      if (/(\\x[a-f0-9]{2}|\b)on\w+/.test(key)) {
        throw new Error(`<${tagName}> contains an unsafe attribute: '${key}'`)
      }
    }
  })
}
