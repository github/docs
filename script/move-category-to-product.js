#!/usr/bin/env node

// [start-readme]
//
// Move the files from a category directory to a top-level product and add redirects.
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import { program } from 'commander'
import { execSync } from 'child_process'
import frontmatter from '../lib/read-frontmatter.js'
import addRedirectToFrontmatter from './helpers/add-redirect-to-frontmatter.js'
import walkFiles from './helpers/walk-files.js'

const contentFiles = walkFiles('content', '.md')
const contentDir = path.posix.join(process.cwd(), 'content')

program
  .description('Move a category-level docs set to the product level.')
  .requiredOption(
    '-c, --category <PATH>',
    'Provide the path of the existing category, e.g., github/github-pages'
  )
  .requiredOption('-p, --product <PATH>', 'Provide the path of the new product, e.g., pages')
  .parse(process.argv)

const oldCategory = program.opts().category.replace('content/', '')
const newProduct = program.opts().product.replace('content/', '')

const [oldProductId, oldCategoryId] = oldCategory.split('/')
const oldCategoryPath = path.posix.join(contentDir, oldCategory)
const oldProductPath = path.posix.join(contentDir, oldProductId)

if (!fs.existsSync(oldProductPath)) {
  console.error(`Error! Can't find ${oldProductPath}`)
  process.exit(1)
}

const oldCategoryFiles = contentFiles.filter((file) => file.includes(`/${oldCategoryId}/`))

if (!oldCategoryFiles.length) {
  console.error(`Error! Can't find ${oldCategory} files`)
  process.exit(1)
}

const newProductPath = path.posix.join(process.cwd(), 'content', newProduct)

main()

async function main() {
  // Create the new product dir.
  await mkdirp(newProductPath)

  // Add redirects to the frontmatter of the to-be-moved files.
  oldCategoryFiles.forEach((file) => {
    const { content, data } = frontmatter(fs.readFileSync(file, 'utf8'))
    const redirectString = file.replace(contentDir, '').replace('index.md', '').replace('.md', '')
    data.redirect_from = addRedirectToFrontmatter(data.redirect_from, redirectString)
    fs.writeFileSync(file, frontmatter.stringify(content, data, { lineWidth: 10000 }))
  })

  // Move the files.
  execSync(`git mv ${oldCategoryPath}/* ${newProductPath}`)

  // Remove the category from the old product TOC.
  const oldProductTocPath = path.posix.join(oldProductPath, 'index.md')
  const productToc = frontmatter(fs.readFileSync(oldProductTocPath, 'utf8'))
  productToc.data.children = productToc.data.children.filter(
    (child) => child !== `/${oldCategoryId}`
  )
  fs.writeFileSync(
    oldProductTocPath,
    frontmatter.stringify(productToc.content, productToc.data, { lineWidth: 10000 })
  )

  // Add the new product to the homepage TOC.
  const homepage = path.posix.join(contentDir, 'index.md')
  const homepageToc = frontmatter(fs.readFileSync(homepage, 'utf8'))
  homepageToc.data.children.push(newProduct)
  fs.writeFileSync(
    homepage,
    frontmatter.stringify(homepageToc.content, homepageToc.data, { lineWidth: 10000 })
  )

  console.log(`Moved ${oldCategory} files to ${newProduct}, added redirects, and updated TOCs!`)
}
