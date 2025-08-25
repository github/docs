'use client'
import { useAppRouterMainContext } from '@/app/components/AppRouterMainContext'
import { createTranslationFunctions } from '@/languages/lib/translation-utils'
import { CommentDiscussionIcon, MarkGithubIcon } from '@primer/octicons-react'
import { useMemo } from 'react'

function SimpleHeader() {
  const context = useAppRouterMainContext()

  const { t } = useMemo(
    () => createTranslationFunctions(context.site.data.ui, ['header']),
    [context.site.data.ui],
  )

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

function SimpleFooter() {
  return (
    <footer className="py-6">
      <div className="container-xl px-3 px-md-6">
        <ul className="d-flex flex-wrap list-style-none">
          <li className="d-flex mr-xl-3 color-fg-muted">
            <span>© {new Date().getFullYear()} GitHub, Inc.</span>
          </li>
          <li className="ml-3">
            <a className="text-underline" href="/site-policy/github-terms/github-terms-of-service">
              Terms
            </a>
          </li>
          <li className="ml-3">
            <a
              className="text-underline"
              href="/site-policy/privacy-policies/github-privacy-statement"
            >
              Privacy
            </a>
          </li>
          <li className="ml-3">
            <a className="text-underline" href="https://www.githubstatus.com/">
              Status
            </a>
          </li>
          <li className="ml-3">
            <a className="text-underline" href="https://github.com/pricing">
              Pricing
            </a>
          </li>
          <li className="ml-3">
            <a className="text-underline" href="https://services.github.com/">
              Expert services
            </a>
          </li>
          <li className="ml-3">
            <a className="text-underline" href="https://github.blog/">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

function SimpleLead({ children }: { children: React.ReactNode }) {
  return (
    <div className="f2 color-fg-muted mb-3" data-container="lead">
      {children}
    </div>
  )
}

export function NotFoundContent() {
  const context = useAppRouterMainContext()

  const { t } = useMemo(
    () => createTranslationFunctions(context.site.data.ui, ['meta']),
    [context.site.data.ui],
  )

  return (
    <div className="min-h-screen d-flex flex-column">
      <SimpleHeader />

      <div className="container-xl p-responsive py-6 width-full flex-1">
        <article className="col-md-10 col-lg-7 mx-auto">
          <h1>{t('oops')}</h1>
          <SimpleLead>It looks like this page doesn't exist.</SimpleLead>
          <p className="f3">
            We track these errors automatically, but if the problem persists please feel free to
            contact us.
          </p>
          <a id="support" href="https://support.github.com" className="btn btn-outline mt-2">
            <CommentDiscussionIcon size="small" className="octicon mr-1" />
            Contact support
          </a>
        </article>
      </div>

      <SimpleFooter />
    </div>
  )
}
