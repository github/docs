const fs = require('fs')
const path = require('path')
const slash = require('slash')
const assert = require('assert')
const { difference } = require('lodash')
const yaml = require('js-yaml')
const contentDir = path.join(process.cwd(), 'content')
const frontmatter = require('@github-docs/frontmatter')
const getApplicableVersions = require('./get-applicable-versions')

// the product order is determined by data/products.yml
const productsFile = path.join(process.cwd(), 'data/products.yml')
const productsYml = yaml.load(fs.readFileSync(productsFile, 'utf8'))
const sortedProductIds = productsYml.productsInOrder

const contentProductIds = fs.readdirSync(contentDir, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)

assert(difference(sortedProductIds, contentProductIds).length === 0)
assert(difference(contentProductIds, sortedProductIds).length === 0)

const internalProducts = {}

sortedProductIds.forEach(productId => {
  const relPath = productId
  const dir = slash(path.join('content', relPath))
  const toc = slash(path.join(dir, 'index.md'))
  const { data } = frontmatter(fs.readFileSync(toc, 'utf8'))
  const applicableVersions = getApplicableVersions(data.versions, toc)
  const href = slash(path.join('/', applicableVersions[0], productId))

  internalProducts[productId] = {
    id: productId,
    name: data.shortTitle || data.title,
    href,
    dir,
    toc,
    wip: data.wip || false
  }

  internalProducts[productId].versions = applicableVersions
})

const externalProducts = {
  atom: {
    id: 'atom',
    name: 'Atom',
    href: 'https://atom.io/docs',
    external: true
  },
  electron: {
    id: 'electron',
    name: 'Electron',
    href: 'https://electronjs.org/docs',
    external: true
  }
}

const allProducts = Object.assign({}, internalProducts, externalProducts)

module.exports = allProducts
