#!/usr/bin/env node

// [start-readme]
//
// Run this script during the Enterprise deprecation process to download
// static copies of all pages for the oldest supported Enterprise version.
// See the Enterprise deprecation issue template for instructions.
//
// NOTE: If you get this error:
//
//    Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'website-scraper' ...
//
// it's because you haven't installed all the *optional* dependencies.
// To do that, run:
//
//    npm install --include=optional
//
// [end-readme]

import path from 'path'
import fs from 'fs'
import { execSync } from 'child_process'
import createApp from '../../lib/app.js'
import scrape from 'website-scraper'
import { program } from 'commander'
import rimraf from 'rimraf'
import EnterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import loadRedirects from '../../lib/redirects/precompile.js'
import { loadPageMap } from '../../lib/page-data.js'

const port = '4001'
const host = `http://localhost:${port}`
const version = EnterpriseServerReleases.oldestSupported
const REMOTE_ENTERPRISE_STORAGE_URL = 'https://githubdocs.azureedge.net/enterprise'

program
  .description(
    'Scrape HTML of the oldest supported Enterprise version and add it to a temp output directory.'
  )
  .option(
    '-o, --output <PATH>',
    `output directory to place scraped HTML files and redirects. By default, this temp directory is named 'tmpArchivalDir_<VERSION_TO_DEPRECATE>'`
  )
  .option('-d, --dry-run', 'only scrape the first 10 pages for testing purposes')
  .parse(process.argv)

const output = program.opts().output
const dryRun = program.opts().dryRun
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
      let newBody = ''

      // Rewrite HTML asset paths. Example:
      // ../assets/images/foo/bar.png ->
      // https://githubdocs.azureedge.net/github-images/enterprise/2.17/assets/images/foo/bar.png
      if (resource.isHtml()) {
        newBody = text.replace(
          /(?<attribute>src|href)="(?:\.\.\/|\/)*(?<basepath>_next\/static|javascripts|stylesheets|assets\/fonts|assets\/cb-\d+\/images|node_modules)/g,
          (match, attribute, basepath) => {
            const replaced = `${REMOTE_ENTERPRISE_STORAGE_URL}/${this.version}/${basepath}`
            return `${attribute}="${replaced}`
          }
        )
      }

      // Rewrite CSS asset paths. Example
      // url("../assets/fonts/alliance/alliance-no-1-regular.woff") ->
      // url("https://githubdocs.azureedge.net/github-images/enterprise/2.20/assets/fonts/alliance/alliance-no-1-regular.woff")
      // url(../../../assets/cb-303/images/octicons/search-24.svg) ->
      // url(https://githubdocs.azureedge.net/github-images/enterprise/2.20/assets/cb-303/images/octicons/search-24.svg)
      if (resource.isCss()) {
        newBody = text.replace(
          /(?<attribute>url)(?<paren>\("|\()(?:\.\.\/)*(?<basepath>_next\/static|assets\/fonts|assets\/images|assets\/cb-\d+\/images)/g,
          (match, attribute, paren, basepath) => {
            const replaced = `${REMOTE_ENTERPRISE_STORAGE_URL}/${this.version}/${basepath}`
            return `${attribute}${paren}${replaced}`
          }
        )
      }

      const filePath = path.join(this.tempDirectory, resource.getFilename())
      await fs.promises.writeFile(filePath, newBody, 'binary')
    })
  }
}

async function main() {
  if (dryRun) {
    console.log(
      'This is a dry run! Creating HTML for redirects and scraping the first 10 pages only.\n'
    )
  }

  // Build the production assets, to simulate a production deployment
  console.log('Running `npm run build` for production assets')
  execSync('npm run build', { stdio: 'inherit' })
  console.log('Finish building production assets')

  console.log(`Enterprise version to archive: ${version}`)
  const pageMap = await loadPageMap()
  const permalinksPerVersion = Object.keys(pageMap).filter((key) =>
    key.includes(`/enterprise-server@${version}`)
  )

  const urls = dryRun
    ? permalinksPerVersion.slice(0, 10).map((href) => `${host}${href}`)
    : permalinksPerVersion.map((href) => `${host}${href}`)

  console.log(`found ${urls.length} pages for version ${version}`)

  if (dryRun) {
    console.log(`\nscraping html for these pages only:\n${urls.join('\n')}\n`)
  }

  // remove temp directory
  rimraf.sync(tmpArchivalDirectory)

  const scraperOptions = {
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
  }

  createApp().listen(port, async () => {
    console.log(`started server on ${host}`)

    await scrape(scraperOptions).catch((err) => {
      console.error('scraping error')
      console.error(err)
    })

    fs.renameSync(
      path.join(tmpArchivalDirectory, `/localhost_${port}`),
      path.join(tmpArchivalDirectory, version)
    )

    console.log(`\n\ndone scraping! added files to ${tmpArchivalDirectory}\n`)

    // create redirect html files to preserve frontmatter redirects
    await createRedirectsFile(
      permalinksPerVersion,
      pageMap,
      path.join(tmpArchivalDirectory, version)
    )

    console.log(`next step: deprecate ${version} in lib/enterprise-server-releases.js`)

    process.exit()
  })
}

async function createRedirectsFile(permalinks, pageMap, outputDirectory) {
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
    JSON.stringify(redirectsPerVersion, null, 2)
  )
}
