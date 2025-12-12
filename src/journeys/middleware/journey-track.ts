import type { Response, NextFunction } from 'express'
import type { ExtendedRequest, Context } from '@/types'

export default async function journeyTrack(
  req: ExtendedRequest & { context: Context },
  res: Response,
  next: NextFunction,
) {
  if (!req.context) throw new Error('request is not contextualized')
  if (!req.context.page) return next()

  // Only run journey resolution if the page has journey tracks defined
  if (!(req.context.page as any).journeyTracks) {
    req.context.currentJourneyTrack = null
    return next()
  }

  try {
    // Import and use the journey resolver which uses renderContent, need the
    // async import since it uses fs Node apis
    const journeyResolver = await import('../lib/journey-path-resolver')

    // resolve the journey tracks which renders the journey content like the
    // description to handle liquid rendering
    const resolvedTracks = await journeyResolver.resolveJourneyTracks(
      (req.context.page as any).journeyTracks,
      req.context,
    )

    // Store resolved tracks on the page context for later use in getServerSideProps
    ;(req.context.page as any).resolvedJourneyTracks = resolvedTracks

    // resolve the current journey context since we're on a journey track page
    // i.e. next/prev articles in the track, this article's position in the track
    const journeyContext = await journeyResolver.resolveJourneyContext(
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
