declare module 'markdownlint-rule-helpers' {
  import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'
  import type { LintError } from 'markdownlint'

  /**
   * Adds an error to the linting results
   */
  export function addError(
    onError: RuleErrorCallback,
    lineNumber: number,
    detail?: string,
    context?: string | null,
    range?: [number, number] | number[] | string | null,
    fixInfo?: unknown,
  ): void

  /**
   * Filters tokens by type and calls a handler for each matching token
   */
  export function filterTokens(
    params: RuleParams,
    type: string,
    handler: (token: MarkdownToken) => void,
  ): void

  /**
   * Truncates long strings with ellipsis for display
   */
  export function ellipsify(text: string, length?: number, preferEnd?: boolean): string

  /**
   * Regular expression for newline characters
   */
  export const newLineRe: RegExp

  /**
   * Applies fixes to markdown content
   */
  export function applyFixes(content: string, errors: LintError[]): string
}
