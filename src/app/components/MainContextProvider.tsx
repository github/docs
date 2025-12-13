'use client'

import type { ReactNode } from 'react'
import { MainContext, type MainContextT } from '@/frame/components/context/MainContext'

interface MainContextProviderProps {
  children: ReactNode
  value: MainContextT
}

/**
 * App Router compatible MainContext provider
 * This allows reusing existing components that depend on MainContext
 */
export function MainContextProvider({ children, value }: MainContextProviderProps) {
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}
