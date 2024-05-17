/* See function main in this file for documentation */

import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import coreLib from '@actions/core'
import got, { RequestError } from 'got'
import chalk from 'chalk'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

import shortVersions from '#src/versions/middleware/short-versions.js'
import contextualize from '#src/frame/middleware/context/context.js'
import features from '#src/versions/middleware/features.js'
import getRedirect from '#src/redirects/lib/get-redirect.js'
import warmServer from '#src/frame/lib/warm-server.js'
import { liquid } from '#src/content-render/index.js'
import { deprecated } from '#src/versions/lib/enterprise-server-releases.js'
import excludedLinks from '#src/links/lib/excluded-links.js'
import { getEnvInputs, boolEnvVar } from '#src/workflows/get-env-inputs.js'
import { debugTimeEnd, debugTimeStart } from './debug-time-taken.js'
import { uploadArtifact as uploadArtifactLib } from './upload-artifact.js'
import github from '#src/workflows/github.js'
import { getActionContext } from '#src/workflows/action-context.js'
import { createMinimalProcessor } from '#src/content-render/unified/processor.js'
import { createReportIssue, linkReports } from '#src/workflows/issue-report.js'

const STATIC_PREFIXES = {
  assets: path.resolve('assets'),
  public: path.resolve(path.join('src', 'graphql', 'data')),
}
// Sanity check that these are valid paths
Object.entries(STATIC_PREFIXES).forEach(([key, value]) => {
  if (!fs.existsSync(value)) {
    throw new Error(`Can't find static prefix (${key}): ${value}`)
  }
})

// By default, we don't cache external link checks to disk.
// By setting this env var to something >0, it enables the disk-based
// caching of external links.
const EXTERNAL_LINK_CHECKER_MAX_AGE_MS =
  parseInt(process.env.EXTERNAL_LINK_CHECKER_MAX_AGE_DAYS || '7') * 24 * 60 * 60 * 1000
const EXTERNAL_LINK_CHECKER_DB =
  process.env.EXTERNAL_LINK_CHECKER_DB || 'external-link-checker-db.json'

const adapter = new JSONFile(EXTERNAL_LINK_CHECKER_DB)
const externalLinkCheckerDB = new Low(adapter, { urls: {} })

// Given a number and a percentage, return the same number with a *percentage*
// max change of making a bit larger or smaller.
// E.g. `jitter(55, 10)` will return a value between `[55 - 55/10: 55 + 55/10]`
// This is useful to avoid the caching timestamps all getting the same
// numbers from the day it started which means that they don't ALL expire
// on the same day but start to expire in a bit of a "random pattern" so
// you don't get all or nothing.
function jitter(base, percentage) {
  const r = percentage / 100
  const negative = Math.random() > 0.5 ? -1 : 1
  return base + base * Math.random() * r * negative
}
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
  `enterprise(-server@|/)(${deprecated.join('|')})(/|$)`,
)

// When this file is invoked directly from action as opposed to being imported
if (import.meta.url.endsWith(process.argv[1])) {
  // Optional env vars
  const {
    ACTION_RUN_URL,
    LEVEL,
    FILES_CHANGED,
    REPORT_REPOSITORY,
    REPORT_AUTHOR,
    REPORT_LABEL,
    EXTERNAL_SERVER_ERRORS_AS_WARNINGS,
    CHECK_ANCHORS,
  } = process.env

  const octokit = github()

  // Parse changed files JSON string
  let files
  if (FILES_CHANGED) {
    const fileList = JSON.parse(FILES_CHANGED)
    if (Array.isArray(fileList) && fileList.length > 0) {
      files = fileList
    } else {
      console.warn(`No changed files found in PR: ${FILES_CHANGED}. Exiting...`)
      process.exit(0)
    }
  }

  const opts = {
    level: LEVEL,
    files,
    verbose: true,
    linkReports: true,
    checkImages: true,
    checkAnchors: Boolean(CHECK_ANCHORS),
    patient: boolEnvVar('PATIENT'),
    random: false,
    language: 'en',
    actionUrl: ACTION_RUN_URL,
    checkExternalLinks: boolEnvVar('CHECK_EXTERNAL_LINKS'),
    shouldComment: boolEnvVar('SHOULD_COMMENT'),
    commentLimitToExternalLinks: boolEnvVar('COMMENT_LIMIT_TO_EXTERNAL_LINKS'),
    failOnFlaw: boolEnvVar('FAIL_ON_FLAW'),
    createReport: boolEnvVar('CREATE_REPORT'),
    reportRepository: REPORT_REPOSITORY,
    reportLabel: REPORT_LABEL,
    reportAuthor: REPORT_AUTHOR,
    actionContext: getActionContext(),
    externalServerErrorsAsWarning: EXTERNAL_SERVER_ERRORS_AS_WARNINGS,
  }

  if (opts.shouldComment || opts.createReport) {
    // `GITHUB_TOKEN` is optional. If you need the token to post a comment
    // or open an issue report, you might get cryptic error messages from Octokit.
    getEnvInputs(['GITHUB_TOKEN'])
  }

  main(coreLib, octokit, uploadArtifactLib, opts, {})
}

/*
 * Renders all or specified pages to gather all links on them and verify them.
 * Checks internal links deterministically using filesystem and external links via external requests.
 * Links are considered broken for reporting and commenting if they are broken at the specified "level".
 * e.g. redirects are considered a "warning" while 404s are considered "critical"
 *
 * When there are broken links (flaws) this action can:
 * 1. Create a report issue in a specified reportRepository and link it to previous reportIssues
 * 2. Create a comment similar to a report on a PR that triggered this action
 * 3. Fail using core.setFailed when there are broken links
 *
 * opts:
 *  level {"warning" | "critical"} Counts links as "flaws" based on this value and status criteria
 *  files {Array<string>} - Limit link checking to specific files (usually changed in PR)
 *  language {string | Array<string>} - Render pages to check from included language (or languages array)
 *  checkExternalLinks {boolean} - Checks non docs.github.com urls (takes significantly longer)
 *  checkImages {boolean} - Check image src urls
 *  failOnFlaw {boolean} - When true will fail using core.setFailed when links are broken according to level (flaw)
 *  shouldComment {boolean} - When true attempts to comment flaws on PR that triggered action
 *  commentLimitToExternalLinks {boolean} - When true PR comment only includes external links
 *  createReport {boolean} - Creates an issue comment in reportRepository with links considered broken (flaws)
 *  linkReports {boolean} - When createReport is true, link the issue report to previous report(s) via comments
 *  reportRepository {string} - Repository in form of "owner/repo-name" that report issue will be created in
 *  reportLabel {string} - Label assigned to report issue,
 *  reportAuthor {string} - Expected author of previous report issue for linking reports (a bot user like docs-bot)
 *  actionUrl {string} - Used to link report or comment to the action instance for debugging
 *  actionContext {object} - Event payload context when run from action or injected. Should include { repo, owner }
 *  verbose {boolean} - Set to true for more verbose logging
 *  random {boolean} - Randomize page order for debugging when true
 *  patient {boolean} - Wait longer and retry more times for rate-limited external URLS
 *  bail {boolean} - Throw an error on the first page (not permalink) that has >0 flaws
 *  externalServerErrorsAsWarning {boolean} - Treat >=500 errors or temporary request errors as warning
 *  filter {Array<string>} - strings to match the pages' relativePath
 *  versions {Array<string>} - only certain pages' versions (e.g. )
 *
 */
async function main(core, octokit, uploadArtifact, opts = {}) {
  const {
    level = 'warning',
    files = [],
    random,
    language = 'en',
    filter,
    version,
    max,
    verbose,
    checkExternalLinks = false,
    createReport = false,
    failOnFlaw = false,
    shouldComment = false,
    reportRepository = 'github/docs-content',
    reportAuthor = 'docs-bot',
    reportLabel = 'broken link report',
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

  if (files.length) {
    core.debug(`Limitting to files list: ${files.join(', ')}`)
  }

  let languages = language
  if (!Array.isArray(languages)) {
    languages = [languages]
  }

  const filters = filter || []
  if (filters && !Array.isArray(filters)) {
    throw new Error(`filters, ${filters} is not an array`)
  }

  let versions = version || []
  if (versions && typeof versions === 'string') {
    versions = [versions]
  } else if (!Array.isArray(versions)) {
    throw new Error(`versions, '${version}' is not an array`)
  }

  if (random) {
    shuffle(pageList)
  }

  debugTimeStart(core, 'getPages')
  const pages = getPages(pageList, languages, filters, files, max)
  debugTimeEnd(core, 'getPages')

  if (checkExternalLinks && pages.length >= 100) {
    core.warning(
      `Warning! Checking external URLs can be time costly. You're testing ${pages.length} pages.`,
    )
  }

  await externalLinkCheckerDB.read()

  if (verbose && checkExternalLinks) {
    core.info(`Checking of external links is is cached to ${EXTERNAL_LINK_CHECKER_DB}`)
    core.info(
      `External link cache max age is ${
        EXTERNAL_LINK_CHECKER_MAX_AGE_MS / 1000 / 60 / 60 / 24
      } days`,
    )
    let countNotTooOld = 0
    let countTooOld = 0
    for (const { timestamp } of Object.values(externalLinkCheckerDB.data.urls || {})) {
      const age = Date.now() - timestamp
      if (age > EXTERNAL_LINK_CHECKER_MAX_AGE_MS) {
        countTooOld++
      } else {
        countNotTooOld++
      }
    }
    core.info(
      `External link cache: ${countNotTooOld.toLocaleString()} are still fresh, ${countTooOld.toLocaleString()} links too old`,
    )
  }

  debugTimeStart(core, 'processPages')
  const t0 = new Date().getTime()
  const flawsGroups = await Promise.all(
    pages.map((page) =>
      processPage(core, page, pageMap, redirects, opts, externalLinkCheckerDB, versions),
    ),
  )
  const t1 = new Date().getTime()
  debugTimeEnd(core, 'processPages')

  await externalLinkCheckerDB.write()

  const flaws = flawsGroups.flat()

  printGlobalCacheHitRatio(core)

  if (verbose) {
    summarizeCounts(core, pages, (t1 - t0) / 1000)
    core.info(`Checked ${(globalCacheHitCount + globalCacheMissCount).toLocaleString()} links`)
  }

  summarizeFlaws(core, flaws)

  const uniqueHrefs = new Set(flaws.map((flaw) => flaw.href))

  if (flaws.length > 0) {
    await uploadJsonFlawsArtifact(uploadArtifact, flaws, opts)
    core.info(`All flaws written to artifact log.`)
    if (createReport) {
      core.info(`Creating issue for flaws...`)
      const reportProps = {
        core,
        octokit,
        reportTitle: `${uniqueHrefs.size} broken links found`,
        reportBody: flawIssueDisplay(flaws, opts),
        reportRepository,
        reportLabel,
      }
      const newReport = await createReportIssue(reportProps)

      if (linkReports) {
        const linkProps = {
          core,
          octokit,
          newReport,
          reportRepository,
          reportAuthor,
          reportLabel,
        }
        await linkReports(linkProps)
      }
    }
    if (shouldComment) {
      await commentOnPR(core, octokit, flaws, opts)
    }

    const flawsInLevel = flaws.filter((flaw) => {
      if (level === 'critical') {
        return flaw?.flaw?.CRITICAL
      }
      // WARNING level and above
      return true
    })

    if (flawsInLevel.length > 0) {
      core.setOutput('has_flaws_at_level', flawsInLevel.length > 0)
      if (failOnFlaw) {
        core.setFailed(
          `${flaws.length} broken links found. See action artifact uploads for details`,
        )
        process.exit(1)
      }
    }
  } else {
    // It might be that the PR got a comment about >0 flaws before,
    // and now it can update that comment to say all is well again.
    if (shouldComment) {
      await commentOnPR(core, octokit, flaws, opts)
    }
  }
}

async function commentOnPR(core, octokit, flaws, opts) {
  const { actionContext = {} } = opts
  const { owner, repo } = actionContext
  const pullNumber = actionContext?.pull_request?.number
  if (!owner || !repo || !pullNumber) {
    core.warning(`commentOnPR called outside of PR action runner context. Not creating comment.`)
    return
  }

  const findAgainSymbol = '<!-- rendered-content-link-checker-comment-finder -->'

  const body = flawIssueDisplay(flaws, opts, false)

  const { data } = await octokit.rest.issues.listComments({
    owner,
    repo,
    issue_number: pullNumber,
  })
  let previousCommentId
  for (const { body, id } of data) {
    if (body.includes(findAgainSymbol)) {
      previousCommentId = id
    }
  }

  // Since failed external urls aren't included in PR comment, body may be empty
  if (!body) {
    core.info('No flaws qualify for comment')

    if (previousCommentId) {
      const nothingComment = 'Previous broken links comment now moot. 👌😙'
      await octokit.rest.issues.updateComment({
        owner,
        repo,
        comment_id: previousCommentId,
        body: `${nothingComment}\n\n${findAgainSymbol}`,
      })
      core.info(`Updated comment on PR: ${pullNumber} (${previousCommentId})`)
    }
    return
  }

  if (previousCommentId) {
    const noteComment = '(*The original automated comment was updated*)'
    await octokit.rest.issues.updateComment({
      owner,
      repo,
      comment_id: previousCommentId,
      body: `${body}\n\n${noteComment}\n\n${findAgainSymbol}`,
    })
    core.info(`Updated comment on PR: ${pullNumber} (${previousCommentId})`)
    return
  }

  try {
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: pullNumber,
      body: `${body}\n\n${findAgainSymbol}`,
    })
    core.info(`Created comment on PR: ${pullNumber}`)
  } catch (error) {
    core.setFailed(`Error commenting on PR when there are flaws`)
    throw error
  }
}

function flawIssueDisplay(flaws, opts, mentionExternalExclusionList = true) {
  let output = ''
  let flawsToDisplay = 0

  // Group broken links for each page
  const hrefsOnPageGroup = {}
  for (const { page, permalink, href, text, src, flaw } of flaws) {
    // When we don't want to include external links in PR comments
    if (opts.commentLimitToExternalLinks && !flaw.isExternal) {
      continue
    }

    flawsToDisplay++

    const pageKey = page.fullPath
    if (!hrefsOnPageGroup[pageKey]) {
      hrefsOnPageGroup[pageKey] = {}
    }

    const linkKey = href || src
    if (!hrefsOnPageGroup[pageKey][linkKey]) {
      hrefsOnPageGroup[page.fullPath][linkKey] = { href, text, src, flaw, permalinkHrefs: [] }
    }

    if (!hrefsOnPageGroup[pageKey][linkKey].permalinkHrefs.includes(permalink.href)) {
      hrefsOnPageGroup[pageKey][linkKey].permalinkHrefs.push(permalink.href)
    }
  }

  // Don't comment if there are no qualifying flaws
  if (!flawsToDisplay) {
    return ''
  }

  // Build flaw display text
  for (const [pagePath, pageHrefs] of Object.entries(hrefsOnPageGroup)) {
    const fullPath = prettyFullPath(pagePath)
    output += `\n\n### In \`${fullPath}\`\n`

    for (const [, hrefObj] of Object.entries(pageHrefs)) {
      if (hrefObj.href) {
        output += `\n\n - Href: [${hrefObj.href}](${hrefObj.href})`
        output += `\n - Text: ${hrefObj.text}`
      } else if (hrefObj.src) {
        output += `\n\n - Image src: [${hrefObj.src}](${hrefObj.src})`
      } else {
        output += `\n\n - WORKFLOW ERROR: Flaw has neither 'href' nor 'src'`
      }
      output += `\n - Flaw: \`${
        hrefObj.flaw.CRITICAL ? hrefObj.flaw.CRITICAL : hrefObj.flaw.WARNING
      }\``
      output += `\n - On permalinks`
      for (const permalinkHref of hrefObj.permalinkHrefs) {
        output += `\n     - \`${permalinkHref}\``
      }
    }
  }

  if (mentionExternalExclusionList) {
    output +=
      '\n\n---\n\nIf any link reported in this issue is not actually broken ' +
      'and repeatedly shows up on reports, consider making a PR that adds it as an exception to `src/links/lib/excluded-links.js`. ' +
      'For more information, see [Fixing broken links in GitHub user docs](https://github.com/github/docs/blob/main/src/links/lib/README.md).'
  }

  return `${flawsToDisplay} broken${
    opts.commentLimitToExternalLinks ? ' **external** ' : ' '
  }links found in [this](${opts.actionUrl}) workflow.\n${output}`
}

function printGlobalCacheHitRatio(core) {
  const hits = globalCacheHitCount
  const misses = globalCacheMissCount
  // It could be that the files that were tested didn't have a single
  // link in them. In that case, there's no cache misses or hits at all.
  // So avoid the division by zero.
  if (misses + hits) {
    core.debug(
      `Cache hit ratio: ${hits.toLocaleString()} of ${(misses + hits).toLocaleString()} (${(
        (100 * hits) /
        (misses + hits)
      ).toFixed(1)}%)`,
    )
  }
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

async function processPage(core, page, pageMap, redirects, opts, db, versions) {
  const { verbose, verboseUrl, bail } = opts
  const allFlawsEach = await Promise.all(
    page.permalinks
      .filter((permalink) => {
        return !versions.length || versions.includes(permalink.pageVersion)
      })
      .map((permalink) => {
        return processPermalink(core, permalink, page, pageMap, redirects, opts, db)
      }),
  )

  const allFlaws = allFlawsEach.flat()

  if (allFlaws.length > 0) {
    if (verbose) {
      printFlaws(core, allFlaws, { verboseUrl })
    }

    if (bail) {
      if (!verbose) {
        console.warn('Use --verbose to see the flaws before it exits')
      }
      throw new Error(`More than one flaw in ${page.relativePath}`)
    }
  }

  return allFlaws
}

async function processPermalink(core, permalink, page, pageMap, redirects, opts, db) {
  const {
    level = 'critical',
    checkAnchors,
    checkImages,
    checkExternalLinks,
    verbose,
    patient,
    externalServerErrorsAsWarning,
  } = opts
  let html = ''
  try {
    html = await renderInnerHTML(page, permalink)
  } catch (error) {
    console.warn(
      `The error happened trying to render ${page.relativePath} (permalink: ${permalink.href})`,
    )
    throw error
  }
  const $ = cheerio.load(html, { xmlMode: true })
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
        core,
        href,
        $,
        redirects,
        pageMap,
        checkAnchors,
        checkExternalLinks,
        externalServerErrorsAsWarning,
        { verbose, patient, permalink },
        db,
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
    }),
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

async function uploadJsonFlawsArtifact(
  uploadArtifact,
  flaws,
  { verboseUrl = null } = {},
  artifactName = 'all-rendered-link-flaws.json',
) {
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
  return uploadArtifact(artifactName, message)
}

function printFlaws(core, flaws, { verboseUrl = null } = {}) {
  let previousPage = null
  let previousPermalink = null

  for (const { page, permalink, href, text, src, flaw } of flaws) {
    const fullPath = prettyFullPath(page.fullPath)
    if (page !== previousPage) {
      core.info(`PAGE: ${chalk.bold(fullPath)}`)
    }
    previousPage = page

    if (href) {
      if (previousPermalink !== permalink.href) {
        if (verboseUrl) {
          core.info(`  URL: ${new URL(permalink.href, verboseUrl).toString()}`)
        } else {
          core.info(`  PERMALINK: ${permalink.href}`)
        }
      }
      previousPermalink = permalink.href

      core.info(`    HREF: ${chalk.bold(href)}`)
      core.info(`    TEXT: ${text}`)
    } else if (src) {
      core.info(`    IMG SRC: ${chalk.bold(src)}`)
    } else {
      throw new Error("Flaw has neither 'href' nor 'src'")
    }

    core.info(`    FLAW: ${flaw.CRITICAL ? chalk.red(flaw.CRITICAL) : chalk.yellow(flaw.WARNING)}`)
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
  core,
  href,
  $,
  redirects,
  pageMap,
  checkAnchors = false,
  checkExternalLinks = false,
  externalServerErrorsAsWarning = false,
  { verbose = false, patient = false, permalink } = {},
  db = null,
) {
  // this function handles hrefs in all the following forms:

  // same article links:
  // 1. '#'
  // 2. '#anchor'
  // 3. '/to/this/article#anchor'

  // different article links:
  // 4. '/some/path/article#anchor' (currently not supported)
  // 5. '/some/path/article'

  // external links:
  // 6. 'https://example.com' (external link)

  const [pathFragment, hashFragment] = href.split('#')
  const hash = '#' + hashFragment // the hash is the part that starts with `#`

  // this conditional handles cases in which the link is to the current article (cases 1-3 above)
  if (checkAnchors && (!pathFragment || pathFragment === permalink.href)) {
    // cases covered by this part of the conditional:
    // 1. '#'
    if (hash === '#') {
      return { WARNING: 'Link is just an empty `#`' }
    }
    // cases covered by this part of the conditional:
    // 2. '#anchor'
    // 3. '/to/this/article#anchor'
    else {
      // Some pages are a mix of Markdown and React components. On its own,
      // the Markdown might appear broken but when combined with automated
      // React rendering it might work. Best to stay out of it.
      const avoid =
        permalink &&
        ((permalink.href.includes('/rest/') && !permalink.href.includes('/rest/guides/')) ||
          permalink.href.includes('/webhooks-and-events/webhooks/webhook-events-and-payloads') ||
          permalink.href.includes('/graphql/reference') ||
          permalink.href.includes('/code-security/codeql-cli/codeql-cli-manual/') ||
          permalink.href.includes(
            '/apps/maintaining-github-apps/modifying-a-github-app-registration',
          ) ||
          permalink.href.includes(
            '/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning',
          ) ||
          permalink.href.includes(
            '/site-policy/github-company-policies/github-statement-against-modern-slavery-and-child-labor',
          ) ||
          permalink.href.includes('/site-policy/content-removal-policies/dmca-takedown-policy') ||
          permalink.href.includes('/early-access/'))

      // You don't need a DOM ID (or <a name="top">) for `<a href="#top">`
      // to work in all modern browsers.
      if (hash !== '#top' && !avoid) {
        // If the link is `#foo` it could either match `<element id="foo">`
        // or it could match `<a name="foo">`.
        const countDOMItems = $(hash).length + $(`a[name="${hash.slice(1)}"]`).length
        if (countDOMItems === 0) {
          return { CRITICAL: `Anchor on the same page can't be found by ID` }
        } else if (countDOMItems > 1) {
          return { CRITICAL: `Matches multiple points in the page` }
        }
      }
    }
  }
  // this conditional handles cases in which the link is to a different article or externally (cases 4-6 above)
  else {
    // cases covered by this part of the conditional:
    // 4. '/some/path/article#anchor' (currently not supported)
    // 5. '/some/path/article'
    if (href.startsWith('/')) {
      const pathname = new URL(href, 'http://example.com').pathname
      // we drop any hashes due to `.pathname`
      // we don't currently support hashes for other articles we link to: /some/path/article#anchor

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
        const whatifPathname = pathname.slice(0, -1)
        if (getRedirect(whatifPathname, { redirects, pages: pageMap })) {
          return {
            WARNING: `Redirect to ${getRedirect(whatifPathname, { redirects, pages: pageMap })}`,
          }
        } else if (!pageMap[whatifPathname]) {
          if (!deprecatedVersionPrefixesRegex.test(whatifPathname)) {
            return { CRITICAL: 'Broken link' }
          }
        }
        return { WARNING: 'Links with a trailing / will always redirect' }
      } else {
        if (pathname.split('/')[1] in STATIC_PREFIXES) {
          const staticFilePath = path.join(
            STATIC_PREFIXES[pathname.split('/')[1]],
            pathname.split(path.sep).slice(2).join(path.sep),
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
    }
    // cases covered by this part of the conditional:
    // 6. 'https://example.com' (external link)
    else if (checkExternalLinks) {
      if (!href.startsWith('https://')) {
        return { WARNING: `Will not check external URLs that are not HTTPS (${href})` }
      }
      if (linksToSkip(href)) {
        return
      }
      const { ok, ...info } = await checkExternalURLCached(core, href, { verbose, patient }, db)
      if (!ok) {
        // By default, an not-OK problem with an external link is CRITICAL
        // but if it was a `responseError` or the statusCode was >= 500
        // then downgrade it to WARNING.
        let problem = 'CRITICAL'
        if (externalServerErrorsAsWarning) {
          if (
            (info.statusCode && info.statusCode >= 500) ||
            (info.requestError && isTemporaryRequestError(info.requestError))
          ) {
            problem = 'WARNING'
          }
        }
        return { [problem]: `Broken external link (${JSON.stringify(info)})`, isExternal: true }
      }
    }
  }
}

// Return true if the request error is sufficiently temporary. For example,
// a request to `https://exammmmple.org` will fail with `ENOTFOUND` because
// the DNS entry doesn't exist. It means it won't have much hope if you
// simply try again later.
// However, an `ETIMEDOUT` means it could work but it didn't this time but
// might if we try again a different hour or day.
function isTemporaryRequestError(requestError) {
  if (typeof requestError === 'string') {
    // See https://betterstack.com/community/guides/scaling-nodejs/nodejs-errors/
    // for a definition of each one.
    const errorEnums = ['ECONNRESET', 'ECONNREFUSED', 'ETIMEDOUT', 'ECONNABORTED']
    return errorEnums.some((enum_) => requestError.includes(enum_))
  }
  return false
}

// Can't do this memoization within the checkExternalURL because it can
// return a Promise since it already collates multiple URLs under the
// same cache key.
async function checkExternalURLCached(core, href, { verbose, patient }, db) {
  const cacheMaxAge = EXTERNAL_LINK_CHECKER_MAX_AGE_MS
  const now = new Date().getTime()
  const url = href.split('#')[0]

  if (cacheMaxAge) {
    const tooOld = now - Math.floor(jitter(cacheMaxAge, 10))
    if (db && db.data.urls[url]) {
      if (db.data.urls[url].timestamp > tooOld) {
        if (verbose) {
          core.info(`External URL ${url} in cache`)
        }
        return db.data.urls[url].result
      } else if (verbose) {
        core.info(`External URL ${url} in cache but too old`)
        // Delete it so the cache file don't bloat infinitely
        delete db.data.urls[url]
      }
    }
  }

  const result = await checkExternalURL(core, href, {
    verbose,
    patient,
  })

  if (cacheMaxAge) {
    // By only cache storing successful results, we give the system a chance
    // to try 40xx and 50x errors another go.
    if (db && result.ok) {
      db.data.urls[url] = {
        timestamp: now,
        result,
      }
    }
  }

  return result
}

const _fetchCache = new Map()
async function checkExternalURL(core, url, { verbose = false, patient = false } = {}) {
  if (!url.startsWith('https://')) throw new Error('Invalid URL')
  const cleanURL = url.split('#')[0]
  if (!_fetchCache.has(cleanURL)) {
    _fetchCache.set(cleanURL, innerFetch(core, cleanURL, { verbose, patient }))
  }
  return _fetchCache.get(cleanURL)
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Global for recording which domains we get rate-limited on.
// For example, if you got rate limited on `something.github.com/foo`
// and now we're asked to fetch for `something.github.com/bar`
// it's good to know to now bother yet.
const _rateLimitedDomains = new Map()

async function innerFetch(core, url, config = {}) {
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
  // Our own timeout, in #src/frame/middleware/timeout.js defaults to 10 seconds.
  // So there's no point in trying more attempts than 3 because it would
  // just timeout on the 10s. (i.e. 1000 + 2000 + 4000 + 8000 > 10,000)
  const retry = {
    limit: patient ? 6 : 2,
  }
  const timeout = { request: patient ? 10000 : 2000 }

  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
  }

  const retries = config.retries || 0
  const httpFunction = useGET ? got.get : got.head

  if (verbose) core.info(`External URL ${useGET ? 'GET' : 'HEAD'}: ${url} (retries: ${retries})`)
  try {
    const r = await httpFunction(url, {
      headers,
      throwHttpErrors: false,
      retry,
      timeout,
    })
    if (verbose) {
      core.info(
        `External URL ${useGET ? 'GET' : 'HEAD'} ${url}: ${r.statusCode} (retries: ${retries})`,
      )
    }

    // If we get rate limited, remember that this hostname is now all
    // rate limited. And sleep for the number of seconds that the
    // `retry-after` header indicated.
    if (r.statusCode === 429) {
      let sleepTime = Math.min(
        60_000,
        Math.max(10_000, getRetryAfterSleep(r.headers['retry-after'])),
      )
      // Sprinkle a little jitter so it doesn't all start again all
      // at the same time
      sleepTime += Math.random() * 10 * 1000
      // Give it a bit extra when we can be really patient
      if (patient) sleepTime += 30 * 1000

      _rateLimitedDomains.set(hostname, sleepTime + Math.random() * 10 * 1000)
      if (verbose)
        core.info(
          chalk.yellow(
            `Rate limited on ${hostname} (${url}). Sleeping for ${(sleepTime / 1000).toFixed(1)}s`,
          ),
        )
      await sleep(sleepTime)
      return innerFetch(core, url, Object.assign({}, config, { retries: retries + 1 }))
    } else {
      _rateLimitedDomains.delete(hostname)
    }

    // Perhaps the server doesn't support HEAD requests.
    // If so, try again with a regular GET.
    if ((r.statusCode === 405 || r.statusCode === 404 || r.statusCode === 403) && !useGET) {
      return innerFetch(core, url, Object.assign({}, config, { useGET: true }))
    }
    if (verbose) {
      core.info((r.ok ? chalk.green : chalk.red)(`${r.statusCode} on ${url}`))
    }
    return { ok: r.ok, statusCode: r.statusCode }
  } catch (err) {
    if (err instanceof RequestError) {
      if (verbose) {
        core.info(chalk.yellow(`RequestError (${err.message}) on ${url}`))
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
  if (!src.startsWith('/') && !src.startsWith('http')) {
    return { CRITICAL: 'Image path is not absolute. Should start with a /' }
  }
  const pathname = new URL(src, 'http://example.com').pathname
  if (pathname.startsWith('http://')) {
    return { CRITICAL: "Don't use insecure HTTP:// for external images" }
  }
  if (!pathname.startsWith('/')) {
    return { WARNING: "External images can't not be checked" }
  }
  const prefix = pathname.split('/')[1]
  if (prefix in STATIC_PREFIXES) {
    const staticFilePath = path.join(
      STATIC_PREFIXES[prefix],
      pathname.split(path.sep).slice(2).join(path.sep),
    )
    if (!fs.existsSync(staticFilePath)) {
      return { CRITICAL: `Static file not found (${pathname})` }
    }
  } else {
    return { WARNING: `Unrecognized image src prefix (${prefix})` }
  }
}

function summarizeFlaws(core, flaws) {
  if (flaws.length) {
    core.info(
      chalk.bold(
        `Found ${flaws.length.toLocaleString()} flaw${flaws.length === 1 ? '' : 's'} in total.`,
      ),
    )
  } else {
    core.info(chalk.green('No flaws found! 💖'))
  }
}

function summarizeCounts(core, pages, tookSeconds) {
  const count = pages.map((page) => page.permalinks.length).reduce((a, b) => a + b, 0)
  core.info(
    `Tested ${count.toLocaleString()} permalinks across ${pages.length.toLocaleString()} pages`,
  )
  core.info(`Took ${Math.floor(tookSeconds)} seconds. (~${(tookSeconds / 60).toFixed(1)} minutes)`)
  const permalinksPerSecond = count / tookSeconds
  core.info(`~${permalinksPerSecond.toFixed(1)} permalinks per second.`)
  const pagesPerSecond = pages.length / tookSeconds
  core.info(`~${pagesPerSecond.toFixed(1)} pages per second.`)
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
  // This will create and set `req.context = {...}`
  await contextualize(req, res, next)
  await shortVersions(req, res, next)
  req.context.page = page
  await features(req, res, next)

  req.context.relativePath = page.relativePath

  const guts = [page.rawIntro, page.rawPermissions, page.markdown].filter(Boolean).join('\n').trim()

  // These lines do what the ubiquitous `renderContent` function does,
  // but at an absolute minimum to get a string of HTML.
  const markdown = await liquid.parseAndRender(guts, req.context)
  const processor = createMinimalProcessor(req.context)
  const vFile = await processor.process(markdown)
  return vFile.toString()
}

export default main
