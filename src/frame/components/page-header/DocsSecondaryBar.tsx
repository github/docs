import cx from 'classnames'
import { useRouter } from 'next/router'
import { IconButton } from '@primer/react'
import { SidebarCollapseIcon, SidebarExpandIcon } from '@primer/octicons-react'

import { useMainContext } from '@/frame/components/context/MainContext'
import { useTranslation } from '@/languages/components/useTranslation'
import { useSidebarCollapsed } from '@/frame/components/sidebar/SidebarCollapseContext'
import { BreadcrumbsScroller } from './BreadcrumbsScroller'

import styles from './DocsSecondaryBar.module.scss'

// The Docs 2026 secondary bar: sits below the main header, above the doc-tree
// rail + article content. Holds the nav trigger and the breadcrumb trail. The
// same sidebar collapse/expand icon is used on both desktop (collapses the rail)
// and mobile (expands the nav inline).
export const DocsSecondaryBar = () => {
  const router = useRouter()
  const { isHomepageVersion, currentProduct } = useMainContext()
  const { t } = useTranslation('header')
  const { collapsed, toggleCollapsed, mobileNavOpen, toggleMobileNav } = useSidebarCollapsed()

  const isSearchResultsPage = router.route === '/search'
  const isEarlyAccessPage = currentProduct && currentProduct.id === 'early-access'

  // Mirror the visibility rule of the header subnav this replaces.
  if (isHomepageVersion || isSearchResultsPage) {
    return null
  }

  return (
    <div data-container="secondary-nav" data-testid="docs-secondary-bar" className={styles.bar}>
      <div className={cx(styles.leftSegment, collapsed && styles.leftSegmentExpanded)}>
        {!isEarlyAccessPage && (
          <div className={styles.toggleCell}>
            {/* Desktop: collapse/expand the whole rail. */}
            <IconButton
              data-testid="sidebar-collapse-toggle"
              className={cx(styles.desktopOnly, 'color-fg-muted')}
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
              className={cx(styles.mobileOnly, 'color-fg-muted')}
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
  )
}
