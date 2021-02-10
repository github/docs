const domwaiter = require('domwaiter')
const eventToPromise = require('event-to-promise')
const chalk = require('chalk')
const parsePageSectionsIntoRecords = require('./parse-page-sections-into-records')
const languages = require('../languages')
const pageMarker = chalk.green('|')
const recordMarker = chalk.grey('.')
const port = 4002

module.exports = async function buildRecords (indexName, indexablePages, pageVersion, languageCode) {
  console.log(`\n\nBuilding records for index '${indexName}' (${languages[languageCode].name})`)
  const records = []
  const pages = indexablePages
    // exclude pages that are not in the current language
    .filter(page => page.languageCode === languageCode)
    // exclude pages that don't have a permalink for the current product version
    .filter(page => page.permalinks.some(permalink => permalink.pageVersion === pageVersion))

  // Find the approve permalink for the given language and GitHub product variant (dotcom v enterprise)
  const permalinks = pages
    .map(page => {
      return page.permalinks.find(permalink => {
        return permalink.languageCode === languageCode && permalink.pageVersion === pageVersion
      })
    })
    .map(permalink => {
      permalink.url = `http://localhost:${port}${permalink.href}`
      return permalink
    })

  console.log('indexable pages', indexablePages.length)
  console.log('pages in index', pages.length)
  console.log('permalinks in index', permalinks.length)
  console.log(pageMarker, 'denotes pages')
  console.log(recordMarker, 'denotes records derived from sections of pages')

  const waiter = domwaiter(permalinks, { maxConcurrent: 200, minTime: 5 })
    .on('page', (page) => {
      process.stdout.write(pageMarker)
      const newRecords = parsePageSectionsIntoRecords(page.href, page.$)
      if (!newRecords.length) {
        console.log(chalk.red(`\nno records found: ${page.href}`))
      }
      process.stdout.write(recordMarker.repeat(newRecords.length))
      records.push(...newRecords)
    })
    .on('error', (err) => {
      console.error(err)
    })

  return eventToPromise(waiter, 'done').then(() => {
    console.log('\nrecords in index: ', records.length)
    return records
  })
}
