import cx from 'classnames'
import { useRouter } from 'next/router'

import { useMainContext } from '@/frame/components/context/MainContext'
import { SidebarProduct } from '@/landings/components/SidebarProduct'
import { SidebarSearchAggregates } from '@/search/components/results/SidebarSearchAggregates'
import { ApiVersionPicker } from '@/rest/components/ApiVersionPicker'
import { Link } from '@/frame/components/Link'

import styles from './SidebarNav.module.scss'

type Props = {
  variant?: 'full' | 'overlay'
  // When true (full variant only), the rail is also shown on mobile, inline in
  // the page flow — the Docs 2026 mobile nav expands like the desktop view
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

  return (
    <div
      data-container="nav"
      data-mobile-open={variant === 'full' ? mobileOpen : undefined}
      className={cx(
        // Desktop rail: sticky, hidden below xxl. When mobileOpen, it also
        // renders on mobile (block at all widths), full-width in the page flow.
        variant === 'full' &&
          (mobileOpen
            ? cx(
                'd-block d-xxl-block border-right',
                styles.sidebarFull,
                styles.sidebarFullMobileOpen,
              )
            : cx('position-sticky d-none border-right d-xxl-block', styles.sidebarFull)),
      )}
    >
      <nav
        aria-labelledby="allproducts-menu"
        role="navigation"
        aria-label="Documentation navigation"
      >
        {variant === 'full' && currentProduct && (
          <div
            className={cx('px-4 pb-3 border-bottom', mobileOpen ? 'd-block' : 'd-none d-xxl-block')}
          >
            {showCurrentProductLink && (
              <h2 className="mt-3" id="allproducts-menu">
                <Link
                  data-testid="sidebar-product-xl"
                  href={`/${router.locale}${currentProduct.href}`}
                  // Note the `_product-title` is used by the popover preview cards
                  // when it needs this text for in-page links.
                  className="d-block pl-1 mb-2 h3 color-fg-default no-underline _product-title"
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
              ? 'width-full d-xxl-none'
              : cx('border-right overflow-y-auto', mobileOpen ? 'd-block' : 'd-none d-xxl-block'),
            'bg-primary flex-shrink-0',
            variant === 'overlay'
              ? isRestPage
                ? styles.sidebarContentOverlayRest
                : styles.sidebarContentOverlay
              : styles.sidebarContentFull,
            variant === 'full' &&
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
