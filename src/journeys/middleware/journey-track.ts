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

      // Read later by getServerSideProps.
      page.resolvedJourneyTracks = resolvedTracks
    }

    // Unconditional, because guide articles need this
    // even though they carry no journeyTracks of their own.
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
