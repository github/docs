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
      '//',
      'const emptyCommentAbove = "fine";',
      '```',
      '',
      '```yaml copy annotate',
      '# This is also correct',
      'name: test',
      '```',
      '',
      '```sql copy annotate',
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
      '```',
      '',
      '```yaml copy annotate',
      '#This should also fail',
      'name: test',
      '```',
      '',
      '```sql copy annotate',
      '--This should fail too',
      'SELECT * FROM users;',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)

    expect(errors[0].lineNumber).toBe(5)
    expect(errors[0].errorDetail).toContain("Comment must have exactly one space after '//'")
    expect(errors[0].fixInfo).toEqual({
      lineNumber: 5,
      editColumn: 1,
      deleteCount: 37,
      insertText: '// This should fail the content linter',
    })

    expect(errors[1].lineNumber).toBe(10)
    expect(errors[1].errorDetail).toContain("Comment must have exactly one space after '#'")
    expect(errors[1].fixInfo).toEqual({
      lineNumber: 10,
      editColumn: 1,
      deleteCount: 22,
      insertText: '# This should also fail',
    })

    expect(errors[2].lineNumber).toBe(15)
    expect(errors[2].errorDetail).toContain("Comment must have exactly one space after '--'")
    expect(errors[2].fixInfo).toEqual({
      lineNumber: 15,
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
      '```',
      '',
      '```yaml copy annotate',
      '#   This also has too many',
      'name: test',
      '```',
      '',
      '```sql copy annotate',
      '--    This has way too many',
      'SELECT * FROM users;',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)

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

    expect(errors[1].lineNumber).toBe(10)
    expect(errors[1].errorDetail).toContain(
      "Comment must have exactly one space after '#', found multiple spaces",
    )
    expect(errors[1].fixInfo).toEqual({
      lineNumber: 10,
      editColumn: 1,
      deleteCount: 26,
      insertText: '# This also has too many',
    })

    expect(errors[2].lineNumber).toBe(15)
    expect(errors[2].errorDetail).toContain(
      "Comment must have exactly one space after '--', found multiple spaces",
    )
    expect(errors[2].fixInfo).toEqual({
      lineNumber: 15,
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
      '}',
      '```',
      '',
      '```yaml copy annotate',
      'jobs:',
      '  #  Too many spaces',
      '  build:',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)

    expect(errors[0].lineNumber).toBe(6)
    expect(errors[0].errorDetail).toContain("Comment must have exactly one space after '//'")
    expect(errors[0].fixInfo).toEqual({
      lineNumber: 6,
      editColumn: 1,
      deleteCount: 37,
      insertText: '  // Missing space in indented comment',
    })

    expect(errors[1].lineNumber).toBe(13)
    expect(errors[1].errorDetail).toContain(
      "Comment must have exactly one space after '#', found multiple spaces",
    )
    expect(errors[1].fixInfo).toEqual({
      lineNumber: 13,
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

  test('only the comment syntax of the fence language is checked', async () => {
    const markdown = [
      '---',
      'layout: inline',
      '---',
      '```bash copy annotate',
      '#!/bin/bash',
      '#This shell comment needs space',
      'curl \\',
      '  --silent \\',
      '  https://example.com',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)

    expect(errors[0].lineNumber).toBe(6)
    expect(errors[0].errorDetail).toContain("Comment must have exactly one space after '#'")
    expect(errors[0].fixInfo).toEqual({
      lineNumber: 6,
      editColumn: 1,
      deleteCount: 31,
      insertText: '# This shell comment needs space',
    })
  })

  test('code that looks like a comment in another language is ignored', async () => {
    const markdown = [
      '---',
      'layout: inline',
      '---',
      '```yaml copy annotate',
      '# Install ARC',
      '- run: |',
      '    helm install arc \\',
      '      --namespace arc-systems \\',
      '      oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller',
      '---',
      '# Start a service',
      'services:',
      '  postgres:',
      '    options: >-',
      '      --health-cmd pg_isready',
      '```',
      '',
      '```javascript copy annotate',
      '// Track a count',
      'class Counter {',
      '  #count = 0',
      '}',
      '```',
      '',
      '```csharp copy annotate',
      '// Group helpers',
      '#region Helpers',
      '#endregion',
      '```',
    ].join('\n')

    const result = await runRule(codeAnnotationCommentSpacing, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})
