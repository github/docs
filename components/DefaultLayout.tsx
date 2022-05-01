import Head from 'next/head'

import { SidebarNav } from 'components/sidebar/SidebarNav'
import { Header } from 'components/page-header/Header'
import { SmallFooter } from 'components/page-footer/SmallFooter'
import { ScrollButton } from 'components/ui/ScrollButton'
import { SupportSection } from 'components/page-footer/SupportSection'
import { DeprecationBanner } from 'components/page-header/DeprecationBanner'
import { RestBanner } from 'components/page-header/RestBanner'
import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { useRouter } from 'next/router'

type Props = { children?: React.ReactNode }
export const DefaultLayout = (props: Props) => {
  const {
    page,
    error,
    isHomepageVersion,
    currentPathWithoutLanguage,
    currentVersion,
    currentProduct,
    relativePath,
    fullUrl,
    status,
  } = useMainContext()
  const { t } = useTranslation(['errors', 'meta', 'scroll_button'])
  const router = useRouter()
  const metaDescription = page.introPlainText ? page.introPlainText : t('default_description')
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
        <meta name="description" content={metaDescription} />
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

        {/* For local site search indexing */}
        {page.topics.length > 0 && <meta name="keywords" content={page.topics.join(',')} />}

        {/* For analytics events */}
        {router.locale && <meta name="path-language" content={router.locale} />}
        {currentVersion && <meta name="path-version" content={currentVersion} />}
        {currentProduct && <meta name="path-product" content={currentProduct.id} />}
        {relativePath && (
          <meta
            name="path-article"
            content={relativePath.replace('/index.md', '').replace('.md', '')}
          />
        )}
        {page.type && <meta name="page-type" content={page.type} />}
        {page.documentType && <meta name="page-document-type" content={page.documentType} />}
        {status && <meta name="status" content={status.toString()} />}

        {/* OpenGraph data */}
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
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <SidebarNav />
      {/* Need to set an explicit height for sticky elements since we also
          set overflow to auto */}
      <div className="flex-column flex-1">
        <Header />
        <main id="main-content" style={{ scrollMarginTop: '5rem' }}>
          <DeprecationBanner />
          <RestBanner />

          {props.children}
        </main>
        <footer>
          <SupportSection />
          <SmallFooter />
          <ScrollButton
            className="position-fixed bottom-0 mb-4 right-0 mr-4 z-1"
            ariaLabel={t('scroll_to_top')}
          />
        </footer>
      </div>
    </div>
  )
}
