import { createContext, useContext } from 'react'

export type LanguageItem = {
  wip?: boolean
  name: string
  nativeName?: string
  code: string
  hreflang?: string
}

export type LanguagesContextT = {
  languages: Record<string, LanguageItem>
}

export const LanguagesContext = createContext<LanguagesContextT | null>(null)

export const useLanguages = (): LanguagesContextT => {
  const context = useContext(LanguagesContext)

  if (!context) {
    throw new Error('"useLanguagesContext" may only be used inside "LanguagesContext.Provider"')
  }

  return context
}
