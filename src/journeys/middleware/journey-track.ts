import type { Response, NextFunction } from 'express'
import type { ExtendedRequest, Context } from '@/types'

export default async function journeyTrack(
  req: ExtendedRequest & { context: Context },
  res: Response,
  next: NextFunction,
) {
  if (!req.context) throw new Error('request is not contextualized')
  if (!req.context.page) return next()

  try {
    const journeyResolver = await import('../lib/journey-path-resolver')

    // If this page has journey tracks defined, resolve them for the landing page
    if ((req.context.page as any).journeyTracks) {
      const resolvedTracks = await journeyResolver.resolveJourneyTracks(
        (req.context.page as any).journeyTracks,
        req.context,
      )

      // Store resolved tracks on the page context for later use in getServerSideProps
      ;(req.context.page as any).resolvedJourneyTracks = resolvedTracks
    }

    // Always try to resolve journey context (for navigation on guide articles)
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
