import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useLanguages } from 'src/languages/components/LanguagesContext'
import Cookies from 'src/frame/components/lib/cookies'
import { USER_LANGUAGE_COOKIE_NAME } from 'src/frame/lib/constants.js'

export function ClientSideLanguageRedirect() {
  const { locale, asPath, replace } = useRouter()
  const { languages } = useLanguages()
  const availableLanguageKeys = new Set(Object.keys(languages))

  useEffect(() => {
    const cookieValue = Cookies.get(USER_LANGUAGE_COOKIE_NAME)
    if (cookieValue && cookieValue !== locale && availableLanguageKeys.has(cookieValue)) {
      const newPath = `/${cookieValue}${asPath}`
      replace(newPath, undefined, { locale: cookieValue })
    }
  }, [locale, availableLanguageKeys, asPath])
  return null
}
