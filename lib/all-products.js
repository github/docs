import fs from 'fs/promises'
import path from 'path'
import frontmatter from './read-frontmatter.js'
import getApplicableVersions from './get-applicable-versions.js'
import removeFPTFromPath from './remove-fpt-from-path.js'
import { ROOT } from './constants.js'

// Both internal and external products are specified in content/index.md
const homepage = path.posix.join(ROOT, 'content/index.md')
const { data } = frontmatter(await fs.readFile(homepage, 'utf8'))

export const productIds = data.children

const externalProducts = data.externalProducts
const internalProducts = {}

for (const productId of productIds) {
  const relPath = productId
  const dir = path.join(ROOT, 'content', relPath)

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

function getPage(id, lang, pageMap) {
  const productId = id.split('/')[0]
  const product = productMap[productId]
  const href = removeFPTFromPath(path.posix.join('/', lang, product.versions[0], id))
  const page = pageMap[href]
  if (!page) {
    throw new Error(
      `Unable to find a page by the href '${href}'. Review your 'childGroups' frontmatter maybe.`
    )
  }
  // Return only the props needed for the ProductSelectionCard, since
  // that's the only place this is ever used.
  return {
    id,
    name: page.shortTitle || page.title,
    href: href.replace(`/${lang}/`, '/'),
    versions: page.applicableVersions,
  }
}

export function getProductGroups(pageMap, lang) {
  return data.childGroups.map((group) => {
    return {
      name: group.name,
      icon: group.icon || null,
      octicon: group.octicon || null,
      // Typically the children are product IDs, but we support deeper page paths too
      children: group.children.map((id) => productMap[id] || getPage(id, lang, pageMap)),
    }
  })
}

export default {
  productIds,
  productMap,
}
