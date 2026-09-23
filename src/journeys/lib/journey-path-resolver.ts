import { getPathWithoutLanguage, getPathWithoutVersion } from '@/frame/lib/path-utils'
import { renderContent } from '@/content-render/index'
import { executeWithFallback } from '@/languages/lib/render-with-fallback'
import getApplicableVersions from '@/versions/lib/get-applicable-versions'
import Permalink from '@/frame/lib/permalink'
import getLinkData from './get-link-data'
import type { Context, Page } from '@/types'

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
  description: string | null
  timeCommitment: string | null
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
  versions?: Record<string, string>
  journeyTracks?: Array<{
    id: string
    title: string
    description?: string
    timeCommitment?: string
    guides: Array<{
      href: string
      alternativeNextStep?: string
    }>
  }>
}

// All computed once, on first use.
// Guide hrefs containing Liquid can't be resolved ahead of time,
// so they're absent from cachedGuidePaths and set hasDynamicGuides instead.
let cachedJourneyPages: JourneyPage[] | null = null
let cachedGuidePaths: Set<string> | null = null
let hasDynamicGuides = false

function needsRendering(str: string): boolean {
  return str.includes('{{') || str.includes('{%') || str.includes('[') || str.includes('<')
}

function getJourneyPages(pages: Record<string, Page>): JourneyPage[] {
  if (!cachedJourneyPages) {
    cachedJourneyPages = (Object.values(pages) as JourneyPage[]).filter(
      (page) => page.journeyTracks && page.journeyTracks.length > 0,
    )
  }
  return cachedJourneyPages
}

function getGuidePaths(pages: Record<string, Page>): Set<string> {
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
  const pathWithSlash = path.startsWith('/') ? path : `/${path}`

  const withoutVersion = getPathWithoutVersion(pathWithSlash)
  const withoutLanguage = getPathWithoutLanguage(withoutVersion)

  return withoutLanguage && withoutLanguage.startsWith('/')
    ? withoutLanguage
    : `/${withoutLanguage || path}`
}

async function fetchGuideData(
  guidePath: string,
  context: Context,
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
 * Returns null if the article isn't a guide in any journey track.
 */
export async function resolveJourneyContext(
  articlePath: string,
  pages: Record<string, Page>,
  context: Context,
  currentJourneyPage?: JourneyPage,
): Promise<JourneyContext | null> {
  const normalizedPath = normalizeGuidePath(articlePath)

  if (!currentJourneyPage) {
    const guidePaths = getGuidePaths(pages)
    if (!hasDynamicGuides && !guidePaths.has(normalizedPath)) {
      return null
    }
  }

  const journeyPages = currentJourneyPage ? [currentJourneyPage] : getJourneyPages(pages)

  let result: JourneyContext | null = null

  for (const journeyPage of journeyPages) {
    if (!journeyPage.journeyTracks) continue

    // Track articles inherit the landing page's versions,
    // so a journey that doesn't apply to the current version has no navigation to show.
    if (journeyPage.versions) {
      const journeyVersions = getApplicableVersions(journeyPage.versions)
      if (!journeyVersions.includes(context.currentVersion || '')) {
        continue
      }
    }

    let trackIndex = 0
    let foundTrackIndex = 0
    for (const track of journeyPage.journeyTracks) {
      if (!track.guides || !Array.isArray(track.guides)) continue

      let guideIndex = -1

      for (let i = 0; i < track.guides.length; i++) {
        const guidePath = track.guides[i].href
        let renderedGuidePath = guidePath

        if (needsRendering(guidePath)) {
          try {
            renderedGuidePath = await executeWithFallback(
              context,
              () => renderContent(guidePath, context, { textOnly: true }),
              () => guidePath,
            )
          } catch {
            // executeWithFallback rethrows errors it can't fall back from,
            // such as any error in English.
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

        // Rendered with links intact, unlike the hrefs above which use textOnly.
        if (needsRendering(alternativeNextStep)) {
          try {
            renderedAlternativeNextStep = await executeWithFallback(
              context,
              () => renderContent(alternativeNextStep, context),
              () => alternativeNextStep,
            )
          } catch {
            renderedAlternativeNextStep = alternativeNextStep
          }
        }

        // fetchGuideData returns null for guides missing in the current version.
        // Dropping them keeps the counts and prev/next links correct.
        const availableGuides = (
          await Promise.all(
            track.guides.map(async (guide, i) => {
              const guideData = await fetchGuideData(guide.href, context)
              return guideData ? { rawIndex: i, ...guideData } : null
            }),
          )
        ).filter((g): g is { rawIndex: number; href: string; title: string } => g !== null)

        const filteredIndex = availableGuides.findIndex((g) => g.rawIndex === guideIndex)
        const filteredCount = availableGuides.length

        result = {
          trackId: track.id,
          trackName: track.id,
          trackTitle: track.title,
          journeyTitle: journeyPage.title || '',
          journeyPath:
            journeyPage.permalink || Permalink.relativePathToSuffix(journeyPage.relativePath || ''),
          currentGuideIndex: filteredIndex >= 0 ? filteredIndex : guideIndex,
          numberOfGuides: filteredCount,
          alternativeNextStep: renderedAlternativeNextStep,
        }

        if (filteredIndex > 0) {
          const prev = availableGuides[filteredIndex - 1]
          result.prevGuide = { href: prev.href, title: prev.title }
        }

        if (filteredIndex >= 0 && filteredIndex < filteredCount - 1) {
          const next = availableGuides[filteredIndex + 1]
          result.nextGuide = { href: next.href, title: next.title }
        }

        if (filteredIndex === filteredCount - 1) {
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

        break
      }

      trackIndex++
    }

    if (result) break
  }

  return result
}

/**
 * Reads journey tracks from frontmatter, rendering any Liquid they contain.
 */
export async function resolveJourneyTracks(
  journeyTracks: JourneyPage['journeyTracks'],
  context: Context,
): Promise<JourneyTrack[]> {
  if (!journeyTracks || journeyTracks.length === 0) {
    return []
  }

  const result = await Promise.all(
    journeyTracks.map(async (track) => {
      const renderedTitle = needsRendering(track.title)
        ? await renderContent(track.title, context, { textOnly: true })
        : track.title

      const renderedDescription =
        track.description && needsRendering(track.description)
          ? await renderContent(track.description, context, { textOnly: true })
          : track.description

      const renderedTimeCommitment =
        track.timeCommitment && needsRendering(track.timeCommitment)
          ? await renderContent(track.timeCommitment, context, { textOnly: true })
          : track.timeCommitment

      const guides = (
        await Promise.all(
          track.guides.map(async (guide: { href: string; alternativeNextStep?: string }) => {
            const linkData = await getLinkData(guide.href, context, { title: true })
            if (!linkData?.[0]) return null
            return {
              href: linkData[0].href,
              title: linkData[0].title || '',
            }
          }),
        )
      ).filter((g): g is { href: string; title: string } => g !== null)

      return {
        id: track.id,
        title: renderedTitle,
        description: renderedDescription || null,
        timeCommitment: renderedTimeCommitment || null,
        guides,
      }
    }),
  )

  return result
}
