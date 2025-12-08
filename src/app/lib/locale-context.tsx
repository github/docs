'use client'

import { createContext, useContext, ReactNode, useMemo } from 'react'
import type { JSX } from 'react'
import { languages, languageKeys, type LanguageCode } from '@/languages/lib/languages'

interface LocaleContextType {
  readonly locale: LanguageCode
  readonly isValidLocale: (locale: string) => locale is LanguageCode
  readonly getSupportedLocales: () => readonly LanguageCode[]
  readonly getLocaleDisplayName: (locale: LanguageCode) => string
  readonly getLocaleNativeName: (locale: LanguageCode) => string
}

const LocaleContext = createContext<LocaleContextType | null>(null)

interface LocaleProviderProps {
  readonly children: ReactNode
  readonly locale: LanguageCode
}

// Use client languages as the source of truth for supported locales
const SUPPORTED_LOCALES: readonly LanguageCode[] = languageKeys as LanguageCode[]

/**
 * Validates if a string is a supported locale
 */
function isValidLocale(locale: string): locale is LanguageCode {
  return languageKeys.includes(locale)
}

/**
 * Gets display name for a locale from languages module
 */
function getLocaleDisplayName(locale: LanguageCode): string {
  return languages[locale]?.name || locale
}

/**
 * Gets native name for a locale from languages module
 */
function getLocaleNativeName(locale: LanguageCode): string {
  return languages[locale]?.nativeName || languages[locale]?.name || locale
}

/**
 * Gets browser language preference as a valid locale
 */
function getBrowserLocale(): LanguageCode {
  if (typeof window === 'undefined') return 'en'

  const browserLang = window.navigator.language.split('-')[0]
  return isValidLocale(browserLang) ? browserLang : 'en'
}

/**
 * Enhanced locale provider with validation and error handling
 */
export function LocaleProvider({ children, locale }: LocaleProviderProps): JSX.Element {
  const contextValue = useMemo(
    () => ({
      locale: isValidLocale(locale) ? locale : 'en',
      isValidLocale,
      getSupportedLocales: () => SUPPORTED_LOCALES,
      getLocaleDisplayName,
      getLocaleNativeName,
    }),
    [locale],
  )

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>
}

/**
 * Hook to get current locale with enhanced error handling
 */
export function useLocale(): LanguageCode {
  const context = useContext(LocaleContext)

  if (context) {
    return context.locale
  }

  // Fallback for when not within LocaleProvider
  // This handles cases where the hook is used outside of the provider
  console.warn('useLocale called outside of LocaleProvider, using fallback')
  return getBrowserLocale()
}

/**
 * Hook to validate locales
 */
export function useLocaleValidation() {
  const context = useContext(LocaleContext)

  return {
    isValidLocale: context?.isValidLocale ?? isValidLocale,
    getSupportedLocales: context?.getSupportedLocales ?? (() => SUPPORTED_LOCALES),
    getLocaleDisplayName: context?.getLocaleDisplayName ?? getLocaleDisplayName,
    getLocaleNativeName: context?.getLocaleNativeName ?? getLocaleNativeName,
  }
}

/**
 * Hook to get locale context (for advanced use cases)
 */
export function useLocaleContext(): LocaleContextType {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocaleContext must be used within a LocaleProvider')
  }

  return context
}

export { isValidLocale, getLocaleDisplayName, getLocaleNativeName }
export type { LocaleContextType, LanguageCode }
