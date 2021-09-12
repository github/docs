#!/usr/bin/env node
import languages from '../../lib/languages.js'
import buildRecords from './build-records.js'
import findIndexablePages from './find-indexable-pages.js'
import { allVersions } from '../../lib/all-versions.js'
import { namePrefix } from '../../lib/search/config.js'
import LunrIndex from './lunr-search-index.js'

// Lunr

// Build a search data file for every combination of product version and language
// e.g. `github-docs-dotcom-en.json` and `github-docs-2.14-ja.json`
export default async function syncSearchIndexes(opts = {}) {
  if (opts.language) {
    if (!Object.keys(languages).includes(opts.language)) {
      console.log(
        `Error! ${opts.language} not found. You must provide a currently supported two-letter language code.`
      )
      process.exit(1)
    }
  }

  if (opts.version) {
    if (!Object.keys(allVersions).includes(opts.version)) {
      console.log(
        `Error! ${opts.version} not found. You must provide a currently supported version in <PLAN@RELEASE> format.`
      )
      process.exit(1)
    }
  }

  // build indices for a specific language if provided; otherwise build indices for all languages
  const languagesToBuild = opts.language
    ? Object.keys(languages).filter((language) => language === opts.language)
    : Object.keys(languages)

  // build indices for a specific version if provided; otherwise build indices for all veersions
  const versionsToBuild = opts.version
    ? Object.keys(allVersions).filter((version) => version === opts.version)
    : Object.keys(allVersions)

  console.log(
    `Building indices for ${opts.language || 'all languages'} and ${
      opts.version || 'all versions'
    }.\n`
  )

  // Exclude WIP pages, hidden pages, index pages, etc
  const indexablePages = await findIndexablePages()

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

      // The page version will be the new version, e.g., free-pro-team@latest, enterprise-server@2.22
      const records = await buildRecords(indexName, indexablePages, pageVersion, languageCode)
      const index = new LunrIndex(indexName, records)

      await index.write()
      console.log('wrote index to file: ', indexName)
    }
  }

  console.log('\nDone!')
}
