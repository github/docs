import cx from 'classnames'
import { useRouter } from 'next/router'
import { IconButton } from '@primer/react'
import { SidebarCollapseIcon, SidebarExpandIcon } from '@primer/octicons-react'

import { useMainContext } from '@/frame/components/context/MainContext'
import { useTranslation } from '@/languages/components/useTranslation'
import { useSidebarCollapsed } from '@/frame/components/sidebar/SidebarCollapseContext'
import { OverviewMenu, useMiniTocItems } from '@/frame/components/ui/MiniTocs'
import { BreadcrumbsScroller } from './BreadcrumbsScroller'

import styles from './DocsSecondaryBar.module.scss'

// The Docs 2026 secondary bar: sits below the main header, above the doc-tree
// rail + article content. Holds the nav trigger and the breadcrumb trail. The
// same sidebar collapse/expand icon is used on both desktop (collapses the rail)
// and mobile (expands the nav inline).
//
// It also hosts the collapsed "In this article" control (`OverviewMenu`), which
// renders as `OverviewSubBar` below — a row beneath this bar, placed inside the
// content column so it sits beside the doc-tree drawer rather than above it.
export const DocsSecondaryBar = () => {
  const router = useRouter()
  const { isHomepageVersion, currentProduct } = useMainContext()
  const { t } = useTranslation('header')
  const { collapsed, toggleCollapsed, mobileNavOpen, toggleMobileNav } = useSidebarCollapsed()

  // Product id rather than router.route: there are two search pages
  // (src/pages/search.tsx and src/pages/[versionId]/search.tsx), so a route test for
  // '/search' left this bar rendering on versioned search URLs only. The search rail's
  // sticky offset assumes this bar is absent, so the two have to agree.
  const isSearchResultsPage = currentProduct?.id === 'search'
  const isEarlyAccessPage = currentProduct && currentProduct.id === 'early-access'

  // Mirror the visibility rule of the header subnav this replaces.
  if (isHomepageVersion || isSearchResultsPage) {
    return null
  }

  return (
    <>
      <div data-container="secondary-nav" data-testid="docs-secondary-bar" className={styles.bar}>
        <div className={styles.leftSegment}>
          {!isEarlyAccessPage && (
            <div className={styles.toggleCell}>
              {/* Desktop: collapse/expand the whole rail. */}
              <IconButton
                data-testid="sidebar-collapse-toggle"
                className={cx(styles.desktopOnly, styles.toggleIcon)}
                variant="invisible"
                size="small"
                icon={collapsed ? SidebarCollapseIcon : SidebarExpandIcon}
                aria-label={collapsed ? t('expand_sidebar') : t('collapse_sidebar')}
                aria-expanded={!collapsed}
                onClick={toggleCollapsed}
              />
              {/* Mobile: expand/collapse the inline nav, using the same icon. */}
              <IconButton
                data-testid="sidebar-mobile-toggle"
                className={cx(styles.mobileOnly, styles.toggleIcon)}
                variant="invisible"
                size="small"
                icon={mobileNavOpen ? SidebarExpandIcon : SidebarCollapseIcon}
                aria-label={mobileNavOpen ? t('collapse_sidebar') : t('expand_sidebar')}
                aria-expanded={mobileNavOpen}
                onClick={toggleMobileNav}
              />
            </div>
          )}
          {/* Remount per route so the scroller re-anchors to the new trail's end.
              Its anchor effect only fires on mount + outer-width change; a
              client-side nav to a longer trail grows the inner scroll width
              without changing the outer width, so without this the stale
              scrollLeft would leave the new current page off-screen. */}
          <BreadcrumbsScroller key={router.asPath} />
        </div>
      </div>
    </>
  )
}

// The "In this article" control as its own row directly beneath the breadcrumb
// bar. It is rendered INSIDE the content column (see DefaultLayout's LayoutBody)
// rather than as a page-wide row, so on desktop it starts at the doc-tree
// drawer's right edge and runs to the screen edge — sharing that horizontal band
// with the drawer instead of cutting across above it. When the drawer is absent
// (collapsed, or below lg) the content column is full width, so the row is too.
//
// It shows wherever the right-rail drawer isn't holding the mini-TOC: below xxl
// with the rail expanded, below ~1074 with it collapsed, and at every width on
// pages without a drawer (e.g. REST reference).
export const OverviewSubBar = ({ hasDrawer = false }: { hasDrawer?: boolean }) => {
  const router = useRouter()
  const { isHomepageVersion } = useMainContext()
  const { collapsed } = useSidebarCollapsed()
  const miniTocItems = useMiniTocItems()

  const isSearchResultsPage = router.route === '/search'

  // Match the bar's own visibility rule — the two are a pair.
  if (isHomepageVersion || isSearchResultsPage) {
    return null
  }
  if (miniTocItems.length <= 1) {
    return null
  }

  return (
    <div
      className={cx(
        styles.overviewSubBar,
        hasDrawer &&
          (collapsed
            ? styles.overviewSubBarUntilDrawerCollapsed
            : styles.overviewSubBarUntilDrawer),
      )}
      data-testid="overview-subbar"
    >
      <OverviewMenu miniTocItems={miniTocItems} />
    </div>
  )
}
