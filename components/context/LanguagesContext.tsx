import { createContext, useContext } from 'react'

type LanguageItem = {
  name: string
  nativeName?: string
  code: string
  hreflang: string
  wip?: boolean
}

export type LanguagesContextT = {
  languages: Record<string, LanguageItem>
  userLanguage: string
}

export const LanguagesContext = createContext<LanguagesContextT | null>(null)

export const useLanguages = (): LanguagesContextT => {
  const context = useContext(LanguagesContext)

  if (!context) {
    throw new Error('"useLanguagesContext" may only be used inside "LanguagesContext.Provider"')
  }

  return context
}
