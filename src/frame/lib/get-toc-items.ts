import { productMap } from '@/products/lib/all-products'

interface TocItem {
  type: 'category' | 'subcategory' | 'article'
  href: string
}

interface Page {
  relativePath: string
  markdown: string
}

const productTOCs = Object.values(productMap)
  .filter((product) => !product.external)
  .map((product) => product.toc.replace('content/', ''))

const linkString = /{% [^}]*?link.*? \/(.*?) ?%}/m
const linksArray = new RegExp(linkString.source, 'gm')

// return an array of objects like { type: 'category|subcategory|article', href: 'path' }
export default function getTocItems(page: Page): TocItem[] | undefined {
  // only process product and category tocs
  if (!page.relativePath.endsWith('index.md')) return
  if (page.relativePath === 'index.md') return

  // ignore content above Table of Contents heading
  const pageContent = page.markdown.replace(/[\s\S]*?# Table of contents\n/im, '')

  // find array of TOC link strings
  const rawItems = pageContent.match(linksArray)

  // return an empty array if this is a localized page
  if (!rawItems) {
    return []
  }

  return rawItems
    .map((item: string) => {
      const match = item.match(linkString)
      if (!match) return null

      const tocItem: TocItem = {} as TocItem

      // a product's toc items are always categories
      // whereas a category's toc items can be either subcategories or articles
      tocItem.type = productTOCs.includes(page.relativePath)
        ? 'category'
        : page.relativePath.includes('/index.md')
          ? 'subcategory'
          : 'article'

      tocItem.href = match[1]

      return tocItem
    })
    .filter((item): item is TocItem => item !== null)
}
