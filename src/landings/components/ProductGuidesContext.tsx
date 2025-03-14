import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

export type LearningTrack = {
  trackName: string
  trackProduct: string
  title: string
  description: string
  guides?: Array<{ href: string; page?: { type: string }; title: string; intro: string }>
}

export type ArticleGuide = {
  href: string
  title: string
  intro: string
  type: string
  topics: Array<string>
}

export type ProductGuidesContextT = {
  title: string
  intro: string
  learningTracks: Array<LearningTrack>
  includeGuides?: Array<ArticleGuide>
}

export const ProductGuidesContext = createContext<ProductGuidesContextT | null>(null)

export const useProductGuidesContext = (): ProductGuidesContextT => {
  const context = useContext(ProductGuidesContext)

  if (!context) {
    throw new Error(
      '"useProductGuidesContext" may only be used inside "ProductGuidesContext.Provider"',
    )
  }

  return context
}

export const getProductGuidesContextFromRequest = (req: any): ProductGuidesContextT => {
  const page = req.context.page

  const learningTracks: LearningTrack[] = (page.learningTracks || []).map((track: any) => ({
    ...pick(track, ['title', 'description', 'trackName', 'trackProduct']),
    guides: (track.guides || []).map((guide: any) => {
      return pick(guide, ['title', 'intro', 'href', 'page.type'])
    }),
  }))

  return {
    ...pick(page, ['title', 'intro']),
    learningTracks,
    includeGuides: (page.includeGuides || []).map((guide: any) => {
      return {
        ...pick(guide, ['href', 'title', 'intro']),
        type: guide.type || '',
        topics: guide.topics || [],
      }
    }),
  }
}
