import type { Response, NextFunction } from 'express'
import type { ExtendedRequest, Context, Page } from '@/types'

import {
  resolveJourneyTracks,
  resolveJourneyContext,
  JourneyTrack,
} from '../lib/journey-path-resolver'

type JourneyTrackData = {
  id: string
  title: string
  description?: string
  guides: Array<{
    href: string
    alternativeNextStep?: string
  }>
}

type PageWithJourneys = Page & {
  journeyTracks?: JourneyTrackData[]
  resolvedJourneyTracks?: JourneyTrack[]
}

export default async function journeyTrack(
  req: ExtendedRequest & { context: Context },
  res: Response,
  next: NextFunction,
) {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next()

  if (!req.context) throw new Error('request is not contextualized')
  if (!req.context.page) return next()

  try {
    const page = req.context.page as PageWithJourneys

    // If this page has journey tracks defined, resolve them for the landing page
    if (page.journeyTracks) {
      const resolvedTracks = await resolveJourneyTracks(page.journeyTracks, req.context)

      // Store resolved tracks on the page context for later use in getServerSideProps
      page.resolvedJourneyTracks = resolvedTracks
    }

    // Always try to resolve journey context (for navigation on guide articles)
    const journeyContext = await resolveJourneyContext(
      req.pagePath || '',
      req.context.pages || {},
      req.context,
    )

    req.context.currentJourneyTrack = journeyContext
  } catch (error) {
    console.warn('Failed to resolve journey context:', error)
    req.context.currentJourneyTrack = null
  }

  return next()
}
