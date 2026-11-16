import { describe, expect, test } from 'vitest'

import { customConfig } from '@/content-linter/style/github-docs'

describe('customConfig', () => {
  // The frontmatter config spreads last, so its flags decide whether data and YAML files get linted.
  test('liquid-ifversion-tags runs on data Markdown and YAML files', () => {
    expect(customConfig['liquid-ifversion-tags']).toMatchObject({
      'partial-markdown-files': true,
      'yml-files': true,
    })
  })
})
