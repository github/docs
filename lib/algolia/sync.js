const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp').sync
const rimraf = require('rimraf').sync
const chalk = require('chalk')
const languages = require('../languages')
const buildRecords = require('./build-records')
const findIndexablePages = require('./find-indexable-pages')
const getRemoteIndexNames = require('./get-remote-index-names')
const Index = require('./search-index')
const cacheDir = path.join(process.cwd(), './.algolia-cache')
const allVersions = require('../all-versions')

// Build a search data file for every combination of product version and language
// e.g. `github-docs-dotcom-en.json` and `github-docs-2.14-ja.json`
module.exports = async function syncAlgoliaIndices (opts = {}) {
  if (opts.dryRun) {
    console.log('This is a dry run! The script will abort without uploading anything.')
    rimraf(cacheDir)
    mkdirp(cacheDir)
  }

  // Exlude WIP pages, hidden pages, index pages, etc
  const indexablePages = await findIndexablePages()

  // Build and validate all indices
  for (const languageCode in languages) {
    for (const pageVersion in allVersions) {
      // if GHES, resolves to the release number like 2.21, 2.22, etc.
      // if FPT, resolves to 'dotcom'
      // if GHAE, resolves to 'ghae'
      const indexVersion = allVersions[pageVersion].plan === 'enterprise-server'
        ? allVersions[pageVersion].currentRelease
        : allVersions[pageVersion].miscBaseName

      // github-docs-dotcom-en, github-docs-2.22-en
      const indexName = `${Index.namePrefix}-${indexVersion}-${languageCode}`

      // The page version will be the new version, e.g., free-pro-team@latest, enterprise-server@2.22
      const records = await buildRecords(indexName, indexablePages, pageVersion, languageCode)
      const index = new Index(indexName, records)

      if (opts.dryRun) {
        const cacheFile = path.join(cacheDir, `${indexName}.json`)
        fs.writeFileSync(cacheFile, JSON.stringify(index, null, 2))
        console.log('wrote dry-run index to disk: ', cacheFile)
      } else {
        await index.syncWithRemote()
        console.log('synced index with remote: ', indexName)
      }
    }
  }

  // Fetch a list of index names and cache it for tests
  // to ensure that an index exists for every language and GHE version
  const remoteIndexNames = await getRemoteIndexNames()
  const cachedIndexNamesFile = path.join(__dirname, './cached-index-names.json')
  fs.writeFileSync(
    cachedIndexNamesFile,
    JSON.stringify(remoteIndexNames, null, 2)
  )

  if (!process.env.CI) {
    console.log(chalk.green(`\nCached remote index names in ${path.relative(process.cwd(), cachedIndexNamesFile)}`))
    console.log(chalk.green('(If this file has any changes, please commit them)'))
  }

  console.log('\nDone!')
}
