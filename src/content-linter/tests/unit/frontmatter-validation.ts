import { describe, expect, test } from 'vitest'

import { runRule } from '@/content-linter/lib/init-test'
import { frontmatterValidation } from '@/content-linter/lib/linting-rules/frontmatter-validation'

const ruleName = frontmatterValidation.names[1]

// Configure the test fixture to not split frontmatter and content
const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(ruleName, () => {
  // Character limit tests
  test('category title within limits passes', async () => {
    const markdown = `---
title: 'Short category title'
intro: 'Category introduction'
children:
  - /path/to/child
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/index.md']).toEqual([])
  })

  test('category title exceeds recommended limit shows warning', async () => {
    const markdown = `---
title: 'This category title is exactly 68 characters long for testing purpos'
shortTitle: 'Short title'
intro: 'Category introduction'
children:
  - /path/to/child
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/index.md']).toHaveLength(1)
    expect(result['content/section/index.md'][0].errorDetail).toContain(
      'exceeds recommended length of 67 characters',
    )
  })

  test('category title exceeds maximum limit shows error', async () => {
    const markdown = `---
title: 'This is exactly 71 characters long to exceed the maximum limit for catx'
shortTitle: 'Short title'
intro: 'Category introduction'
children:
  - /path/to/child
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/index.md']).toHaveLength(1)
    expect(result['content/section/index.md'][0].errorDetail).toContain(
      'exceeds maximum length of 70 characters',
    )
  })

  test('category shortTitle exceeds limit shows error', async () => {
    const markdown = `---
title: 'Category title'
shortTitle: 'This short title is exactly 31x'
intro: 'Category introduction'
children:
  - /path/to/child
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/index.md']).toHaveLength(1)
    expect(result['content/section/index.md'][0].errorDetail).toContain('ShortTitle exceeds')
  })

  test('mapTopic title within limits passes', async () => {
    const markdown = `---
title: 'Using workflows'
intro: 'Map topic introduction'
mapTopic: true
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/actions/using-workflows/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/actions/using-workflows/index.md']).toEqual([])
  })

  test('mapTopic title exceeds recommended limit shows warning', async () => {
    const markdown = `---
title: 'This map topic title is exactly 64 characters long for tests now'
shortTitle: 'Short title'
intro: 'Map topic introduction'
mapTopic: true
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/actions/using-workflows/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/actions/using-workflows/index.md']).toHaveLength(1)
    expect(result['content/actions/using-workflows/index.md'][0].errorDetail).toContain(
      'exceeds recommended length of 63 characters',
    )
  })

  test('article title within limits passes', async () => {
    const markdown = `---
title: 'GitHub Actions quickstart'
topics:
  - Actions
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/actions/quickstart.md': markdown },
      ...fmOptions,
    })
    expect(result['content/actions/quickstart.md']).toEqual([])
  })

  test('article title exceeds recommended limit shows warning', async () => {
    const markdown = `---
title: 'This article title is exactly 61 characters long for test now'
shortTitle: 'Short title'
topics:
  - Actions
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/actions/quickstart.md': markdown },
      ...fmOptions,
    })
    expect(result['content/actions/quickstart.md']).toHaveLength(1)
    expect(result['content/actions/quickstart.md'][0].errorDetail).toContain(
      'exceeds recommended length of 60 characters',
    )
  })

  test('article title exceeds maximum limit shows error', async () => {
    const markdown = `---
title: 'This article title is exactly 81 characters long to exceed the maximum limits now'
shortTitle: 'Short title'
topics:
  - Actions
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/actions/quickstart.md': markdown },
      ...fmOptions,
    })
    expect(result['content/actions/quickstart.md']).toHaveLength(1)
    expect(result['content/actions/quickstart.md'][0].errorDetail).toContain(
      'exceeds maximum length of 80 characters',
    )
  })

  test('cross-property validation: long title without shortTitle shows error', async () => {
    const markdown = `---
title: 'This article title is exactly 50 characters long'
topics:
  - Actions
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/actions/quickstart.md': markdown },
      ...fmOptions,
    })
    expect(result['content/actions/quickstart.md']).toHaveLength(1)
    expect(result['content/actions/quickstart.md'][0].errorDetail).toContain(
      'A shortTitle must be provided',
    )
  })

  test('cross-property validation: long title with shortTitle passes', async () => {
    const markdown = `---
title: 'This article title is exactly 50 characters long'
shortTitle: 'Actions quickstart'
topics:
  - Actions
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/actions/quickstart.md': markdown },
      ...fmOptions,
    })
    expect(result['content/actions/quickstart.md']).toEqual([])
  })

  // Required properties tests
  test('category with required intro passes', async () => {
    const markdown = `---
title: 'Category title'
intro: 'This is the category introduction.'
children:
  - /path/to/child
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/index.md']).toEqual([])
  })

  test('category without required intro fails', async () => {
    const markdown = `---
title: 'Category title'
children:
  - /path/to/child
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/index.md']).toHaveLength(1)
    expect(result['content/section/index.md'][0].errorDetail).toContain(
      "Missing required property 'intro' for category content type",
    )
  })

  test('category with intro too long shows warning', async () => {
    const longIntro = 'A'.repeat(400) // Exceeds 362 char limit
    const markdown = `---
title: 'Category title'
intro: '${longIntro}'
children:
  - /path/to/child
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/index.md']).toHaveLength(1)
    expect(result['content/section/index.md'][0].errorDetail).toContain(
      'Intro exceeds maximum length of 362 characters',
    )
  })

  test('mapTopic with required intro passes', async () => {
    const markdown = `---
title: 'Map topic title'
intro: 'This is the map topic introduction.'
mapTopic: true
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/topic.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/topic.md']).toEqual([])
  })

  test('mapTopic without required intro fails', async () => {
    const markdown = `---
title: 'Map topic title'
mapTopic: true
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/topic.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/topic.md']).toHaveLength(1)
    expect(result['content/section/topic.md'][0].errorDetail).toContain(
      "Missing required property 'intro' for mapTopic content type",
    )
  })

  test('mapTopic with intro too long shows warning', async () => {
    const longIntro = 'A'.repeat(400) // Exceeds 362 char limit
    const markdown = `---
title: 'Map topic title'
intro: '${longIntro}'
mapTopic: true
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/topic.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/topic.md']).toHaveLength(1)
    expect(result['content/section/topic.md'][0].errorDetail).toContain(
      'Intro exceeds maximum length of 362 characters',
    )
  })

  test('article with required topics passes', async () => {
    const markdown = `---
title: 'Article title'
topics:
  - Actions
  - CI/CD
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/article.md']).toEqual([])
  })

  test('article without required topics fails', async () => {
    const markdown = `---
title: 'Article title'
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/article.md']).toHaveLength(1)
    expect(result['content/section/article.md'][0].errorDetail).toContain(
      "Missing required property 'topics' for article content type",
    )
  })

  test('article with empty topics array fails', async () => {
    const markdown = `---
title: 'Article title'
topics: []
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/article.md']).toHaveLength(1)
    expect(result['content/section/article.md'][0].errorDetail).toContain(
      'Articles should have at least one topic',
    )
  })

  test('article with topics as string fails', async () => {
    const markdown = `---
title: 'Article title'
topics: 'Actions'
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/article.md']).toHaveLength(1)
    expect(result['content/section/article.md'][0].errorDetail).toContain('Topics must be an array')
  })

  test('article with topics as number fails', async () => {
    const markdown = `---
title: 'Article title'
topics: 123
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/article.md']).toHaveLength(1)
    expect(result['content/section/article.md'][0].errorDetail).toContain('Topics must be an array')
  })

  test('article with intro too long shows warning', async () => {
    const longIntro = 'A'.repeat(400) // Exceeds 354 char limit for articles
    const markdown = `---
title: 'Article title'
intro: '${longIntro}'
topics:
  - Actions
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/article.md']).toHaveLength(1)
    expect(result['content/section/article.md'][0].errorDetail).toContain(
      'Intro exceeds maximum length of 354 characters',
    )
  })

  test('article intro exceeds recommended but not maximum shows warning', async () => {
    const mediumIntro = 'A'.repeat(300) // Exceeds 251 recommended but under 354 max
    const markdown = `---
title: 'Article title'
intro: '${mediumIntro}'
topics:
  - Actions
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/article.md']).toHaveLength(1)
    expect(result['content/section/article.md'][0].errorDetail).toContain(
      'Intro exceeds recommended length of 251 characters',
    )
  })

  // Combined validation tests
  test('multiple violations show multiple errors', async () => {
    const longIntro = 'A'.repeat(400)
    const markdown = `---
title: 'This is exactly 71 characters long to exceed the maximum limit for catx'
intro: '${longIntro}'
shortTitle: 'Short title'
children:
  - /path/to/child
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/index.md': markdown },
      ...fmOptions,
    })
    expect(result['content/section/index.md']).toHaveLength(2)
    expect(result['content/section/index.md'][0].errorDetail).toContain('Title exceeds')
    expect(result['content/section/index.md'][1].errorDetail).toContain('Intro exceeds')
  })

  test('no frontmatter passes', async () => {
    const markdown = `# Content without frontmatter`
    const result = await runRule(frontmatterValidation, { strings: { markdown }, ...fmOptions })
    expect(result.markdown).toEqual([])
  })

  test('content type detection works correctly', async () => {
    // Test category detection
    const categoryMarkdown = `---
title: 'Category'
intro: 'Category intro'
children:
  - /child
---
# Content
`
    const categoryResult = await runRule(frontmatterValidation, {
      strings: { 'content/section/index.md': categoryMarkdown },
      ...fmOptions,
    })
    expect(categoryResult['content/section/index.md']).toEqual([])

    // Test mapTopic detection
    const mapTopicMarkdown = `---
title: 'Map Topic'
intro: 'Map topic intro'
mapTopic: true
---
# Content
`
    const mapTopicResult = await runRule(frontmatterValidation, {
      strings: { 'content/section/topic.md': mapTopicMarkdown },
      ...fmOptions,
    })
    expect(mapTopicResult['content/section/topic.md']).toEqual([])

    // Test article detection
    const articleMarkdown = `---
title: 'Article'
topics:
  - Topic
---
# Content
`
    const articleResult = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': articleMarkdown },
      ...fmOptions,
    })
    expect(articleResult['content/section/article.md']).toEqual([])
  })

  // Liquid variable handling tests
  test('title with liquid variables counts characters correctly', async () => {
    const markdown = `---
title: 'Getting started with {% data variables.product.prodname_github %}'
topics:
  - GitHub
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': markdown },
      ...fmOptions,
    })
    // 'Getting started with ' (21 chars) + liquid tag (0 chars) = 21 chars, should pass
    expect(result['content/section/article.md']).toEqual([])
  })

  test('intro with liquid variables counts characters correctly', async () => {
    const markdown = `---
title: 'Article title'
intro: 'Learn how to use {% data variables.product.prodname_copilot %} for {{ something }}'
topics:
  - GitHub
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': markdown },
      ...fmOptions,
    })
    // 'Learn how to use  for ' (21 chars) should pass
    expect(result['content/section/article.md']).toEqual([])
  })

  test('shortTitle with liquid variables counts characters correctly', async () => {
    const markdown = `---
title: 'This article title is exactly fifty characters!!!!'
shortTitle: '{% data variables.product.prodname_copilot_short %}'
topics:
  - GitHub
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': markdown },
      ...fmOptions,
    })
    // Liquid tag should count as 0 characters, should pass
    expect(result['content/section/article.md']).toEqual([])
  })

  test('long text with liquid variables still fails when limit exceeded', async () => {
    const longText = 'A'.repeat(70) // 70 chars
    const markdown = `---
title: '${longText} {% data variables.product.prodname_github %} extra text'
shortTitle: 'Short title'
topics:
  - GitHub
---
# Content
`
    const result = await runRule(frontmatterValidation, {
      strings: { 'content/section/article.md': markdown },
      ...fmOptions,
    })
    // 70 A's + 1 space + 0 (liquid tag) + 1 space + 10 ('extra text') = 82 chars, should exceed 80 char limit for articles
    expect(result['content/section/article.md']).toHaveLength(1)
    expect(result['content/section/article.md'][0].errorDetail).toContain(
      'exceeds maximum length of 80 characters',
    )
  })
})
