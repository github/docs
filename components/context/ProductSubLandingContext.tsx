import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

export type FeaturedTrack = {
  trackName: string,
  title: string,
  description: string
  guides?: Array<{ href: string; page: { type: string}; title: string; intro: string }>;
}

export type ArticleGuide = {
  href: string,
  title: string,
  intro: string,
  type: string,
  topics: Array<string>
}

export type ProductSubLandingContextT = {
  title: string,
  intro: string,
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
    ...pick(page, [
      'intro',
      'allTopics'
    ]),
    title: req.context.productMap[req.context.currentProduct].name,    
    featuredTrack: page.featuredTrack === undefined ? null : JSON.parse(JSON.stringify(page.featuredTrack)),
    learningTracks: page.learningTracks === undefined ? null : JSON.parse(JSON.stringify(page.learningTracks)),
    includeGuides: page.includeGuides === undefined ? null : JSON.parse(JSON.stringify(page.includeGuides))
  }
}
