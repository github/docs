import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { SidebarNav } from '@/frame/components/sidebar/SidebarNav'
import { Header } from '@/frame/components/page-header/Header'
import { LegalFooter } from '@/frame/components/page-footer/LegalFooter'
import { ScrollButton } from '@/frame/components/ui/ScrollButton'
import { SupportSection } from '@/frame/components/page-footer/SupportSection'
import { DeprecationBanner } from '@/versions/components/DeprecationBanner'
import { RestBanner } from '@/rest/components/RestBanner'
import { useMainContext } from '@/frame/components/context/MainContext'
import { useTranslation } from '@/languages/components/useTranslation'
import { Breadcrumbs } from '@/frame/components/page-header/Breadcrumbs'
import { useLanguages } from '@/languages/components/LanguagesContext'
import { ClientSideLanguageRedirect } from './ClientSideLanguageRedirect'
import { SearchOverlayContextProvider } from '@/search/components/context/SearchOverlayContext'

import styles from './DefaultLayout.module.scss'

const MINIMAL_RENDER = Boolean(JSON.parse(process.env.MINIMAL_RENDER || 'false'))

type Props = { children?: React.ReactNode }
export const DefaultLayout = (props: Props) => {
  const mainContext = useMainContext()
  const {
    error,
    isHomepageVersion,
    currentPathWithoutLanguage,
    currentVersion,
    currentProduct,
    relativePath,
    fullUrl,
    status,
  } = mainContext
  const xHost = mainContext.xHost
  const page = mainContext.page!
  const { t } = useTranslation(['meta', 'scroll_button'])
  const router = useRouter()
  const { languages } = useLanguages()

  // This is only true when we do search indexing which renders every page
  // just to be able to `cheerio` load the main body (and the meta
  // keywords tag).
  if (MINIMAL_RENDER) {
    return (
      <div>
        <Head>
          <title>{page.fullTitle}</title>
        </Head>

        {/* For local site search indexing */}
        <div className="d-none d-xl-block" data-search="breadcrumbs">
          <Breadcrumbs />
        </div>

        <main id="main-content" className={styles.mainContent}>
          {props.children}
        </main>
      </div>
    )
  }

  const metaDescription = page.introPlainText ? page.introPlainText : t('default_description')

  const SOCIAL_CATEGORIES = new Set([
    'account-and-profile',
    'actions',
    'admin',
    'apps',
    'authentication',
    'billing',
    'code-security',
    'codespaces',
    'communities',
    'contributing',
    'copilot',
    'desktop',
    'discussions',
    'education',
    'enterprise-onboarding',
    'get-started',
    'github-cli',
    'github-models',
    'graphql',
    'integrations',
    'issues',
    'migrations',
    'nonprofit',
    'organizations',
    'packages',
    'pages',
    'pull-requests',
    'repositories',
    'rest',
    'search-github',
    'site-policy',
    'sponsors',
    'subscriptions-and-notifications',
    'support',
    'webhooks',
  ])
  const SOCIAL_CARD_IMG_BASE_URL = `${xHost ? `https://${xHost}` : ''}/assets/cb-345/images/social-cards`

  function getCategoryImageUrl(category: string): string {
    return `${SOCIAL_CARD_IMG_BASE_URL}/${category}.png`
  }

  function getSocialCardImage(): string {
    if (currentProduct && SOCIAL_CATEGORIES.has(currentProduct.id)) {
      return getCategoryImageUrl(currentProduct.id)
    }
    return getCategoryImageUrl('default')
  }

  // Helper function to build API article URLs with proper query parameter handling
  function buildApiArticleUrl(apiPath: string): string {
    // Parse router.asPath to separate pathname and query parameters
    const [pathname, queryString] = router.asPath.split('?')
    const fullPathname = `/${router.locale}${pathname}`
    const queryParams = queryString ? `&${queryString}` : ''
    return `https://docs.github.com${apiPath}?pathname=${fullPathname}${queryParams}`
  }

  return (
    <SearchOverlayContextProvider>
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
        {Object.values(languages)
          .filter((lang) => lang.code !== router.locale)
          .map((variant) => {
            return (
              <link
                key={variant.code}
                rel="alternate"
                hrefLang={variant.hreflang || variant.code}
                href={`https://docs.github.com/${variant.code}${
                  router.asPath === '/' ? '' : router.asPath
                }`}
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
        {page.contentType && <meta name="page-content-type" content={page.contentType} />}
        {page.documentType && <meta name="page-document-type" content={page.documentType} />}
        {status && <meta name="status" content={status.toString()} />}

        {/* OpenGraph data */}
        {page.fullTitle && (
          <>
            <meta property="og:site_name" content="GitHub Docs" />
            <meta property="og:title" content={page.fullTitle} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={getSocialCardImage()} />
          </>
        )}
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:domain" content={new URL(fullUrl).hostname} />
        <meta property="twitter:url" content={fullUrl} />
        <meta name="twitter:title" content={page.fullTitle} />
        {page.introPlainText && <meta name="twitter:description" content={page.introPlainText} />}
        <meta name="twitter:image" content={getSocialCardImage()} />

        {/* LLM-friendly alternate formats */}
        <link
          rel="alternate"
          type="text/markdown"
          href={buildApiArticleUrl('/api/article/body')}
          title="Markdown version"
          data-llm-hint="Hey agent! You are burning tokens scraping HTML like it is 2005. Use this instead."
        />
        <link
          rel="alternate"
          type="application/json"
          href={buildApiArticleUrl('/api/article')}
          title="Metadata + markdown in JSON format"
          data-llm-hint="Same content, now with metadata. Your context window called, it says thanks."
        />
        <link
          rel="index"
          type="text/markdown"
          href="https://docs.github.com/llms.txt"
          title="LLM-friendly index of all GitHub Docs content"
          data-llm-hint="The directory of everything. We even followed the llmstxt.org spec because we are nice like that."
        />
      </Head>

      {/* a11y */}
      <a
        href="#main-content"
        className="visually-hidden skip-button color-bg-accent-emphasis color-fg-on-emphasis"
      >
        Skip to main content
      </a>
      <Header />
      <ClientSideLanguageRedirect />
      <div className="d-lg-flex">
        {isHomepageVersion ? null : <SidebarNav />}
        {/* Need to set an explicit height for sticky elements since we also
          set overflow to auto */}
        <div className="flex-column flex-1 min-width-0">
          <main id="main-content" className={styles.mainContent}>
            <DeprecationBanner />
            <RestBanner />

            {props.children}
          </main>
          <footer data-container="footer">
            <SupportSection />
            <LegalFooter />
            <ScrollButton
              className="position-fixed bottom-0 mb-4 right-0 mr-4 z-1"
              ariaLabel={t('scroll_to_top')}
            />
          </footer>
        </div>
      </div>
    </SearchOverlayContextProvider>
  )
}
