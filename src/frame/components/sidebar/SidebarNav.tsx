import cx from 'clsx'
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
  // For the full variant, mobileOpen shows the rail inline because Docs 2026 avoids a dialog.
  mobileOpen?: boolean
}

export const SidebarNav = ({ variant = 'full', mobileOpen = false }: Props) => {
  const { currentProduct, currentProductName } = useMainContext()
  const router = useRouter()
  const isRestPage = currentProduct && currentProduct.id === 'rest'

  const showCurrentProductLink =
    currentProduct &&
    // Early access lacks a product home page outside local development.
    (process.env.NODE_ENV === 'development' || currentProduct.id !== 'early-access')

  const isSearch = currentProduct?.id === 'search'
  // createTranslationFunctions warns at setup, so ask for search_results only on search pages.
  const { t } = useTranslation(isSearch ? 'search_results' : 'header')

  // Search renders SidebarSearchAggregates at every width; other full rails hide below lg until mobileOpen.
  return (
    <div
      data-container="nav"
      data-mobile-open={variant === 'full' ? mobileOpen : undefined}
      className={cx(
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
        // Search has no product-title heading, so name the filter nav directly.
        aria-labelledby={isSearch ? undefined : 'allproducts-menu'}
        role="navigation"
        aria-label={isSearch ? t('filter_search_results') : 'Documentation navigation'}
        // Keep the doc-tree flex layout off search because .searchRail > nav owns that layout.
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
                  // Popover preview cards read _product-title for in-page link text.
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
              : // Keep SidebarSearchAggregates visible below lg because it manages breakpoints and scroll.
                isSearch
                ? styles.searchRailContent
                : cx(
                    'overflow-y-auto',
                    styles.railDivider,
                    mobileOpen ? 'd-block' : 'd-none d-lg-block',
                  ),
            // Let the search rail column shrink to the viewport so the filter card can scroll.
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
