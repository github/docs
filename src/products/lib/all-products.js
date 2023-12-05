import fs from 'fs/promises'
import path from 'path'
import frontmatter from '#src/frame/lib/read-frontmatter.js'
import getApplicableVersions from '#src/versions/lib/get-applicable-versions.js'
import removeFPTFromPath from '#src/versions/lib/remove-fpt-from-path.js'
import { ROOT } from '#src/frame/lib/constants.js'

// Both internal and external products are specified in content/index.md
const homepage = path.posix.join(ROOT, 'content/index.md')
export const { data } = frontmatter(await fs.readFile(homepage, 'utf8'))

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

  // Note that a special middleware called `render-product-map.js` later
  // mutates this object by adding a `nameRendered` property to each product.
  // It's the outcome of rendering out possible Liquid from the
  // `shortTitle` or `title` after all the other contextualizers have run.
  internalProducts[productId] = {
    id: productId,
    name: data.shortTitle || data.title,
    href,
    dir,
    toc,
    wip: data.wip || false,
    hidden: data.hidden || false,
    versions: applicableVersions,
  }
}

export const productMap = Object.assign({}, internalProducts, externalProducts)
