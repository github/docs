// Validates asset files for corrupt images, unsafe SVG content, and mismatched file types.
// For example, screenshot.png must contain image/png data.

import fs from 'fs/promises'
import path from 'path'

import { program } from 'commander'
import chalk from 'chalk'
import { load } from 'cheerio'
import { fileTypeFromFile } from 'file-type'
import walk from 'walk-sync'
import isSVG from 'is-svg'

const ASSETS_ROOT = path.resolve('assets')
const ROOT = path.dirname(ASSETS_ROOT)

// React component images live under assets but are not content-contributed.
const EXCLUDE_DIR = path.join(ASSETS_ROOT, 'images', 'site')

const IGNORE_EXTENSIONS = new Set([
  // CSV assets have no validator.
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
} as Record<string, string>

const CRITICAL = 'critical'
const WARNING = 'warning'

program
  .description('Make sure all asset images are valid')
  .option('--dry-run', "Don't actually write changes to disk")
  .option('-v, --verbose', 'Verbose outputs')
  .parse(process.argv)

main(program.opts())

async function main(opts: { dryRun: boolean; verbose: boolean }) {
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
  const results = (await Promise.all(files.map(checkFile))).filter(Boolean) as [
    level: string,
    filePath: string,
    error: string,
  ][]
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

async function checkFile(filePath: string) {
  const ext = path.extname(filePath)

  const { size } = await fs.stat(filePath)
  if (!size) {
    return [CRITICAL, filePath, 'file is 0 bytes']
  }

  if (ext === '.svg') {
    // fileTypeFromFile cannot validate SVG, so parse the text content.
    const content = await fs.readFile(filePath, 'utf-8')
    if (!content.trim()) {
      return [CRITICAL, filePath, 'file is empty']
    }
    if (!isSVG(content)) {
      return [CRITICAL, filePath, 'not a valid SVG file']
    }
    try {
      checkSVGContent(content)
    } catch (error: unknown) {
      return [CRITICAL, filePath, error instanceof Error ? error.message : String(error)]
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
}

function checkSVGContent(content: string) {
  const $ = load(content)
  const disallowedTagNames = new Set(['script', 'object', 'iframe', 'embed'])
  $('*').each((i, element) => {
    const el = $(element).get(0)
    if (!el || !('tagName' in el)) return
    const { tagName } = el
    if (disallowedTagNames.has(tagName)) {
      throw new Error(`contains a <${tagName}> tag`)
    }
    for (const key in 'attribs' in el ? el.attribs : {}) {
      // Cheerio lowercases names, so this catches event handlers such as oNload case-insensitively.
      if (/(\\x[a-f0-9]{2}|\b)on\w+/.test(key)) {
        throw new Error(`<${tagName}> contains an unsafe attribute: '${key}'`)
      }
    }
  })
}
