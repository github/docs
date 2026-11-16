import { renderContent } from '@/content-render/index'
import type { Context } from '@/types'

export interface CollectedHeading {
  href: string
  title: string
  headingLevel: number
  platform: string
}

interface MiniTocContents {
  href: string
  title: string
}

export interface MiniTocItem {
  contents: MiniTocContents
  items?: MiniTocItem[]
  platform?: string
}

interface FlatTocItem {
  contents: MiniTocContents
  headingLevel: number
  platform: string
  indentationLevel: number
  items?: FlatTocItem[]
}

// The collect-mini-toc rehype plugin is the only source because rendered HTML is not re-parsed.
// Ordinary article mini TOCs pass maxHeadingLevel 2 for accessibility.
export function buildMiniTocFromCollected(
  collected: CollectedHeading[],
  maxHeadingLevel = 2,
): MiniTocItem[] {
  const effectiveMax = maxHeadingLevel > 0 ? maxHeadingLevel : 2
  const headings = collected.filter((h) => h.headingLevel >= 2 && h.headingLevel <= effectiveMax)

  let mostImportantHeadingLevel: number | undefined

  const flatToc: FlatTocItem[] = headings.map((h) => {
    if (mostImportantHeadingLevel === undefined || h.headingLevel < mostImportantHeadingLevel) {
      mostImportantHeadingLevel = h.headingLevel
    }
    return {
      contents: { href: h.href, title: h.title },
      headingLevel: h.headingLevel,
      platform: h.platform,
      indentationLevel: 0,
    }
  })

  // Indentation starts from the highest-priority collected heading.
  for (const item of flatToc) {
    item.indentationLevel = item.headingLevel - (mostImportantHeadingLevel ?? item.headingLevel)
  }

  const nestedToc = buildNestedToc(flatToc)
  return minimalMiniToc(nestedToc)
}

function buildNestedToc(allItems: FlatTocItem[], startIndex = 0): FlatTocItem[] {
  const startItem = allItems[startIndex]
  if (!startItem) {
    return []
  }
  let curLevelIndentation = startItem.indentationLevel
  const currentLevel: FlatTocItem[] = []

  for (let cursor = startIndex; cursor < allItems.length; cursor++) {
    const cursorItem = allItems[cursor]
    const nextItem = allItems[cursor + 1]
    const nextItemIsNested = nextItem && nextItem.indentationLevel! > cursorItem.indentationLevel!

    if (curLevelIndentation === cursorItem.indentationLevel) {
      currentLevel.push({
        ...cursorItem,
        items: nextItemIsNested ? buildNestedToc(allItems, cursor + 1) : [],
      })
      continue
    }

    // Recursion already nested these items.
    if (curLevelIndentation < cursorItem.indentationLevel) {
      continue
    }

    if (curLevelIndentation > cursorItem.indentationLevel) {
      // A later higher-priority heading resets the baseline indentation.
      if (startIndex === 0) {
        curLevelIndentation = cursorItem.indentationLevel
        currentLevel.push({
          ...cursorItem,
          items: nextItemIsNested ? buildNestedToc(allItems, cursor + 1) : [],
        })
        continue
      }
      break
    }
  }

  return currentLevel
}

// Mini TOC rendering needs only contents, nested items, and platform.
function minimalMiniToc(toc: FlatTocItem[]): MiniTocItem[] {
  return toc.map(({ platform, contents, items }) => {
    const minimal: MiniTocItem = { contents }
    const subItems = minimalMiniToc(items || [])
    if (subItems.length) minimal.items = subItems
    if (platform) minimal.platform = platform
    return minimal
  })
}

export async function getAutomatedPageMiniTocItems(
  items: string[],
  context: Context,
  depth = 2,
  markdownHeading = '',
): Promise<MiniTocItem[]> {
  const titles =
    markdownHeading +
    items
      .map((item) => {
        let title = ''
        for (let i = 0; i < depth; i++) {
          title += '#'
        }
        return `${title} ${item}\n`
      })
      .join('')

  // Rendering with collectMiniToc runs the rehype collector.
  const collectMiniToc: CollectedHeading[] = []
  const renderContext = { ...context, collectMiniToc }
  await renderContent(titles, renderContext)

  return buildMiniTocFromCollected(collectMiniToc, depth)
}
