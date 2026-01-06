/**
 * Types for the content-render module
 */

/**
 * Context interface for content rendering operations
 */
export interface Context {
  currentLanguage?: string
  autotitleLanguage?: string
  currentVersion?: string
  currentProduct?: string
  markdownRequested?: boolean
  pages?: Record<string, unknown>
  redirects?: Record<string, string>
  page?: {
    fullPath: string
    [key: string]: unknown
  }
  [key: string]: unknown
}

/**
 * Options for rendering operations
 */
export interface RenderOptions {
  cache?: boolean | ((template: string, context: Context) => string | null)
  filename?: string
  textOnly?: boolean
  [key: string]: unknown
}

/**
 * Unified processor plugin function type
 */
export type UnifiedPlugin = (context?: Context) => unknown

/**
 * VFile interface for unified processing
 */
export interface VFile {
  toString(): string
  [key: string]: unknown
}

/**
 * Unified processor interface
 */
export interface UnifiedProcessor {
  process(content: string): Promise<VFile>
  use(plugin: unknown, ...args: unknown[]): UnifiedProcessor
}
