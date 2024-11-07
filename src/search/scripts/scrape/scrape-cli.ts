// This script is run automatically via GitHub Actions on every push to `main` to generate searchable data.
// It can also be run manually.

import { existsSync, statSync, readdirSync } from 'fs'
import { program, Option } from 'commander'

import { languageKeys } from '@/languages/lib/languages'
import scrapeIntoIndexJson from '@/search/scripts/scrape/lib/scrape-into-index-json'
import {
  allIndexVersionOptions,
  versionToIndexVersionMap,
} from '@/search/lib/elasticsearch-versions'

import type { Config, Options, ProgramOptions } from '@/search/scripts/scrape/types'

program
  .description('Creates search index JSONs by scraping a running docs site')
  .option('-v, --verbose', 'Verbose outputs')
  .addOption(
    new Option('-V, --version <VERSION>', 'Specific versions').choices([
      ...allIndexVersionOptions,
      'all',
    ]),
  )
  .addOption(
    new Option('-l, --language <LANGUAGE>', 'Which languages to focus on').choices(languageKeys),
  )
  .addOption(
    new Option('--not-language <LANGUAGE>', 'Specific language to omit').choices(languageKeys),
  )
  .option('--no-markers', 'Do not print a marker for each parsed document')
  .option('--filter <MATCH>', 'Filter to only do pages that match this string')
  .option(
    '-d, --docs-internal-data <PATH>',
    'Path to github/docs-internal-data repo (defaults to $DOCS_INTERNAL_DATA)',
  )
  .argument('<out-directory>', 'where the indexable files should be written')
  .parse(process.argv)

main(program.opts(), program.args)

async function main(opts: ProgramOptions, args: string[]) {
  let language: string | undefined
  if ('language' in opts) {
    language = opts.language
    if (process.env.LANGUAGE) {
      console.warn(
        `'language' specified as argument ('${language}') AND environment variable ('${process.env.LANGUAGE}')`,
      )
    }
  } else {
    if (process.env.LANGUAGE && process.env.LANGUAGE !== 'all') {
      language = process.env.LANGUAGE
      if (!languageKeys.includes(language)) {
        throw new Error(
          `Environment variable 'VERSION' (${language}) is not recognized. Must be one of ${languageKeys}`,
        )
      }
    }
  }
  const notLanguage = opts.notLanguage
  if (notLanguage && language) {
    throw new Error("Can't specify --language *and* --not-language")
  }

  let indexVersion: string | undefined
  if ('version' in opts) {
    indexVersion = opts.version
    if (process.env.VERSION) {
      console.warn(
        `'version' specified as argument ('${indexVersion}') AND environment variable ('${process.env.VERSION}')`,
      )
    }
    if (!allIndexVersionOptions.includes(indexVersion || '') && indexVersion !== 'all') {
      throw new Error(
        `Argument -version (${indexVersion}) is not recognized. Must be one of ${allIndexVersionOptions}`,
      )
    }
  } else if (process.env.VERSION && process.env.VERSION !== 'all') {
    indexVersion = process.env.VERSION
    if (!allIndexVersionOptions.includes(indexVersion || '')) {
      throw new Error(
        `Environment variable 'VERSION' (${indexVersion}) is not recognized. Must be one of ${allIndexVersionOptions}`,
      )
    }
  }

  let versionsToBuild: string[] = []
  if (!indexVersion || indexVersion === 'all') {
    versionsToBuild = allIndexVersionOptions
  } else if (indexVersion) {
    versionsToBuild = [versionToIndexVersionMap[indexVersion]]
  }

  let docsInternalDataPath: string | undefined
  const { docsInternalData } = opts
  const { DOCS_INTERNAL_DATA } = process.env

  // Taking care of legacy
  if (process.env.POPULAR_PAGES_JSON) {
    throw new Error('POPULAR_PAGES_JSON is deprecated. Use DOCS_INTERNAL_DATA instead.')
  }

  if (docsInternalData) {
    if (!existsSync(docsInternalData)) {
      throw new Error(`'${docsInternalData}' does not exist`)
    }
    docsInternalDataPath = docsInternalData
  } else if (DOCS_INTERNAL_DATA) {
    if (!existsSync(DOCS_INTERNAL_DATA)) {
      throw new Error(`'${DOCS_INTERNAL_DATA}' does not exist`)
    }
    docsInternalDataPath = DOCS_INTERNAL_DATA
  }
  if (docsInternalDataPath) {
    if (!statSync(docsInternalDataPath).isDirectory())
      throw new Error('docsInternalDataPath must be a directory')

    const files = readdirSync(docsInternalDataPath)
    if (!files.includes('hydro'))
      throw new Error(`'${docsInternalDataPath}' must contain a 'hydro' directory`)
  }

  const [outDirectory] = args

  const config: Config = {
    noMarkers: !opts.markers,
    filter: opts.filter,
    docsInternalDataPath,
  }

  const options: Options = {
    language,
    notLanguage,
    outDirectory,
    config,
    versionsToBuild,
  }
  await scrapeIntoIndexJson(options)
}
