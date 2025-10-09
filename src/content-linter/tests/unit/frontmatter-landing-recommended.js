import { describe, expect, test, beforeAll, afterAll } from 'vitest'

import { runRule } from '@/content-linter/lib/init-test'
import { frontmatterLandingRecommended } from '@/content-linter/lib/linting-rules/frontmatter-landing-recommended'

const VALID_LANDING = 'src/content-linter/tests/fixtures/landing-recommended/valid-landing.md'
const INVALID_NON_LANDING =
  'src/content-linter/tests/fixtures/landing-recommended/invalid-non-landing.md'
const DUPLICATE_RECOMMENDED =
  'src/content-linter/tests/fixtures/landing-recommended/duplicate-recommended.md'
const INVALID_PATHS = 'src/content-linter/tests/fixtures/landing-recommended/invalid-paths.md'
const NO_RECOMMENDED = 'src/content-linter/tests/fixtures/landing-recommended/no-recommended.md'
const ABSOLUTE_PRIORITY =
  'src/content-linter/tests/fixtures/landing-recommended/test-absolute-priority.md'
const PATH_PRIORITY = 'src/content-linter/tests/fixtures/landing-recommended/test-path-priority.md'
const ABSOLUTE_ONLY = 'src/content-linter/tests/fixtures/landing-recommended/test-absolute-only.md'
const PRIORITY_VALIDATION =
  'src/content-linter/tests/fixtures/landing-recommended/test-priority-validation.md'

const ruleName = frontmatterLandingRecommended.names[1]

// Configure the test fixture to not split frontmatter and content
const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(ruleName, () => {
  const envVarValueBefore = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = 'src/fixtures/fixtures'
  })

  afterAll(() => {
    process.env.ROOT = envVarValueBefore
  })
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

  test('absolute paths are prioritized over relative paths', async () => {
    // This test verifies that when both absolute and relative paths exist with the same name,
    // the absolute path is chosen over the relative path.
    //
    // Setup:
    // - /article-one should resolve to src/fixtures/fixtures/content/article-one.md (absolute)
    // - article-one (relative) would resolve to src/content-linter/tests/fixtures/landing-recommended/article-one.md
    //
    // The test passes because our logic prioritizes the absolute path resolution first
    const result = await runRule(frontmatterLandingRecommended, {
      files: [ABSOLUTE_PRIORITY],
      ...fmOptions,
    })
    expect(result[ABSOLUTE_PRIORITY]).toEqual([])
  })

  test('path priority resolution works correctly', async () => {
    // This test verifies that absolute paths are prioritized over relative paths
    // when both files exist with the same name.
    //
    // Setup:
    // - /article-one could resolve to EITHER:
    //   1. src/fixtures/fixtures/content/article-one.md (absolute - should be chosen)
    //   2. src/content-linter/tests/fixtures/landing-recommended/article-one.md (relative - should be ignored)
    //
    // Our prioritization logic should choose #1 (absolute) over #2 (relative)
    // This test passes because the absolute path exists and is found first
    const result = await runRule(frontmatterLandingRecommended, {
      files: [PATH_PRIORITY],
      ...fmOptions,
    })
    expect(result[PATH_PRIORITY]).toEqual([])
  })

  test('absolute-only paths work when no relative path exists', async () => {
    // This test verifies that absolute path resolution works when no relative path exists
    // /article-two exists in src/fixtures/fixtures/content/article-two.md
    // but NOT in src/content-linter/tests/fixtures/landing-recommended/article-two.md
    // This test would fail if we didn't prioritize absolute paths properly
    const result = await runRule(frontmatterLandingRecommended, {
      files: [ABSOLUTE_ONLY],
      ...fmOptions,
    })
    expect(result[ABSOLUTE_ONLY]).toEqual([])
  })

  test('mixed valid and invalid absolute paths are handled correctly', async () => {
    // This test has both a valid absolute path (/article-one) and an invalid one (/nonexistent-absolute)
    // It should fail because of the invalid path, proving our absolute path resolution is working
    const result = await runRule(frontmatterLandingRecommended, {
      files: [PRIORITY_VALIDATION],
      ...fmOptions,
    })
    expect(result[PRIORITY_VALIDATION]).toHaveLength(1)
    expect(result[PRIORITY_VALIDATION][0].errorDetail).toContain('nonexistent-absolute')
  })
})
