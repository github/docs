'use client'

import React, { createContext, useContext } from 'react'
import { languages, type LanguageCode } from '@/languages/lib/languages'

export type AppRouterLanguageItem = {
  name: string
  nativeName?: string
  code: string
  hreflang?: string
}

export type AppRouterLanguagesContextT = {
  languages: Record<string, AppRouterLanguageItem>
  currentLanguage?: LanguageCode
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
  currentLanguage?: LanguageCode
}

export function AppRouterLanguagesProvider({
  children,
  currentLanguage,
}: AppRouterLanguagesProviderProps) {
  const value: AppRouterLanguagesContextT = {
    languages,
    currentLanguage,
  }

  return (
    <AppRouterLanguagesContext.Provider value={value}>
      {children}
    </AppRouterLanguagesContext.Provider>
  )
}
