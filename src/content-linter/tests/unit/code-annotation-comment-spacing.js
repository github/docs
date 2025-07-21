import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { codeAnnotationCommentSpacing } from '../../lib/linting-rules/code-annotation-comment-spacing'

describe(codeAnnotationCommentSpacing.names.join(' - '), () => {
  test('correctly formatted comments pass', async () => {
    const markdown = [
      '---',
      'layout: inline',
      '---',
      '```javascript copy annotate',
      '// This is a correct comment',
      'const express = require("express");',
      '',
      '# This is also correct',
      'const app = express();',
      '',
      '//',
      'const emptyCommentAbove = "fine";',
      '',
      '-- SQL comment with space',
      'SELECT * FROM users;',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('comments without space after comment character fail', async () => {
    const markdown = [
      '---',
      'layout: inline',
      '---',
      '```javascript copy annotate',
      '//This should fail the content linter',
      'const express = require("express");',
      '',
      '#This should also fail',
      'const app = express();',
      '',
      '--This should fail too',
      'SELECT * FROM users;',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)

    // Check first error (JavaScript comment)
    expect(errors[0].lineNumber).toBe(5)
    expect(errors[0].errorDetail).toContain("Comment must have exactly one space after '//'")
    expect(errors[0].fixInfo).toEqual({
      lineNumber: 5,
      editColumn: 1,
      deleteCount: 37,
      insertText: '// This should fail the content linter',
    })

    // Check second error (Python/Shell comment)
    expect(errors[1].lineNumber).toBe(8)
    expect(errors[1].errorDetail).toContain("Comment must have exactly one space after '#'")
    expect(errors[1].fixInfo).toEqual({
      lineNumber: 8,
      editColumn: 1,
      deleteCount: 22,
      insertText: '# This should also fail',
    })

    // Check third error (SQL comment)
    expect(errors[2].lineNumber).toBe(11)
    expect(errors[2].errorDetail).toContain("Comment must have exactly one space after '--'")
    expect(errors[2].fixInfo).toEqual({
      lineNumber: 11,
      editColumn: 1,
      deleteCount: 22,
      insertText: '-- This should fail too',
    })
  })

  test('comments with multiple spaces after comment character fail', async () => {
    const markdown = [
      '---',
      'layout: inline',
      '---',
      '```javascript copy annotate',
      '//  This has too many spaces',
      'const express = require("express");',
      '',
      '#   This also has too many',
      'const app = express();',
      '',
      '--    This has way too many',
      'SELECT * FROM users;',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)

    // Check first error (JavaScript comment)
    expect(errors[0].lineNumber).toBe(5)
    expect(errors[0].errorDetail).toContain(
      "Comment must have exactly one space after '//', found multiple spaces",
    )
    expect(errors[0].fixInfo).toEqual({
      lineNumber: 5,
      editColumn: 1,
      deleteCount: 28,
      insertText: '// This has too many spaces',
    })

    // Check second error (Python/Shell comment)
    expect(errors[1].lineNumber).toBe(8)
    expect(errors[1].errorDetail).toContain(
      "Comment must have exactly one space after '#', found multiple spaces",
    )
    expect(errors[1].fixInfo).toEqual({
      lineNumber: 8,
      editColumn: 1,
      deleteCount: 26,
      insertText: '# This also has too many',
    })

    // Check third error (SQL comment)
    expect(errors[2].lineNumber).toBe(11)
    expect(errors[2].errorDetail).toContain(
      "Comment must have exactly one space after '--', found multiple spaces",
    )
    expect(errors[2].fixInfo).toEqual({
      lineNumber: 11,
      editColumn: 1,
      deleteCount: 27,
      insertText: '-- This has way too many',
    })
  })

  test('indented comments are handled correctly', async () => {
    const markdown = [
      '---',
      'layout: inline',
      '---',
      '```javascript copy annotate',
      'function test() {',
      '  //Missing space in indented comment',
      '  const x = 1;',
      '  ',
      '  #  Too many spaces',
      '  const y = 2;',
      '}',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)

    // Check first error (indented JavaScript comment without space)
    expect(errors[0].lineNumber).toBe(6)
    expect(errors[0].errorDetail).toContain("Comment must have exactly one space after '//'")
    expect(errors[0].fixInfo).toEqual({
      lineNumber: 6,
      editColumn: 1,
      deleteCount: 37,
      insertText: '  // Missing space in indented comment',
    })

    // Check second error (indented comment with multiple spaces)
    expect(errors[1].lineNumber).toBe(9)
    expect(errors[1].errorDetail).toContain(
      "Comment must have exactly one space after '#', found multiple spaces",
    )
    expect(errors[1].fixInfo).toEqual({
      lineNumber: 9,
      editColumn: 1,
      deleteCount: 20,
      insertText: '  # Too many spaces',
    })
  })

  test('non-annotate code blocks are ignored', async () => {
    const markdown = [
      '---',
      'layout: inline',
      '---',
      '```javascript copy',
      '//This should be ignored',
      'const express = require("express");',
      '',
      '#This should also be ignored',
      'const app = express();',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('empty lines and non-comment lines are ignored', async () => {
    const markdown = [
      '---',
      'layout: inline',
      '---',
      '```javascript copy annotate',
      'const express = require("express");',
      '',
      '// This is fine',
      'const app = express();',
      '',
      'app.listen(3000);',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('mixed comment types in same block', async () => {
    const markdown = [
      '---',
      'layout: inline',
      '---',
      '```bash copy annotate',
      '#!/bin/bash',
      '#This shell comment needs space',
      'echo "Hello"',
      '',
      '// This JS-style comment is fine',
      'node script.js',
      '',
      '--This SQL comment needs space',
      'psql -c "SELECT 1;"',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)

    expect(errors[0].lineNumber).toBe(6)
    expect(errors[0].errorDetail).toContain("Comment must have exactly one space after '#'")
    expect(errors[0].fixInfo).toEqual({
      lineNumber: 6,
      editColumn: 1,
      deleteCount: 31,
      insertText: '# This shell comment needs space',
    })

    expect(errors[1].lineNumber).toBe(12)
    expect(errors[1].errorDetail).toContain("Comment must have exactly one space after '--'")
    expect(errors[1].fixInfo).toEqual({
      lineNumber: 12,
      editColumn: 1,
      deleteCount: 30,
      insertText: '-- This SQL comment needs space',
    })
  })
})
