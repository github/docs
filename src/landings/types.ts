// Base type for all TOC items with core properties
export type BaseTocItem = {
  fullPath: string
  title: string
  intro?: string
}

// Valid octicon types that match the CookBookArticleCard component
export type ValidOcticon =
  | 'code'
  | 'log'
  | 'terminal'
  | 'bug'
  | 'lightbulb'
  | 'gear'
  | 'rocket'
  | 'beaker'
  | 'copilot'
  | 'hubot'
  | 'book'
  | 'shield-lock'
  | 'lock'

// Extended type for child TOC items with additional metadata
export type ChildTocItem = BaseTocItem & {
  octicon?: ValidOcticon
  category?: string[]
  complexity?: string[]
  industry?: string[]
}

// Main TOC item type that can contain children
export type TocItem = BaseTocItem & {
  childTocItems?: ChildTocItem[]
  octicon?: ValidOcticon
  category?: string[]
  complexity?: string[]
  industry?: string[]
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

// Helper function to validate and cast octicon values
export function isValidOcticon(octicon: string | null): octicon is ValidOcticon {
  const validOcticons: ValidOcticon[] = [
    'code',
    'log',
    'terminal',
    'bug',
    'lightbulb',
    'gear',
    'rocket',
    'beaker',
    'copilot',
    'hubot',
    'book',
    'shield-lock',
    'lock',
  ]
  return octicon !== null && validOcticons.includes(octicon as ValidOcticon)
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
    intro: raw.intro || undefined,
    octicon: isValidOcticon(raw.octicon) ? raw.octicon : undefined,
    category: raw.category || undefined,
    complexity: raw.complexity || undefined,
    industry: raw.industry || undefined,
    childTocItems: raw.childTocItems?.map(mapRawTocItemToTocItem),
  }
}

// Reusable mapper function to convert RawTocItem to SimpleTocItem
export function mapRawTocItemToSimpleTocItem(raw: RawTocItem): SimpleTocItem {
  return {
    fullPath: raw.fullPath,
    title: raw.title,
    intro: raw.intro || undefined,
    childTocItems: raw.childTocItems?.map((child) => ({
      fullPath: child.fullPath,
      title: child.title,
    })),
  }
}
