import { useState, useEffect } from 'react'
import Cookies from '@/frame/components/lib/cookies'
import { useRouter } from 'next/router'

import { useLanguages } from '@/languages/components/LanguagesContext'
import { USER_LANGUAGE_COOKIE_NAME } from '@/frame/lib/constants'

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
      // Strip regions because this app stores two-letter codes, so en-US becomes en.
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
