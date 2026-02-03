import { ValidOcticon, isValidOcticon } from './lib/octicons'

// Re-export ValidOcticon and isValidOcticon for compatibility with existing imports
export type { ValidOcticon }
export { isValidOcticon }

// Base type for all TOC items with core properties
export type BaseTocItem = {
  fullPath: string
  title: string
  intro?: string | null
}

// Extended type for child TOC items with additional metadata
// This is recursive - children can also have their own children
export type ChildTocItem = BaseTocItem & {
  octicon?: ValidOcticon | null
  category?: string[] | null
  complexity?: string[] | null
  industry?: string[] | null
  childTocItems?: ChildTocItem[]
}

// Main TOC item type that can contain children
export type TocItem = BaseTocItem & {
  childTocItems?: ChildTocItem[]
  octicon?: ValidOcticon | null
  category?: string[] | null
  complexity?: string[] | null
  industry?: string[] | null
}

// Type alias for article card components
export type ArticleCardItems = ChildTocItem[]

// Raw TOC type that matches the actual data structure from getTocItems()
// This includes all properties that may be present in the source data
export type RawTocItem = {
  title: string
  fullPath: string
  intro: string | null
  octicon: string | null
  category: string[] | null
  complexity: string[] | null
  industry: string[] | null
  childTocItems: RawTocItem[]
}

// Simplified TOC item type for basic landing pages that don't need extended metadata
export type SimpleTocItem = {
  fullPath: string
  title: string
  intro?: string
  childTocItems?: Array<{
    fullPath: string
    title: string
  }>
}

// Reusable mapper function to convert RawTocItem to TocItem with full metadata
export function mapRawTocItemToTocItem(raw: RawTocItem): TocItem {
  return {
    fullPath: raw.fullPath,
    title: raw.title,
    intro: raw.intro || null,
    octicon: isValidOcticon(raw.octicon) ? raw.octicon : null,
    category: raw.category || null,
    complexity: raw.complexity || null,
    industry: raw.industry || null,
    childTocItems: raw.childTocItems?.map(mapRawTocItemToTocItem),
  }
}

// Reusable mapper function to convert RawTocItem to SimpleTocItem
export function mapRawTocItemToSimpleTocItem(raw: RawTocItem): SimpleTocItem {
  return {
    fullPath: raw.fullPath,
    title: raw.title,
    ...(raw.intro && { intro: raw.intro }),
    childTocItems: raw.childTocItems?.map((child) => ({
      fullPath: child.fullPath,
      title: child.title,
    })),
  }
}
