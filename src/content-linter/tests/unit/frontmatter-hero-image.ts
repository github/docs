import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { frontmatterHeroImage } from '../../lib/linting-rules/frontmatter-hero-image'

const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(frontmatterHeroImage.names.join(' - '), () => {
  test('valid absolute heroImage path passes', async () => {
    const markdown = [
      '---',
      'title: Test',
      "heroImage: '/assets/images/banner-images/hero-1.png'",
      '---',
      '',
      '# Test',
    ].join('\n')
    const result = await runRule(frontmatterHeroImage, {
      strings: { 'content/test/index.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/index.md']
    expect(errors.length).toBe(0)
  })

  test('non-index.md file is ignored', async () => {
    const markdown = [
      '---',
      'title: Test',
      "heroImage: 'invalid-path.png'",
      '---',
      '',
      '# Test',
    ].join('\n')
    const result = await runRule(frontmatterHeroImage, {
      strings: { 'content/test/article.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/article.md']
    expect(errors.length).toBe(0)
  })

  test('missing heroImage is ignored', async () => {
    const markdown = ['---', 'title: Test', '---', '', '# Test'].join('\n')
    const result = await runRule(frontmatterHeroImage, {
      strings: { 'content/test/index.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/index.md']
    expect(errors.length).toBe(0)
  })

  test('relative heroImage path fails', async () => {
    const markdown = [
      '---',
      'title: Test',
      "heroImage: 'images/hero-1.png'",
      '---',
      '',
      '# Test',
    ].join('\n')
    const result = await runRule(frontmatterHeroImage, {
      strings: { 'content/test/index.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/index.md']
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('must be absolute')
  })

  test('non-banner-images path fails', async () => {
    const markdown = [
      '---',
      'title: Test',
      "heroImage: '/assets/images/other/hero-1.png'",
      '---',
      '',
      '# Test',
    ].join('\n')
    const result = await runRule(frontmatterHeroImage, {
      strings: { 'content/test/index.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/index.md']
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('/assets/images/banner-images/')
  })

  test('non-existent heroImage file fails', async () => {
    const markdown = [
      '---',
      'title: Test',
      "heroImage: '/assets/images/banner-images/non-existent.png'",
      '---',
      '',
      '# Test',
    ].join('\n')
    const result = await runRule(frontmatterHeroImage, {
      strings: { 'content/test/index.md': markdown },
      ...fmOptions,
    })
    const errors = result['content/test/index.md']
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('does not exist')
  })

  test('all valid hero images pass', async () => {
    // Test each valid hero image
    const validImages = [
      "heroImage: '/assets/images/banner-images/hero-1.png'",
      "heroImage: '/assets/images/banner-images/hero-2.png'",
      "heroImage: '/assets/images/banner-images/hero-3.png'",
      "heroImage: '/assets/images/banner-images/hero-4.png'",
      "heroImage: '/assets/images/banner-images/hero-5.png'",
      "heroImage: '/assets/images/banner-images/hero-6.png'",
    ]

    for (const heroImageLine of validImages) {
      const markdown = ['---', 'title: Test', heroImageLine, '---', '', '# Test'].join('\n')
      const result = await runRule(frontmatterHeroImage, {
        strings: { 'content/test/index.md': markdown },
        ...fmOptions,
      })
      const errors = result['content/test/index.md']
      expect(errors.length).toBe(0)
    }
  })
})
