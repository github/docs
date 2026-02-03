import getLinkData from './get-link-data'
import getApplicableVersions from '@/versions/lib/get-applicable-versions'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import { renderContent } from '@/content-render/index'
import { executeWithFallback } from '@/languages/lib/render-with-fallback'
import { Context, TrackGuide, LearningTrack, ProcessedLearningTracks } from './types'

const renderOpts = { textOnly: true }

// This module returns an object that contains a single featured learning track
// and an array of all the other learning tracks for the current version.
export default async function processLearningTracks(
  rawLearningTracks: string[],
  context: Context,
): Promise<ProcessedLearningTracks> {
  const learningTracks: LearningTrack[] = []

  if (!context.currentProduct) {
    throw new Error(`Missing context.currentProduct value.`)
  }

  for (const rawTrackName of rawLearningTracks) {
    // Track names in frontmatter may include Liquid conditionals.
    const renderedTrackName = rawTrackName.includes('{')
      ? await executeWithFallback(
          context,
          () => renderContent(rawTrackName, context, renderOpts),
          (enContext: Context) => renderContent(rawTrackName, enContext, renderOpts),
        )
      : rawTrackName
    if (!renderedTrackName) continue

    // Find the data for the current product and track name.

    if (context.currentProduct.includes('.')) {
      throw new Error(`currentProduct cannot contain a . (${context.currentProduct})`)
    }
    if (renderedTrackName.includes('.')) {
      throw new Error(`renderedTrackName cannot contain a . (${renderedTrackName})`)
    }

    // Note: this will use the translated learning tracks and automatically
    // fall back to English if they don't exist on disk in the translation.
    const track = getDataByLanguage(
      `learning-tracks.${context.currentProduct}.${renderedTrackName}`,
      context.currentLanguage!,
    )
    if (!track) {
      throw new Error(`No learning track called '${renderedTrackName}'.`)
    }

    // If the current language isn't 'en' we need to prepare and have the
    // English equivalent ready.
    // We do this for two reasons:
    //
    //   1. For each learning-track .yml file (in data) always want the
    //      English values for `guides`, `versions`.
    //       Meaning, for the translated learning tracks we only keep the
    //      `title` and `description`.
    //
    //   2. When we attempt to render the translated learning tracks'
    //      `title` and `description`, if they are failing to render,
    //      we need to have the English `title` and `description` to
    //      fall back to.
    //
    let enTrack: any
    if (context.currentLanguage !== 'en') {
      enTrack = getDataByLanguage(
        `learning-tracks.${context.currentProduct}.${renderedTrackName}`,
        'en',
      )
      // Sometimes the translations have more than just translated the
      // `title` and `description`, but also things that don't make sense
      // to translate like `guides` and `versions`. Always draw that
      // from the English equivalent.
      track.guides = enTrack.guides
      track.versions = enTrack.versions
    }

    // If there is no `versions` prop in the learning track frontmatter, assume the track should display in all versions.
    if (track.versions) {
      const trackVersions = getApplicableVersions(track.versions)

      // If the current version is not included, do not display the track.
      if (!context.currentVersion || !trackVersions.includes(context.currentVersion)) {
        continue
      }
    }

    const title = await executeWithFallback(
      context,
      () => renderContent(track.title, context, renderOpts),
      (enContext: any) => renderContent(enTrack.title, enContext, renderOpts),
    )
    const description = await executeWithFallback(
      context,
      () => renderContent(track.description, context, renderOpts),
      (enContext: any) => renderContent(enTrack.description, enContext, renderOpts),
    )

    const guides = (await getLinkData(track.guides, context)) || []

    const learningTrack: LearningTrack = {
      trackName: renderedTrackName,
      trackProduct: context.currentProduct || null,
      title,
      description,
      // getLinkData respects versioning and only returns guides available in the current version;
      // if no guides are available, the learningTrack.guides property will be an empty array.
      guides: guides as TrackGuide[],
    }

    // Only add the track to the array of tracks if there are guides in this version and it's not the featured track.
    if (Array.isArray(learningTrack.guides) && learningTrack.guides.length > 0) {
      learningTracks.push(learningTrack)
    }
  }

  return { learningTracks }
}
