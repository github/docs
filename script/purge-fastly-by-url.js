#!/usr/bin/env node

// [start-readme]
//
// Run this script to manually purge the Fastly cache
// for all language variants of a single URL or for a batch of URLs in a file. This script does
// not require authentication.
//
// [end-readme]

import fs from 'fs/promises'
import path from 'path'
import { program } from 'commander'
import { execSync } from 'child_process'
import libLanguages from '../lib/languages.js'
import { getPathWithoutLanguage } from '../lib/path-utils.js'

const languageCodes = Object.keys(libLanguages)

const requiredUrlPrefix = 'https://docs.github.com'
const purgeCommand = 'curl -s -X PURGE -H "Fastly-Soft-Purge:1"'

program
  .description(
    'Purge the Fastly cache for a single URL or a batch of URLs in a file, plus all language variants of the given URL(s).'
  )
  .option('-s, --single <URL>', `provide a single ${requiredUrlPrefix} URL`)
  .option(
    '-b, --batch <FILE>',
    `provide a path to a file containing a list of ${requiredUrlPrefix} URLs`
  )
  .option('-d, --dry-run', 'print URLs to be purged without actually purging')
  .parse(process.argv)

const singleUrl = program.opts().single
const batchFile = program.opts().batch
const dryRun = program.opts().dryRun

// verify CLI options
if (!singleUrl && !batchFile) {
  console.error('error: you must specify --single <URL> or --batch <FILE>.\n')
  process.exit(1)
}

if (singleUrl && !singleUrl.startsWith(requiredUrlPrefix)) {
  console.error(
    `error: cannot purge ${singleUrl} because URLs must start with ${requiredUrlPrefix}.\n`
  )
  process.exit(1)
}

if (batchFile) {
  try {
    await fs.readFile(batchFile)
  } catch (e) {
    console.error('error: cannot find batch file.\n')
    process.exit(1)
  }
}

// do the purge
if (singleUrl) {
  purge(singleUrl)
}

if (batchFile) {
  ;(await fs.readFile(batchFile, 'utf8'))
    .split('\n')
    .filter((line) => line !== '')
    .forEach((url) => {
      if (!url.startsWith(requiredUrlPrefix)) {
        console.error(
          `error: cannot purge ${url} because URLs must start with ${requiredUrlPrefix}.\n`
        )
        process.exit(1)
      }
      purge(url)
    })
}

function purge(url) {
  getLanguageVariants(url).forEach((localizedUrl) => {
    if (dryRun) {
      console.log(`This is a dry run! Will purge cache for ${localizedUrl}`)
      return
    }

    console.log(`Purging cache for ${localizedUrl}`)
    const result = execSync(`${purgeCommand} ${localizedUrl}`).toString()
    logStatus(result)

    // purge twice to ensure referenced content on the page is updated too
    const secondResult = execSync(`${purgeCommand} ${localizedUrl}`).toString()
    logStatus(secondResult)
  })
}

function getLanguageVariants(url) {
  // for https://docs.github.com/en/foo, get https://docs.github.com/foo
  const languagelessUrl = getPathWithoutLanguage(url.replace(requiredUrlPrefix, ''))

  // then derive localized urls
  return languageCodes.map((lc) => path.join(requiredUrlPrefix, lc, languagelessUrl))
}

function logStatus(result) {
  // only log status if it's not ok
  if (JSON.parse(result).status === 'ok') return
  console.log(result)
}
