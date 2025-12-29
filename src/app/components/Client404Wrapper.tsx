'use client'

import { AppRouterFooter } from '@/app/components/AppRouterFooter'
import { AppRouterHeader } from '@/app/components/AppRouterHeader'
import { AppRouterLanguagesProvider } from '@/app/components/AppRouterLanguagesContext'
import { AppRouterMainContextProvider } from '@/app/components/AppRouterMainContext'
import type { ServerAppRouterContext } from '@/app/lib/server-context-utils'
import { createTranslationFunctions } from '@/languages/lib/translation-utils'
import { CommentDiscussionIcon } from '@primer/octicons-react'

interface Client404WrapperProps {
  appContext: ServerAppRouterContext
}

export function Client404Wrapper({ appContext }: Client404WrapperProps) {
  const { t } = createTranslationFunctions(appContext.site.data.ui, 'not_found')
  return (
    <AppRouterLanguagesProvider currentLanguage={appContext.currentLanguage}>
      <AppRouterMainContextProvider context={appContext}>
        <div className="min-h-screen d-flex flex-column">
          <AppRouterHeader />
          {/* Main Content */}
          <div className="container-xl p-responsive py-6 width-full flex-1">
            <article className="col-md-10 col-lg-7 mx-auto">
              <h1>{t('title')}</h1>
              <div className="f2 color-fg-muted mb-3" data-container="lead">
                {t('message')}
              </div>
              <p className="f3">{t('contact')}</p>
              <a id="support" href="https://support.github.com" className="btn btn-outline mt-2">
                <CommentDiscussionIcon size="small" className="octicon mr-1" />
                {t('contact_cta')}
              </a>
            </article>
          </div>
          <AppRouterFooter />
        </div>
      </AppRouterMainContextProvider>
    </AppRouterLanguagesProvider>
  )
}
