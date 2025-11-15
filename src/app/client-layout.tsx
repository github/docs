'use client'

import React, { useEffect, useMemo, useState } from 'react'
import type { JSX } from 'react'
import { ThemeProvider } from '@primer/react'

import { LocaleProvider } from '@/app/lib/locale-context'
import { useDetectLocale } from '@/app/lib/use-detect-locale'
import { useTheme } from '@/color-schemes/components/useTheme'
import { initializeEvents } from '@/events/components/events'
import { CTAPopoverProvider } from '@/frame/components/context/CTAContext'
import { SharedUIContextProvider } from '@/frame/components/context/SharedUIContext'
import { LanguagesContext, LanguagesContextT } from '@/languages/components/LanguagesContext'
import { languages, type LanguageCode } from '@/languages/lib/languages'
import { MainContextProvider } from '@/app/components/MainContextProvider'
import { createMinimalMainContext } from '@/app/lib/main-context-adapter'
import type { AppRouterContext } from '@/app/lib/app-router-context'

interface ClientLayoutProps {
  readonly children: React.ReactNode
  readonly appContext?: AppRouterContext
  readonly pageData?: {
    title?: string
    fullTitle?: string
    introPlainText?: string
    topics?: string[]
    documentType?: string
    type?: string
    hidden?: boolean
  }
}

export function ClientLayout({ children, appContext, pageData }: ClientLayoutProps): JSX.Element {
  const { theme } = useTheme()
  const locale: LanguageCode = useDetectLocale()
  const [isInitialized, setIsInitialized] = useState(false)
  const [initializationError, setInitializationError] = useState<Error | null>(null)

  const languagesContext: LanguagesContextT = useMemo(() => ({ languages }), [])

  // Create MainContext-compatible data for App Router
  const mainContext = useMemo(
    () => createMinimalMainContext(pageData, appContext),
    [pageData, appContext],
  )

  useEffect(() => {
    const initializeTheme = async (): Promise<void> => {
      try {
        const html = document.documentElement

        if (theme.css?.colorMode) {
          html.setAttribute('data-color-mode', theme.css.colorMode)
        }

        if (theme.css?.darkTheme) {
          html.setAttribute('data-dark-theme', theme.css.darkTheme)
        }

        if (theme.css?.lightTheme) {
          html.setAttribute('data-light-theme', theme.css.lightTheme)
        }

        if (!isInitialized) {
          await initializeEvents()
          setIsInitialized(true)
        }
      } catch (error) {
        console.error('Failed to initialize theme:', error)
        setInitializationError(error as Error)
      }
    }

    initializeTheme()
  }, [theme, isInitialized])

  if (initializationError) {
    return (
      <div
        role="alert"
        className="min-h-screen flex items-center justify-center bg-canvas-default p-4"
      >
        <div className="max-w-md text-center">
          <h2 className="text-xl font-semibold mb-4 text-danger-fg">Something went wrong</h2>
          <p className="text-fg-muted mb-4">Please try refreshing the page.</p>
          <button
            onClick={() => {
              setInitializationError(null)
              setIsInitialized(false)
            }}
            className="btn btn-primary"
            type="button"
            aria-label="Try again"
          >
            Try again
          </button>
        </div>
      </div>
    )
  }

  return (
    <LocaleProvider locale={locale}>
      <LanguagesContext.Provider value={languagesContext}>
        <MainContextProvider value={mainContext}>
          <ThemeProvider
            colorMode={theme.component.colorMode}
            dayScheme={theme.component.dayScheme}
            nightScheme={theme.component.nightScheme}
            preventSSRMismatch
          >
            <SharedUIContextProvider>
              <CTAPopoverProvider>
                <div className="min-h-screen flex flex-col">{children}</div>
              </CTAPopoverProvider>
            </SharedUIContextProvider>
          </ThemeProvider>
        </MainContextProvider>
      </LanguagesContext.Provider>
    </LocaleProvider>
  )
}
