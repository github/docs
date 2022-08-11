import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import { languageKeys } from '../../lib/languages.js'
import { PREFERRED_LOCALE_COOKIE_NAME } from '../../lib/constants.js'

export function useUserLanguage() {
  const [userLanguage, setUserLanguage] = useState<string>('en')

  useEffect(() => {
    const languagePreferred = [
      Cookies.get(PREFERRED_LOCALE_COOKIE_NAME),
      navigator.language,
      ...navigator.languages,
    ]
      .filter(Boolean)
      // If it comes from `navigator.language` it most likely will contain
      // the region. E.g. `en-US` but in our application, we don't use
      // the region.
      .map((lang) => lang && lang.slice(0, 2).toLowerCase())
      .find((lang) => lang && languageKeys.includes(lang))
    if (languagePreferred) {
      setUserLanguage(languagePreferred)
    }
  }, [])

  return { userLanguage }
}
