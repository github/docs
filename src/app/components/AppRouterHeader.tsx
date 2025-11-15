'use client'

import { MarkGithubIcon } from '@primer/octicons-react'
import { useAppRouterMainContext } from '@/app/components/AppRouterMainContext'
import { createTranslationFunctions } from '@/languages/lib/translation-utils'

export function AppRouterHeader() {
  const context = useAppRouterMainContext()

  const { t } = createTranslationFunctions(context.site.data.ui, 'header')

  const siteTitle = t('github_docs')

  return (
    <div className="border-bottom color-border-muted no-print">
      <header className="container-xl p-responsive py-3 position-relative d-flex width-full">
        <div className="d-flex flex-1 flex-items-center">
          <a
            href={`/${context.currentLanguage}`}
            className="color-fg-default no-underline d-flex flex-items-center"
          >
            <MarkGithubIcon size={32} className="mr-2" />
            <span className="f4 text-bold">{siteTitle}</span>
          </a>
        </div>
      </header>
    </div>
  )
}
