import type { FeaturedLink } from '@/landings/types'

type FeaturedLinkEntry = {
  href: string
  title: string
  intro?: string | null
  fullTitle?: string | null
  page?: { authors?: string[] }
}

type ReqWithFeaturedLinks = {
  context: {
    featuredLinks?: Record<string, FeaturedLinkEntry[] | undefined>
  }
}

export const getFeaturedLinksFromReq = (req: unknown): Record<string, Array<FeaturedLink>> => {
  const { context } = req as ReqWithFeaturedLinks
  return Object.fromEntries(
    Object.entries(context.featuredLinks || {}).map(([key, entries]) => {
      return [
        key,
        (entries || []).map((entry) => ({
          href: entry.href,
          title: entry.title,
          intro: entry.intro || undefined,
          authors: entry.page?.authors || [],
          fullTitle: entry.fullTitle || undefined,
        })),
      ]
    }),
  )
}
