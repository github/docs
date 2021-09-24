import { getPathWithoutLanguage, getPathWithoutVersion } from '../lib/path-utils.js'
import getLinkData from '../lib/get-link-data.js'

export default async function learningTrack(req, res, next) {
  const noTrack = () => {
    req.context.currentLearningTrack = {}
    return next()
  }

  if (!req.context.page) return next()

  const trackName = req.query.learn
  if (!trackName) return noTrack()

  const tracksPerProduct = req.context.site.data['learning-tracks'][req.context.currentProduct]
  if (!tracksPerProduct) return noTrack()

  const track = req.context.site.data['learning-tracks'][req.context.currentProduct][trackName]
  if (!track) return noTrack()

  const currentLearningTrack = { trackName }

  const guidePath = getPathWithoutLanguage(getPathWithoutVersion(req.pagePath))
  let guideIndex = track.guides.findIndex((path) => path === guidePath)

  if (guideIndex < 0) {
    // Also check if the learning track URL is now a redirect to the requested
    // page, we still want to render the learning track banner in that case.
    for (const redirect of req.context.page.redirect_from) {
      track.guides.forEach((path, i) => {
        if (path === redirect) {
          guideIndex = i
        }
      })
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
