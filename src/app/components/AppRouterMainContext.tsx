'use client'
import type { AppRouterContext } from '@/app/lib/app-router-context'
import type { MainContextT } from '@/frame/components/context/MainContext'
import { adaptAppRouterContextToMainContext } from '@/app/lib/main-context-adapter'
import { createContext, ReactNode, useContext, useMemo } from 'react'

export const AppRouterMainContext = createContext<AppRouterContext | null>(null)

// Provides MainContext-compatible data
export const AppRouterCompatMainContext = createContext<MainContextT | null>(null)

export function AppRouterMainContextProvider({
  children,
  context,
}: {
  children: ReactNode
  context: AppRouterContext
}) {
  // Create a MainContext-compatible version for existing components
  const mainContextCompat = useMemo(() => adaptAppRouterContextToMainContext(context), [context])

  return (
    <AppRouterMainContext.Provider value={context}>
      <AppRouterCompatMainContext.Provider value={mainContextCompat}>
        {children}
      </AppRouterCompatMainContext.Provider>
    </AppRouterMainContext.Provider>
  )
}

export function useAppRouterMainContext(): AppRouterContext {
  const context = useContext(AppRouterMainContext)

  if (!context) {
    throw new Error('useAppRouterMainContext must be used within AppRouterMainContextProvider')
  }

  return context
}

// Hook for components that need MainContext compatibility
export function useAppRouterCompatMainContext(): MainContextT {
  const context = useContext(AppRouterCompatMainContext)

  if (!context) {
    throw new Error(
      'useAppRouterCompatMainContext must be used within AppRouterMainContextProvider',
    )
  }

  return context
}
