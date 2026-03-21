import { describe, expect, test } from 'vitest'
import {
  stripHtmlComments,
  stripHtmlCommentsAndNormalizeWhitespace,
} from '@/article-api/lib/strip-html-comments'

describe('stripHtmlComments', () => {
  test('removes single-line HTML comments', () => {
    const input = '<!-- markdownlint-disable GHD053 -->'
    const expected = ''
    expect(stripHtmlComments(input)).toBe(expected)
  })

  test('removes multiple HTML comments', () => {
    const input = '<!-- comment 1 -->\nSome content\n<!-- comment 2 -->'
    const expected = 'Some content'
    expect(stripHtmlComments(input)).toBe(expected)
  })

  test('removes inline HTML comments', () => {
    const input = 'Text before <!-- comment --> text after'
    const expected = 'Text before  text after'
    expect(stripHtmlComments(input)).toBe(expected)
  })

  test('preserves content without HTML comments', () => {
    const input = 'Just regular markdown content'
    const expected = 'Just regular markdown content'
    expect(stripHtmlComments(input)).toBe(expected)
  })

  test('handles multiple comments on same line', () => {
    const input = '<!-- comment 1 --> text <!-- comment 2 -->'
    const expected = 'text'
    expect(stripHtmlComments(input)).toBe(expected)
  })
})

describe('stripHtmlCommentsAndNormalizeWhitespace', () => {
  test('removes HTML comments and normalizes blank lines', () => {
    const input = `<!-- markdownlint-disable GHD053 -->

<!-- markdownlint-disable GHD030 -->

Content here`
    const expected = 'Content here'
    expect(stripHtmlCommentsAndNormalizeWhitespace(input)).toBe(expected)
  })

  test('normalizes multiple blank lines to at most two', () => {
    const input = `Line 1



Line 2`
    const expected = `Line 1

Line 2`
    expect(stripHtmlCommentsAndNormalizeWhitespace(input)).toBe(expected)
  })

  test('handles real CodeQL CLI content pattern', () => {
    const input = `# database analyze

Analyze a database, producing meaningful results

<!-- markdownlint-disable GHD053 -->

<!-- markdownlint-disable GHD030 -->

<!-- Content after this section is automatically generated -->

## Synopsis

\`\`\`shell
codeql database analyze
\`\`\``

    const expected = `# database analyze

Analyze a database, producing meaningful results

## Synopsis

\`\`\`shell
codeql database analyze
\`\`\``

    expect(stripHtmlCommentsAndNormalizeWhitespace(input)).toBe(expected)
  })

  test('preserves intentional double line breaks', () => {
    const input = `# Title

Paragraph 1

Paragraph 2`
    const expected = `# Title

Paragraph 1

Paragraph 2`
    expect(stripHtmlCommentsAndNormalizeWhitespace(input)).toBe(expected)
  })
})
