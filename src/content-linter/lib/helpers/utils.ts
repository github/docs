import { addError, filterTokens } from 'markdownlint-rule-helpers'
import matter from '@gr2m/gray-matter'

import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'

// Adds an error object with details conditionally via the onError callback
export function addFixErrorDetail(
  onError: RuleErrorCallback,
  lineNumber: number,
  expected: string,
  actual: string,
  // Using flexible type to accommodate different range formats from various linting rules
  range: [number, number] | number[] | null,
  // Using unknown for fixInfo as markdownlint-rule-helpers accepts various fix info structures
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
    // This function assumes that the content is something. If it's an
    // empty string it can never produce a valid range.
    throw new Error('invalid content (empty)')
  }
  const startColumnIndex = line.indexOf(content)
  return startColumnIndex !== -1 ? [startColumnIndex + 1, content.length] : null
}

export function isStringQuoted(text: string): boolean {
  // String starts with either a single or double quote
  // ends with either a single or double quote
  // and optionally ends with a question mark or exclamation point
  // because that punctuation can exist outside of the quoted string
  return /^['"].*['"][?!]?$/.test(text)
}

export function isStringPunctuated(text: string): boolean {
  // String ends with punctuation of either
  // . ? ! and optionally ends with single
  // or double quotes. This also allows
  // for single or double quotes before
  // the punctuation.
  return /^.*[.?!]['"]?$/.test(text)
}

export function doesStringEndWithPeriod(text: string): boolean {
  // String ends with punctuation of either
  // . ? ! and optionally ends with single
  // or double quotes. This also allows
  // for single or double quotes before
  // the punctuation.
  return /^.*\.['"]?$/.test(text)
}

export function quotePrecedesLinkOpen(text: string | undefined): boolean {
  if (!text) return false
  return text.endsWith('"') || text.endsWith("'")
}

// Lines is an array of strings read from a
// Markdown file a split around new lines.
// This is the format we get from Markdownlint.
// Returns null if the lines do not contain
// frontmatter properties.
// Returns frontmatter as a Record with unknown values since YAML can contain various types
export function getFrontmatter(lines: string[]): Record<string, unknown> | null {
  const fmString = lines.join('\n')
  const { data } = matter(fmString)
  // If there is no frontmatter or the frontmatter contains
  // no keys, matter will return an empty object.
  if (Object.keys(data).length === 0) return null
  return data
}

export function getFrontmatterLines(lines: string[]): string[] {
  const indexStart = lines.indexOf('---')
  if (indexStart === -1) return []
  const indexEnd = lines.indexOf('---', indexStart + 1)
  return lines.slice(indexStart, indexEnd + 1)
}
