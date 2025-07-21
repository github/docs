import fs from 'fs/promises'
import path from 'path'
import frontmatter from '@/frame/lib/read-frontmatter'
import getApplicableVersions from '@/versions/lib/get-applicable-versions'
import removeFPTFromPath from '@/versions/lib/remove-fpt-from-path'
import { ROOT } from '@/frame/lib/constants'

/**
 * Represents a product in the documentation
 */
export interface Product {
  /** Unique identifier for the product */
  id: string
  /** Display name of the product (short title or title) */
  name: string
  /** URL path to the product's landing page */
  href: string
  /** Directory path to the product's content */
  dir: string
  /** Path to the product's table of contents file */
  toc: string
  /** Whether the product is a work in progress */
  wip: boolean
  /** Whether the product is hidden from the UI */
  hidden: boolean
  /** Applicable versions for the product */
  versions: string[]
  /** Rendered name (added later by middleware) */
  nameRendered?: string
  /** Whether the product is external */
  external?: boolean
}

/**
 * Map of product IDs to their corresponding product data
 */
export interface ProductMap {
  [productId: string]: Product
}

// Both internal and external products are specified in content/index.md
const homepage = path.posix.join(ROOT, 'content/index.md')
export const { data } = frontmatter(await fs.readFile(homepage, 'utf8'))

export const productIds: string[] = data?.children || []

const externalProducts = (data?.externalProducts || {}) as ProductMap
const internalProducts: ProductMap = {}

for (const productId of productIds) {
  const relPath = productId
  const dir = path.join(ROOT, 'content', relPath)

  // Early Access may not exist in the current checkout
  try {
    await fs.readdir(dir)
  } catch {
    continue
  }

  const toc = path.posix.join(dir, 'index.md')
  const fileContent = await fs.readFile(toc, 'utf8')
  const { data: tocData } = frontmatter(fileContent)
  if (tocData) {
    const applicableVersions = getApplicableVersions(tocData.versions, toc)
    const href = removeFPTFromPath(path.posix.join('/', applicableVersions[0], productId))

    // Note that a special middleware called `render-product-map.js` later
    // mutates this object by adding a `nameRendered` property to each product.
    // It's the outcome of rendering out possible Liquid from the
    // `shortTitle` or `title` after all the other contextualizers have run.
    internalProducts[productId] = {
      id: productId,
      name: tocData.shortTitle || tocData.title || productId,
      href,
      dir,
      toc,
      wip: tocData.wip || false,
      hidden: tocData.hidden || false,
      versions: applicableVersions,
    }
  }
}

export const productMap: ProductMap = Object.assign({}, internalProducts, externalProducts)
