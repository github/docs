import type { Response, NextFunction } from 'express'

import type {
  Context,
  ExtendedRequest,
  LearningTrack,
  LearningTracks,
  TrackGuide,
  Page,
} from '@/types'
import { getPathWithoutLanguage, getPathWithoutVersion } from '@/frame/lib/path-utils.js'
import getLinkData from '../lib/get-link-data.js'
import { renderContent } from '@/content-render/index.js'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data.js'

export default async function learningTrack(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.context) throw new Error('request is not contextualized')

  const noTrack = () => {
    req.context!.currentLearningTrack = null
    return next()
  }

  if (!req.context.page) return next()

  if (!req.query.learn) return noTrack()
  if (Array.isArray(req.query.learn)) return noTrack()
  const trackName = req.query.learn as string

  let trackProduct = req.context.currentProduct as string
  // TODO: Once getDeepDataByLanguage is ported to TS
  // a more appropriate API would be to use `getDeepDataByLanguage<LearningTracks)(...)`
  const allLearningTracks = getDeepDataByLanguage('learning-tracks', req.language) as LearningTracks

  if (req.language !== 'en') {
    // Don't trust the `.guides` from the translation. It too often has
    // broken Liquid (e.g. `{% ifversion fpt 또는 ghec 또는 ghes %}`)
    const allEnglishLearningTracks = getDeepDataByLanguage(
      'learning-tracks',
      'en',
    ) as LearningTracks
    for (const [key, tracks] of Object.entries(allLearningTracks)) {
      if (!(key in allEnglishLearningTracks)) {
        // This can happen when the translation of
        // `data/learning-tracks/foo.yml` has stuff in it that the English
        // content no longer has. In that case, just skip it.
        delete allLearningTracks[key]
        console.warn('No English learning track for %s', key)
        continue
      }
      for (const [name, track] of Object.entries(tracks)) {
        // If this individual track does no longer exist in English,
        // delete it from the translation too.
        if (!(name in allEnglishLearningTracks[key])) {
          delete tracks[name]
          continue
        }
        track.guides = allEnglishLearningTracks[key][name].guides
      }
    }
  }
  let tracksPerProduct = allLearningTracks[trackProduct]

  // If there are no learning tracks for the current product, try and fall
  // back to the learning track product set as a URL parameter.  This handles
  // the case where a learning track has guide paths for a different product
  // than the current learning track product.
  if (!tracksPerProduct) {
    if (!req.query.learnProduct) return noTrack()
    if (Array.isArray(req.query.learnProduct)) {
      trackProduct = req.query.learnProduct[0] as string
    } else {
      trackProduct = req.query.learnProduct as string
    }
    tracksPerProduct = allLearningTracks[trackProduct]
  }
  if (!tracksPerProduct) return noTrack()

  const track = allLearningTracks[trackProduct][trackName]
  if (!track) return noTrack()

  // The trackTitle comes from a data .yml file and may use Liquid templating, so we need to render it
  const renderOpts = { textOnly: true }
  const trackTitle = (await renderContent(track.title, req.context, renderOpts)) as string

  const currentLearningTrack: LearningTrack = { trackName, trackProduct, trackTitle }
  const guidePath = getPathWithoutLanguage(getPathWithoutVersion(req.pagePath))

  // The raw track.guides will return all guide paths, need to use getLinkData
  // so we only get guides available in the current version
  const trackGuides = (await getLinkData(track.guides, req.context)) as TrackGuide[]

  const trackGuidePaths = trackGuides.map((guide) => {
    return getPathWithoutLanguage(getPathWithoutVersion(guide.href))
  })

  let guideIndex = trackGuidePaths.findIndex((path) => path === guidePath)

  // The learning track path may use Liquid version conditionals, handle the
  // case where the requested path is a learning track path but won't match
  // because of a Liquid conditional.
  if (guideIndex < 0) {
    guideIndex = await indexOfLearningTrackGuide(trackGuidePaths, guidePath, req.context)
  }

  // Also check if the learning track path is now a redirect to the requested
  // page, we still want to render the learning track banner in that case.
  // Also handles Liquid conditionals in the track path.
  if (guideIndex < 0) {
    for (const redirect of req.context.page.redirect_from || []) {
      if (guideIndex >= 0) break

      guideIndex = await indexOfLearningTrackGuide(trackGuidePaths, redirect, req.context)
    }
  }

  if (guideIndex < 0) return noTrack()

  currentLearningTrack.numberOfGuides = trackGuidePaths.length
  currentLearningTrack.currentGuideIndex = guideIndex

  if (guideIndex > 0) {
    const prevGuidePath = trackGuidePaths[guideIndex - 1]
    const resultData = await getLinkData(prevGuidePath, req.context, {
      title: true,
      intro: false,
      fullTitle: false,
    })
    if (!resultData) return noTrack()
    const result = resultData as { href: string; page: Page; title: string }

    const href = result.href
    const title = result.title
    currentLearningTrack.prevGuide = { href, title }
  }

  if (guideIndex < trackGuidePaths.length - 1) {
    const nextGuidePath = trackGuidePaths[guideIndex + 1]
    const resultData = await getLinkData(nextGuidePath, req.context, {
      title: true,
      intro: false,
      fullTitle: false,
    })
    if (!resultData) return noTrack()
    const result = resultData as { href: string; page: Page; title: string }

    const href = result.href
    const title = result.title

    currentLearningTrack.nextGuide = { href, title }
  }

  req.context.currentLearningTrack = currentLearningTrack

  return next()
}

// Find the index of a learning track guide path in an array of guide paths,
// return -1 if not found.
async function indexOfLearningTrackGuide(
  trackGuidePaths: string[],
  guidePath: string,
  context: Context,
) {
  let guideIndex = -1

  for (let i = 0; i < trackGuidePaths.length; i++) {
    // Learning track URLs may have Liquid conditionals.
    const renderedGuidePath = await renderContent(trackGuidePaths[i], context, { textOnly: true })

    if (!renderedGuidePath) continue

    if (renderedGuidePath === guidePath) {
      guideIndex = i
      break
    }
  }

  return guideIndex
}
