import { createContext, useContext } from 'react'
import pick from 'lodash/pick'
import type { ExtendedRequest } from '@/types'

export type LearningTrack = {
  trackName: string
  trackProduct: string
  title: string
  description: string
  guides?: Array<{ href: string; type: string | null; title: string; intro: string }>
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

export const getProductGuidesContextFromRequest = (req: ExtendedRequest): ProductGuidesContextT => {
  if (!req.context || !req.context.page) {
    throw new Error('Request context or page is missing')
  }

  const page = req.context.page as typeof req.context.page & {
    learningTracks?: Array<Record<string, unknown>>
    includeGuides?: Array<Record<string, unknown>>
  }

  const learningTracks: LearningTrack[] = (page.learningTracks || []).map(
    (track: Record<string, unknown>) => ({
      title: (track.title as string) || '',
      description: (track.description as string) || '',
      trackName: (track.trackName as string) || '',
      trackProduct: (track.trackProduct as string) || '',
      guides: ((track.guides as Array<Record<string, unknown>>) || []).map(
        (guide: Record<string, unknown>) => ({
          title: (guide.title as string) || '',
          intro: (guide.intro as string) || '',
          href: (guide.href as string) || '',
          type: ((guide.page as any)?.type as string) || null,
        }),
      ),
    }),
  )

  return {
    ...pick(page, ['title', 'intro']),
    title: page.title || '',
    intro: page.intro || '',
    learningTracks,
    includeGuides: (page.includeGuides || []).map((guide: Record<string, unknown>) => {
      return {
        href: (guide.href as string) || '',
        title: (guide.title as string) || '',
        intro: (guide.intro as string) || '',
        type: (guide.type as string) || '',
        topics: (guide.topics as Array<string>) || [],
      }
    }),
  }
}
