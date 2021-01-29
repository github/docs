const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp').sync
const rimraf = require('rimraf').sync
const chalk = require('chalk')
const languages = require('../languages')
const buildRecords = require('./build-records')
const findIndexablePages = require('./find-indexable-pages')
const cacheDir = path.join(process.cwd(), './.search-cache')
const allVersions = require('../all-versions')
const { namePrefix } = require('./config')

// Algolia
const getRemoteIndexNames = require('./algolia-get-remote-index-names')
const AlgoliaIndex = require('./algolia-search-index')

// Lunr
const LunrIndex = require('./lunr-search-index')
const getLunrIndexNames = require('./lunr-get-index-names')

// Build a search data file for every combination of product version and language
// e.g. `github-docs-dotcom-en.json` and `github-docs-2.14-ja.json`
module.exports = async function syncSearchIndexes (opts = {}) {
  if (opts.dryRun) {
    console.log('This is a dry run! The script will build the indices locally but not upload anything.\n')
    rimraf(cacheDir)
    mkdirp(cacheDir)
  }

  if (opts.language) {
    if (!Object.keys(languages).includes(opts.language)) {
      console.log(`Error! ${opts.language} not found. You must provide a currently supported two-letter language code.`)
      process.exit(1)
    }
  }

  if (opts.version) {
    if (!Object.keys(allVersions).includes(opts.version)) {
      console.log(`Error! ${opts.version} not found. You must provide a currently supported version in <PLAN@RELEASE> format.`)
      process.exit(1)
    }
  }

  // build indices for a specific language if provided; otherwise build indices for all languages
  const languagesToBuild = opts.language
    ? Object.keys(languages).filter(language => language === opts.language)
    : Object.keys(languages)

  // build indices for a specific version if provided; otherwise build indices for all veersions
  const versionsToBuild = opts.version
    ? Object.keys(allVersions).filter(version => version === opts.version)
    : Object.keys(allVersions)

  console.log(`Building indices for ${opts.language || 'all languages'} and ${opts.version || 'all versions'}.\n`)

  // Exclude WIP pages, hidden pages, index pages, etc
  const indexablePages = await findIndexablePages()

  // Build and validate all indices
  for (const languageCode of languagesToBuild) {
    for (const pageVersion of versionsToBuild) {
      // if GHES, resolves to the release number like 2.21, 2.22, etc.
      // if FPT, resolves to 'dotcom'
      // if GHAE, resolves to 'ghae'
      const indexVersion = allVersions[pageVersion].plan === 'enterprise-server'
        ? allVersions[pageVersion].currentRelease
        : allVersions[pageVersion].miscBaseName

      // github-docs-dotcom-en, github-docs-2.22-en
      const indexName = `${namePrefix}-${indexVersion}-${languageCode}`

      // The page version will be the new version, e.g., free-pro-team@latest, enterprise-server@2.22
      const records = await buildRecords(indexName, indexablePages, pageVersion, languageCode)
      const index = process.env.USE_LUNR
        ? new LunrIndex(indexName, records)
        : new AlgoliaIndex(indexName, records)

      if (opts.dryRun) {
        const cacheFile = path.join(cacheDir, `${indexName}.json`)
        fs.writeFileSync(cacheFile, JSON.stringify(index, null, 2))
        console.log('wrote dry-run index to disk: ', cacheFile)
      } else {
        if (process.env.USE_LUNR) {
          await index.write()
          console.log('wrote index to file: ', indexName)
        } else {
          await index.syncWithRemote()
          console.log('synced index with remote: ', indexName)
        }
      }
    }
  }

  // Fetch a list of index names and cache it for tests
  // to ensure that an index exists for every language and GHE version
  const remoteIndexNames = process.env.USE_LUNR
    ? await getLunrIndexNames()
    : await getRemoteIndexNames()
  const cachedIndexNamesFile = path.join(__dirname, './cached-index-names.json')
  fs.writeFileSync(
    cachedIndexNamesFile,
    JSON.stringify(remoteIndexNames, null, 2)
  )

  if (!process.env.CI) {
    console.log(chalk.green(`\nCached index names in ${path.relative(process.cwd(), cachedIndexNamesFile)}`))
    console.log(chalk.green('(If this file has any changes, please commit them)'))
  }

  console.log('\nDone!')
}
