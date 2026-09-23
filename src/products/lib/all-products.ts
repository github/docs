import fs from 'fs'
import path from 'path'
import frontmatter from '@/frame/lib/read-frontmatter'
import getApplicableVersions from '@/versions/lib/get-applicable-versions'
import removeFPTFromPath from '@/versions/lib/remove-fpt-from-path'
import { ROOT } from '@/frame/lib/constants'

export interface Product {
  id: string
  name: string
  href: string
  dir: string
  toc: string
  wip: boolean
  hidden: boolean
  versions: string[]
  nameRendered?: string
  external?: boolean
}

export interface ProductMap {
  [productId: string]: Product
}

// Both internal and external products are specified in content/index.md
const homepage = path.posix.join(ROOT, 'content/index.md')
export const { data } = frontmatter(fs.readFileSync(homepage, 'utf8'))

export const productIds: string[] = data?.children || []

const externalProducts = (data?.externalProducts || {}) as ProductMap
const internalProducts: ProductMap = {}

for (const productId of productIds) {
  const relPath = productId
  const dir = path.join(ROOT, 'content', relPath)

  // Early Access may not exist in the current checkout
  try {
    fs.readdirSync(dir)
  } catch {
    continue
  }

  const toc = path.posix.join(dir, 'index.md')
  const fileContent = fs.readFileSync(toc, 'utf8')
  const { data: tocData } = frontmatter(fileContent)
  if (tocData) {
    const applicableVersions = getApplicableVersions(tocData.versions, toc)
    const href = removeFPTFromPath(path.posix.join('/', applicableVersions[0], productId))

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
