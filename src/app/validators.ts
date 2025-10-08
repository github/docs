import { isValidLocale } from '@/app/lib/use-detect-locale'
import { PageParams, SearchParams, Theme } from './types'

// Runtime validation helpers (theme-specific only, locale validation moved to use-detect-locale)
export const isValidTheme = (theme: string): theme is Theme =>
  ['light', 'dark', 'auto'].includes(theme)

// Type guards for runtime validation
export const isPageParams = (obj: unknown): obj is PageParams =>
  typeof obj === 'object' && obj !== null

export const isSearchParams = (obj: unknown): obj is SearchParams =>
  typeof obj === 'object' && obj !== null

// Re-export locale validation
export { isValidLocale }
