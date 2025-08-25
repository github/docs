'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { clientLanguageKeys, type ClientLanguageCode } from '@/languages/lib/client-languages'

/**
 * Validates if a string is a supported locale using client languages
 */
function isValidLocale(locale: string): locale is ClientLanguageCode {
  return clientLanguageKeys.includes(locale)
}

/**
 * Hook to detect locale from various sources with fallback logic
 */
export function useDetectLocale(): ClientLanguageCode {
  const pathname = usePathname()

  return useMemo(() => {
    // Extract locale from pathname (e.g., /es/search -> 'es')
    if (pathname) {
      const pathSegments = pathname.split('/')
      const firstSegment = pathSegments[1]

      if (firstSegment && isValidLocale(firstSegment)) {
        return firstSegment
      }
    }

    // Fallback to browser locale if available
    if (typeof window !== 'undefined' && window.navigator?.language) {
      const browserLocale = window.navigator.language.split('-')[0]
      if (isValidLocale(browserLocale)) {
        return browserLocale
      }
    }

    return 'en'
  }, [pathname])
}

/**
 * Utility function to detect locale from pathname (for server-side use)
 */
export function detectLocaleFromPath(pathname: string): ClientLanguageCode {
  const pathSegments = pathname.split('/')
  const firstSegment = pathSegments[1]

  if (firstSegment && isValidLocale(firstSegment)) {
    return firstSegment
  }

  return 'en'
}

export function getSupportedLocales(): readonly ClientLanguageCode[] {
  return clientLanguageKeys as ClientLanguageCode[]
}

export { isValidLocale }
