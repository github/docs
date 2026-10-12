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

    if (page.journeyTracks) {
      const resolvedTracks = await resolveJourneyTracks(page.journeyTracks, req.context)

      // getServerSideProps reads resolvedJourneyTracks from the page object.
      page.resolvedJourneyTracks = resolvedTracks
    }

    // Resolve every article because guide pages do not carry their own journeyTracks.
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
