const fs = require('fs')
const path = require('path')
const slash = require('slash')
const assert = require('assert')
const { difference } = require('lodash')
const yaml = require('js-yaml')
const contentDir = path.join(process.cwd(), 'content')
const frontmatter = require('@github-docs/frontmatter')
const getApplicableVersions = require('./get-applicable-versions')
const removeFPTFromPath = require('./remove-fpt-from-path')

// the product order is determined by data/products.yml
const productsFile = path.join(process.cwd(), 'data/products.yml')
const productsYml = yaml.load(fs.readFileSync(productsFile, 'utf8'))
const sortedProductIds = productsYml.productsInOrder

const contentProductIds = fs.readdirSync(contentDir, { withFileTypes: true })
  .map(entry => {
    // `fs.readdir` provides file entries based on `fs.lstat`, which doesn't
    // resolve symbolic links to their target file/directory. We need to take
    // an extra step here to resolve the Early Access symlinked directory.
    const { name } = entry
    if (entry.isSymbolicLink()) {
      entry = fs.statSync(path.join(contentDir, entry.name))
      entry.name = name
    }
    return entry
  })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)

// require the content/<subdir> list to match the list in data/products.yml,
// with the exception of content/early-access, which lives in a separate private repo
const publicContentProductIds = contentProductIds.filter(id => id !== 'early-access')
assert(difference(sortedProductIds, publicContentProductIds).length === 0)
assert(difference(publicContentProductIds, sortedProductIds).length === 0)

const internalProducts = {}

// add optional early access content dir to sorted products list if present
const earlyAccessId = contentProductIds.find(id => id === 'early-access')
if (earlyAccessId) sortedProductIds.push(earlyAccessId)

sortedProductIds.forEach(productId => {
  const relPath = productId
  const dir = slash(path.join('content', relPath))
  const toc = slash(path.join(dir, 'index.md'))
  const { data } = frontmatter(fs.readFileSync(toc, 'utf8'))
  const applicableVersions = getApplicableVersions(data.versions, toc)
  const href = removeFPTFromPath(slash(path.join('/', applicableVersions[0], productId)))

  internalProducts[productId] = {
    id: productId,
    name: data.shortTitle || data.title,
    href,
    dir,
    toc,
    wip: data.wip || false,
    hidden: data.hidden || false
  }

  internalProducts[productId].versions = applicableVersions
})

const externalProducts = {
  cli: {
    id: 'cli',
    name: 'GitHub CLI',
    href: 'https://cli.github.com/manual',
    external: true
  },
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
