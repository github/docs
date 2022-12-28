import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

import { useLanguages } from 'components/context/LanguagesContext'
import { USER_LANGUAGE_COOKIE_NAME } from '../../lib/constants.js'

export function useUserLanguage() {
  const { locale } = useRouter()
  const [userLanguage, setUserLanguage] = useState<string>('en')
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

  return { userLanguage }
}
