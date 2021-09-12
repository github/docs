import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

export type FeaturedTrack = {
  trackName: string
  title: string
  description: string
  guides?: Array<{ href: string; page?: { type: string }; title: string; intro: string }>
} | null

export type ArticleGuide = {
  href: string
  title: string
  intro: string
  type: string
  topics: Array<string>
}

export type ProductSubLandingContextT = {
  title: string
  intro: string
  featuredTrack?: FeaturedTrack
  learningTracks?: Array<FeaturedTrack>
  includeGuides?: Array<ArticleGuide>
  allTopics?: Array<string>
}

export const ProductSubLandingContext = createContext<ProductSubLandingContextT | null>(null)

export const useProductSubLandingContext = (): ProductSubLandingContextT => {
  const context = useContext(ProductSubLandingContext)

  if (!context) {
    throw new Error(
      '"useProductSubLandingContext" may only be used inside "ProductSubLandingContext.Provider"'
    )
  }

  return context
}

export const getProductSubLandingContextFromRequest = (req: any): ProductSubLandingContextT => {
  const page = req.context.page

  return {
    ...pick(page, ['intro', 'allTopics']),
    title: req.context.productMap[req.context.currentProduct].name,
    featuredTrack: page.featuredTrack
      ? {
          ...pick(page.featuredTrack, ['title', 'description', 'trackName']),
          guides: (page.featuredTrack?.guides || []).map((guide: any) => {
            return pick(guide, ['title', 'intro', 'href', 'page.type'])
          }),
        }
      : null,
    learningTracks: (page.learningTracks || []).map((track: any) => ({
      ...pick(track, ['title', 'description', 'trackName']),
      guides: (track.guides || []).map((guide: any) => {
        return pick(guide, ['title', 'intro', 'href', 'page.type'])
      }),
    })),
    includeGuides: (page.includeGuides || []).map((guide: any) => {
      return {
        ...pick(guide, ['href', 'title', 'intro', 'topics']),
        type: guide.type || '',
      }
    }),
  }
}
