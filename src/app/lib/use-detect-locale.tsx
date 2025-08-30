'use client'

import { usePathname } from 'next/navigation'
import { useMemo, useEffect, useState } from 'react'
import { clientLanguageKeys, type ClientLanguageCode } from '@/languages/lib/client-languages'
import Cookies from '@/frame/components/lib/cookies'
import { USER_LANGUAGE_COOKIE_NAME } from '@/frame/lib/constants'

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
  const [cookieLanguage, setCookieLanguage] = useState<ClientLanguageCode | null>(null)
  const [browserLanguage, setBrowserLanguage] = useState<ClientLanguageCode | null>(null)

  // Read cookie and browser language on client-side mount
  useEffect(() => {
    const userLanguageCookie = Cookies.get(USER_LANGUAGE_COOKIE_NAME)
    if (userLanguageCookie && isValidLocale(userLanguageCookie)) {
      setCookieLanguage(userLanguageCookie)
    }

    // Get language from browser as fallback
    if (navigator?.language) {
      const browserLocale = navigator.language.split('-')[0]
      if (isValidLocale(browserLocale)) {
        setBrowserLanguage(browserLocale)
      }
    }
  }, [])

  return useMemo(() => {
    // Priority order:
    // 1. URL path
    // 2. User language cookie
    // 3. Browser language
    // 4. Default to English

    // Extract locale from pathname (e.g., /es/search -> 'es')
    if (pathname) {
      const pathSegments = pathname.split('/')
      const firstSegment = pathSegments[1]

      if (firstSegment && isValidLocale(firstSegment)) {
        return firstSegment
      }
    }

    // Use cookie language if available
    if (cookieLanguage) {
      return cookieLanguage
    }

    // Use browser language if available
    if (browserLanguage) {
      return browserLanguage
    }

    return 'en'
  }, [pathname, cookieLanguage, browserLanguage])
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
