import { getPathWithoutLanguage, getPathWithoutVersion } from '../../../lib/path-utils.js'
import getLinkData from '../lib/get-link-data.js'
import { renderContent } from '#src/content-render/index.js'
import { getDeepDataByLanguage } from '../../../lib/get-data.js'

export default async function learningTrack(req, res, next) {
  const noTrack = () => {
    req.context.currentLearningTrack = {}
    return next()
  }

  if (!req.context.page) return next()

  const trackName = req.query.learn
  if (!trackName) return noTrack()

  let trackProduct = req.context.currentProduct
  const allLearningTracks = getDeepDataByLanguage('learning-tracks', req.language)
  if (req.langauge !== 'en') {
    // Don't trust the `.guides` from the translation. It too often has
    // broken Liquid (e.g. `{% ifversion fpt 또는 ghec 또는 ghes %}`)
    const allEnglishLearningTracks = getDeepDataByLanguage('learning-tracks', 'en')
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
    trackProduct = req.query.learnProduct
    tracksPerProduct = allLearningTracks[trackProduct]
  }
  if (!tracksPerProduct) return noTrack()

  const track = allLearningTracks[trackProduct][trackName]
  if (!track) return noTrack()

  // The trackTitle comes from a data .yml file and may use Liquid templating, so we need to render it
  const renderOpts = { textOnly: true }
  const trackTitle = await renderContent(track.title, req.context, renderOpts)

  const currentLearningTrack = { trackName, trackProduct, trackTitle }
  const guidePath = getPathWithoutLanguage(getPathWithoutVersion(req.pagePath))

  // The raw track.guides will return all guide paths, need to use getLinkData
  // so we only get guides available in the current version
  const trackGuides = await getLinkData(track.guides, req.context)

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
    const result = await getLinkData(prevGuidePath, req.context, { title: true, intro: false })
    if (!result) return noTrack()

    const href = result.href
    const title = result.title
    currentLearningTrack.prevGuide = { href, title }
  }

  if (guideIndex < trackGuidePaths.length - 1) {
    const nextGuidePath = trackGuidePaths[guideIndex + 1]
    const result = await getLinkData(nextGuidePath, req.context, { title: true, intro: false })
    if (!result) return noTrack()

    const href = result.href
    const title = result.title

    currentLearningTrack.nextGuide = { href, title }
  }

  req.context.currentLearningTrack = currentLearningTrack

  return next()
}

// Find the index of a learning track guide path in an array of guide paths,
// return -1 if not found.
async function indexOfLearningTrackGuide(trackGuidePaths, guidePath, context) {
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
