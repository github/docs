import { beforeAll, afterAll, describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import {
  frontmatterRestApiCategory,
  resetCache,
} from '../../lib/linting-rules/frontmatter-rest-api-category'

const FIXTURE_DIR = 'src/content-linter/tests/fixtures/content/rest'
const VALID_FIXTURE = `${FIXTURE_DIR}/actions/artifacts.md`
const MISSING_FIXTURE = `${FIXTURE_DIR}/actions/missing-category.md`
const INVALID_FIXTURE = `${FIXTURE_DIR}/actions/invalid-category.md`
const INDEX_FIXTURE = `${FIXTURE_DIR}/actions/index.md`

const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(frontmatterRestApiCategory.names.join(' - '), () => {
  const originalRoot = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = 'src/content-linter/tests/fixtures'
    resetCache()
  })

  afterAll(() => {
    process.env.ROOT = originalRoot
    resetCache()
  })

  test('file with valid category passes', async () => {
    const result = await runRule(frontmatterRestApiCategory, {
      files: [VALID_FIXTURE],
      ...fmOptions,
    })
    const errors = result[VALID_FIXTURE]
    expect(errors.length).toBe(0)
  })

  test('file missing category fails', async () => {
    const result = await runRule(frontmatterRestApiCategory, {
      files: [MISSING_FIXTURE],
      ...fmOptions,
    })
    const errors = result[MISSING_FIXTURE]
    expect(errors.length).toBe(1)
    expect(errors[0].ruleDescription).toContain('valid `category` frontmatter')
  })

  test('file with invalid category fails', async () => {
    const result = await runRule(frontmatterRestApiCategory, {
      files: [INVALID_FIXTURE],
      ...fmOptions,
    })
    const errors = result[INVALID_FIXTURE]
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('Invalid category')
  })

  test('index.md file without category passes', async () => {
    const result = await runRule(frontmatterRestApiCategory, {
      files: [INDEX_FIXTURE],
      ...fmOptions,
    })
    const errors = result[INDEX_FIXTURE]
    expect(errors.length).toBe(0)
  })

  test('non-REST file without category passes', async () => {
    const result = await runRule(frontmatterRestApiCategory, {
      strings: {
        'content/actions/some-file.md': [
          '---',
          'title: Not a REST file',
          'intro: This is not a REST file.',
          '---',
          '',
        ].join('\n'),
      },
      ...fmOptions,
    })
    const errors = result['content/actions/some-file.md']
    expect(errors.length).toBe(0)
  })
})
