import { addError } from 'markdownlint-rule-helpers'
import path from 'path'

import { getFrontmatter } from '../helpers/utils.js'

export const frontmatterVideoTranscripts = {
  names: ['GH011', 'frontmatter-video-transcripts'],
  description: 'Video transcript must be configured correctly',
  tags: ['frontmatter', 'feature', 'video-transcripts'],
  function: (params, onError) => {
    const filepath = params.name

    const fm = getFrontmatter(params.lines)
    if (!fm) return

    const isTranscriptContent =
      filepath.includes('video-transcripts') && path.basename(filepath) !== 'index.md'

    // Video transcripts must have specific frontmatter properties
    if (isTranscriptContent) {
      if (!fm.product_video) {
        const lineNumber = 1
        addError(
          onError,
          lineNumber,
          'Video transcripts must contain an referenece to the video being transcribed. Ensure the frontmatter property `product_video` is set to the path of the video.',
          null, // No context because the property is missing
          null, // No range for missing line
          null, // No fix possible
        )
      }
      if (!fm.title.startsWith('Transcript - ')) {
        const lineNumber = params.lines.findIndex((line) => line.startsWith('title:')) + 1
        const lineContent = params.lines[lineNumber - 1]
        addError(
          onError,
          lineNumber,
          'Video transcript pages must prepend the frontmatter title property with "Transcript - ".',
          lineContent,
          [1, lineContent.length],
          null, // No fix possible
        )
      }
    }

    // A landing page that defines either a product_video or
    // product_video_transcript frontmatter must define both
    if (fm.layout === 'product-landing' && (fm.product_video || fm.product_video_transcript)) {
      const lineNumber =
        params.lines.findIndex(
          (line) =>
            line.startsWith('product_video_transcript:') || line.startsWith('product_video:'),
        ) + 1
      const lineContent = params.lines[lineNumber - 1]
      if (
        !fm.product_video_transcript ||
        !fm.product_video_transcript.startsWith('/video-transcripts/')
      ) {
        addError(
          onError,
          lineNumber,
          'Videos on product landing pages must contain a video transcript. Ensure the frontmatter property `product_video_transcript` is set to the path of the transcript in the video-transcript directory.',
          lineContent,
          [1, lineContent.length],
          null, // No fix possible
        )
      }
      if (!fm.product_video) {
        addError(
          onError,
          lineNumber,
          'Video transcripts on product landing pages must have a product video. Ensure the frontmatter property `product_video` is set to the path of the video.',
          lineContent,
          [1, lineContent.length],
          null, // No fix possible
        )
      }
    }
  },
}
