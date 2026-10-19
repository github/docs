import { addError, filterTokens } from 'markdownlint-rule-helpers'
import matter from '@gr2m/gray-matter'

import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'

export function addFixErrorDetail(
  onError: RuleErrorCallback,
  lineNumber: number,
  expected: string,
  actual: string,
  // Accept the range shapes emitted by different linting rules.
  range: [number, number] | number[] | null,
  // markdownlint-rule-helpers accepts several fix info shapes.
  fixInfo: unknown,
): void {
  addError(onError, lineNumber, `Expected: ${expected}`, ` Actual: ${actual}`, range, fixInfo)
}

export function forEachInlineChild<T = MarkdownToken>(
  params: RuleParams,
  type: string,
  handler: (child: T, token?: MarkdownToken) => void | Promise<void>,
): void {
  filterTokens(params, 'inline', (token: MarkdownToken) => {
    for (const child of token.children!.filter((c) => c.type === type)) {
      handler(child as unknown as T, token)
    }
  })
}

export function getRange(line: string, content: string): [number, number] | null {
  if (content.length === 0) {
    // Empty content cannot produce a valid markdownlint range.
    throw new Error('invalid content (empty)')
  }
  const startColumnIndex = line.indexOf(content)
  return startColumnIndex !== -1 ? [startColumnIndex + 1, content.length] : null
}

export function isStringQuoted(text: string): boolean {
  // Match quotes around the full string, with optional ? or ! outside the quote.
  return /^['"].*['"][?!]?$/.test(text)
}

export function isStringPunctuated(text: string): boolean {
  // Match sentence punctuation with an optional closing quote.
  return /^.*[.?!]['"]?$/.test(text)
}

export function doesStringEndWithPeriod(text: string): boolean {
  // String ends with a period, optionally followed by a single or double quote.
  return /^.*\.['"]?$/.test(text)
}

export function quotePrecedesLinkOpen(text: string | undefined): boolean {
  if (!text) return false
  return text.endsWith('"') || text.endsWith("'")
}

// markdownlint passes files as line arrays, and gray-matter needs a string.
export function getFrontmatter(lines: string[]): Record<string, unknown> | null {
  const fmString = lines.join('\n')
  const { data } = matter(fmString)
  // gray-matter returns an empty object when frontmatter is absent or empty.
  if (Object.keys(data).length === 0) return null
  return data
}

export function getFrontmatterLines(lines: string[]): string[] {
  const indexStart = lines.indexOf('---')
  if (indexStart === -1) return []
  const indexEnd = lines.indexOf('---', indexStart + 1)
  return lines.slice(indexStart, indexEnd + 1)
}
