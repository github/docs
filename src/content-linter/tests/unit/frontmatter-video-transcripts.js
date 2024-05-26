import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { frontmatterVideoTranscripts } from '../../lib/linting-rules/frontmatter-video-transcripts.js'

const GOOD_FIXTURE_LANDING = 'src/content-linter/tests/fixtures/actions/index.md'
const BAD_FIXTURE_LANDING = 'src/content-linter/tests/fixtures/early-access/index.md'
const GOOD_FIXTURE_TRANSCRIPT =
  'src/content-linter/tests/fixtures/video-transcripts/transcript-codespaces-your-instant-dev-box-in-the-cloud.md'
const BAD_FIXTURE_TRANSCRIPT =
  'src/content-linter/tests/fixtures/video-transcripts/transcript-using-projects-for-feature-planning.md'
const INDEX_VIDEO_TRANSCRIPT = 'src/content-linter/tests/fixtures/video-transcripts/index.md'
const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(frontmatterVideoTranscripts.names.join(' - '), () => {
  test('a video transcript with correct title and fm passes', async () => {
    const result = await runRule(frontmatterVideoTranscripts, {
      files: [GOOD_FIXTURE_TRANSCRIPT],
      ...fmOptions,
    })
    const errors = result[GOOD_FIXTURE_TRANSCRIPT]
    expect(errors.length).toBe(0)
  })
  test('a video transcript with bad title and fm fails', async () => {
    const result = await runRule(frontmatterVideoTranscripts, {
      files: [BAD_FIXTURE_TRANSCRIPT],
      ...fmOptions,
    })
    const errors = result[BAD_FIXTURE_TRANSCRIPT]
    expect(errors.length).toBe(2)
  })
  test('a product landing page with correct video transcript fm passes', async () => {
    const result = await runRule(frontmatterVideoTranscripts, {
      files: [GOOD_FIXTURE_LANDING],
      ...fmOptions,
    })
    const errors = result[GOOD_FIXTURE_LANDING]
    expect(errors.length).toBe(0)
  })
  test('a product landing page without required video transcript fm fails', async () => {
    const result = await runRule(frontmatterVideoTranscripts, {
      files: [BAD_FIXTURE_LANDING],
      ...fmOptions,
    })
    const errors = result[BAD_FIXTURE_LANDING]
    expect(errors.length).toBe(1)
  })
  test('a video transcript landing page is not checked for title and product_video properties', async () => {
    const result = await runRule(frontmatterVideoTranscripts, {
      files: [INDEX_VIDEO_TRANSCRIPT],
      ...fmOptions,
    })
    const errors = result[INDEX_VIDEO_TRANSCRIPT]
    expect(errors.length).toBe(0)
  })
})
