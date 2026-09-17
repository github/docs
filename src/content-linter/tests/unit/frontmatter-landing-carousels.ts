import { describe, expect, test, beforeAll, afterAll } from 'vitest'

import { runRule } from '@/content-linter/lib/init-test'
import { frontmatterLandingCarousels } from '@/content-linter/lib/linting-rules/frontmatter-landing-carousels'

const VALID_LANDING = 'src/content-linter/tests/fixtures/landing-carousels/valid-landing.md'
const INVALID_NON_LANDING =
  'src/content-linter/tests/fixtures/landing-carousels/invalid-non-landing.md'
const DUPLICATE_CAROUSELS =
  'src/content-linter/tests/fixtures/landing-carousels/duplicate-carousels.md'
const INVALID_PATHS = 'src/content-linter/tests/fixtures/landing-carousels/invalid-paths.md'
const NO_CAROUSELS = 'src/content-linter/tests/fixtures/landing-carousels/no-carousels.md'
const ABSOLUTE_PRIORITY =
  'src/content-linter/tests/fixtures/landing-carousels/test-absolute-priority.md'
const PATH_PRIORITY = 'src/content-linter/tests/fixtures/landing-carousels/test-path-priority.md'
const ABSOLUTE_ONLY = 'src/content-linter/tests/fixtures/landing-carousels/test-absolute-only.md'
const PRIORITY_VALIDATION =
  'src/content-linter/tests/fixtures/landing-carousels/test-priority-validation.md'

const ruleName = frontmatterLandingCarousels.names[1]

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
  test('landing page with carousel articles passes', async () => {
    const result = await runRule(frontmatterLandingCarousels, {
      files: [VALID_LANDING],
      ...fmOptions,
    })
    expect(result[VALID_LANDING]).toEqual([])
  })

  test('non-landing page with carousels property fails', async () => {
    const result = await runRule(frontmatterLandingCarousels, {
      files: [INVALID_NON_LANDING],
      ...fmOptions,
    })
    expect(result[INVALID_NON_LANDING]).toHaveLength(1)
    expect(result[INVALID_NON_LANDING][0].errorDetail).toContain(
      'carousels frontmatter key is only valid for landing pages',
    )
  })

  test('pages without carousels property pass', async () => {
    const result = await runRule(frontmatterLandingCarousels, {
      files: [NO_CAROUSELS],
      ...fmOptions,
    })
    expect(result[NO_CAROUSELS]).toEqual([])
  })

  test('page with duplicate carousel articles fails', async () => {
    const result = await runRule(frontmatterLandingCarousels, {
      files: [DUPLICATE_CAROUSELS],
      ...fmOptions,
    })
    expect(result[DUPLICATE_CAROUSELS]).toHaveLength(1) // Only duplicate error since all paths are valid
    expect(result[DUPLICATE_CAROUSELS][0].errorDetail).toContain(
      "Found duplicate articles in carousel 'recommended': /article-one",
    )
  })

  test('page with invalid carousel article paths fails', async () => {
    const result = await runRule(frontmatterLandingCarousels, {
      files: [INVALID_PATHS],
      ...fmOptions,
    })
    expect(result[INVALID_PATHS]).toHaveLength(1)
    expect(result[INVALID_PATHS][0].errorDetail).toContain(
      "Found invalid article paths in carousel 'recommended':",
    )
    expect(result[INVALID_PATHS][0].errorDetail).toContain('/nonexistent/path')
    expect(result[INVALID_PATHS][0].errorDetail).toContain('/another/invalid/path')
  })

  test('page with valid carousel articles passes', async () => {
    const result = await runRule(frontmatterLandingCarousels, {
      files: [VALID_LANDING],
      ...fmOptions,
    })
    expect(result[VALID_LANDING]).toEqual([])
  })

  test('absolute paths are prioritized over relative paths', async () => {
    // /article-one exists both as src/fixtures/fixtures/content/article-one.md
    // and as src/content-linter/tests/fixtures/landing-carousels/article-one.md.
    // The absolute resolution wins.
    const result = await runRule(frontmatterLandingCarousels, {
      files: [ABSOLUTE_PRIORITY],
      ...fmOptions,
    })
    expect(result[ABSOLUTE_PRIORITY]).toEqual([])
  })

  test('path priority resolution works correctly', async () => {
    // Same collision as the test above, reached through a different fixture.
    const result = await runRule(frontmatterLandingCarousels, {
      files: [PATH_PRIORITY],
      ...fmOptions,
    })
    expect(result[PATH_PRIORITY]).toEqual([])
  })

  test('absolute-only paths work when no relative path exists', async () => {
    // /article-two resolves from src/fixtures/fixtures/content/article-two.md.
    const result = await runRule(frontmatterLandingCarousels, {
      files: [ABSOLUTE_ONLY],
      ...fmOptions,
    })
    expect(result[ABSOLUTE_ONLY]).toEqual([])
  })

  test('mixed valid and invalid absolute paths are handled correctly', async () => {
    // This test has both a valid absolute path (/article-one) and an invalid one (/nonexistent-absolute)
    // It should fail because of the invalid path, proving our absolute path resolution is working
    const result = await runRule(frontmatterLandingCarousels, {
      files: [PRIORITY_VALIDATION],
      ...fmOptions,
    })
    expect(result[PRIORITY_VALIDATION]).toHaveLength(1)
    expect(result[PRIORITY_VALIDATION][0].errorDetail).toContain('nonexistent-absolute')
  })
})
