declare module 'markdownlint-rule-helpers' {
  /**
   * Adds an error to the linting results
   * Using any because this third-party library doesn't provide TypeScript definitions
   * onError is a callback function with dynamic signature from markdownlint
   * fixInfo contains various fix information structures depending on the error type
   */
  export function addError(
    onError: any,
    lineNumber: number,
    detail?: string,
    context?: string | null,
    range?: [number, number] | number[] | string | null,
    fixInfo?: any,
  ): void

  /**
   * Filters tokens by type and calls a handler for each matching token
   * Using any because markdownlint-rule-helpers has no TypeScript definitions
   * params contains markdownlint parsing parameters with varying structures
   * token represents markdown tokens with different properties per token type
   */
  export function filterTokens(params: any, type: string, handler: (token: any) => void): void

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
   * Using any[] because error objects from markdownlint have dynamic structures
   */
  export function applyFixes(content: string, errors: any[]): string
}
