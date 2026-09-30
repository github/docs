// Run during Enterprise deprecation to download static pages for the oldest supported version.
// The Enterprise deprecation issue template owns the operational checklist.

import path from 'path'
import fs from 'fs'
import scrape from 'website-scraper'
import { program } from 'commander'
import http from 'http'

import createApp from '@/frame/lib/app'
import EnterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import loadRedirects from '@/redirects/lib/precompile'
import { loadPageMap, loadPages } from '@/frame/lib/page-data'
import { languageKeys } from '@/languages/lib/languages-server'
import { RewriteAssetPathsPlugin } from '@/ghes-releases/scripts/deprecate/rewrite-asset-paths'
import Page from '@/frame/lib/page'

const port = '4001'
const host = `http://localhost:${port}`
const version = EnterpriseServerReleases.oldestSupported
const GH_PAGES_URL = `https://github.github.com/docs-ghes-${version}`
const DRY_RUN_PAGES_PER_LANGUAGE = 3

type PageList = Page[]
type MapObj = { [key: string]: string }

program
  .description(
    'Scrape HTML of the oldest supported Enterprise version and add it to a temp output directory.',
  )
  .option(
    '-o, --output <PATH>',
    `output directory to place scraped HTML files and redirects. By default, this temp directory is named 'tmpArchivalDir_<VERSION_TO_DEPRECATE>'`,
  )
  .option('-l, --local-dev', 'Do not rewrite asset paths to enable testing scraped content locally')
  .option(
    '-d, --dry-run',
    `only scrape the first ${DRY_RUN_PAGES_PER_LANGUAGE} pages in each language for testing purposes`,
  )
  .option(
    '-p, --page <PATH>',
    'Note: this option is only used to re-scrape a page after the version was deprecated. Redirects will not be re-created because most of the deprecated content is already removed. This option scrapes a specific page in all languages. Pass the relative path to the page without a version or language prefix. ex: /admin/release-notes',
  )
  .parse(process.argv)

const output = program.opts().output
const dryRun = program.opts().dryRun
const singlePage = program.opts().page
if (singlePage && dryRun) {
  console.log(
    'A dry run cannot be performed when the --page/-p option is used because a dry run scrapes a sample of pages.',
  )
  process.exit(1)
}
const localDev = program.opts().localDev
const tmpArchivalDirectory = path.resolve(output || `tmpArchivalDir_${version}`)
// rimraf refused to remove a filesystem root. fs.rm does not.
if (path.resolve(tmpArchivalDirectory) === path.parse(path.resolve(tmpArchivalDirectory)).root) {
  throw new Error(`Refusing to remove filesystem root: ${tmpArchivalDirectory}`)
}

main()
async function main() {
  console.log(`Archiving Enterprise version: ${version}`)

  let pageList: PageList
  let urls: Array<string>
  if (singlePage) {
    const pageName = singlePage.trim().startsWith('/') ? singlePage.slice(1) : singlePage
    urls = languageKeys
      .map((key) => `/${key}/enterprise-server@${version}/${pageName}`)
      .map((href) => `${host}${href}`)
    console.log(`\nScraping HTML for a single page only:\n${urls.join('\n')}\n`)
  } else {
    pageList = await loadPages(undefined, languageKeys)
    const pageMap = await loadPageMap(pageList)
    const permalinksPerVersion = Object.keys(pageMap)
      .filter((key) => key.includes(`/enterprise-server@${version}`))
      .map((href) => `${host}${href}`)
    urls = dryRun ? sampleEachLanguage(permalinksPerVersion) : permalinksPerVersion
    if (dryRun) {
      console.log(
        `\nThis is a dry run! Creating HTML for redirects and scraping the first ${DRY_RUN_PAGES_PER_LANGUAGE} pages in each language only:\n${urls.join('\n')}\n`,
      )
    } else {
      console.log(`Found ${urls.length} pages for version ${version}`)
    }
  }

  await fs.promises.rm(tmpArchivalDirectory, { recursive: true, force: true })

  const errorResponses: string[] = []
  const app = createApp()
  const server = http.createServer(app)
  server
    .listen(port, async () => {
      console.log(`started server on ${host}`)

      try {
        await scrape({
          urls,
          urlFilter: (url: string) => {
            // Leave assets on other hosts as remote references in downloaded pages.
            return url.startsWith(`http://localhost:${port}/`)
          },
          directory: tmpArchivalDirectory,
          filenameGenerator: 'bySiteStructure',
          requestConcurrency: 6,
          plugins: [
            new RewriteAssetPathsPlugin(tmpArchivalDirectory, localDev, GH_PAGES_URL),
            new ErrorResponsesPlugin(errorResponses),
          ],
        })
      } catch (err) {
        console.error('scraping error')
        console.error(err)
        server.close(() => process.exit(1))
        return
      }

      // website-scraper saves error pages like any other response, so fail loudly instead.
      if (errorResponses.length) {
        console.error(`\n\n${errorResponses.length} responses had an error status:`)
        console.error(errorResponses.slice(0, 50).join('\n'))
        if (errorResponses.length > 50) console.error(`...and ${errorResponses.length - 50} more`)
        console.error('\nRe-run with DEBUG_MIDDLEWARE_TESTS=true to see server error details.')
        server.close(() => process.exit(1))
        return
      }

      fs.renameSync(
        path.join(tmpArchivalDirectory, `/localhost_${port}`),
        path.join(tmpArchivalDirectory, version),
      )

      console.log(`\n\ndone scraping! added files to ${tmpArchivalDirectory}\n`)
      if (!singlePage) {
        // Redirect files preserve frontmatter redirects after static scraping.
        await createRedirectsFile(pageList, path.join(tmpArchivalDirectory, version))
        console.log(`next step: deprecate ${version} in lib/enterprise-server-releases.ts`)
      } else {
        console.log('🏁 Scraping a single page is complete')
      }
      server.close(() => process.exit(0))
    })
    .on('error', (err) => {
      console.log('error listening to port ', port, err)
      server.close(() => process.exit(1))
    })
}

function sampleEachLanguage(urls: string[]) {
  const counts: Record<string, number> = {}
  return urls.filter((url) => {
    const language = new URL(url).pathname.split('/')[1]
    counts[language] = (counts[language] || 0) + 1
    return counts[language] <= DRY_RUN_PAGES_PER_LANGUAGE
  })
}

type ScraperResponse = { statusCode: number; url: string }

class ErrorResponsesPlugin {
  errorResponses: string[]

  constructor(errorResponses: string[]) {
    this.errorResponses = errorResponses
  }

  apply(
    registerAction: (
      event: string,
      callback: (args: { response: ScraperResponse }) => Promise<ScraperResponse>,
    ) => void,
  ) {
    registerAction('afterResponse', async ({ response }) => {
      if (response.statusCode >= 400) {
        this.errorResponses.push(`${response.statusCode} ${response.url}`)
      }
      return response
    })
  }
}

async function createRedirectsFile(pageList: PageList, outputDirectory: string) {
  console.log('Creating redirects file...')
  const redirects = await loadRedirects(pageList)
  const redirectsPerVersion: MapObj = {}

  const redirectEntries: Array<[string, string]> = Object.entries(redirects)

  for (let [oldPath, newPath] of redirectEntries) {
    // Redirect paths can include Liquid version variables.
    oldPath = oldPath.replace('/{{ page.version }}', '').replace('/{{ currentVersion }}', '')
    // Keep only redirects for the archived Enterprise version.
    if (
      !(
        oldPath.includes(`/enterprise-server@${version}`) ||
        oldPath.includes(`/enterprise/${version}`)
      )
    )
      continue

    redirectsPerVersion[oldPath] = newPath
  }

  fs.writeFileSync(
    path.join(outputDirectory, 'redirects.json'),
    JSON.stringify(redirectsPerVersion, null, 2),
  )
  console.log(`Wrote ${outputDirectory}/redirects.json`)
}
