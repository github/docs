import { ValidOcticon, isValidOcticon } from './lib/octicons'

// Re-export ValidOcticon and isValidOcticon for compatibility with existing imports
export type { ValidOcticon }
export { isValidOcticon }

export type FeaturedLink = {
  title: string
  href: string
  intro?: string
  authors?: Array<string>
  date?: string
  fullTitle?: string
}

export type BaseTocItem = {
  fullPath: string
  title: string
  intro?: string | null
}

// Recursive: children can have their own children.
export type ChildTocItem = BaseTocItem & {
  octicon?: ValidOcticon | null
  category?: string[] | null
  complexity?: string[] | null
  surface?: string[] | null
  industry?: string[] | null
  childTocItems?: ChildTocItem[]
}

export type TocItem = BaseTocItem & {
  childTocItems?: ChildTocItem[]
  octicon?: ValidOcticon | null
  category?: string[] | null
  complexity?: string[] | null
  surface?: string[] | null
  industry?: string[] | null
}

export type ArticleCardItems = ChildTocItem[]

// Matches the data shape returned by getTocItems(), including every property that
// may be present in the source data.
export type RawTocItem = {
  title: string
  fullPath: string
  intro: string | null
  octicon: string | null
  category: string[] | null
  complexity: string[] | null
  surface: string[] | null
  industry: string[] | null
  childTocItems: RawTocItem[]
}

export type SimpleTocItem = {
  fullPath: string
  title: string
  intro?: string
  childTocItems?: Array<{
    fullPath: string
    title: string
  }>
}

export function mapRawTocItemToTocItem(raw: RawTocItem): TocItem {
  return {
    fullPath: raw.fullPath,
    title: raw.title,
    intro: raw.intro || null,
    octicon: isValidOcticon(raw.octicon) ? raw.octicon : null,
    category: raw.category || null,
    complexity: raw.complexity || null,
    surface: raw.surface || null,
    industry: raw.industry || null,
    childTocItems: raw.childTocItems?.map(mapRawTocItemToTocItem),
  }
}

export function mapRawTocItemToSimpleTocItem(raw: RawTocItem): SimpleTocItem {
  return {
    fullPath: raw.fullPath,
    title: raw.title,
    ...(raw.intro && { intro: raw.intro }),
    childTocItems: raw.childTocItems?.map((child) => ({
      fullPath: child.fullPath,
      title: child.title,
      ...(child.complexity && { complexity: child.complexity }),
      ...(child.surface && { surface: child.surface }),
    })),
  }
}
