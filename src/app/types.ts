/**
 * Enhanced type definitions for the app router with strict validation
 */

import React from 'react'
import type { LanguageCode } from '@/languages/lib/languages'

// Core theme types with strict validation
export type Theme = 'light' | 'dark' | 'auto'
export type ColorMode = 'light' | 'dark'

// Re-export locale type from languages.ts for consistency
export type Locale = LanguageCode

// Version and product identifiers with validation
export type VersionId = string
export type ProductId = string
export type CategoryId = string

// Enhanced page parameters with validation
export interface PageParams {
  readonly versionId?: VersionId
  readonly productId?: ProductId
  readonly categoryId?: CategoryId
}

// Search parameters with better typing
export interface SearchParams {
  readonly [key: string]: string | string[] | undefined
}

// Route context with comprehensive typing
export interface RouteContext {
  readonly locale: Locale
  readonly versionId?: VersionId
  readonly productId?: ProductId
  readonly categoryId?: CategoryId
}

// Theme configuration with complete typing
export interface ThemeConfig {
  readonly theme: Theme
  readonly colorMode: ColorMode
  readonly component: {
    readonly colorMode: ColorMode
    readonly dayScheme: string
    readonly nightScheme: string
  }
}

// Error types for better error handling
export interface AppError {
  readonly message: string
  readonly code: string
  readonly statusCode: number
  readonly context?: Record<string, unknown>
}

// Navigation item with accessibility support
export interface NavigationItem {
  readonly href: string
  readonly title: string
  readonly isActive?: boolean
  readonly ariaLabel?: string
  readonly children?: readonly NavigationItem[]
}

// Layout props with enhanced typing
export interface LayoutProps {
  readonly children: React.ReactNode
  readonly className?: string
}

// Component props with better composition
export interface ComponentProps {
  readonly className?: string
  readonly children?: React.ReactNode
  readonly 'data-testid'?: string
}

// Utility types for better type safety
export type NonEmptyArray<T> = [T, ...T[]]
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>
export type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
