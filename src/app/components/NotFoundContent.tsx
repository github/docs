'use client'
import { AppRouterHeader } from '@/app/components/AppRouterHeader'
import { useAppRouterMainContext } from '@/app/components/AppRouterMainContext'
import { ServerFooter } from '@/app/components/ServerFooter'
import { createTranslationFunctions } from '@/languages/lib/translation-utils'
import { CommentDiscussionIcon } from '@primer/octicons-react'

export function NotFoundContent() {
  const context = useAppRouterMainContext()
  const { t } = createTranslationFunctions(context.site.data.ui, 'not_found')

  return (
    <div className="min-h-screen d-flex flex-column">
      <AppRouterHeader />

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

      <ServerFooter currentLanguage={context.currentLanguage} />
    </div>
  )
}
