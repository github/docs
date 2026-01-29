import { describe, expect, test, beforeAll, afterAll } from 'vitest'

import { runRule } from '@/content-linter/lib/init-test'
import { frontmatterChildren } from '@/content-linter/lib/linting-rules/frontmatter-children'

const VALID_CONTENT_PREFIX =
  'src/content-linter/tests/fixtures/frontmatter-children/valid-content-prefix.md'
const INVALID_PATHS = 'src/content-linter/tests/fixtures/frontmatter-children/invalid-paths.md'
const NO_CHILDREN = 'src/content-linter/tests/fixtures/frontmatter-children/no-children.md'

const ruleName = frontmatterChildren.names[1]

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

  test('page with valid /content/ prefixed children paths passes', async () => {
    const result = await runRule(frontmatterChildren, {
      files: [VALID_CONTENT_PREFIX],
      ...fmOptions,
    })
    expect(result[VALID_CONTENT_PREFIX]).toEqual([])
  })

  test('page without children property passes', async () => {
    const result = await runRule(frontmatterChildren, {
      files: [NO_CHILDREN],
      ...fmOptions,
    })
    expect(result[NO_CHILDREN]).toEqual([])
  })

  test('page with invalid children paths fails', async () => {
    const result = await runRule(frontmatterChildren, {
      files: [INVALID_PATHS],
      ...fmOptions,
    })
    expect(result[INVALID_PATHS]).toHaveLength(1)
    expect(result[INVALID_PATHS][0].errorDetail).toContain('Found invalid children paths:')
    expect(result[INVALID_PATHS][0].errorDetail).toContain('/content/nonexistent/product')
    expect(result[INVALID_PATHS][0].errorDetail).toContain('/another/invalid/path')
  })
})
