import { getPathWithoutLanguage, getPathWithoutVersion } from '@/frame/lib/path-utils'
import { renderContent } from '@/content-render/index'
import { executeWithFallback } from '@/languages/lib/render-with-fallback'
import getApplicableVersions from '@/versions/lib/get-applicable-versions'
import Permalink from '@/frame/lib/permalink'
import getLinkData from './get-link-data'

export interface JourneyContext {
  trackId: string
  trackName: string
  trackTitle: string
  journeyTitle: string
  journeyPath: string
  currentGuideIndex: number
  numberOfGuides: number
  nextTrackFirstGuide?: {
    href: string
    title: string
    trackTitle: string
  }
  nextGuide?: {
    href: string
    title: string
  }
  prevGuide?: {
    href: string
    title: string
  }
  alternativeNextStep?: string
}

export interface JourneyTrack {
  id: string
  title: string
  description?: string
  guides: Array<{
    href: string
    title: string
  }>
}

type JourneyPage = {
  layout?: string
  title?: string
  permalink?: string
  relativePath?: string
  versions?: any
  journeyTracks?: Array<{
    id: string
    title: string
    description?: string
    guides: Array<{
      href: string
      alternativeNextStep?: string
    }>
  }>
}

type Pages = Record<string, any>
type ContentContext = {
  currentProduct?: string
  currentLanguage?: string
  currentVersion?: string
  pages?: Pages
  redirects?: any
  [key: string]: any
}

// Cache for journey pages so we only filter all pages once
let cachedJourneyPages: JourneyPage[] | null = null
// Cache for guide paths to quickly check if a page is part of any journey
let cachedGuidePaths: Set<string> | null = null
let hasDynamicGuides = false

function needsRendering(str: string): boolean {
  return str.includes('{{') || str.includes('{%') || str.includes('[') || str.includes('<')
}

function getJourneyPages(pages: Pages): JourneyPage[] {
  if (!cachedJourneyPages) {
    cachedJourneyPages = Object.values(pages).filter(
      (page: any) => page.journeyTracks && page.journeyTracks.length > 0,
    ) as JourneyPage[]
  }
  return cachedJourneyPages
}

function getGuidePaths(pages: Pages): Set<string> {
  if (!cachedGuidePaths) {
    cachedGuidePaths = new Set()
    const journeyPages = getJourneyPages(pages)
    for (const page of journeyPages) {
      if (!page.journeyTracks) continue
      for (const track of page.journeyTracks) {
        if (!track.guides) continue
        for (const guide of track.guides) {
          if (needsRendering(guide.href)) {
            hasDynamicGuides = true
          } else {
            cachedGuidePaths.add(normalizeGuidePath(guide.href))
          }
        }
      }
    }
  }
  return cachedGuidePaths
}

function normalizeGuidePath(path: string): string {
  // First ensure we have a leading slash for consistent processing
  const pathWithSlash = path.startsWith('/') ? path : `/${path}`

  // Use the same normalization pattern as learning tracks and other middleware
  const withoutVersion = getPathWithoutVersion(pathWithSlash)
  const withoutLanguage = getPathWithoutLanguage(withoutVersion)

  // Ensure we always return a path with leading slash for consistent comparison
  return withoutLanguage && withoutLanguage.startsWith('/')
    ? withoutLanguage
    : `/${withoutLanguage || path}`
}

/**
 * Helper function to fetch guide data (href and title) for a given path
 */
async function fetchGuideData(
  guidePath: string,
  context: ContentContext,
): Promise<{ href: string; title: string } | null> {
  try {
    const resultData = await getLinkData(guidePath, context, {
      title: true,
      intro: false,
      fullTitle: false,
    })
    if (resultData && resultData.length > 0) {
      const linkResult = resultData[0]
      return {
        href: linkResult.href,
        title: linkResult.title || '',
      }
    }
  } catch (error) {
    console.warn('Could not get link data for guide:', guidePath, error)
  }
  return null
}

/**
 * Resolves the journey context for a given article path.
 *
 * The journey context includes information about the journey track, the current
 * guide's position within that track, and links to the previous and next
 * guides if they exist.
 */
export async function resolveJourneyContext(
  articlePath: string,
  pages: Pages,
  context: ContentContext,
  currentJourneyPage?: JourneyPage,
): Promise<JourneyContext | null> {
  const normalizedPath = normalizeGuidePath(articlePath)

  // Optimization: Fast path check
  // If we are not forcing a specific journey page, check our global cache
  if (!currentJourneyPage) {
    const guidePaths = getGuidePaths(pages)
    // If we have no dynamic guides and this path isn't in our known guides, return null early.
    if (!hasDynamicGuides && !guidePaths.has(normalizedPath)) {
      return null
    }
  }

  // Use the current journey page if provided, otherwise find all journey pages
  const journeyPages = currentJourneyPage ? [currentJourneyPage] : getJourneyPages(pages)

  let result: JourneyContext | null = null

  // Search through all journey pages
  for (const journeyPage of journeyPages) {
    if (!journeyPage.journeyTracks) continue

    // Check version compatibility - only show journey navigation if the current version
    // is compatible with the journey landing page's versions (journey track articles
    // currently inherit the journey landing page's versions)
    if (journeyPage.versions) {
      const journeyVersions = getApplicableVersions(journeyPage.versions)
      if (!journeyVersions.includes(context.currentVersion || '')) {
        continue // Skip this journey if current version is not supported
      }
    }

    let trackIndex = 0
    let foundTrackIndex = 0
    for (const track of journeyPage.journeyTracks) {
      if (!track.guides || !Array.isArray(track.guides)) continue

      // Find if current article is in this track
      let guideIndex = -1

      for (let i = 0; i < track.guides.length; i++) {
        const guidePath = track.guides[i].href
        let renderedGuidePath = guidePath

        // Handle Liquid conditionals in guide paths
        if (needsRendering(guidePath)) {
          try {
            renderedGuidePath = await executeWithFallback(
              context,
              () => renderContent(guidePath, context, { textOnly: true }),
              () => guidePath,
            )
          } catch {
            // If rendering fails, use the original path rather than erroring
            renderedGuidePath = guidePath
          }
        }

        const normalizedGuidePath = normalizeGuidePath(renderedGuidePath)

        if (normalizedGuidePath === normalizedPath) {
          guideIndex = i
          break
        }
      }

      if (guideIndex >= 0) {
        const alternativeNextStep = track.guides[guideIndex].alternativeNextStep || ''
        let renderedAlternativeNextStep = alternativeNextStep

        // Handle Liquid conditionals in branching text which likely has links
        if (needsRendering(alternativeNextStep)) {
          try {
            renderedAlternativeNextStep = await executeWithFallback(
              context,
              () => renderContent(alternativeNextStep, context),
              () => alternativeNextStep,
            )
          } catch {
            // If rendering fails, use the original branching text rather than erroring
            renderedAlternativeNextStep = alternativeNextStep
          }
        }

        result = {
          trackId: track.id,
          trackName: track.id,
          trackTitle: track.title,
          journeyTitle: journeyPage.title || '',
          journeyPath:
            journeyPage.permalink || Permalink.relativePathToSuffix(journeyPage.relativePath || ''),
          currentGuideIndex: guideIndex,
          numberOfGuides: track.guides.length,
          alternativeNextStep: renderedAlternativeNextStep,
        }

        // Set up previous guide
        if (guideIndex > 0) {
          const prevGuidePath = track.guides[guideIndex - 1].href
          const guideData = await fetchGuideData(prevGuidePath, context)
          if (guideData) {
            result.prevGuide = guideData
          }
        }

        // Set up next guide
        if (guideIndex < track.guides.length - 1) {
          const nextGuidePath = track.guides[guideIndex + 1].href
          const guideData = await fetchGuideData(nextGuidePath, context)
          if (guideData) {
            result.nextGuide = guideData
          }
        }

        // Only populate nextTrackFirstGuide when on the last guide of the track
        if (guideIndex === track.guides.length - 1) {
          foundTrackIndex = trackIndex

          if (
            journeyPage.journeyTracks[foundTrackIndex + 1] &&
            journeyPage.journeyTracks[foundTrackIndex + 1].guides.length > 0
          ) {
            const nextTrack = journeyPage.journeyTracks[foundTrackIndex + 1]
            const nextTrackFirstGuidePath = nextTrack.guides[0].href
            const guideData = await fetchGuideData(nextTrackFirstGuidePath, context)
            if (guideData) {
              result.nextTrackFirstGuide = {
                ...guideData,
                trackTitle: nextTrack.title,
              }
            }
          }
        }

        break // Found the track, stop searching
      }

      trackIndex++
    }

    if (result) break // Found the journey, stop searching
  }

  return result
}

/**
 * Resolves journey tracks data from frontmatter, including rendering any Liquid.
 *
 * Returns an array of JourneyTrack objects with titles, descriptions, and guide links.
 */
export async function resolveJourneyTracks(
  journeyTracks: JourneyPage['journeyTracks'],
  context: ContentContext,
): Promise<JourneyTrack[]> {
  if (!journeyTracks || journeyTracks.length === 0) {
    return []
  }

  const result = await Promise.all(
    journeyTracks.map(async (track) => {
      // Render Liquid templates in title and description
      const renderedTitle = needsRendering(track.title)
        ? await renderContent(track.title, context, { textOnly: true })
        : track.title

      const renderedDescription =
        track.description && needsRendering(track.description)
          ? await renderContent(track.description, context, { textOnly: true })
          : track.description

      const guides = await Promise.all(
        track.guides.map(async (guide: { href: string; alternativeNextStep?: string }) => {
          const linkData = await getLinkData(guide.href, context, { title: true })
          const baseHref = linkData?.[0]?.href || guide.href
          return {
            href: baseHref,
            title: linkData?.[0]?.title || 'Untitled Guide',
          }
        }),
      )

      return {
        id: track.id,
        title: renderedTitle,
        description: renderedDescription,
        guides,
      }
    }),
  )

  return result
}
