const renderContent = require('./render-content')
const getLinkData = require('./get-link-data')

const renderOpts = { textOnly: true, encodeEntities: true }

module.exports = async function processLearningTracks (rawLearningTracks, context) {
  const learningTracks = []

  let featuredTrack

  for await (const rawTrackName of rawLearningTracks) {
    // Track names in frontmatter may include Liquid conditionals
    const renderedTrackName = await renderContent(rawTrackName, context, renderOpts)
    if (!renderedTrackName) continue

    const track = context.site.data['learning-tracks'][context.currentProduct][renderedTrackName]
    if (!track) continue

    const learningTrack = {
      trackName: renderedTrackName,
      title: await renderContent(track.title, context, renderOpts),
      description: await renderContent(track.description, context, renderOpts),
      // getLinkData respects versioning and only returns guides available in the current version;
      // if no guides are available, the learningTrack.guides property will be an empty array.
      guides: await getLinkData(track.guides, context)
    }

    if (track.featured_track) {
      // Set the featured track, which is not included in the array of other learning tracks.
      featuredTrack = learningTrack
    } else {
      // Only add the track to the array of tracks if there are guides in this version.
      if (learningTrack.guides.length) {
        learningTracks.push(learningTrack)
      }
    }
  }

  return { featuredTrack, learningTracks }
}
