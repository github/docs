import { describe, expect, test, beforeEach, beforeAll, afterAll } from 'vitest'

import { runRule } from '@/content-linter/lib/init-test'
import {
  frontmatterContentType,
  resetCache,
} from '@/content-linter/lib/linting-rules/frontmatter-content-type'

// Disable frontMatter stripping so the rule can parse frontmatter itself
const fmOptions = { markdownlintOptions: { frontMatter: null } }

// Helper: build a Markdown string with valid frontmatter
function md(fmLines: string[], body = 'Some content.'): string {
  return ['---', ...fmLines, '---', '', body].join('\n')
}

// Use the fixture content directory so the qualifying-products scan is
// hermetic and won't break if the real content/ layout changes.
// The fixture tree includes:
//   content/copilot/{how-tos,concepts,tutorials,reference,get-started,getting-started,responsible-use}  → qualifies
//   content/actions/{category,using-workflows}  → does NOT qualify
const FIXTURE_ROOT = 'src/fixtures/fixtures'

describe('GHD065 - frontmatter-content-type', () => {
  const savedRoot = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = FIXTURE_ROOT
  })

  afterAll(() => {
    process.env.ROOT = savedRoot
  })

  // Clear the qualifying-products cache between tests so that each
  // test starts with a fresh filesystem scan.
  beforeEach(() => {
    resetCache()
  })

  // -------------------------------------------------------------------
  // Passing cases
  // -------------------------------------------------------------------

  test('file with correct contentType matching directory passes', async () => {
    const strings = {
      'content/copilot/how-tos/test-file.md': md([
        'title: Test',
        'contentType: how-tos',
        'versions:',
        "  fpt: '*'",
      ]),
    }
    const result = await runRule(frontmatterContentType, { strings, ...fmOptions })
    const errors = result['content/copilot/how-tos/test-file.md']
    expect(errors).toEqual([])
  })

  test('file with contentType "rai" in responsible-use directory passes', async () => {
    const strings = {
      'content/copilot/responsible-use/test-file.md': md([
        'title: RAI Page',
        'contentType: rai',
        'versions:',
        "  fpt: '*'",
      ]),
    }
    const result = await runRule(frontmatterContentType, { strings, ...fmOptions })
    const errors = result['content/copilot/responsible-use/test-file.md']
    expect(errors).toEqual([])
  })

  test('file with contentType "get-started" in getting-started directory passes', async () => {
    // Some products use "getting-started" instead of "get-started" as directory name
    const strings = {
      'content/copilot/getting-started/test-file.md': md([
        'title: Getting Started',
        'contentType: get-started',
        'versions:',
        "  fpt: '*'",
      ]),
    }
    const result = await runRule(frontmatterContentType, { strings, ...fmOptions })
    const errors = result['content/copilot/getting-started/test-file.md']
    expect(errors).toEqual([])
  })

  test('product-level index.md with contentType "landing" passes', async () => {
    const strings = {
      'content/copilot/index.md': md([
        'title: Copilot',
        'contentType: landing',
        'versions:',
        "  fpt: '*'",
      ]),
    }
    const result = await runRule(frontmatterContentType, { strings, ...fmOptions })
    const errors = result['content/copilot/index.md']
    expect(errors).toEqual([])
  })

  test('file outside qualifying product is not checked', async () => {
    // actions in fixtures has non-EDI subdirs (category/, using-workflows/),
    // so it does NOT qualify — the rule should skip it entirely.
    const strings = {
      'content/actions/category/test-file.md': md(['title: Test', 'versions:', "  fpt: '*'"]),
    }
    const result = await runRule(frontmatterContentType, { strings, ...fmOptions })
    const errors = result['content/actions/category/test-file.md']
    expect(errors).toEqual([])
  })

  test('file not under content/ is skipped', async () => {
    const strings = {
      'data/reusables/test.md': md(['title: Test', 'versions:', "  fpt: '*'"]),
    }
    const result = await runRule(frontmatterContentType, { strings, ...fmOptions })
    const errors = result['data/reusables/test.md']
    expect(errors).toEqual([])
  })

  // -------------------------------------------------------------------
  // Failing cases
  // -------------------------------------------------------------------

  test('missing contentType in qualifying product triggers error', async () => {
    const strings = {
      'content/copilot/tutorials/test-file.md': md(['title: Tutorial', 'versions:', "  fpt: '*'"]),
    }
    const result = await runRule(frontmatterContentType, { strings, ...fmOptions })
    const errors = result['content/copilot/tutorials/test-file.md']
    expect(errors.length).toBe(1)
    expect(errors[0].ruleNames).toContain('GHD065')
    expect(errors[0].errorDetail).toContain('Missing contentType')
    expect(errors[0].errorDetail).toContain('"tutorials"')
    expect(errors[0].errorDetail).toContain('add-content-type.ts')
  })

  test('mismatched contentType triggers error', async () => {
    const strings = {
      'content/copilot/concepts/test-file.md': md([
        'title: Concepts Page',
        'contentType: how-tos',
        'versions:',
        "  fpt: '*'",
      ]),
    }
    const result = await runRule(frontmatterContentType, { strings, ...fmOptions })
    const errors = result['content/copilot/concepts/test-file.md']
    expect(errors.length).toBe(1)
    expect(errors[0].ruleNames).toContain('GHD065')
    expect(errors[0].errorDetail).toContain('"how-tos"')
    expect(errors[0].errorDetail).toContain('"concepts"')
  })

  test('product-level index.md with wrong contentType triggers error', async () => {
    const strings = {
      'content/copilot/index.md': md([
        'title: Copilot',
        'contentType: concepts',
        'versions:',
        "  fpt: '*'",
      ]),
    }
    const result = await runRule(frontmatterContentType, { strings, ...fmOptions })
    const errors = result['content/copilot/index.md']
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('"concepts"')
    expect(errors[0].errorDetail).toContain('"landing"')
  })

  test('deeply nested file still checks against content-type directory', async () => {
    const strings = {
      'content/copilot/get-started/subdir/deep.md': md([
        'title: Deep page',
        'contentType: get-started',
        'versions:',
        "  fpt: '*'",
      ]),
    }
    const result = await runRule(frontmatterContentType, { strings, ...fmOptions })
    const errors = result['content/copilot/get-started/subdir/deep.md']
    expect(errors).toEqual([])
  })

  test('deeply nested file with wrong contentType triggers error', async () => {
    const strings = {
      'content/copilot/reference/subdir/deep.md': md([
        'title: Deep page',
        'contentType: tutorials',
        'versions:',
        "  fpt: '*'",
      ]),
    }
    const result = await runRule(frontmatterContentType, { strings, ...fmOptions })
    const errors = result['content/copilot/reference/subdir/deep.md']
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('"tutorials"')
    expect(errors[0].errorDetail).toContain('"reference"')
  })
})
