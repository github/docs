import cx from 'clsx'
import { useRouter } from 'next/router'
import { SidebarCollapseIcon, SidebarExpandIcon } from '@primer/octicons-react'

import { IconButton } from '@/frame/components/ui/IconButton'
import { useMainContext } from '@/frame/components/context/MainContext'
import { useTranslation } from '@/languages/components/useTranslation'
import { useSidebarCollapsed } from '@/frame/components/sidebar/SidebarCollapseContext'
import { OverviewMenu, useMiniTocItems } from '@/frame/components/ui/MiniTocs'
import { BreadcrumbsScroller } from './BreadcrumbsScroller'

import styles from './DocsSecondaryBar.module.scss'

// The Docs 2026 secondary bar sits below the main header, above the doc-tree rail
// and article content. It holds the nav trigger and breadcrumb trail. Desktop uses
// the shared sidebar icon to collapse the rail; mobile uses it to expand inline nav.
//
// It also hosts the collapsed In this article control, OverviewMenu, which renders
// as OverviewSubBar below. DefaultLayout's LayoutBody places that row inside the
// content column so it sits beside the doc-tree drawer rather than above it.
//
// DocsSecondaryBar hides on search by product id because src/pages/search.tsx and
// src/pages/[versionId]/search.tsx share the search rail's sticky offset, while only
// the unversioned route matches router.route === '/search'.
export const DocsSecondaryBar = () => {
  const router = useRouter()
  const { isHomepageVersion, currentProduct } = useMainContext()
  const { t } = useTranslation('header')
  const { collapsed, toggleCollapsed, mobileNavOpen, toggleMobileNav } = useSidebarCollapsed()

  const isSearchResultsPage = currentProduct?.id === 'search'
  const isEarlyAccessPage = currentProduct && currentProduct.id === 'early-access'

  // Homepage and search layouts do not reserve space for this bar.
  if (isHomepageVersion || isSearchResultsPage) {
    return null
  }

  return (
    <>
      <div data-container="secondary-nav" data-testid="docs-secondary-bar" className={styles.bar}>
        <div className={styles.leftSegment}>
          {!isEarlyAccessPage && (
            <div className={styles.toggleCell}>
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
          {/* key remounts per route because width-stable trails can grow without re-anchoring. */}
          <BreadcrumbsScroller key={router.asPath} />
        </div>
      </div>
    </>
  )
}

// OverviewSubBar renders In this article directly beneath the breadcrumb bar,
// inside DefaultLayout's LayoutBody content column. On desktop it starts at the
// doc-tree drawer edge instead of cutting across above it. Without a drawer,
// collapsed or below lg, the row spans full width.
//
// It shows wherever the right-rail drawer is not holding the mini-TOC: below xxl
// with the rail expanded, below ~1074px with it collapsed, and at every width on
// pages without a drawer such as REST reference.
export const OverviewSubBar = ({ hasDrawer = false }: { hasDrawer?: boolean }) => {
  const router = useRouter()
  const { isHomepageVersion } = useMainContext()
  const { collapsed } = useSidebarCollapsed()
  const miniTocItems = useMiniTocItems()

  const isSearchResultsPage = router.route === '/search'

  // Homepage and the unversioned search route do not render this row.
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
