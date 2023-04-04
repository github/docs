import cx from 'classnames'

import { useMainContext } from 'components/context/MainContext'
import { SidebarProduct } from './SidebarProduct'
import { SidebarHomepage } from './SidebarHomepage'
import { AllProductsLink } from './AllProductsLink'
import { ApiVersionPicker } from './ApiVersionPicker'
import { Link } from 'components/Link'

type Props = {
  variant?: 'full' | 'overlay'
}

export const SidebarNav = ({ variant = 'full' }: Props) => {
  const { error, currentProduct, currentProductTree } = useMainContext()
  const isRestPage = currentProduct && currentProduct.id === 'rest'
  const productTitle = currentProductTree?.shortTitle || currentProductTree?.title
  // we need to roughly account for the site header height plus the height of
  // the side nav header (which is taller when we show the API version picker)
  // so we don't cut off the bottom of the sidebar
  const sidebarPaddingBottom = isRestPage ? '250px' : '185px'

  return (
    <div
      className={cx(variant === 'full' ? 'position-sticky d-none border-right d-xl-block' : '')}
      style={{ width: 326, height: 'calc(100vh - 65px)', top: '65px' }}
    >
      {variant === 'full' && currentProductTree && (
        <div className={cx('d-none px-4 pb-3 border-bottom d-xl-block')}>
          <AllProductsLink />
          {currentProduct && (
            <div className="mt-3">
              <Link
                data-testid="sidebar-product-xl"
                href={currentProductTree.href}
                // Note the `_product-title` is used by the popover preview cards
                // when it needs this text for in-page links.
                className="d-block pl-1 mb-2 h3 color-fg-default no-underline _product-title"
              >
                {productTitle}
              </Link>
            </div>
          )}
          {variant === 'full' && isRestPage && <ApiVersionPicker />}
        </div>
      )}
      <div
        className={cx(
          variant === 'overlay' ? 'd-xl-none' : 'border-right d-none d-xl-block',
          'bg-primary overflow-y-auto flex-shrink-0'
        )}
        style={{ width: 326, height: '100vh', paddingBottom: sidebarPaddingBottom }}
        role="banner"
      >
        <nav>
          {error === '404' || !currentProduct || currentProduct.id === 'search' ? (
            <SidebarHomepage />
          ) : (
            <SidebarProduct />
          )}
        </nav>
      </div>
    </div>
  )
}
