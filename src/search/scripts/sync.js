#!/usr/bin/env node
import chalk from 'chalk'

import languages from '#src/languages/lib/languages.js'
import buildRecords from './build-records.js'
import findIndexablePages from './find-indexable-pages.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { namePrefix } from '#src/search/lib/config.js'
import { writeIndexRecords } from './search-index-records.js'

// Build a search data file for every combination of product version and language
// e.g. `github-docs-dotcom-en.json` and `github-docs-2.14-ja.json`
export default async function syncSearchIndexes({
  language,
  version,
  notLanguage,
  outDirectory,
  config = {},
}) {
  const t0 = new Date()

  // build indices for a specific language if provided; otherwise build indices for all languages
  const languagesToBuild = Object.keys(languages).filter((lang) =>
    notLanguage ? notLanguage !== lang : language ? language === lang : true,
  )

  // build indices for a specific version if provided; otherwise build indices for all versions
  const versionsToBuild = Object.keys(allVersions).filter((ver) =>
    version ? version === ver : true,
  )

  console.log(
    `Building indices for ${chalk.yellow(language || 'all languages')} and ${chalk.yellow(
      version || 'all versions',
    )}.\n`,
  )

  // Exclude WIP pages, hidden pages, index pages, etc
  const indexablePages = await findIndexablePages(config.filter)
  const redirects = {}
  indexablePages.forEach((page) => {
    const href = page.relativePath.replace('index.md', '').replace('.md', '')
    for (let redirectFrom of page.redirect_from || []) {
      // Remember that each redirect_from as a prefix / and often it ends
      // with a trailing /
      if (redirectFrom.startsWith('/')) redirectFrom = redirectFrom.slice(1)
      if (redirectFrom.endsWith('/')) redirectFrom = redirectFrom.slice(0, -1)
      redirects[redirectFrom] = href
    }
  })

  let countRecordsTotal = 0
  // Build and validate all indices
  for (const languageCode of languagesToBuild) {
    for (const pageVersion of versionsToBuild) {
      // if GHES, resolves to the release number like 2.21, 2.22, etc.
      // if FPT, resolves to 'dotcom'
      // if GHAE, resolves to 'ghae'
      const indexVersion =
        allVersions[pageVersion].plan === 'enterprise-server'
          ? allVersions[pageVersion].currentRelease
          : allVersions[pageVersion].miscBaseName

      // github-docs-dotcom-en, github-docs-2.22-en
      const indexName = `${namePrefix}-${indexVersion}-${languageCode}`

      // The page version will be the new version, e.g., free-pro-team@latest, enterprise-server@3.7
      const records = await buildRecords(
        indexName,
        indexablePages,
        pageVersion,
        languageCode,
        redirects,
        config,
      )
      countRecordsTotal += records.length
      const fileWritten = await writeIndexRecords(indexName, records, outDirectory)
      console.log(`wrote records to ${fileWritten}`)
    }
  }
  const t1 = new Date()
  const tookSec = (t1.getTime() - t0.getTime()) / 1000

  console.log('\nDone!')
  console.log(`Took ${chalk.bold(formatSeconds(tookSec))}`)
  const rate = (countRecordsTotal / tookSec).toFixed(1)
  console.log(`Rate ~${chalk.bold(rate)} pages per second.`)
}

function formatSeconds(seconds) {
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}
