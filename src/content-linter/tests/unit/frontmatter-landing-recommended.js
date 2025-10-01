import { describe, expect, test } from 'vitest'

import { runRule } from '@/content-linter/lib/init-test'
import { frontmatterLandingRecommended } from '@/content-linter/lib/linting-rules/frontmatter-landing-recommended'

const VALID_LANDING = 'src/content-linter/tests/fixtures/landing-recommended/valid-landing.md'
const INVALID_NON_LANDING =
  'src/content-linter/tests/fixtures/landing-recommended/invalid-non-landing.md'
const DUPLICATE_RECOMMENDED =
  'src/content-linter/tests/fixtures/landing-recommended/duplicate-recommended.md'
const INVALID_PATHS = 'src/content-linter/tests/fixtures/landing-recommended/invalid-paths.md'
const NO_RECOMMENDED = 'src/content-linter/tests/fixtures/landing-recommended/no-recommended.md'

const ruleName = frontmatterLandingRecommended.names[1]

// Configure the test fixture to not split frontmatter and content
const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(ruleName, () => {
  test('landing page with recommended articles passes', async () => {
    const result = await runRule(frontmatterLandingRecommended, {
      files: [VALID_LANDING],
      ...fmOptions,
    })
    expect(result[VALID_LANDING]).toEqual([])
  })

  test('non-landing page with recommended property fails', async () => {
    const result = await runRule(frontmatterLandingRecommended, {
      files: [INVALID_NON_LANDING],
      ...fmOptions,
    })
    expect(result[INVALID_NON_LANDING]).toHaveLength(1)
    expect(result[INVALID_NON_LANDING][0].errorDetail).toContain(
      'recommended frontmatter key is only valid for landing pages',
    )
  })

  test('pages without recommended property pass', async () => {
    const result = await runRule(frontmatterLandingRecommended, {
      files: [NO_RECOMMENDED],
      ...fmOptions,
    })
    expect(result[NO_RECOMMENDED]).toEqual([])
  })

  test('page with duplicate recommended articles fails', async () => {
    const result = await runRule(frontmatterLandingRecommended, {
      files: [DUPLICATE_RECOMMENDED],
      ...fmOptions,
    })
    expect(result[DUPLICATE_RECOMMENDED]).toHaveLength(1) // Only duplicate error since all paths are valid
    expect(result[DUPLICATE_RECOMMENDED][0].errorDetail).toContain(
      'Found duplicate recommended articles: /article-one',
    )
  })

  test('page with invalid recommended article paths fails', async () => {
    const result = await runRule(frontmatterLandingRecommended, {
      files: [INVALID_PATHS],
      ...fmOptions,
    })
    expect(result[INVALID_PATHS]).toHaveLength(1)
    expect(result[INVALID_PATHS][0].errorDetail).toContain(
      'Found invalid recommended article paths:',
    )
    expect(result[INVALID_PATHS][0].errorDetail).toContain('/nonexistent/path')
    expect(result[INVALID_PATHS][0].errorDetail).toContain('/another/invalid/path')
  })

  test('page with valid recommended articles passes', async () => {
    const result = await runRule(frontmatterLandingRecommended, {
      files: [VALID_LANDING],
      ...fmOptions,
    })
    expect(result[VALID_LANDING]).toEqual([])
  })
})
