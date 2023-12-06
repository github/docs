import { useState, useEffect } from 'react'
import Cookies from 'src/frame/components/lib/cookies'
import { useRouter } from 'next/router'

import { useLanguages } from 'src/languages/components/LanguagesContext'
import { USER_LANGUAGE_COOKIE_NAME } from 'src/frame/lib/constants.js'

export function useUserLanguage() {
  const { locale } = useRouter()
  const [userLanguage, setUserLanguage] = useState('en')
  const { languages } = useLanguages()

  useEffect(() => {
    const languagePreferred = [
      Cookies.get(USER_LANGUAGE_COOKIE_NAME),
      navigator.language,
      ...navigator.languages,
    ]
      .filter(Boolean)
      // If it comes from `navigator.language` it most likely will contain
      // the region. E.g. `en-US` but in our application, we don't use
      // the region.
      .map((lang) => lang && lang.slice(0, 2).toLowerCase())
      .find((lang) => lang && lang in languages)

    if (languagePreferred) {
      setUserLanguage(languagePreferred)
    }
  }, [locale])

  function setUserLanguageCookie(language: string) {
    Cookies.set(USER_LANGUAGE_COOKIE_NAME, language)
    setUserLanguage(language)
  }

  return { userLanguage, setUserLanguageCookie }
}
