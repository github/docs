import Head from 'next/head'

import { SidebarNav } from 'components/sidebar/SidebarNav'
import { Header } from 'components/page-header/Header'
import { SmallFooter } from 'components/page-footer/SmallFooter'
import { ScrollButton } from 'components/ScrollButton'
import { SupportSection } from 'components/page-footer/SupportSection'
import { DeprecationBanner } from 'components/page-header/DeprecationBanner'
import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from './hooks/useTranslation'

type Props = { children?: React.ReactNode }
export const DefaultLayout = (props: Props) => {
  const { page, error, isHomepageVersion, currentPathWithoutLanguage, fullUrl, status } = useMainContext()
  const { t } = useTranslation('errors')
  return (
    <div className="d-lg-flex">
      <Head>
        {error === '404' ? (
          <title>{t('oops')}</title>
        ) : (!isHomepageVersion && page.fullTitle) ||
          (currentPathWithoutLanguage.includes('enterprise-server') && page.fullTitle) ? (
          <title>{page.fullTitle}</title>
        ) : null}

        {/* For Google and Bots */}
        {page.introPlainText && <meta name="description" content={page.introPlainText} />}

        {/* For local site search indexing */}
        {page.topics.length > 0 && <meta name="keywords" content={page.topics.join(',')} />}

        {page.hidden && <meta name="robots" content="noindex" />}

        {page.languageVariants.map((languageVariant) => {
          return (
            <link
              key={languageVariant.href}
              rel="alternate"
              hrefLang={languageVariant.hreflang}
              href={`https://docs.github.com${languageVariant.href}`}
            />
          )
        })}

        {/* For analytics events */}
        {status && <meta name="status" content={status.toString()} />}
        {page.type && <meta name="page-type" content={page.type} />}
        {page.documentType && <meta name="page-document-type" content={page.documentType} />}

        {page.fullTitle && (
          <>
            <meta property="og:site_name" content="GitHub Docs" />
            <meta property="og:title" content={page.fullTitle} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={fullUrl} />
            <meta
              property="og:image"
              content="https://github.githubassets.com/images/modules/open_graph/github-logo.png"
            />
          </>
        )}
      </Head>
      <SidebarNav />

      <main className="flex-1 min-width-0">
        <Header />
        <DeprecationBanner />

        {props.children}

        <SupportSection />
        <SmallFooter />
        <ScrollButton />
      </main>
    </div>
  )
}
