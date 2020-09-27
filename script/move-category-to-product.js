#!/usr/bin/env node

const assert = require('assert')
const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const { execSync } = require('child_process')
const matter = require('gray-matter')
const addRedirectToFrontmatter = require('../lib/redirects/add-redirect-to-frontmatter')
const contentDir = path.join(__dirname, '../content')

// [start-readme]
//
// Pass this script three arguments:
// 1. current category path (e.g., `github/automating-your-workflows-with-github-actions`)
// 2. new product ID (e.g., `actions`)
// 3. new product name in quotes (e.g., `"GitHub Actions"`)
// and it does everything that needs to be done to make the category into a new product.
//
// [end-readme]

// derive global values
const [relativePath, productId, productName] = process.argv.slice(2)
assert(relativePath, 'first arg must be a path to an existing category, e.g., github/working-with-github-pages')
assert(productId, 'second arg must be the ID of the new product, e.g., pages')
assert(productName, 'third arg must be the full name of the new product in quotes, e.g., "GitHub Pages"')
assert.strictEqual(relativePath.split('/').length, 2, 'first arg must only contain one slash, e.g., github/working-with-github-pages')

const oldCategoryDir = path.join(contentDir, relativePath)
assert(fs.existsSync(oldCategoryDir), `directory does not exist: ${oldCategoryDir}`)

const productDir = path.join(contentDir, productId)

const [oldproductId, categoryName] = relativePath.split('/')

// do all the moving/renaming/updating
makeNewProductDir()
moveFilesToNewDir()
createNewProductToc()
removeCategoryFromOldProductToc()
updateFrontmatter()

console.log(`Moved files to content/${productId} and updated frontmatter!\n\nNext steps:\n`)

// display data that needs to be manually added to lib files
printProductsModuleUpdate()
printFrontmatterSchemaUpdate()

function makeNewProductDir () {
  if (!fs.existsSync(productDir)) {
    execSync(`mkdir ${productDir}`)
  }
}

function moveFilesToNewDir () {
  execSync(`git mv ${oldCategoryDir} ${productDir}`)
}

function createNewProductToc () {
  const productTocPath = path.join(productDir, 'index.md')
  const data = {}
  data.title = `${productName} Documentation`
  data.productVersions = {}
  data.productVersions[productId] = '*'
  const content = `\n{% link_with_intro /${categoryName} %}`

  fs.writeFileSync(productTocPath, matter.stringify(content, data, { lineWidth: 10000 }))
}

function removeCategoryFromOldProductToc () {
  const oldProductTocPath = path.join(contentDir, oldproductId, 'index.md')
  const tocContents = fs.readFileSync(oldProductTocPath, 'utf8')
  const { content, data } = matter(tocContents)

  const link = `(\n<!-- if page.version.*? -->)?\n{% link_in_list /${categoryName} %}\n(<!-- endif -->)?`

  const newContent = content.replace(new RegExp(link), '')

  fs.writeFileSync(oldProductTocPath, matter.stringify(newContent, data, { lineWidth: 10000 }))
}

function updateFrontmatter () {
  const newCategoryDir = path.join(productDir, categoryName)

  // for every article in the category, update productVersions and redirect frontmatter
  walk(newCategoryDir, { includeBasePath: true }).forEach(file => {
    const articleContents = fs.readFileSync(file, 'utf8')
    const { content, data } = matter(articleContents)

    const baseFilename = file.endsWith('index.md') ? '' : path.basename(file, '.md')

    const redirectString = path.join('/', oldproductId, categoryName, baseFilename)
    data.redirect_from = addRedirectToFrontmatter(data.redirect_from, redirectString)

    data.productVersions = {}
    data.productVersions[productId] = '*'

    const newContents = matter.stringify(content, data, { lineWidth: 10000 })
    fs.writeFileSync(file, newContents)
  })
}

function printProductsModuleUpdate () {
  const newProduct = {
    id: productId,
    name: productName,
    href: path.join('/', productId),
    dir: path.join('content/', productId),
    toc: path.join('content/', productId, 'index.md')
  }
  const obj = {}
  obj[productId] = newProduct

  console.log('1. Add the following block to lib/products.js. Note: the order of this file determines the product order everywhere on the site.\n')
  console.log(obj)
}

function printFrontmatterSchemaUpdate () {
  const newFrontmatter = {
    type: 'string',
    conform: '(add validSemverRange here)',
    message: 'Must be a valid SemVer range'
  }
  const obj = {}
  obj[productId] = newFrontmatter

  console.log('\n2. Add the following block to the productVersions object in lib/frontmatter.js (ordered alphabetically). Make sure the \'conform\' property looks like the others. \n')
  console.log(obj)
}
