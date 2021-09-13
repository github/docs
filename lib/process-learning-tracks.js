import renderContent from './render-content/index.js'
import getLinkData from './get-link-data.js'
import getApplicableVersions from './get-applicable-versions.js'

const renderOpts = { textOnly: true, encodeEntities: true }

// This module returns an object that contains a single featured learning track
// and an array of all the other learning tracks for the current version.
export default async function processLearningTracks(rawLearningTracks, context) {
  const learningTracks = []

  let featuredTrack

  for (const rawTrackName of rawLearningTracks) {
    let isFeaturedTrack = false

    // Track names in frontmatter may include Liquid conditionals.
    const renderedTrackName = await renderContent(rawTrackName, context, renderOpts)
    if (!renderedTrackName) continue

    // Find the data for the current product and track name.
    const track = context.site.data['learning-tracks'][context.currentProduct][renderedTrackName]
    if (!track) continue

    // If there is no `versions` prop in the learning track frontmatter, assume the track should display in all versions.
    if (track.versions) {
      const trackVersions = getApplicableVersions(track.versions)

      // If the current version is not included, do not display the track.
      if (!trackVersions.includes(context.currentVersion)) {
        continue
      }
    }

    const learningTrack = {
      trackName: renderedTrackName,
      title: await renderContent(track.title, context, renderOpts),
      description: await renderContent(track.description, context, renderOpts),
      // getLinkData respects versioning and only returns guides available in the current version;
      // if no guides are available, the learningTrack.guides property will be an empty array.
      guides: await getLinkData(track.guides, context),
    }

    // Determine if this is the featured track.
    if (track.featured_track) {
      // Featured track properties may be booleans or string that include Liquid conditionals with versioning.
      // We need to parse any strings to determine if the featured track is relevant for this version.
      isFeaturedTrack =
        track.featured_track === true ||
        (await renderContent(track.featured_track, context, renderOpts)) === 'true'

      if (isFeaturedTrack) {
        featuredTrack = learningTrack
      }
    }

    // Only add the track to the array of tracks if there are guides in this version and it's not the featured track.
    if (learningTrack.guides.length && !isFeaturedTrack) {
      learningTracks.push(learningTrack)
    }
  }

  return { featuredTrack, learningTracks }
}
