import { createContext, useContext } from 'react'

export type LearningTrack = {
  trackName?: string
  trackProduct?: string
  prevGuide?: { href: string; title: string }
  nextGuide?: { href: string; title: string }
}

export type MiniTocItem = {
  platform: string
  contents: string
  items?: MiniTocItem[]
}

export type ArticleContextT = {
  title: string
  intro: string
  effectiveDate: string
  renderedPage: string
  miniTocItems: Array<MiniTocItem>
  contributor: { name: string; URL: string } | null
  permissions?: string
  includesPlatformSpecificContent: boolean
  defaultPlatform?: string
  product?: string
  currentLearningTrack?: LearningTrack
  detectedPlatforms: Array<string>
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

  if (page.effectiveDate) {
    if (isNaN(Date.parse(page.effectiveDate))) {
      throw new Error(
        'The "effectiveDate" frontmatter property is not valid. Please make sure it is YEAR-MONTH-DAY'
      )
    }
  }

  return {
    title: page.titlePlainText,
    intro: page.intro,
    effectiveDate: page.effectiveDate || '',
    renderedPage: req.context.renderedPage || '',
    miniTocItems: req.context.miniTocItems || [],
    contributor: page.contributor || null,
    permissions: page.permissions || '',
    includesPlatformSpecificContent: page.includesPlatformSpecificContent || false,
    defaultPlatform: page.defaultPlatform || '',
    product: page.product || '',
    currentLearningTrack: req.context.currentLearningTrack,
    detectedPlatforms: page.detectedPlatforms || [],
  }
}
