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

export interface RenderOptions {
  cache?: boolean | ((template: string, context: Context) => string | null)
  filename?: string
  textOnly?: boolean
  [key: string]: unknown
}

export type UnifiedPlugin = (context?: Context) => unknown

export interface VFile {
  toString(): string
  [key: string]: unknown
}

export interface UnifiedProcessor {
  process(content: string): Promise<VFile>
  use(plugin: unknown, ...args: unknown[]): UnifiedProcessor
}
