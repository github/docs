#!/usr/bin/env node
import eventToPromise from 'event-to-promise'
import chalk from 'chalk'
import dotenv from 'dotenv'
import boxen from 'boxen'
import { HTTPError } from 'got'

import parsePageSectionsIntoRecords from './parse-page-sections-into-records.js'
import getPopularPages from './popular-pages.js'
import languages from '#src/languages/lib/languages.js'
import domwaiter from './domwaiter.js'

const pageMarker = chalk.green('|')
const recordMarker = chalk.grey('.')
const port = 4002

dotenv.config()

// These defaults are known to work fine in GitHub Actions.
// For local development, you can override these in your local .env file.
// For example:
//  echo 'BUILD_RECORDS_MAX_CONCURRENT=20' >> .env
//  echo 'BUILD_RECORDS_MIN_TIME=50' >> .env
const MAX_CONCURRENT = parseInt(process.env.BUILD_RECORDS_MAX_CONCURRENT || '100', 10)
const MIN_TIME = parseInt(process.env.BUILD_RECORDS_MIN_TIME || '5', 10)

// These products, forcibly always get a popularity of 0 independent of
// their actual popularity which comes from an external JSON file.
// The objective for this is to reduce their search result ranking
// when multiple docs match on a certain keyword(s).
const FORCE_0_POPULARITY_PRODUCTS = new Set(['contributing'])

export default async function buildRecords(
  indexName,
  indexablePages,
  pageVersion,
  languageCode,
  redirects,
  config = {},
) {
  const { noMarkers, docsInternalDataPath } = config
  console.log(`\n\nBuilding records for index '${indexName}' (${languages[languageCode].name})`)
  const records = []
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
      permalink.url = `http://localhost:${port}${permalink.href}`
      return permalink
    })

  const popularPages = docsInternalDataPath
    ? await getPopularPages(docsInternalDataPath, redirects, pageVersion, languageCode)
    : {}

  console.log('indexable pages', indexablePages.length)
  console.log('pages in index', pages.length)
  console.log('permalinks in index', permalinks.length)
  console.log(pageMarker, 'denotes pages')
  console.log(recordMarker, 'denotes records derived from sections of pages')
  console.log('popular page ratios', Object.keys(popularPages).length)

  const hasPopularPages = Object.keys(popularPages).length > 0

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
      if (err instanceof HTTPError && !err.response.ok) {
        console.log(
          '\n' +
            boxen(chalk.bold(err.request.requestUrl.pathname), {
              title: chalk.red('The URL it failed on was'),
              padding: 1,
              borderColor: 'red',
            }) +
            '\n',
        )
      } else {
        console.error(err)
      }
    })

  return eventToPromise(waiter, 'done').then(() => {
    console.log('\nrecords in index: ', records.length)
    return records
  })
}
