import type { Context, Page } from '@/types'
import type { LinkData } from '@/article-api/transformers/types'
import { resolvePath } from './resolve-path'

interface PageWithChildren extends Page {
  children?: string[]
  category?: string[]
}

interface TocItem extends LinkData {
  category?: string[]
  childTocItems?: TocItem[]
}

/**
 * Recursively gathers all TOC items from a page and its descendants.
 * This mirrors the behavior of getTocItems() in the generic-toc middleware
 * but works with the page.children frontmatter property.
 *
 * @param page - The page to gather TOC items from
 * @param context - The rendering context
 * @param options - Configuration options
 * @returns Array of TocItems with nested childTocItems
 */
export async function getAllTocItems(
  page: Page,
  context: Context,
  options: {
    recurse?: boolean
    renderIntros?: boolean
  } = {},
): Promise<TocItem[]> {
  const { recurse = true, renderIntros = true } = options
  const pageWithChildren = page as PageWithChildren
  const languageCode = page.languageCode || 'en'

  if (!pageWithChildren.children || pageWithChildren.children.length === 0) {
    return []
  }

  // Get the page's pathname for resolving children
  const pagePermalink = page.permalinks.find(
    (p) => p.languageCode === languageCode && p.pageVersion === context.currentVersion,
  )
  const pathname = pagePermalink ? pagePermalink.href : `/${languageCode}`

  const items: TocItem[] = []

  for (const childHref of pageWithChildren.children) {
    const childPage = resolvePath(childHref, languageCode, pathname, context) as
      | PageWithChildren
      | undefined

    if (!childPage) continue

    const title = await childPage.renderTitle(context, { unwrap: true })
    const intro =
      renderIntros && childPage.intro
        ? await childPage.renderProp('intro', context, { textOnly: true })
        : ''

    const childPermalink = childPage.permalinks.find(
      (p) => p.languageCode === languageCode && p.pageVersion === context.currentVersion,
    )
    const href = childPermalink ? childPermalink.href : childHref

    const category = childPage.category || []

    const item: TocItem = {
      href,
      title,
      intro,
      category,
      childTocItems: [],
    }

    // Recursively get children if enabled
    if (recurse && childPage.children && childPage.children.length > 0) {
      item.childTocItems = await getAllTocItems(childPage, context, options)
    }

    items.push(item)
  }

  return items
}

/**
 * Flattens nested TOC items into a single array.
 * Only includes leaf nodes (items without children) or all items based on options.
 *
 * @param tocItems - The nested TOC items to flatten
 * @param options - Configuration options
 * @returns Flat array of LinkData items
 */
export function flattenTocItems(
  tocItems: TocItem[],
  options: {
    excludeParents?: boolean // If true, only include items without children
  } = {},
): LinkData[] {
  const { excludeParents = true } = options
  const result: LinkData[] = []

  function recurse(items: TocItem[]) {
    for (const item of items) {
      const hasChildren = item.childTocItems && item.childTocItems.length > 0

      // Include this item if it's a leaf or if we're including parents
      if (!hasChildren || !excludeParents) {
        result.push({
          href: item.href,
          title: item.title,
          intro: item.intro,
        })
      }

      // Recurse into children
      if (hasChildren) {
        recurse(item.childTocItems!)
      }
    }
  }

  recurse(tocItems)
  return result
}
