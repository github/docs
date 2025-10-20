'use client'

import { AppRouterMainContextProvider } from '@/app/components/AppRouterMainContext'
import { AppRouterLanguagesProvider } from '@/app/components/AppRouterLanguagesContext'
import { NotFoundContent } from '@/app/components/NotFoundContent'
import type { ServerAppRouterContext } from '@/app/lib/server-context-utils'

interface ClientNotFoundWrapperProps {
  appContext: ServerAppRouterContext
}

export function ClientNotFoundWrapper({ appContext }: ClientNotFoundWrapperProps) {
  return (
    <AppRouterLanguagesProvider currentLanguage={appContext.currentLanguage}>
      <AppRouterMainContextProvider context={appContext}>
        <NotFoundContent />
      </AppRouterMainContextProvider>
    </AppRouterLanguagesProvider>
  )
}
