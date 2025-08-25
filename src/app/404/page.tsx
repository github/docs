import { getAppRouterContext } from '@/app/lib/app-router-context'
import { AppRouterMainContextProvider } from '@/app/components/AppRouterMainContext'
import { translate } from '@/languages/lib/translation-utils'
import { CommentDiscussionIcon, MarkGithubIcon } from '@primer/octicons-react'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '404 - Page not found',
  other: { status: '404' },
}

export default async function Page404() {
  // Get context with UI data
  const appContext = await getAppRouterContext()

  const siteTitle = translate(appContext.site.data.ui, 'header.github_docs', 'GitHub Docs')
  const oopsTitle = translate(appContext.site.data.ui, 'meta.oops', 'Ooops!')

  return (
    <AppRouterMainContextProvider context={appContext}>
      <div className="min-h-screen d-flex flex-column">
        {/* Simple Header */}
        <div className="border-bottom color-border-muted no-print">
          <header className="container-xl p-responsive py-3 position-relative d-flex width-full">
            <div className="d-flex flex-1 flex-items-center">
              <a
                href={`/${appContext.currentLanguage}`}
                className="color-fg-default no-underline d-flex flex-items-center"
              >
                <MarkGithubIcon size={32} className="mr-2" />
                <span className="f4 text-bold">{siteTitle}</span>
              </a>
            </div>
          </header>
        </div>

        {/* Main Content */}
        <div className="container-xl p-responsive py-6 width-full flex-1">
          <article className="col-md-10 col-lg-7 mx-auto">
            <h1>{oopsTitle}</h1>
            <div className="f2 color-fg-muted mb-3" data-container="lead">
              It looks like this page doesn't exist.
            </div>
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

        <footer className="py-6">
          <div className="container-xl px-3 px-md-6">
            <ul className="d-flex flex-wrap list-style-none">
              <li className="d-flex mr-xl-3 color-fg-muted">
                <span>© 2025 GitHub, Inc.</span>
              </li>
              <li className="ml-3">
                <a
                  className="text-underline"
                  href="/site-policy/github-terms/github-terms-of-service"
                >
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
      </div>
    </AppRouterMainContextProvider>
  )
}
