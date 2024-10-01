import cx from 'classnames'
import { useRouter } from 'next/router'

import { useMainContext } from 'src/frame/components/context/MainContext'
import { SidebarProduct } from 'src/landings/components/SidebarProduct'
import { SidebarSearchAggregates } from 'src/search/components/SidebarSearchAggregates'
import { AllProductsLink } from './AllProductsLink'
import { ApiVersionPicker } from 'src/rest/components/ApiVersionPicker'
import { Link } from 'src/frame/components/Link'

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

  // we need to roughly account for the site header height plus the height of
  // the side nav header (which is taller when we show the API version picker)
  // so we don't cut off the bottom of the sidebar
  const sidebarPaddingBottom = isRestPage ? '250px' : '185px'

  const isSearch = currentProduct?.id === 'search'

  return (
    <div
      data-container="nav"
      className={cx(variant === 'full' ? 'position-sticky d-none border-right d-xxl-block' : '')}
      style={{ width: 326, height: 'calc(100vh - 65px)', top: '65px' }}
    >
      <nav aria-labelledby="allproducts-menu">
        {variant === 'full' && currentProduct && (
          <div className={cx('d-none px-4 pb-3 border-bottom d-xxl-block')}>
            <AllProductsLink />
            {showCurrentProductLink && (
              <div className="mt-3" id="allproducts-menu">
                <Link
                  data-testid="sidebar-product-xl"
                  href={`/${router.locale}${currentProduct.href}`}
                  // Note the `_product-title` is used by the popover preview cards
                  // when it needs this text for in-page links.
                  className="d-block pl-1 mb-2 h3 color-fg-default no-underline _product-title"
                >
                  {currentProductName || currentProduct.name}
                </Link>
              </div>
            )}
            {variant === 'full' && isRestPage && <ApiVersionPicker />}
          </div>
        )}
        <div
          className={cx(
            variant === 'overlay' ? 'd-xxl-none' : 'border-right d-none d-xxl-block',
            'bg-primary overflow-y-auto flex-shrink-0',
          )}
          style={{ width: 326, height: 'calc(100vh - 175px)', paddingBottom: sidebarPaddingBottom }}
        >
          <SidebarProduct key={router.asPath} />

          {isSearch && <SidebarSearchAggregates />}
        </div>
      </nav>
    </div>
  )
}
