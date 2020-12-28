#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const server = require('../server')
const port = '4001'
const host = `http://localhost:${port}`
const scrape = require('website-scraper')
const program = require('commander')
const rimraf = require('rimraf').sync
const mkdirp = require('mkdirp').sync
const version = require('../../lib/enterprise-server-releases').oldestSupported
const archivalRepoName = 'help-docs-archived-enterprise-versions'
const archivalRepoUrl = `https://github.com/github/${archivalRepoName}`
const loadRedirects = require('../../lib/redirects/precompile')
const { loadPageMap } = require('../../lib/pages')

// [start-readme]
//
// Run this script during the Enterprise deprecation process to download
// static copies of all pages for the oldest supported Enterprise version.
// See the Enterprise deprecation issue template for instructions.
//
// [end-readme]

program
  .description('Scrape HTML of the oldest supported Enterprise version and add it to the archival repository.')
  .option('-p, --path-to-archival-repo <PATH>', `path to a local checkout of ${archivalRepoUrl}`)
  .option('-d, --dry-run', 'only scrape the first 10 pages for testing purposes')
  .parse(process.argv)

const pathToArchivalRepo = program.pathToArchivalRepo
const dryRun = program.dryRun

main()

class RewriteAssetPathsPlugin {
  constructor (version, tempDirectory) {
    this.version = version
    this.tempDirectory = tempDirectory
  }

  apply (registerAction) {
    registerAction('onResourceSaved', async ({ resource }) => {
      // Show some activity
      process.stdout.write('.')

      // Only operate on HTML files
      if (!resource.isHtml()) return

      // Get the text contents of the resource
      const text = resource.getText()

      // Rewrite asset paths. Example:
      // ../../javascripts/index.js -> /enterprise/2.17/javascripts/index.js
      const newBody = text.replace(
        /(?<attribute>src|href)="(?:\.\.\/)*(?<basepath>dist|javascripts|stylesheets|assets|node_modules)/g,
        (match, attribute, basepath) => {
          const replaced = path.join('/enterprise', this.version, basepath)
          const returnValue = `${attribute}="${replaced}`
          return returnValue
        }
      )

      const filePath = path.join(this.tempDirectory, resource.getFilename())

      await fs
        .promises
        .writeFile(filePath, newBody, 'binary')
    })
  }
}

async function main () {
  if (!pathToArchivalRepo) {
    console.log(`Please specify a path to a local checkout of ${archivalRepoUrl}`)
    console.log(`Example: script/archive-enterprise-version.js ../${archivalRepoName}`)
    process.exit()
  }

  if (dryRun) {
    console.log('This is a dry run! Creating HTML for redirects and scraping the first 10 pages only.\n')
  }

  // Build the production assets, to simulate a production deployment
  console.log('Running `npm run build` for production assets')
  execSync('npm run build', { stdio: 'inherit' })
  console.log('Finish building production assets')

  const fullPathToArchivalRepo = path.join(process.cwd(), pathToArchivalRepo)

  if (!fs.existsSync(fullPathToArchivalRepo)) {
    console.log(`archival repo path does not exist: ${fullPathToArchivalRepo}`)
    process.exit()
  }

  console.log(`Enterprise version to archive: ${version}`)
  const pageMap = await loadPageMap()
  const permalinksPerVersion = Object.keys(pageMap)
    .filter(key => key.includes(`/enterprise-server@${version}`))

  const urls = dryRun
    ? permalinksPerVersion.slice(0, 10).map(href => `${host}${href}`)
    : permalinksPerVersion.map(href => `${host}${href}`)

  console.log(`found ${urls.length} pages for version ${version}`)

  if (dryRun) {
    console.log(`\nscraping html for these pages only:\n${urls.join('\n')}\n`)
  }

  const finalDirectory = path.join(fullPathToArchivalRepo, version)
  const tempDirectory = path.join(__dirname, '../website-scraper-temp')

  // remove temp directory
  rimraf(tempDirectory)

  // remove and recreate empty target directory
  rimraf(finalDirectory)
  fs.mkdirSync(finalDirectory, { recursive: true })

  const scraperOptions = {
    urls,
    urlFilter: (url) => {
      // Do not download assets from other hosts like S3 or octodex.github.com
      // (this will keep them as remote references in the downloaded pages)
      return url.startsWith(`http://localhost:${port}/`)
    },
    directory: tempDirectory,
    filenameGenerator: 'bySiteStructure',
    requestConcurrency: 6,
    plugins: [new RewriteAssetPathsPlugin(version, tempDirectory)]
  }

  server.listen(port, async () => {
    console.log(`started server on ${host}`)

    await scrape(scraperOptions).catch(err => {
      console.error('scraping error')
      console.error(err)
    })

    fs.renameSync(
      path.join(tempDirectory, `/localhost_${port}`),
      path.join(finalDirectory)
    )
    rimraf(tempDirectory)

    console.log(`\n\ndone scraping! added files to ${path.relative(process.cwd(), finalDirectory)}\n`)

    // create redirect html files to preserve frontmatter redirects
    await createRedirectPages(permalinksPerVersion, pageMap, finalDirectory)

    console.log(`next step: deprecate ${version} in lib/enterprise-server-releases.js`)

    process.exit()
  })
}

async function createRedirectPages (permalinks, pageMap, finalDirectory) {
  const pagesPerVersion = permalinks.map(permalink => pageMap[permalink])
  const redirects = await loadRedirects(pagesPerVersion, pageMap)

  Object.entries(redirects).forEach(([oldPath, newPath]) => {
    // remove any liquid variables that sneak in
    oldPath = oldPath
      .replace('/{{ page.version }}', '')
      .replace('/{{ currentVersion }}', '')
    // ignore any old paths that are not in this version
    if (!(oldPath.includes(`/enterprise-server@${version}`) || oldPath.includes(`/enterprise/${version}`))) return

    const fullPath = path.join(finalDirectory, oldPath)
    const filename = `${fullPath}/index.html`
    const html = getRedirectHtml(newPath)

    mkdirp(fullPath)
    fs.writeFileSync(filename, html)
  })

  console.log('done creating redirect files!\n')
}

// redirect html files already exist in <=2.12 because these versions were deprecated on the old static site
function getRedirectHtml (newPath) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Redirecting...</title>
<link rel="canonical" href="${newPath}">
<meta http-equiv="refresh" content="0; url=${newPath}">
</head>
<body>
<h1>Redirecting...</h1>
<a href="${newPath}">Click here if you are not redirected.</a>
<script>location='${newPath}'</script>
</body>
</html>`
}
