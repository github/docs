#!/usr/bin/env node

// [start-readme]
//
// Print a list of all the asset files that can't be found mentioned
// in any of the source files (content & code).
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import { program } from 'commander'
import walk from 'walk-sync'

import walkFiles from '../../../script/helpers/walk-files.js'
import languages from '#src/languages/lib/languages.js'

const EXCEPTIONS = new Set([
  'assets/images/site/favicon.ico',
  'assets/images/site/apple-touch-icon.png',
  'assets/images/site/apple-touch-icon-114x114.png',
  'assets/images/site/apple-touch-icon-120x120.png',
  'assets/images/site/apple-touch-icon-144x144.png',
  'assets/images/site/apple-touch-icon-152x152.png',
  'assets/images/site/apple-touch-icon-180x180.png',
  'assets/images/site/apple-touch-icon-192x192.png',
  'assets/images/site/apple-touch-icon-512x512.png',
  'assets/images/site/apple-touch-icon-57x57.png',
  'assets/images/site/apple-touch-icon-60x60.png',
  'assets/images/site/apple-touch-icon-72x72.png',
  'assets/images/site/apple-touch-icon-76x76.png',
])

function isExceptionPath(imagePath) {
  // We also check for .DS_Store because any macOS user that has opened
  // a folder with images will have this on disk. It won't get added
  // to git anyway thanks to our .DS_Store.
  // But if we don't make it a valid exception, it can become inconvenient
  // to run this script locally.
  return (
    EXCEPTIONS.has(imagePath) ||
    path.basename(imagePath) === '.DS_Store' ||
    imagePath.split(path.sep).includes('early-access')
  )
}

program
  .description('Print all images that are in ./assets/ but not found in any source files')
  .option('-e, --exit', 'Exit script by count of orphans (useful for CI)')
  .option('-v, --verbose', 'Verbose outputs')
  .option('--json', 'Output in JSON format')
  .option('--exclude-translations', "Don't search in translations/")
  .parse(process.argv)

main(program.opts(), program.args)

async function main(opts) {
  const { json, verbose, exit, excludeTranslations } = opts

  const walkOptions = {
    directories: false,
    includeBasePath: true,
  }
  const sourceFiles = []
  const englishFiles = []
  englishFiles.push(...walkFiles(path.join(languages.en.dir, 'content'), ['.md']))
  englishFiles.push(...walkFiles(path.join(languages.en.dir, 'data'), ['.md', '.yml']))
  sourceFiles.push(...englishFiles)

  if (!excludeTranslations) {
    // Need to have this so we can filter the translations files and avoid
    // including orphans. Because translations generally don't delete files.
    // When the English content renames something, you later end up with
    // 2 files in each translation repo.
    const englishRelativeFiles = new Set(
      englishFiles.map((englishFile) => path.relative(languages.en.dir, englishFile)),
    )
    for (const [language, { dir }] of Object.entries(languages)) {
      if (language !== 'en') {
        if (!fs.existsSync(dir)) {
          throw new Error(
            `${dir} does not exist. ` +
              'Get around this by using the flag `--exclude-translations`. Or set up the TRANSLATION_ROOT.',
          )
        }
        const languageFiles = []
        languageFiles.push(...walkFiles(path.join(dir, 'content'), ['.md']))
        languageFiles.push(...walkFiles(path.join(dir, 'data'), ['.md', '.yml']))
        sourceFiles.push(
          ...languageFiles.filter((languageFile) =>
            englishRelativeFiles.has(path.relative(dir, languageFile)),
          ),
        )
      }
    }
  }

  const roots = ['tests', 'components', 'script', 'contributing', 'src', 'assets']

  for (const root of roots) {
    sourceFiles.push(
      ...walk(
        root,
        Object.assign(
          {
            globs: ['!**/*.+(png|jpe?g|csv|graphql|json|svg)'],
          },
          walkOptions,
        ),
      ),
    )
  }
  // Add exceptions
  sourceFiles.push('CONTRIBUTING.md')
  sourceFiles.push('README.md')
  verbose && console.log(`${sourceFiles.length.toLocaleString()} source files found in total.`)

  const allImages = new Set(
    walk(
      'assets',
      Object.assign(
        {
          globs: ['!**/*.+(md)'],
        },
        walkOptions,
      ),
    ).filter((filePath) => !filePath.endsWith('.md')),
  )

  verbose && console.log(`${allImages.size.toLocaleString()} images found in total.`)

  for (const sourceFile of sourceFiles) {
    const content = fs.readFileSync(sourceFile, 'utf-8')
    for (const imagePath of allImages) {
      const needle = imagePath.split(path.sep).slice(-2).join('/')
      if (content.includes(needle) || isExceptionPath(imagePath)) {
        allImages.delete(imagePath)
      }
    }
  }

  if (verbose && allImages.size) {
    console.log('The following files are not mentioned anywhere in any source file')
  }
  if (json) {
    console.log(JSON.stringify([...allImages], undefined, 2))
  } else {
    for (const imagePath of [...allImages].sort((a, b) => a.localeCompare(b))) {
      // It's important to escape spaces if we're ever going to pipe this
      // to xargs.
      console.log(`"${imagePath}"`)
    }
  }

  if (verbose) {
    console.log(`${allImages.size.toLocaleString()} orphans left.`)
    const totalDiskSize = getTotalDiskSize(allImages)
    console.log(`Total disk size of all of these: ${(totalDiskSize / 1024 / 1024).toFixed(1)}MB`)
  }

  if (exit) {
    process.exit(allImages.size)
  }
}

function getTotalDiskSize(filePaths) {
  let sum = 0
  for (const filePath of filePaths) {
    sum += fs.statSync(filePath).size
  }
  return sum
}
