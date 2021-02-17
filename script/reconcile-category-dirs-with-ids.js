#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const frontmatter = require('../lib/read-frontmatter')
const walk = require('walk-sync')
const slash = require('slash')
const GithubSlugger = require('github-slugger')
const { XmlEntities } = require('html-entities')
const loadSiteData = require('../lib/site-data')
const renderContent = require('../lib/render-content')

const slugger = new GithubSlugger()
const entities = new XmlEntities()

const contentDir = path.join(process.cwd(), 'content')

// [start-readme]
//
// An automated test checks for discrepancies between category directory names and
// slugified category titles as IDs.
//
// If the test fails, a human needs to run this script to update the directory
// names and add appropriate redirects.
//
// **This script is not currently supported on Windows.**
//
// [end-readme]

// TODO fix path separators in the redirect
if (process.platform.startsWith('win')) {
  console.log('This script cannot be run on Windows at this time! Exiting...')
  process.exit()
}

// Execute!
main()

async function main () {
  const englishCategoryIndices = getEnglishCategoryIndices()
  const siteData = await getEnglishSiteData()

  for (const categoryIndex of englishCategoryIndices) {
    const contents = fs.readFileSync(categoryIndex, 'utf8')
    const { data, content } = frontmatter(contents)

    // Get the parent directory name
    const categoryDirPath = path.dirname(categoryIndex)
    const categoryDirName = path.basename(categoryDirPath)

    const title = await renderContent(data.title, { site: siteData }, { textOnly: true })
    slugger.reset()
    const expectedSlug = slugger.slug(entities.decode(title))

    // If the directory name already matches the expected slug, bail out now
    if (categoryDirName === expectedSlug) continue

    // Figure out the new path for the category
    const categoryDirParentDir = path.dirname(categoryDirPath)
    const newPath = path.join(categoryDirParentDir, expectedSlug)

    // Figure out redirect path
    const relativeOldPath = path.relative(contentDir, categoryDirPath)
    const redirectPath = '/' + slash(relativeOldPath)

    // Log it
    const relativeNewPath = path.relative(contentDir, newPath)
    console.log(`Renaming category directory:
Old: "${relativeOldPath}"
New: "${relativeNewPath}"
Redirect: "${redirectPath}"
`)

    // Add a new redirect to the frontmatter
    if (!data.redirect_from) {
      data.redirect_from = []
    }
    data.redirect_from.push(redirectPath)

    // Update the category index file on disk
    fs.writeFileSync(categoryIndex, frontmatter.stringify(content, data, { lineWidth: 10000 }))

    // Update all of the category's articles on disk as well to add a new redirect to their frontmatter
    for (const articleFileName of fs.readdirSync(categoryDirPath)) {
      const articlePath = path.join(categoryDirPath, articleFileName)

      // Figure out redirect path
      const articlePathMinusExtension = path.join(categoryDirPath, path.basename(articleFileName, '.md'))
      const redirectArticlePath = '/' + slash(path.relative(contentDir, articlePathMinusExtension))

      // Log it
      const relativeOldArticlePath = path.relative(contentDir, articlePath)
      const newArticlePath = path.join(categoryDirParentDir, expectedSlug, articleFileName)
      const relativeNewArticlePath = path.relative(contentDir, newArticlePath)
      console.log(`Adding redirect to article:
Old: "${relativeOldArticlePath}"
New: "${relativeNewArticlePath}"
Redirect: "${redirectArticlePath}"
  `)

      const articleContents = fs.readFileSync(articlePath, 'utf8')
      const { data: articleData, content: articleContent } = frontmatter(articleContents)

      // Add a new redirect to the frontmatter
      if (!articleData.redirect_from) {
        articleData.redirect_from = []
      }
      articleData.redirect_from.push(redirectArticlePath)

      // Update the article file on disk
      fs.writeFileSync(articlePath, frontmatter.stringify(articleContent, articleData, { lineWidth: 10000 }))
    }

    // Update the reference to this category in the product index file on disk
    //
    // NOTE: This approach may update the same product index multiple times per
    // script run but TBH I'm OK with that in a manually executed script
    const productIndexPath = path.join(categoryDirParentDir, 'index.md')
    const productIndexContents = fs.readFileSync(productIndexPath, 'utf8')
    const { data: productIndexData, content: productIndex } = frontmatter(productIndexContents)
    const revisedProductIndex = productIndex.replace(new RegExp(`(\\s+)(?:/${categoryDirName})(\\s+)`, 'g'), `$1/${expectedSlug}$2`)
    fs.writeFileSync(productIndexPath, frontmatter.stringify(revisedProductIndex, productIndexData, { lineWidth: 10000 }))

    console.log(`*** Updated product index "${productIndexPath}" for ☝️\n`)

    // Finally, rename the directory
    fs.renameSync(categoryDirPath, newPath)
  }
}

function getEnglishCategoryIndices () {
  const walkOptions = {
    globs: ['*/*/**/index.md'],
    ignore: ['{rest,graphql,developers}/**', 'enterprise/admin/index.md', '**/articles/**'],
    directories: false,
    includeBasePath: true
  }

  return walk(contentDir, walkOptions)
}

async function getEnglishSiteData () {
  const siteData = await loadSiteData()
  return siteData.en.site
}
