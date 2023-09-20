#!/usr/bin/env node

// [start-readme]
//
// Create a list of errors and summary statistics for errors in a particular language.
//
// [end-readme]

/* Nota bene:
  If you are getting more errors all the sudden, try running this:
  $ src/languages/scripts/create-translation-health-report.js -l en -r 000
  If there's any errors before getting the JSON output,
  const context = { ... } probably needs more data.
*/

import { program } from 'commander'
import fs from 'fs/promises'

program
  .description('Create a translation health report for one language.')
  .requiredOption('-l, --language <language>', 'The language to health check')
  .option('-r, --gitref <sha>', 'Language repo latest git commit short SHA')
  .parse(process.argv)

// Throw errors instead of falling back to English
process.env.DEBUG_TRANSLATION_FALLBACKS = true
// The error option stops everything, but we want it to continue to generate the full report
process.env.ENABLED_LANGUAGES = `en,${program.opts().language}`

// In debug mode, it will call console.warn ... so overriding :)
// Want to make sure the result is valid JSON
const prevConsoleWarn = console.warn
const prevConsoleError = console.error

let issues = []
console.warn = console.error = (...args) => {
  if (args.length > 1) {
    issues.push({ message: args.map(String).join(' '), score: 0 })
  } else if (typeof args[0] === 'string') {
    issues.push({ message: args[0], score: 0 })
  } else if (args[0]?.constructor === Object) {
    const path = args[0].path?.replace('/index.md', '').replace('.md', '')
    issues.push({ path, message: args[0].message, score: scores[path] || 0 })
  } else if (Array.isArray(args[0]) && args[0][0]?.constructor === Object && args[0][0].filepath) {
    // This is a YML parsing error. It's serious enough to bump the score.
    let message = args[0][0].message
    if (args[0][0].reason) {
      message += ` (reason: ${args[0][0].reason})`
    }
    const path = args[0][0].filepath
    // By giving it a +100 on the score, it at least stands above all the
    // other issues which are mostly score 0. It's artificial but it works.
    issues.push({ path, message, score: (scores[path] || 0) + 100 })
  } else {
    // Don't use .warn() because this logging here is for the engineer
    // working on this script.
    console.log("WARNING: Don't know how to turn these args into an issue", args)
  }
}

// Weird import syntax, but forces it to load after process.env... changes
const { languageKeys } = await import('#src/languages/lib/languages.js')
const { loadPages, loadPageMap } = await import('../../../lib/page-data.js')
const { precompileRedirects } = await import('../../../src/redirects/lib/precompile.js')
const { allVersions, allVersionKeys } = await import('#src/versions/lib/all-versions.js')
const { getProductStringFromPath } = await import('../../../lib/path-utils.js')

// Check that the language is valid
const { language, gitref } = program.opts()
if (!languageKeys.includes(language)) {
  throw new Error(`Language ${language} is not in ${languageKeys.join()}.`)
}

// Gather popularity data the search uses to prioritize errors
const scores = {}
const { POPULAR_PAGES_JSON } = process.env
if (POPULAR_PAGES_JSON) {
  const popularPagesRaw = await fs.readFile(POPULAR_PAGES_JSON, 'utf8')
  for (const row of JSON.parse(popularPagesRaw)) {
    scores[row.path_article] = row.path_count
  }
}

// Load all pages in language
const allPages = await loadPages()
const pages = allPages.filter((page) => page.languageCode === language)
const pageMap = await loadPageMap(pages)
const redirects = await precompileRedirects(pages)

// Try to render each page
for (const page of pages) {
  const plainPath = page.relativePath.replace('/index.md', '').replace('.md', '')
  // Go through each version...
  const versions = allVersionKeys.filter((version) => page.applicableVersions.includes(version))
  const pageIssues = {}
  for (const version of versions) {
    const path = `/${language}/${version}/${plainPath}`
    // Reference middleware/context.js for shape
    const context = {
      currentVersion: version, // needed for all pages
      currentLanguage: language, // needed for all pages
      currentPath: path, // needed for all pages
      currentVersionObj: allVersions[version], // needed for ifversion tag
      currentProduct: getProductStringFromPath(path), // needed for learning-track on guides pages
      pages: pageMap, // needed for learning-track on guides pages
      redirects, // needed for learning-track on guides pages
    }
    try {
      await page.render(context)
    } catch (err) {
      // Which messages apply to which versions
      pageIssues[err.message] = pageIssues[err.message] || []
      pageIssues[err.message].push(version)
    }
  }
  if (Object.keys(pageIssues).length) {
    issues.push({
      path: plainPath,
      messages: pageIssues,
      score: scores[plainPath] || 0,
    })
  }
}

// Sort by score desc so the translators know what to focus on first
// Issues with more information should be higher
issues = issues
  .filter((issue) => !issue.path?.includes('early-access'))
  .sort((a, b) => b.score - a.score || JSON.stringify(b).length - JSON.stringify(a).length)

// Begin an output report
const report = {
  language,
  gitref,
  datetime: new Date().toJSON(),
  issuesCount: issues.length,
  issues,
}

console.warn = prevConsoleWarn
console.error = prevConsoleError
console.log(JSON.stringify(report, null, 2))
