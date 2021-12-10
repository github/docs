#!/usr/bin/env node

// [start-readme]
//
// This script goes through all content and renders their HTML and from there
// can analyze for various flaws (e.g. broken links)
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import program, { Option, InvalidArgumentError } from 'commander'
import chalk from 'chalk'

import shortVersions from '../middleware/contextualizers/short-versions.js'
import contextualize from '../middleware/context.js'
import { languageKeys } from '../lib/languages.js'
import { loadPages, loadPageMap, loadUnversionedTree } from '../lib/page-data.js'
import loadRedirects from '../lib/redirects/precompile.js'
import renderContent from '../lib/render-content/index.js'
import { deprecated } from '../lib/enterprise-server-releases.js'

const STATIC_PREFIXES = {
  assets: path.resolve('assets'),
  public: path.resolve(path.join('data', 'graphql')),
}
// Sanity check that these are valid paths
Object.entries(STATIC_PREFIXES).forEach(([key, value]) => {
  if (!fs.existsSync(value)) {
    throw new Error(`Can't find static prefix (${key}): ${value}`)
  }
})

const CONTENT_ROOT = path.resolve('content')

const deprecatedVersionPrefixesRegex = new RegExp(
  `enterprise(-server@|/)(${deprecated.join('|')})(/|$)`
)

program
  .description('Analyze all checked content files, render them, and check for flaws.')
  .addOption(
    new Option('-L, --level <LEVEL>', 'Filter of flaw level').choices([
      'all',
      'warning',
      'critical',
    ])
  )
  .addOption(
    new Option('-l, --language <LANGUAGE...>', 'Which languages to focus on').choices(languageKeys)
  )
  .option('--verbose-url <BASE_URL>', 'Print the absolute URL if set')
  .option('-f, --filter <FILTER...>', 'Search filter(s) on the paths')
  .option('-e, --exit', 'Exit script by count of flaws (useful for CI)')
  .option('-b, --bail', 'Exit on the first flaw')
  .option('--check-anchors', "Validate links that start with a '#' too")
  .option('--check-images', 'Validate local images too')
  .option('-v, --verbose', 'Verbose outputs')
  .option('--debug', "Loud about everything it's doing")
  .option('--random', 'Load pages in a random order (useful for debugging)')
  .option('--max <number>', 'integer argument (default: none)', (value) => {
    const parsed = parseInt(value, 10)
    if (isNaN(parsed)) {
      throw new InvalidArgumentError('Not a number.')
    }
    return parsed
  })
  .arguments('[files...]', 'Specific files to check')
  .parse(process.argv)

main(program.opts(), program.args)

async function main(opts, files) {
  const { random, language, filter, exit, debug, max, verbose } = opts

  debug && console.time('loadUnversionedTree')
  const unversionedTree = await loadUnversionedTree()
  debug && console.timeEnd('loadUnversionedTree')

  debug && console.time('loadPages')
  const pageList = await loadPages(unversionedTree)
  debug && console.timeEnd('loadPages')

  debug && console.time('loadPageMap')
  const pageMap = await loadPageMap(pageList)
  debug && console.timeEnd('loadPageMap')

  debug && console.time('loadRedirects')
  const redirects = await loadRedirects(pageList)
  debug && console.timeEnd('loadRedirects')

  const languages = language || []
  console.assert(Array.isArray(languages), `${languages} is not an array`)
  const filters = filter || []
  console.assert(Array.isArray(filters), `${filters} is not an array`)

  if (random) {
    shuffle(pageList)
  }

  debug && console.time('getPages')
  const pages = getPages(pageList, languages, filters, files, max)
  debug && console.timeEnd('getPages')

  const processPagesStart = new Date()
  const flawsGroups = await Promise.all(
    pages.map((page) => processPage(page, pageMap, redirects, opts))
  )
  const processPagesEnd = new Date()
  const flaws = flawsGroups.flat()

  debug && printGlobalCacheHitRatio()

  if (verbose) {
    summarizeCounts(pages)

    console.log(`Checked ${(globalCacheHitCount + globalCacheMissCount).toLocaleString()} links`)
    console.log(`Took ${getDurationString(processPagesStart, processPagesEnd)}`)

    summarizeFlaws(flaws)
  }

  if (exit) {
    process.exit(flaws.length)
  }
}

function printGlobalCacheHitRatio() {
  const hits = globalCacheHitCount
  const misses = globalCacheMissCount
  console.log(
    `Cache hit ratio: ${hits.toLocaleString()} of ${(misses + hits).toLocaleString()} (${(
      (100 * hits) /
      (misses + hits)
    ).toFixed(1)}%)`
  )
}

function getDurationString(date1, date2) {
  const seconds = (date2.getTime() - date1.getTime()) / 1000
  const minutes = seconds / 60
  if (minutes > 1) {
    return `${minutes.toFixed(1)} minutes`
  }
  return `${seconds.toFixed(1)} seconds`
}

function getPages(pageList, languages, filters, files, max) {
  return pageList
    .filter((page) => {
      if (languages.length && !languages.includes(page.languageCode)) {
        return false
      }

      if (filters.length && !filters.find((filter) => page.relativePath.includes(filter))) {
        return false
      }

      if (
        files.length &&
        // The reason for checking each file against the `relativePath`
        // or the `fullPath` is to make it flexible for the user.
        !files.find((file) => {
          if (page.relativePath === file) return true
          if (page.fullPath === file) return true
          // The `page.relativePath` will always be *from* the containing
          // directory it came from an might not be relative to the repo
          // root. I.e.
          // `content/education/quickstart.md` is the path relative to
          // the repo root. But the `page.relativePath` will
          // in this case be `education/quickstart.md`.
          // So give it one last chance to relate to the repo root.
          // This is important because you might use `git diff --name-only`
          // to get the list of files to focus specifically on.
          if (path.join(CONTENT_ROOT, page.relativePath) === path.resolve(file)) return true
          return false
        })
      ) {
        return false
      }

      return true
    })
    .slice(0, max ? Math.min(max, pageList.length) : pageList.length)
}

async function processPage(page, pageMap, redirects, opts) {
  const { bail, verboseUrl } = opts

  const allFlawsEach = await Promise.all(
    page.permalinks.map((permalink) => processPermalink(permalink, page, pageMap, redirects, opts))
  )

  const allFlaws = allFlawsEach.flat()

  if (bail && allFlaws.length > 0) {
    printFlaws(allFlaws, verboseUrl)
    process.exit(1)
  }

  printFlaws(allFlaws, verboseUrl)

  return allFlaws
}

async function processPermalink(permalink, page, pageMap, redirects, opts) {
  const { level, checkAnchors, checkImages } = opts
  const html = await renderInnerHTML(page, permalink)
  const $ = cheerio.load(html)
  const flaws = []
  $('a[href]').each((i, link) => {
    const { href } = link.attribs

    // The global cache can't be used for anchor links because they
    // depend on each page it renders
    if (!href.startsWith('#')) {
      if (globalHrefCheckCache.has(href)) {
        globalCacheHitCount++
        return globalHrefCheckCache.get(href)
      }
      globalCacheMissCount++
    }

    const flaw = checkHrefLink(href, $, redirects, pageMap, checkAnchors)

    // Again if it's *not* an anchor link, we can use the cache.
    if (!href.startsWith('#')) {
      globalHrefCheckCache.set(href, flaw)
    }

    if (flaw) {
      if (level === 'critical' && !flaw.CRITICAL) {
        return
      }
      const text = $(link).text()
      flaws.push({ permalink, page, href, flaw, text })
    }
  })

  if (checkImages) {
    $('img[src]').each((i, img) => {
      let { src } = img.attribs

      // Images get a cache-busting prefix injected in the image
      // E.g. <img src="/assets/cb-123456/foo/bar.png">
      // We need to remove that otherwise we can't look up the image
      // on disk.
      src = src.replace(/\/cb-\d+\//, '/')

      if (globalImageSrcCheckCache.has(src)) {
        globalCacheHitCount++
        return globalImageSrcCheckCache.get(src)
      }

      const flaw = checkImageSrc(src, $)

      globalImageSrcCheckCache.set(src, flaw)

      if (flaw) {
        if (level === 'critical' && !flaw.CRITICAL) {
          return
        }
        flaws.push({ permalink, page, src, flaw })
      }
    })
  }

  return flaws
}

function printFlaws(flaws, verboseUrl = null) {
  let previousPage = null
  let previousPermalink = null
  for (const { page, permalink, href, text, src, flaw } of flaws) {
    if (page !== previousPage) {
      console.log(`PAGE: ${chalk.bold(prettyFullPath(page.fullPath))}`)
    }
    previousPage = page

    if (href) {
      if (previousPermalink !== permalink.href) {
        if (verboseUrl) {
          console.log(`  URL: ${new URL(permalink.href, verboseUrl).toString()}`)
        } else {
          console.log(`  PERMALINK: ${permalink.href}`)
        }
      }
      previousPermalink = permalink.href

      console.log(`    HREF: ${chalk.bold(href)}`)
      console.log(`    TEXT: ${text}`)
    } else if (src) {
      console.log(`    IMG SRC: ${chalk.bold(src)}`)
    } else {
      throw new Error("Flaw has neither 'href' nor 'src'")
    }
    console.log(
      `    FLAW: ${flaw.CRITICAL ? chalk.red(flaw.CRITICAL) : chalk.yellow(flaw.WARNING)}`
    )
    console.log('')
  }
}

// Given a full path, change to so it's relative to the `cwd()` so that you
// can take it from the output and paste it to something like `code ...here...`
// The problem with displaying the full path is that it's quite noisy and
// takes up a lot of space. Sure, you can copy and paste it in front of
// `vi` or `ls` or `code` but if we display it relative to `cwd()` you
// can still paste it to the next command but it's not taking up so much
// space.
function prettyFullPath(fullPath) {
  return path.relative(process.cwd(), fullPath)
}

const globalHrefCheckCache = new Map()
const globalImageSrcCheckCache = new Map()
let globalCacheHitCount = 0
let globalCacheMissCount = 0

function checkHrefLink(href, $, redirects, pageMap, checkAnchors = false) {
  if (href === '#') {
    if (checkAnchors) {
      return { WARNING: 'Link is just an empty `#`' }
    }
  } else if (href.startsWith('#')) {
    if (checkAnchors) {
      const countDOMItems = $(href).length
      if (countDOMItems !== 1) {
        return { WARNING: `Anchor is an empty string` }
      }
    }
  } else if (href.startsWith('/')) {
    const pathname = new URL(href, 'http://example.com').pathname

    // Remember, if the Markdown has something like
    //
    //   See [my link][/some/page/]
    //
    // In the post-processing, that will actually become
    //
    //   See <a href="/en/some/page">my link</a>
    //
    // But, if that link was a redirect, that would have been left
    // untouched.
    if (pathname.endsWith('/')) {
      return { WARNING: 'Links with a trailing / will always redirect' }
    } else {
      if (pathname.split('/')[1] in STATIC_PREFIXES) {
        const staticFilePath = path.join(
          STATIC_PREFIXES[pathname.split('/')[1]],
          pathname.split(path.sep).slice(2).join(path.sep)
        )
        if (!fs.existsSync(staticFilePath)) {
          return { CRITICAL: `Static file not found ${staticFilePath} (${pathname})` }
        }
      } else if (redirects[pathname]) {
        return { WARNING: `Redirect to ${redirects[pathname]}` }
      } else if (!pageMap[pathname]) {
        if (deprecatedVersionPrefixesRegex.test(pathname)) {
          return
        }

        return { CRITICAL: 'Broken link' }
      }
    }
  }
}

function checkImageSrc(src, $) {
  const pathname = new URL(src, 'http://example.com').pathname
  if (!pathname.startsWith('/')) {
    return { WARNING: "External images can't not be checked" }
  }
  const prefix = pathname.split('/')[1]
  if (prefix in STATIC_PREFIXES) {
    const staticFilePath = path.join(
      STATIC_PREFIXES[prefix],
      pathname.split(path.sep).slice(2).join(path.sep)
    )
    if (!fs.existsSync(staticFilePath)) {
      return { CRITICAL: `Static file not found (${pathname})` }
    }
  } else {
    return { WARNING: `Unrecognized image src prefix (${prefix})` }
  }
}

function summarizeFlaws(flaws) {
  if (flaws.length) {
    console.log(
      chalk.bold(
        `Found ${flaws.length.toLocaleString()} flaw${flaws.length === 1 ? '' : 's'} in total.`
      )
    )
  } else {
    console.log(chalk.green('No flaws found! 💖'))
  }
}

function summarizeCounts(pages) {
  const count = pages.map((page) => page.permalinks.length).reduce((a, b) => a + b, 0)
  console.log(
    `Tested ${count.toLocaleString()} permalinks across ${pages.length.toLocaleString()} pages`
  )
}

function shuffle(array) {
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

async function renderInnerHTML(page, permalink) {
  const next = () => {}
  const res = {}

  const pagePath = permalink.href
  const req = {
    path: pagePath,
    language: permalink.languageCode,
    pagePath,
    cookies: {},
  }
  await contextualize(req, res, next)
  await shortVersions(req, res, next)
  const context = Object.assign({}, req.context, { page })
  context.relativePath = page.relativePath
  return await renderContent(page.markdown, context)
}

// Delibertely commented out. Kept temporarily in case it's better.
// async function renderPage(page, permalink) {
//   const next = () => {}
//   const res = {}
//   const pagePath = permalink.href
//   const req = {
//     path: pagePath,
//     language: permalink.languageCode,
//     pagePath,
//     cookies: {},
//   }
//   await contextualize(req, res, next)
//   const context = Object.assign({}, req.context, { page })
//   return await page._render(context)
// }
