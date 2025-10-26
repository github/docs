import chalk from 'chalk'

import languages from '@/languages/lib/languages-server'
import buildRecords from '@/search/scripts/scrape/lib/build-records'
import findIndexablePages from '@/search/scripts/scrape/lib/find-indexable-pages'
import { writeIndexRecords } from '@/search/scripts/scrape/lib/search-index-records'
import { getElasticSearchIndex } from '@/search/lib/elasticsearch-indexes'

import type { Options, Config, Page, Redirects } from '@/search/scripts/scrape/types'

// Build a search data file for every combination of product version and language
// e.g. `github-docs-dotcom-en.json` and `github-docs-2.14-ja.json`
export default async function scrapeIntoIndexJson({
  language,
  notLanguage,
  outDirectory,
  versionsToBuild,
  config = {} as Config,
}: Options): Promise<void> {
  const t0 = new Date()

  // build indices for a specific language if provided; otherwise build indices for all languages
  const languagesToBuild = Object.keys(languages).filter((lang) =>
    notLanguage ? notLanguage !== lang : language ? language === lang : true,
  )

  console.log(
    `Building indices for language: ${chalk.yellow(language || 'all languages')} and version: ${chalk.yellow(
      versionsToBuild.length === 1 ? versionsToBuild[0] : 'all versions',
    )}.\n`,
  )

  // Exclude WIP pages, hidden pages, index pages, etc
  const indexablePages: Page[] = await findIndexablePages(config.filter)
  const redirects: Redirects = {}
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
  let totalFailedPages = 0
  const allFailures: Array<{
    indexName: string
    languageCode: string
    indexVersion: string
    failures: Array<{ url?: string; relativePath?: string; error: string; errorType: string }>
  }> = []

  // Build and validate all indices
  for (const languageCode of languagesToBuild) {
    for (const indexVersion of versionsToBuild) {
      const { indexName } = getElasticSearchIndex('generalSearch', indexVersion, languageCode)

      // The page version will be the new version, e.g., free-pro-team@latest, enterprise-server@3.7
      const { records, failedPages } = await buildRecords(
        indexName,
        indexablePages,
        indexVersion,
        languageCode,
        redirects,
        config,
      )
      countRecordsTotal += records.length

      if (failedPages.length > 0) {
        totalFailedPages += failedPages.length
        allFailures.push({
          indexName,
          languageCode,
          indexVersion,
          failures: failedPages,
        })
      }

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

  // Write failures summary to a file for GitHub Actions to read
  if (totalFailedPages > 0) {
    const fs = await import('fs')
    const path = await import('path')
    const failuresSummaryPath = path.join(outDirectory, 'failures-summary.json')
    await fs.promises.writeFile(
      failuresSummaryPath,
      JSON.stringify(
        {
          totalFailedPages,
          failures: allFailures,
        },
        null,
        2,
      ),
    )
    console.log(`\n${chalk.yellow('⚠')} Wrote failures summary to ${failuresSummaryPath}`)
  }
}

function formatSeconds(seconds: number): string {
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}
