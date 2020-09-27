const fs = require('fs')
const path = require('path')
const assert = require('assert')
const { difference } = require('lodash')
const yaml = require('js-yaml')
const contentDir = path.join(process.cwd(), 'content')
const frontmatter = require('@github-docs/frontmatter')

let getApplicableVersions
if (process.env.FEATURE_NEW_VERSIONS) {
  getApplicableVersions = require('./get-applicable-versions')
}

// the product order is determined by a yml file
const productsFile = path.join(process.cwd(), 'data/products.yml')
const productsYml = yaml.load(fs.readFileSync(productsFile, 'utf8'))
const sortedProductIds = productsYml.productsInOrder

let contentProductIds = fs.readdirSync(contentDir, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)

// TODO this can be removed when we replace content/enterprise/admin with content/admin
if (!process.env.FEATURE_NEW_VERSIONS) {
  contentProductIds = contentProductIds.map(id => id.replace('enterprise', 'enterpriseServer'))
}

assert(difference(sortedProductIds, contentProductIds).length === 0)
assert(difference(contentProductIds, sortedProductIds).length === 0)

const internalProducts = {}

sortedProductIds.forEach(productId => {
  const relPath = process.env.FEATURE_NEW_VERSIONS
    ? productId
    : productId === 'enterpriseServer' ? 'enterprise/admin' : productId

  const dir = path.join('content', relPath)
  const toc = path.join(dir, 'index.md')
  const { data } = frontmatter(fs.readFileSync(toc, 'utf8'))

  let applicableVersions, href
  if (process.env.FEATURE_NEW_VERSIONS) {
    applicableVersions = getApplicableVersions(data.versions, toc)
    href = path.join('/', applicableVersions[0], productId)
  } else {
    href = path.join('/', relPath)
  }

  internalProducts[productId] = {
    id: productId,
    name: data.shortTitle || data.title,
    href,
    dir,
    toc,
    wip: data.wip || false
  }

  if (process.env.FEATURE_NEW_VERSIONS) {
    internalProducts[productId].versions = applicableVersions
  } else {
    internalProducts[productId].hasEnterpriseUserVersions = productsYml.hasEnterpriseUserVersions.some(id => id === productId)
  }
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

if (!process.env.FEATURE_NEW_VERSIONS) {
  Object.keys(externalProducts).forEach(id => { externalProducts[id].hasEnterpriseUserVersions = false })
}

const allProducts = Object.assign({}, internalProducts, externalProducts)

module.exports = allProducts
