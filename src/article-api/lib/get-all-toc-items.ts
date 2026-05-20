import type { Context, Page } from '@/types'
import type { LinkData } from '@/article-api/transformers/types'
import { resolvePath } from './resolve-path'
import { renderLiquid } from '@/content-render/liquid/index'

interface PageWithChildren extends Page {
  children?: string[]
  category?: string[]
  rawTitle: string
  rawIntro?: string
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
    /** Only recurse into children whose resolved path starts with this prefix.
     *  Prevents cross-product traversal (e.g. /en/rest listing /enterprise-admin). */
    basePath?: string
  } = {},
): Promise<TocItem[]> {
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

  // On the first call, set basePath to this page's path so recursion
  // stays within the same product section.
  const basePath = options.basePath ?? pathname

  const resolvedChildren = pageWithChildren.children
    .map((childHref) => ({
      childHref,
      childPage: resolvePath(childHref, languageCode, pathname, context) as
        | PageWithChildren
        | undefined,
    }))
    .filter(
      (entry): entry is { childHref: string; childPage: PageWithChildren } =>
        entry.childPage !== undefined,
    )

  const items = await Promise.all(
    resolvedChildren.map(async ({ childHref, childPage }) => {
      const childPermalink = childPage.permalinks.find(
        (p) => p.languageCode === languageCode && p.pageVersion === context.currentVersion,
      )
      const href = childPermalink ? childPermalink.href : childHref

      const title = await renderPropFast(childPage, 'title', context)
      const intro = await renderPropFast(childPage, 'intro', context)

      const category = childPage.category || []

      // Only recurse if the child is within the same product section
      const withinSection = href.startsWith(basePath)
      const childTocItems =
        withinSection && childPage.children && childPage.children.length > 0
          ? await getAllTocItems(childPage, context, { ...options, basePath })
          : []

      return { href, title, intro, category, childTocItems } as TocItem
    }),
  )

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
  const seen = new Set<string>()

  function recurse(items: TocItem[]) {
    for (const item of items) {
      const hasChildren = item.childTocItems && item.childTocItems.length > 0

      // Include this item if it's a leaf or if we're including parents
      // Deduplicate by href - needed when a page lists both individual
      // articles and their parent group as children (e.g., bespoke landing pages)
      if (!hasChildren || !excludeParents) {
        if (!seen.has(item.href)) {
          seen.add(item.href)
          result.push({
            href: item.href,
            title: item.title,
            intro: item.intro,
          })
        }
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

/**
 * Check whether a string contains markdown link syntax that would need
 * processing by the unified pipeline (e.g. link rewriting, AUTOTITLE).
 *
 * Use this to short-circuit expensive rendering when the text is
 * Liquid-only and contains no markdown that needs transformation.
 */
function hasMarkdownLinks(text: string): boolean {
  return text.includes('[') && text.includes('](/')
}

const RAW_PROP_MAP = {
  title: 'rawTitle',
  intro: 'rawIntro',
} as const

/**
 * Fast-path rendering for page properties. Renders Liquid only, skipping
 * the full unified pipeline. Falls back to page.renderProp() when the
 * Liquid output contains markdown links that need rewriting.
 */
async function renderPropFast(
  page: PageWithChildren,
  prop: keyof typeof RAW_PROP_MAP,
  context: Context,
): Promise<string> {
  const raw = page[RAW_PROP_MAP[prop]]
  if (!raw) return ''
  const rendered = await renderLiquid(raw, context)
  if (hasMarkdownLinks(rendered)) {
    return page.renderProp(prop, context, { textOnly: true })
  }
  return rendered.trim()
}
