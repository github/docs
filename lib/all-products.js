import fs from 'fs/promises'
import path from 'path'
import frontmatter from './read-frontmatter.js'
import getApplicableVersions from './get-applicable-versions.js'
import removeFPTFromPath from './remove-fpt-from-path.js'

// Both internal and external products are specified in content/index.md
const homepage = path.posix.join(process.cwd(), 'content/index.md')
const { data } = frontmatter(await fs.readFile(homepage, 'utf8'))

export const productIds = data.children
export const productGroups = []

const externalProducts = data.externalProducts
const internalProducts = {}

for (const productId of productIds) {
  const relPath = productId
  const dir = path.posix.join('content', relPath)

  // Early Access may not exist in the current checkout
  try {
    await fs.readdir(dir)
  } catch (e) {
    continue
  }

  const toc = path.posix.join(dir, 'index.md')
  const { data } = frontmatter(await fs.readFile(toc, 'utf8'))
  const applicableVersions = getApplicableVersions(data.versions, toc)
  const href = removeFPTFromPath(path.posix.join('/', applicableVersions[0], productId))

  internalProducts[productId] = {
    id: productId,
    name: data.shortTitle || data.title,
    href,
    dir,
    toc,
    wip: data.wip || false,
    hidden: data.hidden || false,
  }

  internalProducts[productId].versions = applicableVersions
}

export const productMap = Object.assign({}, internalProducts, externalProducts)

for (const group of data.childGroups) {
  productGroups.push({
    name: group.name,
    icon: group.icon || null,
    octicon: group.octicon || null,
    children: group.children.map((id) => productMap[id]),
  })
}

export default {
  productIds,
  productMap,
  productGroups,
}
