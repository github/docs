import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import cx from 'classnames'

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
  // Whether this page renders the right-rail "In this article" drawer (article +
  // automated pages do; REST reference pages do not). Controls whether the
  // secondary bar's collapsed Overview menu yields to the drawer at xxl.
  hasDrawer?: boolean
}
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
        {page.contentType && <meta name="page-content-type" content={page.contentType} />}
        {page.documentType && <meta name="page-document-type" content={page.documentType} />}
        {page.docsTeamMetrics && page.docsTeamMetrics.length > 0 && (
          <meta name="docs-team-metrics" content={page.docsTeamMetrics.join(',')} />
        )}
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
            // SelectionProvider wraps both the secondary bar and the content so the
            // bar's collapsed "In this article" menu (OverviewMenu) sees the same
            // platform/tool selection as the article body and filters its headings
            // accordingly.
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

// The doc-tree rail + content column, split out so it can read the collapse
// context that DefaultLayout provides. On desktop the rail shows unless
// collapsed; on mobile it shows inline (in the page flow, like desktop) only
// when the nav is opened from the secondary bar. The content column (flex-1)
// fills the row when the rail is absent.
type LayoutBodyProps = {
  children?: React.ReactNode
  hasDrawer?: boolean
}
const LayoutBody = ({ children, hasDrawer }: LayoutBodyProps) => {
  const { collapsed, mobileNavOpen } = useSidebarCollapsed()
  const { currentProduct } = useMainContext()
  // Matches SidebarNav's own gate rather than testing router.route. There are two search
  // pages, src/pages/search.tsx and src/pages/[versionId]/search.tsx, so a route test
  // for '/search' misses every versioned search URL, and this check would then disagree
  // with SidebarNav about whether the rail is a facet rail.
  const isSearchResultsPage = currentProduct?.id === 'search'
  // Mirrors OverviewSubBar's own render gate (it returns null at <= 1 item), so
  // the sticky-stack classes below describe the bar that actually renders.
  const miniTocItems = useMiniTocItems()
  const hasSubBar = miniTocItems.length > 1
  return (
    // `d-lg-flex` only goes side-by-side at 1012px. The search page's facet rail
    // is meant to sit beside the results from brand's `medium` breakpoint, so it
    // gets an earlier split of its own. Route-gated, so no other page moves.
    <div className={cx('d-lg-flex', isSearchResultsPage && styles.searchColumns)}>
      {/* `collapsed` is the desktop rail-collapse state (persisted). The inline
        mobile nav is independent, so still render the sidebar when it's open.
        Otherwise opening the mobile nav while the desktop rail is collapsed
        hides the content column (contentHiddenForNav) with no drawer to show,
        so the open nav displays a blank area instead of the doc tree.

        Search is exempt: the cookie is shared with the doc-tree rail, but the
        search page has no toggle to undo it (DocsSecondaryBar returns null
        there), so honouring it would strand the filters with no way back. */}
      {collapsed && !mobileNavOpen && !isSearchResultsPage ? null : (
        <SidebarNav mobileOpen={mobileNavOpen} />
      )}
      {/* Need to set an explicit height for sticky elements since we also
        set overflow to auto */}
      <div
        className={cx(
          'flex-column flex-1 min-width-0',
          // Publish the sticky-stack height to everything in the column (article
          // table headers read it). Driven by the same values as OverviewSubBar's
          // visibility modifier just below, so the offset and the bar agree.
          styles.stickyStack,
          hasSubBar && styles.stickyStackWithSubBar,
          hasSubBar &&
            hasDrawer &&
            (collapsed ? styles.stickyStackYieldsWhenCollapsed : styles.stickyStackYieldsAtXxl),
          mobileNavOpen && styles.contentHiddenForNav,
        )}
      >
        <main id="main-content" className={styles.mainContent}>
          {/* Inside <main>, not before it: as a preceding sibling the "Skip to
              main content" link jumped the reader straight past the page's only
              in-article navigation. Still within the content column, so on
              desktop it starts at the doc-tree drawer's right edge and runs to
              the screen edge, sharing that band with the drawer rather than
              cutting across above it. (.mainContent uses `overflow-x: clip`,
              which creates no scroll container, so sticky still resolves against
              the viewport.) */}
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
