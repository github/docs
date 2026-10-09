import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import cx from 'clsx'

import { SidebarNav } from '@/frame/components/sidebar/SidebarNav'
import { Header } from '@/frame/components/page-header/Header'
import { DocsSecondaryBar, OverviewSubBar } from '@/frame/components/page-header/DocsSecondaryBar'
import {
  SidebarCollapseProvider,
  useSidebarCollapsed,
} from '@/frame/components/sidebar/SidebarCollapseContext'
import { DocsFooter } from '@/frame/components/page-footer/DocsFooter'
import { DeprecationBanner } from '@/versions/components/DeprecationBanner'
import { RestBanner } from '@/rest/components/RestBanner'
import { useMainContext } from '@/frame/components/context/MainContext'
import { useTranslation } from '@/languages/components/useTranslation'
import { Breadcrumbs } from '@/frame/components/page-header/Breadcrumbs'
import { useLanguages } from '@/languages/components/LanguagesContext'
import { ClientSideLanguageRedirect } from './ClientSideLanguageRedirect'
import { SearchOverlayContextProvider } from '@/search/components/context/SearchOverlayContext'
import { SelectionProvider } from '@/tools/components/SelectionContext'
import { ActiveSectionProvider, useMiniTocItems } from '@/frame/components/ui/MiniTocs'

import styles from './DefaultLayout.module.scss'

const MINIMAL_RENDER = Boolean(JSON.parse(process.env.MINIMAL_RENDER || 'false'))

type Props = {
  children?: React.ReactNode
  // Article and automated pages render the right-rail drawer; REST pages do not.
  // The secondary bar's collapsed Overview menu yields to that drawer at xxl.
  hasDrawer?: boolean
}
// The non-homepage branch wraps the secondary bar and article content in SelectionProvider
// so the collapsed Overview menu and article body share platform/tool selection.
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
  const { t } = useTranslation('meta')
  const router = useRouter()
  const { languages } = useLanguages()
  const [isNarrowMenuOpen, setIsNarrowMenuOpen] = useState(false)

  // Search indexing renders every page so Cheerio can read the body and meta keywords.
  if (MINIMAL_RENDER) {
    return (
      <div>
        <Head>
          <title>{page.fullTitle}</title>
        </Head>

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

  function buildApiArticleUrl(apiPath: string): string {
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

        {router.locale && <meta name="path-language" content={router.locale} />}
        {currentVersion && <meta name="path-version" content={currentVersion} />}
        {currentProduct && <meta name="path-product" content={currentProduct.id} />}
        {relativePath && (
          <meta
            name="path-article"
            content={relativePath.replace('/index.md', '').replace('.md', '')}
          />
        )}
        {page.contentType && <meta name="page-content-type" content={page.contentType} />}
        {page.documentType && <meta name="page-document-type" content={page.documentType} />}
        {page.docsTeamMetrics && page.docsTeamMetrics.length > 0 && (
          <meta name="docs-team-metrics" content={page.docsTeamMetrics.join(',')} />
        )}
        {status && <meta name="status" content={status.toString()} />}

        {page.fullTitle && (
          <>
            <meta property="og:site_name" content="GitHub Docs" />
            <meta property="og:title" content={page.fullTitle} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={getSocialCardImage()} />
          </>
        )}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:domain" content={new URL(fullUrl).hostname} />
        <meta property="twitter:url" content={fullUrl} />
        <meta name="twitter:title" content={page.fullTitle} />
        {page.introPlainText && <meta name="twitter:description" content={page.introPlainText} />}
        <meta name="twitter:image" content={getSocialCardImage()} />

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

      <a
        href="#main-content"
        className={cx('visually-hidden skip-button', styles.skipButton)}
        inert={isNarrowMenuOpen}
        aria-hidden={isNarrowMenuOpen || undefined}
      >
        Skip to main content
      </a>
      <SidebarCollapseProvider initialCollapsed={mainContext.sidebarCollapsed}>
        <Header isNarrowMenuOpen={isNarrowMenuOpen} onNarrowMenuToggle={setIsNarrowMenuOpen} />
        <div inert={isNarrowMenuOpen} aria-hidden={isNarrowMenuOpen || undefined}>
          <ClientSideLanguageRedirect />
          {isHomepageVersion ? (
            <div className="d-lg-flex">
              <div className="flex-column flex-1 min-width-0">
                <main id="main-content" className={styles.mainContent}>
                  <DeprecationBanner />
                  <RestBanner />

                  {props.children}
                </main>
                <DocsFooter />
              </div>
            </div>
          ) : (
            <SelectionProvider>
              <ActiveSectionProvider>
                <DocsSecondaryBar />
                <LayoutBody hasDrawer={props.hasDrawer}>{props.children}</LayoutBody>
              </ActiveSectionProvider>
            </SelectionProvider>
          )}
        </div>
      </SidebarCollapseProvider>
    </SearchOverlayContextProvider>
  )
}

// LayoutBody reads SidebarCollapseContext after DefaultLayout provides it.
// On mobile, the inline rail shows only when opened from the secondary bar.
// LayoutBody matches SidebarNav's search-page gate instead of router.route
// because src/pages/search.tsx and src/pages/[versionId]/search.tsx must agree
// on the facet rail.
// It mirrors OverviewSubBar's render gate so sticky-stack classes describe a bar
// that renders.
// Search results split the facet rail beside results at Brand's medium
// breakpoint; route gating keeps other pages on d-lg-flex at 1012px.
// The desktop rail-collapse cookie does not hide the open mobile nav. Otherwise
// the content column hides with no drawer visible and shows a blank area instead
// of the doc tree.
// Search ignores the collapse cookie because it has no DocsSecondaryBar toggle
// to restore filters.
// Sticky elements need an explicit height because their scroll container sets
// overflow:auto.
// The sticky-stack class publishes the header and bar offset for descendants
// such as article table headers.
// Keeping OverviewSubBar inside main lets it start at the doc-tree drawer's
// right edge and share that band with the drawer; mainContent uses overflow-x:clip,
// so sticky still resolves against the viewport.
type LayoutBodyProps = {
  children?: React.ReactNode
  hasDrawer?: boolean
}
const LayoutBody = ({ children, hasDrawer }: LayoutBodyProps) => {
  const { collapsed, mobileNavOpen } = useSidebarCollapsed()
  const { currentProduct } = useMainContext()
  const isSearchResultsPage = currentProduct?.id === 'search'
  const miniTocItems = useMiniTocItems()
  const hasSubBar = miniTocItems.length > 1
  return (
    <div className={cx('d-lg-flex', isSearchResultsPage && styles.searchColumns)}>
      {collapsed && !mobileNavOpen && !isSearchResultsPage ? null : (
        <SidebarNav mobileOpen={mobileNavOpen} />
      )}
      <div
        className={cx(
          'flex-column flex-1 min-width-0',
          styles.stickyStack,
          hasSubBar && styles.stickyStackWithSubBar,
          hasSubBar &&
            hasDrawer &&
            (collapsed ? styles.stickyStackYieldsWhenCollapsed : styles.stickyStackYieldsAtXxl),
          mobileNavOpen && styles.contentHiddenForNav,
        )}
      >
        <main id="main-content" className={styles.mainContent}>
          <OverviewSubBar hasDrawer={hasDrawer} />
          <DeprecationBanner />
          <RestBanner />

          {children}
        </main>
        <DocsFooter />
      </div>
    </div>
  )
}
