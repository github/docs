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

// Mirrors getTocItems() in src/frame/middleware/context/generic-toc.ts for frontmatter children.
export async function getAllTocItems(
  page: Page,
  context: Context,
  options: {
    // Prevents cross-product traversal, such as /en/rest listing /enterprise-admin.
    basePath?: string
  } = {},
): Promise<TocItem[]> {
  const pageWithChildren = page as PageWithChildren
  const languageCode = page.languageCode || 'en'

  if (!pageWithChildren.children || pageWithChildren.children.length === 0) {
    return []
  }

  const pagePermalink = page.permalinks.find(
    (p) => p.languageCode === languageCode && p.pageVersion === context.currentVersion,
  )
  const pathname = pagePermalink ? pagePermalink.href : `/${languageCode}`

  // Keeps recursive children within the first page's product section.
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

export function flattenTocItems(
  tocItems: TocItem[],
  options: {
    excludeParents?: boolean
  } = {},
): LinkData[] {
  const { excludeParents = true } = options
  const result: LinkData[] = []
  const seen = new Set<string>()

  function recurse(items: TocItem[]) {
    for (const item of items) {
      const hasChildren = item.childTocItems && item.childTocItems.length > 0

      // Bespoke landing pages can list both articles and their parent group.
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

      if (hasChildren) {
        recurse(item.childTocItems!)
      }
    }
  }

  recurse(tocItems)
  return result
}

// Liquid-only properties can skip the full unified pipeline.
function hasMarkdownLinks(text: string): boolean {
  return text.includes('[') && text.includes('](/')
}

const RAW_PROP_MAP = {
  title: 'rawTitle',
  intro: 'rawIntro',
} as const

// Falls back to page.renderProp() when Liquid output still has markdown links.
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
