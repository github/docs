import { describe, expect, test, beforeEach, afterEach } from 'vitest'
import { renderContent } from '#src/content-render/index.js'
import { TitleFromAutotitleError } from '#src/content-render/unified/rewrite-local-links.js'

describe('link error line numbers', () => {
  let fs
  let originalReadFileSync
  let originalExistsSync
  let mockContext

  beforeEach(async () => {
    // Set up file system mocking
    fs = await import('fs')
    originalReadFileSync = fs.default.readFileSync
    originalExistsSync = fs.default.existsSync

    fs.default.existsSync = () => true

    // Set up basic mock context
    mockContext = {
      currentLanguage: 'en',
      currentVersion: 'free-pro-team@latest',
      pages: new Map(),
      redirects: new Map(),
      page: {
        fullPath: '/fake/test-file.md',
      },
    }
  })

  afterEach(() => {
    // Restore original functions
    fs.default.readFileSync = originalReadFileSync
    fs.default.existsSync = originalExistsSync
  })

  test('reports correct line numbers for broken AUTOTITLE links', async () => {
    // Test content with frontmatter followed by content with a broken link
    const template = `---
title: Test Page
version: 1.0
---

# Introduction

This is some content.

Here is a broken link: [AUTOTITLE](/nonexistent/page).

More content here.`

    fs.default.readFileSync = () => template

    try {
      await renderContent(template, mockContext)
      expect.fail('Expected TitleFromAutotitleError to be thrown')
    } catch (error) {
      expect(error).toBeInstanceOf(TitleFromAutotitleError)

      // The broken link is on line 10 in the original file
      // (3 lines of frontmatter + 1 blank line + 1 title + 1 blank + 1 content + 1 blank + 1 link line)
      // The error message should reference the correct line number
      expect(error.message).toContain('/nonexistent/page')
      expect(error.message).toContain('could not be resolved')
      expect(error.message).toContain('(Line: 10)')
    }
  })

  test('reports correct line numbers with different frontmatter sizes', async () => {
    mockContext.page.fullPath = '/fake/test-file-2.md'

    // Test with more extensive frontmatter
    const template = `---
title: Another Test Page
description: This is a test
author: Test Author
date: 2024-01-01
tags:
  - test
  - documentation
version: 2.0
---

# Main Title

Some introductory text here.

## Section

Content with a [AUTOTITLE](/another/nonexistent/page) link.`

    fs.default.readFileSync = () => template

    try {
      await renderContent(template, mockContext)
      expect.fail('Expected TitleFromAutotitleError to be thrown')
    } catch (error) {
      expect(error).toBeInstanceOf(TitleFromAutotitleError)
      expect(error.message).toContain('/another/nonexistent/page')
      expect(error.message).toContain('could not be resolved')
    }
  })

  test('handles files without frontmatter correctly', async () => {
    mockContext.page.fullPath = '/fake/no-frontmatter.md'

    // Test content without frontmatter
    const template = `# Simple Title

This is content without frontmatter.

Here is a broken link: [AUTOTITLE](/missing/page).`

    fs.default.readFileSync = () => template

    try {
      await renderContent(template, mockContext)
      expect.fail('Expected TitleFromAutotitleError to be thrown')
    } catch (error) {
      expect(error).toBeInstanceOf(TitleFromAutotitleError)
      expect(error.message).toContain('/missing/page')
      expect(error.message).toContain('could not be resolved')
    }
  })

  test('error message format is improved', async () => {
    mockContext.page.fullPath = '/fake/message-test.md'

    const template = `---
title: Message Test
---

[AUTOTITLE](/test/broken/link)
`

    fs.default.readFileSync = () => template

    try {
      await renderContent(template, mockContext)
      expect.fail('Expected TitleFromAutotitleError to be thrown')
    } catch (error) {
      expect(error).toBeInstanceOf(TitleFromAutotitleError)

      // Check that the new error message format is used
      expect(error.message).toContain('could not be resolved in one or more versions')
      expect(error.message).toContain('Make sure that this link can be reached from all versions')
      expect(error.message).toContain('/test/broken/link')

      // Check that the old error message format is NOT used
      expect(error.message).not.toContain('Unable to find Page by')
      expect(error.message).not.toContain('To fix it, look at')
    }
  })
})
