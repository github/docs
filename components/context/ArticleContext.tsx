import { createContext, useContext } from 'react'

export type LearningTrack = {
  trackName?: string
  prevGuide?: { href: string; title: string }
  nextGuide?: { href: string; title: string }
}

export type MiniTocItem = {
  indentationLevel: number
  platform: string
  contents: string
}

export type ArticleContextT = {
  title: string
  intro: string
  renderedPage: string
  miniTocItems: Array<MiniTocItem>
  contributor: { name: string; URL: string } | null
  permissions?: string
  includesPlatformSpecificContent: boolean
  defaultPlatform?: string
  product?: string
  currentLearningTrack?: LearningTrack
}

export const ArticleContext = createContext<ArticleContextT | null>(null)

export const useArticleContext = (): ArticleContextT => {
  const context = useContext(ArticleContext)

  if (!context) {
    throw new Error('"useArticleContext" may only be used inside "ArticleContext.Provider"')
  }

  return context
}

export const getArticleContextFromRequest = (req: any): ArticleContextT => {
  const page = req.context.page
  return {
    title: page.titlePlainText,
    intro: page.introPlainText,
    renderedPage: req.context.renderedPage || '',
    miniTocItems:
      (req.context.miniTocItems || []).map((item: any) => {
        return {
          indentationLevel: item.indentationLevel || 0,
          platform: item.platform || '',
          contents: item.contents || '',
        }
      }) || [],
    contributor: page.contributor || null,
    permissions: page.permissions || '',
    includesPlatformSpecificContent: page.includesPlatformSpecificContent || false,
    defaultPlatform: page.defaultPlatform || '',
    product: page.product || '',
    currentLearningTrack: req.context.currentLearningTrack,
  }
}
