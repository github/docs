export type BaseTocItem = {
  fullPath: string
  title: string
  intro?: string
}

export type ChildTocItem = BaseTocItem & {
  octicon?:
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
  category?: string[]
  complexity?: string[]
  industry?: string[]
}

export type TocItem = BaseTocItem & {
  childTocItems?: ChildTocItem[]
}

export type ArticleCardItems = ChildTocItem[]
