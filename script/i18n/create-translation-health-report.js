#!/usr/bin/env node

// [start-readme]
//
// Create a list of errors and summary statistics for errors in a particular language.
//
// [end-readme]

/* Nota bene:
  If you are getting more errors all the sudden, try running this:
  $ script/i18n/create-translation-health-report.js -l en -r 000
  If there's any errors, const context = { ... } probably needs more data.
*/

import { program } from 'commander'
import fs from 'fs/promises'
import { pick } from 'lodash-es'

import { loadPages, loadPageMap } from '../../lib/page-data.js'
import loadSiteData from '../../lib/site-data.js'
import loadRedirects from '../../lib/redirects/precompile.js'
import { allVersions, allVersionKeys } from '../../lib/all-versions.js'
import { languageKeys } from '../../lib/languages.js'
import { getProductStringFromPath } from '../../lib/path-utils.js'

program
  .description('Create a translation health report for one language.')
  .requiredOption('-l, --language <language>', 'The language to health check')
  .requiredOption('-r, --gitref <sha>', 'Language repo latest git commit short SHA')
  .parse(process.argv)

// Gather popularity data the search uses to prioritize errors
async function fetchPopularityData() {
  const output = {}
  const popularPagesRaw = await fs.readFile('lib/search/popular-pages.json', 'utf8')
  for (const line of popularPagesRaw.split('\n')) {
    try {
      const row = JSON.parse(line)
      output[row.path_article] = row.path_count
    } catch {}
  }
  return output
}

async function collectPageErrors(page, { language, data, redirects, plainPath, pageMap }) {
  // Go through each version...
  const promises = allVersionKeys
    .filter((version) => page.applicableVersions.includes(version))
    .map(async (version) => {
      // Collect if errors
      const pageVersionErrors = []
      try {
        const path = `/${language}/${version}/${plainPath}`
        // Reference middleware/context.js for data shape
        const context = {
          ...data, // needed for all pages
          currentVersion: version, // needed for all pages
          currentLanguage: language, // needed for all pages
          currentPath: path, // needed for all pages
          currentVersionObj: allVersions[version], // needed for ifversion tag
          currentProduct: getProductStringFromPath(path), // needed for learning-track on guides pages
          pages: pageMap, // needed for learning-track on guides pages
          redirects, // needed for learning-track on guides pages
        }
        await page.render(context, pageVersionErrors)
      } catch (err) {
        pageVersionErrors.push(err)
      }
      if (pageVersionErrors.length) {
        return [
          version,
          // Filter down properties to make it easier for
          // translators to get the clearest information on the error
          pageVersionErrors.map((err) => pick(err, ['name', 'message', 'token.content'])),
        ]
        // Other fields: Object.getOwnPropertyNames(err)
      }
    })
  const arr = (await Promise.all(promises)).filter(Boolean)
  if (arr.length) {
    return Object.fromEntries(arr)
  }
}

function groupErrors(errors) {
  return errors
    .map((page) => Object.values(page.versions).flat())
    .flat()
    .map((version) => version.message)
    .reduce((sum, val) => {
      sum[val] = sum[val] || 0
      sum[val]++
      return sum
    }, {})
}

async function createReport() {
  // Check that the language is valid
  const { language, gitref } = program.opts()
  if (!languageKeys.includes(language)) {
    throw new Error(`Language ${language} is not in ${languageKeys.join()}.`)
  }

  // Load popularity data to sort errors
  const popularity = await fetchPopularityData()

  // Load all pages
  const allPages = await loadPages()
  const dataErrors = []
  const data = loadSiteData(dataErrors)[language]
  const pages = allPages
    .filter((page) => page.languageCode === language)
    // Early access pages log to the console, which would show in the report
    .filter((page) => !page.relativePath.includes('early-access'))
  const pageMap = await loadPageMap(pages)
  const redirects = await loadRedirects(pages)

  // Try to render each page
  const pageErrors = (
    await Promise.all(
      pages.map(async (page) => {
        const plainPath = page.relativePath.replace('/index.md', '').replace('.md', '')
        const errorsByVersion = await collectPageErrors(page, {
          language,
          data,
          redirects,
          plainPath,
          pageMap,
        })
        if (errorsByVersion) {
          return {
            path: plainPath,
            popularity: popularity[plainPath] || 0,
            versions: errorsByVersion,
          }
        }
      })
    )
  )
    .filter(Boolean)
    // Sort by popularity desc so the translators know what to focus on first
    .sort((a, b) => b.popularity - a.popularity)

  // Begin an output report
  const report = {
    language,
    gitref,
    datetime: new Date().toJSON(),
    totalPages: pages.length,
    // totalErrorPages should be around en: 0, es: 1043, ja: 1004, pt: 995, cn: 1063
    totalErrorPages: pageErrors.length,
    pageErrors,
    // To group errors by message instead
    groupedPageErrors: groupErrors(pageErrors),
    // Filter down properties to make it easier for
    // translators to get the clearest information on the error
    dataErrors: dataErrors.map((err) => pick(err, ['name', 'message', 'token.content'])),
  }

  return report
}

console.log(JSON.stringify(await createReport(), null, 2))
