#!/usr/bin/env node

// [start-readme]
//
// Run this script during the Enterprise deprecation process to download
// static copies of all pages for the oldest supported Enterprise version.
// See the Enterprise deprecation issue template for instructions.
//
// [end-readme]

import path from 'path'
import fs from 'fs'
import scrape from 'website-scraper'
import { program } from 'commander'
import { rimraf } from 'rimraf'
import http from 'http'

import createApp from '../../../lib/app.js'
import EnterpriseServerReleases from '#src/versions/lib/enterprise-server-releases.js'
import loadRedirects from '#src/redirects/lib/precompile.js'
import { loadPageMap } from '../../../lib/page-data.js'
import { languageKeys } from '#src/languages/lib/languages.js'

const port = '4001'
const host = `http://localhost:${port}`
const version = EnterpriseServerReleases.oldestSupported
const REMOTE_ENTERPRISE_STORAGE_URL = 'https://githubdocs.azureedge.net/enterprise'

program
  .description(
    'Scrape HTML of the oldest supported Enterprise version and add it to a temp output directory.',
  )
  .option(
    '-o, --output <PATH>',
    `output directory to place scraped HTML files and redirects. By default, this temp directory is named 'tmpArchivalDir_<VERSION_TO_DEPRECATE>'`,
  )
  .option('-l, --local-dev', 'Do not rewrite asset paths to enable testing scraped content locally')
  .option('-d, --dry-run', 'only scrape the first 10 pages for testing purposes')
  .option(
    '-p, --page <PATH>',
    'Note: this option is only used to re-scrape a page after the version was deprecated. Redirects will not be re-created because most of the deprecated content is already removed. This option scrapes a specific page in all languages. Pass the relative path to the page without a version or language prefix. ex: /admin/release-notes',
  )
  .parse(process.argv)

const output = program.opts().output
const dryRun = program.opts().dryRun
const singlePage = program.opts().page
const localDev = program.opts().localDev
const tmpArchivalDirectory = output
  ? path.join(process.cwd(), output)
  : path.join(process.cwd(), `tmpArchivalDir_${version}`)

main()

class RewriteAssetPathsPlugin {
  constructor(version, tempDirectory) {
    this.version = version
    this.tempDirectory = tempDirectory
  }

  apply(registerAction) {
    registerAction('onResourceSaved', async ({ resource }) => {
      // Show some activity
      process.stdout.write('.')

      // Only operate on HTML files
      if (!resource.isHtml() && !resource.isCss()) return

      // Get the text contents of the resource
      const text = resource.getText()
      let newBody = text

      // Rewrite HTML asset paths. Example:
      // ../assets/images/foo/bar.png ->
      // https://githubdocs.azureedge.net/github-images/enterprise/2.17/assets/images/foo/bar.png

      if (resource.isHtml()) {
        // Remove nextjs scripts and manifest.json link
        newBody = newBody.replace(
          /<script\ssrc="(\.\.\/)*_next\/static\/[\w]+\/(_buildManifest|_ssgManifest).js?".*?><\/script>/g,
          '',
        )
        newBody = newBody.replace(/<link href=".*manifest.json".*?>/g, '')

        if (!localDev) {
          // Rewrite asset paths
          newBody = newBody.replace(
            /(?<attribute>src|href)="(?:\.\.\/|\/)*(?<basepath>_next\/static|javascripts|stylesheets|assets\/fonts|assets\/cb-\d+\/images|node_modules)/g,
            (match, attribute, basepath) => {
              const replaced = `${REMOTE_ENTERPRISE_STORAGE_URL}/${this.version}/${basepath}`
              return `${attribute}="${replaced}`
            },
          )
        }
      }

      // Rewrite CSS asset paths. Example
      // url("../assets/fonts/alliance/alliance-no-1-regular.woff") ->
      // url("https://githubdocs.azureedge.net/github-images/enterprise/2.20/assets/fonts/alliance/alliance-no-1-regular.woff")
      // url(../../../assets/cb-303/images/octicons/search-24.svg) ->
      // url(https://githubdocs.azureedge.net/github-images/enterprise/2.20/assets/cb-303/images/octicons/search-24.svg)
      if (resource.isCss()) {
        if (!localDev) {
          newBody = newBody.replace(
            /(?<attribute>url)(?<paren>\("|\()(?:\.\.\/)*(?<basepath>_next\/static|assets\/fonts|assets\/images|assets\/cb-\d+\/images)/g,
            (match, attribute, paren, basepath) => {
              const replaced = `${REMOTE_ENTERPRISE_STORAGE_URL}/${this.version}/${basepath}`
              return `${attribute}${paren}${replaced}`
            },
          )
        }
      }

      const filePath = path.join(this.tempDirectory, resource.getFilename())
      await fs.promises.writeFile(filePath, newBody, resource.encoding)
    })
  }
}

async function main() {
  // Build the production assets, to simulate a production deployment
  console.log('Finish building production assets')
  if (dryRun) {
    console.log(
      '\nThis is a dry run! Creating HTML for redirects and scraping the first 10 pages only.',
    )
  }
  if (singlePage) {
    console.log(`\nScraping HTML for a single page only ${singlePage}.`)
  }
  console.log(`Enterprise version to archive: ${version}`)
  const pageName =
    singlePage && singlePage.trim().startsWith('/') ? singlePage.slice(1) : singlePage
  const pageMap = singlePage
    ? languageKeys.map((key) => `/${key}/enterprise-server@${version}/${pageName}`)
    : await loadPageMap()
  const permalinksPerVersion = singlePage
    ? pageMap
    : Object.keys(pageMap).filter((key) => key.includes(`/enterprise-server@${version}`))

  const urls = dryRun
    ? permalinksPerVersion.slice(0, 10).map((href) => `${host}${href}`)
    : permalinksPerVersion.map((href) => `${host}${href}`)

  console.log(`Found ${urls.length} pages for version ${version}`)

  if (dryRun || singlePage) {
    console.log(`\nScraping html for these pages only:\n${urls.join('\n')}\n`)
  }

  // remove temp directory
  rimraf.sync(tmpArchivalDirectory)

  const app = createApp()
  const server = http.createServer(app)
  server
    .listen(port, async () => {
      console.log(`started server on ${host}`)

      await scrape({
        urls,
        urlFilter: (url) => {
          // Do not download assets from other hosts like S3 or octodex.github.com
          // (this will keep them as remote references in the downloaded pages)
          return url.startsWith(`http://localhost:${port}/`)
        },
        directory: tmpArchivalDirectory,
        filenameGenerator: 'bySiteStructure',
        requestConcurrency: 6,
        plugins: [new RewriteAssetPathsPlugin(version, tmpArchivalDirectory)],
      }).catch((err) => {
        console.error('scraping error')
        console.error(err)
      })

      fs.renameSync(
        path.join(tmpArchivalDirectory, `/localhost_${port}`),
        path.join(tmpArchivalDirectory, version),
      )

      console.log(`\n\ndone scraping! added files to ${tmpArchivalDirectory}\n`)
      if (!singlePage) {
        // create redirect html files to preserve frontmatter redirects
        await createRedirectsFile(
          permalinksPerVersion,
          pageMap,
          path.join(tmpArchivalDirectory, version),
        )
        console.log(`next step: deprecate ${version} in lib/enterprise-server-releases.js`)
      } else {
        console.log('🏁 Scraping a single page is complete')
      }
      server.close()
    })
    .on('error', (err) => {
      console.log('error listening to port ', port, err)
      server.close()
    })
}

async function createRedirectsFile(permalinks, pageMap, outputDirectory) {
  console.log('Creating redirects file...')
  const pagesPerVersion = permalinks.map((permalink) => pageMap[permalink])
  const redirects = await loadRedirects(pagesPerVersion, pageMap)
  const redirectsPerVersion = {}

  Object.entries(redirects).forEach(([oldPath, newPath]) => {
    // remove any liquid variables that sneak in
    oldPath = oldPath.replace('/{{ page.version }}', '').replace('/{{ currentVersion }}', '')
    // ignore any old paths that are not in this version
    if (
      !(
        oldPath.includes(`/enterprise-server@${version}`) ||
        oldPath.includes(`/enterprise/${version}`)
      )
    )
      return

    redirectsPerVersion[oldPath] = newPath
  })

  fs.writeFileSync(
    path.join(outputDirectory, 'redirects.json'),
    JSON.stringify(redirectsPerVersion, null, 2),
  )
  console.log(`Wrote ${outputDirectory}/redirects.json`)
}
