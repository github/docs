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
  nextGuide?: {
    href: string
    title: string
  }
  prevGuide?: {
    href: string
    title: string
  }
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
    guides: string[]
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

function getJourneyPages(pages: Pages): JourneyPage[] {
  if (!cachedJourneyPages) {
    cachedJourneyPages = Object.values(pages).filter(
      (page: any) => page.journeyTracks && page.journeyTracks.length > 0,
    ) as JourneyPage[]
  }
  return cachedJourneyPages
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

    for (const track of journeyPage.journeyTracks) {
      if (!track.guides || !Array.isArray(track.guides)) continue

      // Find if current article is in this track
      let guideIndex = -1

      for (let i = 0; i < track.guides.length; i++) {
        const guidePath = track.guides[i]
        let renderedGuidePath = guidePath

        // Handle Liquid conditionals in guide paths
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

        const normalizedGuidePath = normalizeGuidePath(renderedGuidePath)

        if (normalizedGuidePath === normalizedPath) {
          guideIndex = i
          break
        }
      }

      if (guideIndex >= 0) {
        result = {
          trackId: track.id,
          trackName: track.id,
          trackTitle: track.title,
          journeyTitle: journeyPage.title || '',
          journeyPath:
            journeyPage.permalink || Permalink.relativePathToSuffix(journeyPage.relativePath || ''),
          currentGuideIndex: guideIndex,
          numberOfGuides: track.guides.length,
        }

        // Set up previous guide
        if (guideIndex > 0) {
          const prevGuidePath = track.guides[guideIndex - 1]
          try {
            const resultData = await getLinkData(prevGuidePath, context, {
              title: true,
              intro: false,
              fullTitle: false,
            })
            if (resultData && resultData.length > 0) {
              const linkResult = resultData[0]
              result.prevGuide = {
                href: linkResult.href,
                title: linkResult.title || '',
              }
            }
          } catch (error) {
            console.warn('Could not get link data for previous guide:', prevGuidePath, error)
          }
        }

        // Set up next guide
        if (guideIndex < track.guides.length - 1) {
          const nextGuidePath = track.guides[guideIndex + 1]
          try {
            const resultData = await getLinkData(nextGuidePath, context, {
              title: true,
              intro: false,
              fullTitle: false,
            })
            if (resultData && resultData.length > 0) {
              const linkResult = resultData[0]
              result.nextGuide = {
                href: linkResult.href,
                title: linkResult.title || '',
              }
            }
          } catch (error) {
            console.warn('Could not get link data for next guide:', nextGuidePath, error)
          }
        }

        break // Found the track, stop searching
      }
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
  journeyTracks: any[],
  context: ContentContext,
): Promise<JourneyTrack[]> {
  const result = await Promise.all(
    journeyTracks.map(async (track: any) => {
      // Render Liquid templates in title and description
      const renderedTitle = await renderContent(track.title, context, { textOnly: true })
      const renderedDescription = track.description
        ? await renderContent(track.description, context, { textOnly: true })
        : undefined

      const guides = await Promise.all(
        track.guides.map(async (guidePath: string) => {
          const linkData = await getLinkData(guidePath, context, { title: true })
          const baseHref = linkData?.[0]?.href || guidePath
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
