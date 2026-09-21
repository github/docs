import cx from 'classnames'
import { useRouter } from 'next/router'

import { useMainContext } from '@/frame/components/context/MainContext'
import { useTranslation } from '@/languages/components/useTranslation'
import { SidebarProduct } from '@/landings/components/SidebarProduct'
import { SidebarSearchAggregates } from '@/search/components/results/SidebarSearchAggregates'
import { ApiVersionPicker } from '@/rest/components/ApiVersionPicker'
import { Link } from '@/frame/components/Link'

import styles from './SidebarNav.module.scss'

type Props = {
  variant?: 'full' | 'overlay'
  // When true (full variant only), the rail is also shown on mobile, inline in
  // the page flow. The Docs 2026 mobile nav expands like the desktop view
  // rather than opening a dialog overlay.
  mobileOpen?: boolean
}

export const SidebarNav = ({ variant = 'full', mobileOpen = false }: Props) => {
  const { currentProduct, currentProductName } = useMainContext()
  const router = useRouter()
  const isRestPage = currentProduct && currentProduct.id === 'rest'

  const showCurrentProductLink =
    currentProduct &&
    // Early access does not have a "home page" unless it's local dev
    (process.env.NODE_ENV === 'development' || currentProduct.id !== 'early-access')

  const isSearch = currentProduct?.id === 'search'
  // `search_results` only ships in the page props on /search, and
  // createTranslationFunctions warns about a missing namespace at construction, not
  // at the t() call, so asking for it unconditionally would log on every render of
  // every page.
  const { t } = useTranslation(isSearch ? 'search_results' : 'header')

  return (
    <div
      data-container="nav"
      data-mobile-open={variant === 'full' ? mobileOpen : undefined}
      className={cx(
        // Desktop rail: sticky, hidden below lg (1012px). When mobileOpen, it
        // also renders on mobile (block at all widths), full-width in the page
        // flow.
        //
        // Search is the exception. Its rail holds the facet filters rather than
        // a doc tree, and filters have to stay reachable on narrow viewports, so
        // it renders at every width: a rail from brand's `medium` breakpoint up,
        // and below that a "Show filters" disclosure (see SidebarSearchAggregates).
        variant === 'full' &&
          (isSearch
            ? styles.searchRail
            : mobileOpen
              ? cx(
                  'd-block d-lg-block',
                  styles.railDivider,
                  styles.sidebarFull,
                  styles.sidebarFullMobileOpen,
                )
              : cx('position-sticky d-none d-lg-block', styles.railDivider, styles.sidebarFull)),
      )}
    >
      <nav
        // On search the rail holds the facet filters rather than a doc tree, and the
        // product-title heading that normally names this nav isn't rendered, so name it
        // directly rather than pointing aria-labelledby at an element that isn't there.
        aria-labelledby={isSearch ? undefined : 'allproducts-menu'}
        role="navigation"
        aria-label={isSearch ? t('filter_search_results') : 'Documentation navigation'}
        // The flex column is the doc-tree rail's layout. The search rail sets its
        // own (`.searchRail > nav`), so the two must not both apply.
        className={cx(variant === 'full' && !isSearch && styles.sidebarNavColumn)}
      >
        {variant === 'full' && currentProduct && !isSearch && (
          <div
            className={cx(
              'px-4 pb-3',
              styles.sidebarHeaderFixed,
              mobileOpen ? 'd-block' : 'd-none d-lg-block',
            )}
          >
            {showCurrentProductLink && (
              <h2 className="mt-3" id="allproducts-menu">
                <Link
                  data-testid="sidebar-product-xl"
                  href={`/${router.locale}${currentProduct.href}`}
                  // Note the `_product-title` is used by the popover preview cards
                  // when it needs this text for in-page links.
                  className={cx(
                    'd-block pl-1 mb-2 h3 no-underline _product-title',
                    styles.productTitle,
                  )}
                  aria-describedby="allproducts-menu"
                >
                  {currentProductName || currentProduct.name}
                </Link>
              </h2>
            )}
            {variant === 'full' && isRestPage && <ApiVersionPicker />}
          </div>
        )}
        <div
          className={cx(
            variant === 'overlay'
              ? 'width-full d-lg-none'
              : // On search this region holds the filters, which manage their own
                // per-breakpoint visibility and their own scrolling, so it must not be
                // display:none below lg, nor the scroll container itself.
                isSearch
                ? styles.searchRailContent
                : cx(
                    'overflow-y-auto',
                    styles.railDivider,
                    mobileOpen ? 'd-block' : 'd-none d-lg-block',
                  ),
            // `flex-shrink-0` would stop the search rail's column from shrinking to the
            // viewport, which is what lets the filter card scroll its own list.
            isSearch ? 'bg-primary' : 'bg-primary flex-shrink-0',
            variant === 'overlay'
              ? isRestPage
                ? styles.sidebarContentOverlayRest
                : styles.sidebarContentOverlay
              : !isSearch && styles.sidebarContentFull,
            variant === 'full' &&
              !isSearch &&
              (isRestPage
                ? styles.sidebarContentFullWithPaddingRest
                : styles.sidebarContentFullWithPadding),
          )}
          role="region"
          aria-label="Page navigation content"
        >
          <SidebarProduct key={router.asPath} />

          {isSearch && <SidebarSearchAggregates />}
        </div>
      </nav>
    </div>
  )
}
