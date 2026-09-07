import { expect, test, describe } from 'vitest'
import { fixIncompleteMarkdown } from '@/search/components/helpers/fix-incomplete-markdown'

// Unit tests for the `fixIncompleteMarkdown` function
describe('fixIncompleteMarkdown', () => {
  test('should close unclosed bold syntax with double asterisks', () => {
    const input = 'This is **bold text'
    const expected = 'This is **bold text**'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should close unclosed bold syntax with double underscores', () => {
    const input = 'This is __bold text'
    const expected = 'This is __bold text__'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should close unclosed italics syntax with single asterisk', () => {
    const input = 'This is *italic text'
    const expected = 'This is *italic text*'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should close unclosed italics syntax with single underscore', () => {
    const input = 'This is _italic text'
    const expected = 'This is _italic text_'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should close unclosed bold and italics syntax', () => {
    const input = 'This is ***bold and italic text'
    const expected = 'This is ***bold and italic text***'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should close unclosed link syntax without URL', () => {
    const input = 'This is a [link text'
    const expected = 'This is a [link text]'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should close unclosed link syntax with URL', () => {
    const input = 'This is a [link text](https://example.com'
    const expected = 'This is a [link text](https://example.com)'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should close unclosed inline code syntax', () => {
    const input = 'This is `inline code'
    const expected = 'This is `inline code`'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should close unclosed code block syntax', () => {
    const input = 'Here is some code:\n```\nconst x = 10;'
    const expected = 'Here is some code:\n```\nconst x = 10;\n```'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should handle nested markdown elements', () => {
    const input = 'This is **bold and _italic text'
    const expected = 'This is **bold and _italic text_**'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should not alter complete markdown', () => {
    const input = 'This is **bold text** and *italic text*'
    const expected = 'This is **bold text** and *italic text*'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should handle multiline input with unclosed link', () => {
    const input =
      'Start of text [link text](https://example.com) and **bold text**\n\nI am a new paragraph with *italic text*\n\nThis is the end of the text, with a [link to the end'
    const expected =
      'Start of text [link text](https://example.com) and **bold text**\n\nI am a new paragraph with *italic text*\n\nThis is the end of the text, with a [link to the end]'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should close unclosed strikethrough syntax', () => {
    const input = 'This is ~~strikethrough text'
    const expected = 'This is ~~strikethrough text~~'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should close unclosed images syntax', () => {
    const input = '![Alt text]('
    const expected = '![Alt text]()'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should handle unclosed nested emphasis', () => {
    const input = 'Some _italic and **bold text'
    const expected = 'Some _italic and **bold text**_'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should handle unclosed code blocks with language specified', () => {
    const input = '```javascript\nconsole.log("Hello, world!");'
    const expected = '```javascript\nconsole.log("Hello, world!");\n```'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should not alter headings', () => {
    const input = '### Heading level 3'
    const expected = '### Heading level 3'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should not alter incomplete horizontal rules', () => {
    const input = 'Some text\n---'
    const expected = 'Some text\n---'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should handle incomplete tables', () => {
    const input = '| Header1 | Header2 |\n|---------|---------|\n| Row1Col1'
    const expected = '| Header1 | Header2 |\n|---------|---------|\n| Row1Col1 | |'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })

  test('should handle unclosed emphasis with tildes', () => {
    const input = 'This is ~tilde emphasis'
    const expected = 'This is ~tilde emphasis~'
    const result = fixIncompleteMarkdown(input)
    expect(result).toBe(expected)
  })
})
