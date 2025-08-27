'use client'

import { createContext, useContext, ReactNode, useMemo } from 'react'
import {
  clientLanguages,
  clientLanguageKeys,
  type ClientLanguageCode,
} from '@/languages/lib/client-languages'

interface LocaleContextType {
  readonly locale: ClientLanguageCode
  readonly isValidLocale: (locale: string) => locale is ClientLanguageCode
  readonly getSupportedLocales: () => readonly ClientLanguageCode[]
  readonly getLocaleDisplayName: (locale: ClientLanguageCode) => string
  readonly getLocaleNativeName: (locale: ClientLanguageCode) => string
}

const LocaleContext = createContext<LocaleContextType | null>(null)

interface LocaleProviderProps {
  readonly children: ReactNode
  readonly locale: ClientLanguageCode
}

// Use client languages as the source of truth for supported locales
const SUPPORTED_LOCALES: readonly ClientLanguageCode[] = clientLanguageKeys as ClientLanguageCode[]

/**
 * Validates if a string is a supported locale
 */
function isValidLocale(locale: string): locale is ClientLanguageCode {
  return clientLanguageKeys.includes(locale)
}

/**
 * Gets display name for a locale from client languages data
 */
function getLocaleDisplayName(locale: ClientLanguageCode): string {
  return clientLanguages[locale]?.name || locale
}

/**
 * Gets native name for a locale from client languages data
 */
function getLocaleNativeName(locale: ClientLanguageCode): string {
  return clientLanguages[locale]?.nativeName || clientLanguages[locale]?.name || locale
}

/**
 * Gets browser language preference as a valid locale
 */
function getBrowserLocale(): ClientLanguageCode {
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
export function useLocale(): ClientLanguageCode {
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
export type { LocaleContextType, ClientLanguageCode }
