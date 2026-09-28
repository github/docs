import { loadPages } from '@/frame/lib/page-data'

import type { Page } from '@/search/scripts/scrape/types'

export default async function findIndexablePages(match = ''): Promise<Page[]> {
  const allPages: Page[] = await loadPages()
  const indexablePages = allPages
    .filter((page) => !page.hidden)
    // Exclude visible WIP products. Hidden WIP products still pass through this filter.
    .filter((page) => !page.parentProduct || !page.parentProduct.wip || page.parentProduct.hidden)
    // Exclude absolute home pages such as /en or /ja.
    .filter((page) => page.relativePath !== 'index.md')
    .filter((page) => !match || page.relativePath.includes(match))

  console.log('total pages', allPages.length)
  console.log('indexable pages', indexablePages.length)
  return indexablePages
}
