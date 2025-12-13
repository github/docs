import cx from 'classnames'
import { useRouter } from 'next/router'

import { useMainContext } from '@/frame/components/context/MainContext'
import { SidebarProduct } from '@/landings/components/SidebarProduct'
import { SidebarSearchAggregates } from '@/search/components/results/SidebarSearchAggregates'
import { AllProductsLink } from './AllProductsLink'
import { ApiVersionPicker } from '@/rest/components/ApiVersionPicker'
import { Link } from '@/frame/components/Link'

import styles from './SidebarNav.module.scss'

type Props = {
  variant?: 'full' | 'overlay'
}

export const SidebarNav = ({ variant = 'full' }: Props) => {
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
      className={cx(
        variant === 'full' ? 'position-sticky d-none border-right d-xxl-block' : '',
        variant === 'full' && styles.sidebarFull,
      )}
    >
      <nav
        aria-labelledby="allproducts-menu"
        role="navigation"
        aria-label="Documentation navigation"
      >
        {variant === 'full' && currentProduct && (
          <div className={cx('d-none px-4 pb-3 border-bottom d-xxl-block')}>
            <AllProductsLink />
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
              : 'border-right d-none d-xxl-block overflow-y-auto',
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
