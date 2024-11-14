export type BaseTocItem = {
  fullPath: string
  title: string
  intro?: string
}

export type ChildTocItem = BaseTocItem & {
  octicon?: string
  category?: string[]
  complexity?: string[]
  industry?: string[]
}

export type TocItem = BaseTocItem & {
  childTocItems?: ChildTocItem[]
}

export type ArticleCardItems = ChildTocItem[]
