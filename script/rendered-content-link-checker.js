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
import { program, Option, InvalidArgumentError } from 'commander'
import chalk from 'chalk'
import got, { RequestError } from 'got'

import shortVersions from '../middleware/contextualizers/short-versions.js'
import contextualize from '../middleware/context.js'
import { languageKeys } from '../lib/languages.js'
import getRedirect from '../lib/get-redirect.js'
import warmServer from '../lib/warm-server.js'
import renderContent from '../lib/render-content/index.js'
import { deprecated } from '../lib/enterprise-server-releases.js'
import excludedLinks from '../lib/excluded-links.js'

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

// Return a function that can as quickly as possible check if a certain
// href input should be skipped.
// Do this so we can use a `Set` and a `iterable.some()` for a speedier
// check.
function linksToSkipFactory() {
  const set = new Set(excludedLinks.filter((regexOrURL) => typeof regexOrURL === 'string'))
  const regexes = excludedLinks.filter((regexOrURL) => regexOrURL instanceof RegExp)
  return (href) => set.has(href) || regexes.some((regex) => regex.test(href))
}

const linksToSkip = linksToSkipFactory(excludedLinks)

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
  .option('--check-external-links', 'Check external URLs too')
  .option('-v, --verbose', 'Verbose outputs')
  .option('--debug', "Loud about everything it's doing")
  .option('--random', 'Load pages in a random order (useful for debugging)')
  .option('--patient', 'Give external link checking longer timeouts and more retries')
  .option('-o, --out <file>', 'Put warnings and errors into a file instead of stdout')
  .option('--json-output', 'Print JSON to stdout or file instead')
  .option('--max <number>', 'integer argument (default: none)', (value) => {
    const parsed = parseInt(value, 10)
    if (isNaN(parsed)) {
      throw new InvalidArgumentError('Not a number.')
    }
    return parsed
  })
  .option(
    '--list <file>.json',
    'JSON file containing an array of specific files to check (default: none)',
    (filePath) => {
      const resolvedPath = path.resolve(filePath)

      let stats
      try {
        stats = fs.statSync(resolvedPath)
      } catch (error) {
        // Ignore
      }

      if (!stats || !stats.isFile()) {
        throw new InvalidArgumentError('Not an existing file.')
      }

      return resolvedPath
    }
  )
  .arguments('[files...]', 'Specific files to check')
  .parse(process.argv)

main(program.opts(), program.args)

async function main(opts, files) {
  const {
    random,
    language,
    filter,
    exit,
    debug,
    max,
    verbose,
    list,
    checkExternalLinks,
    jsonOutput,
    out,
  } = opts

  // Note! The reason we're using `warmServer()` in this script,
  // even though there's no server involved, is because
  // the `contextualize()` function calls it.
  // And because warmServer() is actually idempotent, meaning it's
  // cheap to call it more than once, it would be expensive to call it
  // twice unnecessarily.
  // If we'd manually do the same operations that `warmServer()` does
  // here (e.g. `loadPageMap()`), we'd end up having to do it all over
  // again, the next time `contextualize()` is called.
  const { redirects, pages: pageMap, pageList } = await warmServer()

  const languages = language || []
  console.assert(Array.isArray(languages), `${languages} is not an array`)
  const filters = filter || []
  console.assert(Array.isArray(filters), `${filters} is not an array`)

  if (list && Array.isArray(files) && files.length > 0) {
    throw new InvalidArgumentError('Cannot specify both --list and a file list.')
  }

  if (list) {
    const fileList = JSON.parse(await fs.promises.readFile(list))
    if (Array.isArray(fileList) && fileList.length > 0) {
      files = fileList
    } else {
      // This must be allowed for empty PRs that accompany docs-early-access repo PRs
      console.warn('No files found in --list. Exiting...')
      process.exit(0)
    }
  }

  if (random) {
    shuffle(pageList)
  }

  debug && console.time('getPages')
  const pages = getPages(pageList, languages, filters, files, max)
  debug && console.timeEnd('getPages')

  if (checkExternalLinks && pages.length >= 100) {
    console.warn(
      chalk.yellow(
        `Warning! Checking external URLs can be time costly. You're testing ${pages.length} pages.`
      )
    )
  }

  const processPagesStart = new Date()
  const flawsGroups = await Promise.all(
    pages.map((page) => processPage(page, pageMap, redirects, opts))
  )
  const processPagesEnd = new Date()
  const flaws = flawsGroups.flat()
  if (jsonOutput) {
    jsonPrintFlaws(flaws, opts)
  }

  debug && printGlobalCacheHitRatio()

  if (verbose) {
    summarizeCounts(pages)

    console.log(`Checked ${(globalCacheHitCount + globalCacheMissCount).toLocaleString()} links`)
    console.log(`Took ${getDurationString(processPagesStart, processPagesEnd)}`)

    summarizeFlaws(flaws)
    if (out && flaws.length > 0) {
      console.log(`All flaws written to ${chalk.bold(out)}`)
    }
  }

  if (exit) {
    process.exit(flaws.length)
  }
}

function printGlobalCacheHitRatio() {
  const hits = globalCacheHitCount
  const misses = globalCacheMissCount
  // It could be that the files that were tested didn't have a single
  // link in them. In that case, there's no cache misses or hits at all.
  // So avoid the division by zero.
  if (misses + hits) {
    console.log(
      `Cache hit ratio: ${hits.toLocaleString()} of ${(misses + hits).toLocaleString()} (${(
        (100 * hits) /
        (misses + hits)
      ).toFixed(1)}%)`
    )
  }
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
  const { bail, verboseUrl, jsonOutput, out } = opts

  const allFlawsEach = await Promise.all(
    page.permalinks.map((permalink) => processPermalink(permalink, page, pageMap, redirects, opts))
  )

  const allFlaws = allFlawsEach.flat()

  if (bail && allFlaws.length > 0) {
    if (jsonOutput) {
      jsonPrintFlaws(allFlaws, opts)
    } else {
      printFlaws(allFlaws, { verboseUrl, out })
    }
    process.exit(1)
  }

  if (!jsonOutput) {
    printFlaws(allFlaws, { verboseUrl, out })
  }

  return allFlaws
}

async function processPermalink(permalink, page, pageMap, redirects, opts) {
  const { level, checkAnchors, checkImages, checkExternalLinks, verbose, patient } = opts
  const html = await renderInnerHTML(page, permalink)
  const $ = cheerio.load(html)
  const flaws = []
  const links = []
  $('a[href]').each((i, link) => {
    links.push(link)
  })
  const newFlaws = await Promise.all(
    links.map(async (link) => {
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

      const flaw = await checkHrefLink(
        href,
        $,
        redirects,
        pageMap,
        checkAnchors,
        checkExternalLinks,
        { verbose, patient }
      )

      if (flaw) {
        if (level === 'critical' && !flaw.CRITICAL) {
          return
        }
        const text = $(link).text()
        if (!href.startsWith('#')) {
          globalHrefCheckCache.set(href, { href, flaw, text })
        }
        return { href, flaw, text }
      } else {
        if (!href.startsWith('#')) {
          globalHrefCheckCache.set(href, flaw)
        }
      }
    })
  )
  for (const flaw of newFlaws) {
    if (flaw) {
      flaws.push(Object.assign(flaw, { page, permalink }))
    }
  }

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

function jsonPrintFlaws(flaws, { verboseUrl = null, out = null } = {}) {
  const printableFlaws = {}
  for (const { page, permalink, href, text, src, flaw } of flaws) {
    const fullPath = prettyFullPath(page.fullPath)

    if (!(fullPath in printableFlaws)) {
      printableFlaws[fullPath] = []
    }
    if (href) {
      printableFlaws[fullPath].push({
        href,
        url: verboseUrl ? new URL(permalink.href, verboseUrl).toString() : permalink.href,
        text,
        flaw,
      })
    } else if (src) {
      printableFlaws[fullPath].push({
        src,
      })
    }
  }
  const message = JSON.stringify(printableFlaws, undefined, 2)
  if (out) {
    fs.writeFileSync(out, message + '\n', 'utf-8')
  } else {
    console.log(message)
  }
}

function printFlaws(flaws, { verboseUrl = null, out = null } = {}) {
  let previousPage = null
  let previousPermalink = null

  function fout(msg) {
    if (out) {
      fs.appendFileSync(out, `${msg}\n`, 'utf-8')
    } else {
      console.log(msg)
    }
  }

  for (const { page, permalink, href, text, src, flaw } of flaws) {
    const fullPath = prettyFullPath(page.fullPath)
    if (page !== previousPage) {
      if (out) {
        fout(`PAGE: ${fullPath}`)
      } else {
        console.log(`PAGE: ${chalk.bold(fullPath)}`)
      }
    }
    previousPage = page

    if (href) {
      if (previousPermalink !== permalink.href) {
        if (verboseUrl) {
          fout(`  URL: ${new URL(permalink.href, verboseUrl).toString()}`)
        } else {
          fout(`  PERMALINK: ${permalink.href}`)
        }
      }
      previousPermalink = permalink.href

      if (out) {
        fout(`    HREF: ${href}`)
      } else {
        console.log(`    HREF: ${chalk.bold(href)}`)
      }
      fout(`    TEXT: ${text}`)
    } else if (src) {
      if (out) {
        fout(`    IMG SRC: ${src}`)
      } else {
        console.log(`    IMG SRC: ${chalk.bold(src)}`)
      }
    } else {
      throw new Error("Flaw has neither 'href' nor 'src'")
    }

    if (out) {
      fout(`    FLAW: ${flaw.CRITICAL ? flaw.CRITICAL : flaw.WARNING}`)
    } else {
      console.log(
        `    FLAW: ${flaw.CRITICAL ? chalk.red(flaw.CRITICAL) : chalk.yellow(flaw.WARNING)}`
      )
    }
    fout('')
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

async function checkHrefLink(
  href,
  $,
  redirects,
  pageMap,
  checkAnchors = false,
  checkExternalLinks = false,
  { verbose = false, patient = false } = {}
) {
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
      } else if (getRedirect(pathname, { redirects, pages: pageMap })) {
        return { WARNING: `Redirect to ${getRedirect(pathname, { redirects, pages: pageMap })}` }
      } else if (!pageMap[pathname]) {
        if (deprecatedVersionPrefixesRegex.test(pathname)) {
          return
        }

        return { CRITICAL: 'Broken link' }
      }
    }
  } else if (checkExternalLinks) {
    if (!href.startsWith('https://')) {
      return { WARNING: `Will not check external URLs that are not HTTPS (${href})` }
    }
    if (linksToSkip(href)) {
      return
    }
    const { ok, ...info } = await checkExternalURL(href, { verbose, patient })
    if (!ok) {
      return { CRITICAL: `Broken external link (${JSON.stringify(info)})` }
    }
  }
}

const _fetchCache = new Map()
async function checkExternalURL(url, { verbose = false, patient = false } = {}) {
  if (!url.startsWith('https://')) throw new Error('Invalid URL')
  const cleanURL = url.split('#')[0]
  if (!_fetchCache.has(cleanURL)) {
    _fetchCache.set(cleanURL, innerFetch(cleanURL, { verbose, patient }))
  }
  return _fetchCache.get(cleanURL)
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Global for recording which domains we get rate-limited on.
// For example, if you got rate limited on `something.github.com/foo`
// and now we're asked to fetch for `something.github.com/bar`
// it's good to know to now bother yet.
const _rateLimitedDomains = new Map()

async function innerFetch(url, config = {}) {
  const { verbose, useGET, patient } = config

  const { hostname } = new URL(url)
  if (_rateLimitedDomains.has(hostname)) {
    await sleep(_rateLimitedDomains.get(hostname))
  }
  // The way `got` does retries:
  //
  //   sleep = 1000 * Math.pow(2, retry - 1) + Math.random() * 100
  //
  // So, it means:
  //
  //   1. ~1000ms
  //   2. ~2000ms
  //   3. ~4000ms
  //
  // ...if the limit we set is 3.
  // Our own timeout, in ./middleware/timeout.js defaults to 10 seconds.
  // So there's no point in trying more attempts than 3 because it would
  // just timeout on the 10s. (i.e. 1000 + 2000 + 4000 + 8000 > 10,000)
  const retry = {
    limit: patient ? 5 : 2,
  }
  const timeout = { request: patient ? 10000 : 2000 }

  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
  }

  const retries = config.retries || 0
  const httpFunction = useGET ? got.get : got.head

  if (verbose) console.log(`External URL ${useGET ? 'GET' : 'HEAD'}: ${url} (retries: ${retries})`)
  try {
    const r = await httpFunction(url, {
      headers,
      throwHttpErrors: false,
      retry,
      timeout,
    })
    if (verbose) {
      console.log(
        `External URL ${useGET ? 'GET' : 'HEAD'} ${url}: ${r.statusCode} (retries: ${retries})`
      )
    }

    // If we get rate limited, remember that this hostname is now all
    // rate limited. And sleep for the number of seconds that the
    // `retry-after` header indicated.
    if (r.statusCode === 429) {
      let sleepTime = Math.min(
        60_000,
        Math.max(10_000, getRetryAfterSleep(r.headers['retry-after']))
      )
      // Sprinkle a little jitter so it doesn't all start again all
      // at the same time
      sleepTime += Math.random() * 10 * 1000
      // Give it a bit extra when we can be really patient
      if (patient) sleepTime += 30 * 1000

      _rateLimitedDomains.set(hostname, sleepTime + Math.random() * 10 * 1000)
      if (verbose)
        console.log(
          chalk.yellow(
            `Rate limited on ${hostname} (${url}). Sleeping for ${(sleepTime / 1000).toFixed(1)}s`
          )
        )
      await sleep(sleepTime)
      return innerFetch(url, Object.assign({}, config, { retries: retries + 1 }))
    } else {
      _rateLimitedDomains.delete(hostname)
    }

    // Perhaps the server doesn't suppport HEAD requests.
    // If so, try again with a regular GET.
    if ((r.statusCode === 405 || r.statusCode === 404) && !useGET) {
      return innerFetch(url, Object.assign({}, config, { useGET: true }))
    }
    if (verbose) {
      console.log((r.ok ? chalk.green : chalk.red)(`${r.statusCode} on ${url}`))
    }
    return { ok: r.ok, statusCode: r.statusCode }
  } catch (err) {
    if (err instanceof RequestError) {
      if (verbose) {
        console.log(chalk.yellow(`RequestError (${err.message}) on ${url}`))
      }
      return { ok: false, requestError: err.message }
    }
    throw err
  }
}

// Return number of milliseconds from a `Retry-After` header value
function getRetryAfterSleep(headerValue) {
  if (!headerValue) return 0
  let ms = Math.round(parseFloat(headerValue) * 1000)
  if (isNaN(ms)) {
    ms = Math.max(0, new Date(headerValue) - new Date())
  }
  return ms
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
