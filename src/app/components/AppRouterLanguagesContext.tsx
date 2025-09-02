'use client'

import { createContext, useContext } from 'react'
import { clientLanguages, type ClientLanguageCode } from '@/languages/lib/client-languages'

export type AppRouterLanguageItem = {
  name: string
  nativeName?: string
  code: string
  hreflang?: string
}

export type AppRouterLanguagesContextT = {
  languages: Record<string, AppRouterLanguageItem>
  currentLanguage?: ClientLanguageCode
}

export const AppRouterLanguagesContext = createContext<AppRouterLanguagesContextT | null>(null)

export const useAppRouterLanguages = (): AppRouterLanguagesContextT => {
  const context = useContext(AppRouterLanguagesContext)

  if (!context) {
    throw new Error(
      '"useAppRouterLanguages" may only be used inside "AppRouterLanguagesContext.Provider"',
    )
  }

  return context
}

/**
 * Provider component for App Router language context
 */
interface AppRouterLanguagesProviderProps {
  children: React.ReactNode
  currentLanguage?: ClientLanguageCode
}

export function AppRouterLanguagesProvider({
  children,
  currentLanguage,
}: AppRouterLanguagesProviderProps) {
  const value: AppRouterLanguagesContextT = {
    languages: clientLanguages,
    currentLanguage,
  }

  return (
    <AppRouterLanguagesContext.Provider value={value}>
      {children}
    </AppRouterLanguagesContext.Provider>
  )
}
