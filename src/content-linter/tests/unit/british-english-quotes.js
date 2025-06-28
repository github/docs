import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { britishEnglishQuotes } from '../../lib/linting-rules/british-english-quotes.js'

describe(britishEnglishQuotes.names.join(' - '), () => {
  test('Correct American English punctuation passes', async () => {
    const markdown = [
      'She said, "Hello, world."',
      'The guide mentions "Getting started."',
      'See "[AUTOTITLE]."',
      'Zara replied, "That sounds great!"',
      'The section titled "Prerequisites," explains the setup.',
    ].join('\n')
    const result = await runRule(britishEnglishQuotes, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('British English quotes with AUTOTITLE are flagged', async () => {
    const markdown = [
      'For more information, see "[AUTOTITLE]".',
      'The article "[AUTOTITLE]", covers this topic.',
    ].join('\n')
    const result = await runRule(britishEnglishQuotes, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(1)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('place period inside the quotation marks')
    }
    expect(errors[1].lineNumber).toBe(2)
    if (errors[1].detail) {
      expect(errors[1].detail).toContain('place comma inside the quotation marks')
    }
  })

  test('General British English punctuation patterns are detected', async () => {
    const markdown = [
      'Priya said "Hello".',
      'The tutorial called "Advanced Git", is helpful.',
      'Marcus mentioned "DevOps best practices".',
      'See the guide titled "Getting Started", for details.',
    ].join('\n')
    const result = await runRule(britishEnglishQuotes, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(4)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('period inside')
    }
    if (errors[1].detail) {
      expect(errors[1].detail).toContain('comma inside')
    }
    if (errors[2].detail) {
      expect(errors[2].detail).toContain('period inside')
    }
    if (errors[3].detail) {
      expect(errors[3].detail).toContain('comma inside')
    }
  })

  test('Single quotes are also detected', async () => {
    const markdown = [
      "Aisha said 'excellent work'.",
      "The term 'API endpoint', refers to a specific URL.",
    ].join('\n')
    const result = await runRule(britishEnglishQuotes, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('period inside')
    }
    if (errors[1].detail) {
      expect(errors[1].detail).toContain('comma inside')
    }
  })

  test('Code blocks and inline code are ignored', async () => {
    const markdown = [
      '```javascript',
      'console.log("Hello");',
      'const message = "World";',
      '```',
      '',
      'In code, use `console.log("Debug");` for logging.',
      'The command `git commit -m "Fix bug";` creates a commit.',
    ].join('\n')
    const result = await runRule(britishEnglishQuotes, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('URLs and emails are ignored', async () => {
    const markdown = [
      'Visit https://example.com/api"docs" for more info.',
      'Email support@company.com"help" for assistance.',
      'The webhook URL http://api.service.com"endpoint" should work.',
    ].join('\n')
    const result = await runRule(britishEnglishQuotes, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Auto-fix suggestions work correctly', async () => {
    const markdown = [
      'See "[AUTOTITLE]".',
      'The guide "Setup Instructions", explains everything.',
    ].join('\n')
    const result = await runRule(britishEnglishQuotes, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)

    // Check that fix info is provided
    expect(errors[0].fixInfo).toBeDefined()
    expect(errors[0].fixInfo.insertText).toContain('."')
    expect(errors[1].fixInfo).toBeDefined()
    expect(errors[1].fixInfo.insertText).toContain(',"')
  })

  test('Mixed punctuation scenarios', async () => {
    const markdown = [
      'Chen explained, "The process involves three steps". First, prepare the data.',
      'The error message "File not found", appears when the path is incorrect.',
      'As Fatima noted, "Testing is crucial"; quality depends on it.',
    ].join('\n')
    const result = await runRule(britishEnglishQuotes, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[1].lineNumber).toBe(2)
  })

  test('Nested quotes are handled appropriately', async () => {
    const markdown = [
      'She said, "The article \'Best Practices\', is recommended".',
      'The message "Error: \'Invalid input\'" appears sometimes.',
    ].join('\n')
    const result = await runRule(britishEnglishQuotes, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('period inside')
    }
  })

  test('Edge cases with spacing', async () => {
    const markdown = [
      'The command "npm install"   .',
      'See documentation "API Guide"  ,   which covers authentication.',
      'Reference "[AUTOTITLE]" .',
    ].join('\n')
    const result = await runRule(britishEnglishQuotes, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('period inside')
    }
    if (errors[1].detail) {
      expect(errors[1].detail).toContain('comma inside')
    }
    if (errors[2].detail) {
      expect(errors[2].detail).toContain('period inside')
    }
  })

  test('Autogenerated files are skipped', async () => {
    const frontmatter = ['---', 'title: API Reference', 'autogenerated: rest', '---'].join('\n')
    const markdown = ['The endpoint "GET /users", returns user data.', 'See "[AUTOTITLE]".'].join(
      '\n',
    )
    const result = await runRule(britishEnglishQuotes, {
      strings: {
        markdown: frontmatter + '\n' + markdown,
      },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Complex real-world examples', async () => {
    const markdown = [
      '## Configuration Options',
      '',
      'To enable the feature, set `enabled: true` in "config.yml".',
      'Aaliyah mentioned that the tutorial "Docker Basics", covers containers.',
      'The error "Permission denied", occurs when access is restricted.',
      'For troubleshooting, see "[AUTOTITLE]".',
      '',
      '```yaml',
      'name: "production"',
      'debug: false',
      '```',
      '',
      'Dmitri explained, "The workflow has multiple stages."',
    ].join('\n')
    const result = await runRule(britishEnglishQuotes, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(4)
    expect(errors[0].lineNumber).toBe(3) // config.yml line
    expect(errors[1].lineNumber).toBe(4) // Docker Basics line
    expect(errors[2].lineNumber).toBe(5) // Permission denied line
    expect(errors[3].lineNumber).toBe(6) // AUTOTITLE line
  })

  test('Warning severity is set correctly', () => {
    expect(britishEnglishQuotes.severity).toBe('warning')
  })

  test('Rule has correct metadata', () => {
    expect(britishEnglishQuotes.names).toEqual(['GHD048', 'british-english-quotes'])
    expect(britishEnglishQuotes.description).toContain('American English style')
    expect(britishEnglishQuotes.tags).toContain('punctuation')
    expect(britishEnglishQuotes.tags).toContain('quotes')
  })
})
