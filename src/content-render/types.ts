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
  pages?: any
  redirects?: any
  page?: {
    fullPath: string
    [key: string]: any
  }
  [key: string]: any
}

/**
 * Options for rendering operations
 */
export interface RenderOptions {
  cache?: boolean | ((template: string, context: Context) => string | null)
  filename?: string
  textOnly?: boolean
  [key: string]: any
}

/**
 * Unified processor plugin function type
 */
export type UnifiedPlugin = (context?: Context) => any

/**
 * VFile interface for unified processing
 */
export interface VFile {
  toString(): string
  [key: string]: any
}

/**
 * Unified processor interface
 */
export interface UnifiedProcessor {
  process(content: string): Promise<VFile>
  use(plugin: any, ...args: any[]): UnifiedProcessor
}
