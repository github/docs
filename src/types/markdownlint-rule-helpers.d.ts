declare module 'markdownlint-rule-helpers' {
  import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'
  import type { LintError } from 'markdownlint'

  export function addError(
    onError: RuleErrorCallback,
    lineNumber: number,
    detail?: string,
    context?: string | null,
    range?: [number, number] | number[] | string | null,
    fixInfo?: unknown,
  ): void

  export function filterTokens(
    params: RuleParams,
    type: string,
    handler: (token: MarkdownToken) => void,
  ): void

  export function ellipsify(text: string, length?: number, preferEnd?: boolean): string

  export const newLineRe: RegExp

  export function applyFixes(content: string, errors: LintError[]): string
}
