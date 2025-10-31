import eventToPromise from 'event-to-promise'
import chalk from 'chalk'
import dotenv from 'dotenv'
import boxen from 'boxen'

import languages from '@/languages/lib/languages-server'
import parsePageSectionsIntoRecords from '@/search/scripts/scrape/lib/parse-page-sections-into-records'
import getPopularPages from '@/search/scripts/scrape/lib/popular-pages'
import domwaiter from '@/search/scripts/scrape/lib/domwaiter'
import { getAllVersionsKeyFromIndexVersion } from '@/search/lib/elasticsearch-versions'

import type { Page, Permalink, Record, Config, Redirects } from '@/search/scripts/scrape/types'

// Custom error class to replace got's HTTPError
class HTTPError extends Error {
  response: { ok: boolean; statusCode?: number }
  request: { requestUrl?: { pathname?: string } }

  constructor(
    message: string,
    response: { ok: boolean; statusCode?: number },
    request: { requestUrl?: { pathname?: string } },
  ) {
    super(message)
    this.name = 'HTTPError'
    this.response = response
    this.request = request
  }
}

const pageMarker = chalk.green('|')
const recordMarker = chalk.grey('.')
const port = 4002

dotenv.config()

// These defaults are known to work fine in GitHub Actions.
// For local development, you can override these in your local .env file.
// For example:
//  echo 'BUILD_RECORDS_MAX_CONCURRENT=5' >> .env
//  echo 'BUILD_RECORDS_MIN_TIME=200' >> .env
const MAX_CONCURRENT = parseInt(process.env.BUILD_RECORDS_MAX_CONCURRENT || '5', 10)
const MIN_TIME = parseInt(process.env.BUILD_RECORDS_MIN_TIME || '200', 10)

// These products, forcibly always get a popularity of 0 independent of
// their actual popularity which comes from an external JSON file.
// The objective for this is to reduce their search result ranking
// when multiple docs match on a certain keyword(s).
const FORCE_0_POPULARITY_PRODUCTS = new Set(['contributing'])

interface FailedPage {
  url?: string
  relativePath?: string
  error: string
  errorType: string
}

export interface BuildRecordsResult {
  records: Record[]
  failedPages: FailedPage[]
}

export default async function buildRecords(
  indexName: string,
  indexablePages: Page[],
  indexVersion: string,
  languageCode: string,
  redirects: Redirects,
  config: Config = {} as Config,
): Promise<BuildRecordsResult> {
  // Determine the page version from the index version
  const pageVersion = getAllVersionsKeyFromIndexVersion(indexVersion)

  const { noMarkers, docsInternalDataPath } = config
  console.log(`\n\nBuilding records for index '${indexName}' (${languages[languageCode].name})`)
  const records: Record[] = []
  const pages = indexablePages
    // exclude pages that are not in the current language
    .filter((page) => page.languageCode === languageCode)
    // exclude pages that don't have a permalink for the current product version
    .filter((page) => page.permalinks.some((permalink) => permalink.pageVersion === pageVersion))

  // Find the approve permalink for the given language and GitHub product variant (dotcom v enterprise)
  const permalinks = pages
    .map((page) => {
      return page.permalinks.find((permalink) => {
        return permalink.languageCode === languageCode && permalink.pageVersion === pageVersion
      })
    })
    .map((permalink) => {
      if (permalink) {
        permalink.url = `http://localhost:${port}${permalink.href}`
      }
      return permalink
    })
    .filter((permalink): permalink is Permalink => permalink !== undefined)

  const popularPages = docsInternalDataPath
    ? await getPopularPages(docsInternalDataPath, redirects, indexVersion, languageCode)
    : {}

  console.log('indexable pages', indexablePages.length)
  console.log('pages in index', pages.length)
  console.log('permalinks in index', permalinks.length)
  console.log(pageMarker, 'denotes pages')
  console.log(recordMarker, 'denotes records derived from sections of pages')
  console.log('popular page ratios', Object.keys(popularPages).length)

  const hasPopularPages = Object.keys(popularPages).length > 0

  // Track failed pages
  const failedPages: FailedPage[] = []

  const waiter = domwaiter(permalinks, { maxConcurrent: MAX_CONCURRENT, minTime: MIN_TIME })
    .on('page', (page) => {
      if (!noMarkers) process.stdout.write(pageMarker)
      const newRecord = parsePageSectionsIntoRecords(page)
      const pathArticle = page.relativePath.replace('/index.md', '').replace('.md', '')
      let popularity = (hasPopularPages && popularPages[pathArticle]) || 0.0
      if (FORCE_0_POPULARITY_PRODUCTS.size) {
        const product = newRecord.objectID.split('/')[2]
        if (FORCE_0_POPULARITY_PRODUCTS.has(product)) {
          popularity = 0.0
        }
      }
      newRecord.popularity = popularity

      if (!noMarkers) process.stdout.write(recordMarker)
      records.push(newRecord)
    })
    .on('error', (err) => {
      // Track the failure
      const url = (err as any).url
      const relativePath = (err as any).relativePath

      // Check for HTTPError by name since it may come from a different module
      if ((err instanceof HTTPError || err?.name === 'HTTPError') && (err as any).response) {
        const httpErr = err as any
        failedPages.push({
          url: httpErr.request?.requestUrl?.pathname || url,
          relativePath,
          error: err.message,
          errorType: `HTTP ${httpErr.response?.statusCode || 'Error'}`,
        })

        if (!noMarkers) process.stdout.write(chalk.red('✗'))
      } else if (err instanceof Error) {
        // Enhanced error handling for timeout and network errors
        const errorType = (err.cause as any)?.code || err.name
        const isTimeout =
          errorType === 'UND_ERR_HEADERS_TIMEOUT' ||
          errorType === 'UND_ERR_CONNECT_TIMEOUT' ||
          err.message.includes('timed out')

        failedPages.push({
          url,
          relativePath,
          error: err.message,
          errorType: isTimeout ? 'Timeout' : errorType || 'Unknown Error',
        })

        if (!noMarkers) process.stdout.write(chalk.red('✗'))
      } else {
        failedPages.push({
          url,
          relativePath,
          error: String(err),
          errorType: 'Unknown Error',
        })

        if (!noMarkers) process.stdout.write(chalk.red('✗'))
      }
    })

  // Wait for 'done' event but ignore 'error' events (they're handled by the error listener above)
  await eventToPromise(waiter, 'done', { ignoreErrors: true })
  console.log('\nrecords in index: ', records.length)

  // Report failed pages if any
  if (failedPages.length > 0) {
    const failureCount = failedPages.length
    const header = chalk.bold.red(`${failureCount} page(s) failed to scrape\n\n`)

    const failureList = failedPages
      .slice(0, 10) // Show first 10 failures
      .map((failure, idx) => {
        const number = chalk.gray(`${idx + 1}. `)
        const errorType = chalk.yellow(failure.errorType)
        const pathLine = failure.relativePath
          ? `\n${chalk.cyan('   Path: ')}${failure.relativePath}`
          : ''
        const urlLine = failure.url ? `\n${chalk.cyan('   URL: ')}${failure.url}` : ''
        const errorLine = `\n${chalk.gray(`   Error: ${failure.error}`)}`

        return `${number}${errorType}${pathLine}${urlLine}${errorLine}`
      })
      .join('\n\n')

    const remaining =
      failureCount > 10 ? `\n\n${chalk.gray(`... and ${failureCount - 10} more`)}` : ''

    const boxContent = header + failureList + remaining
    const box = boxen(boxContent, {
      title: chalk.red('⚠ Failed Pages'),
      padding: 1,
      borderColor: 'yellow',
    })

    console.log(`\n${box}\n`)

    // Log suggestion
    console.log(
      chalk.yellow(
        `💡 Tip: These failures won't stop the scraping process. The script will continue with the remaining pages.`,
      ),
    )

    if (failedPages.some((f) => f.errorType === 'Timeout')) {
      console.log(
        chalk.gray(
          `   For timeout errors, try: export BUILD_RECORDS_MAX_CONCURRENT=50 (currently ${MAX_CONCURRENT})`,
        ),
      )
    }
  }

  return {
    records,
    failedPages,
  }
}
