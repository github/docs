import { createContext, useContext } from 'react'
import languages from 'lib/languages.js'

type LanguageItem = {
  name: string
  nativeName?: string
  code: string
  hreflang: string
  wip?: boolean
}

export type LanguagesContextT = {
  languages: Record<string, LanguageItem>
}

export const LanguagesContext = createContext<LanguagesContextT | null>(null)

type Props = {
  children?: React.ReactNode
}
export const LanguagesProvider = ({ children }: Props) => {
  return <LanguagesContext.Provider value={{ languages }}>{children}</LanguagesContext.Provider>
}

export const useLanguages = (): LanguagesContextT => {
  const context = useContext(LanguagesContext)

  if (!context) {
    throw new Error('"useLanguagesContext" may only be used inside "LanguagesContext.Provider"')
  }

  return context
}
