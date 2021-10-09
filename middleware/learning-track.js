import { getPathWithoutLanguage, getPathWithoutVersion } from '../lib/path-utils.js'
import getLinkData from '../lib/get-link-data.js'
import renderContent from '../lib/render-content/renderContent.js'

export default async function learningTrack(req, res, next) {
  const noTrack = () => {
    req.context.currentLearningTrack = {}
    return next()
  }

  if (!req.context.page) return next()

  const trackName = req.query.learn
  if (!trackName) return noTrack()

  let trackProduct = req.context.currentProduct
  let tracksPerProduct = req.context.site.data['learning-tracks'][trackProduct]

  // If there are no learning tracks for the current product, try and fall
  // back to the learning track product set as a URL parameter.  This handles
  // the case where a learning track has guide paths for a different product
  // than the current learning track product.
  if (!tracksPerProduct) {
    trackProduct = req.query.learnProduct
    tracksPerProduct = req.context.site.data['learning-tracks'][trackProduct]
  }

  if (!tracksPerProduct) return noTrack()

  const track = req.context.site.data['learning-tracks'][trackProduct][trackName]
  if (!track) return noTrack()

  const currentLearningTrack = { trackName, trackProduct }
  const guidePath = getPathWithoutLanguage(getPathWithoutVersion(req.pagePath))
  let guideIndex = track.guides.findIndex((path) => path === guidePath)

  // The learning track path may use Liquid version conditionals, handle the
  // case where the requested path is a learning track path but won't match
  // because of a Liquid conditional.
  if (guideIndex < 0) {
    guideIndex = await indexOfLearningTrackGuide(track.guides, guidePath, req.context)
  }

  // Also check if the learning track path is now a redirect to the requested
  // page, we still want to render the learning track banner in that case.
  // Also handles Liquid conditionals in the track path.
  if (guideIndex < 0) {
    for (const redirect of req.context.page.redirect_from) {
      if (guideIndex >= 0) break

      guideIndex = await indexOfLearningTrackGuide(track.guides, redirect, req.context)
    }
  }

  if (guideIndex < 0) return noTrack()

  if (guideIndex > 0) {
    const prevGuidePath = track.guides[guideIndex - 1]
    const result = await getLinkData(prevGuidePath, req.context, { title: true, intro: false })
    if (!result) return noTrack()

    const href = result.href
    const title = result.title
    currentLearningTrack.prevGuide = { href, title }
  }

  if (guideIndex < track.guides.length - 1) {
    const nextGuidePath = track.guides[guideIndex + 1]
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
  const renderOpts = { textOnly: true, encodeEntities: true }

  for (let i = 0; i < trackGuidePaths.length; i++) {
    // Learning track URLs may have Liquid conditionals.
    const renderedGuidePath = await renderContent(trackGuidePaths[i], context, renderOpts)

    if (!renderedGuidePath) continue

    if (renderedGuidePath === guidePath) {
      guideIndex = i
      break
    }
  }

  return guideIndex
}
