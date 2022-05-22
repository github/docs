import Link from 'next/link'
import { useRouter } from 'next/router'
import { LinkExternalIcon } from '@primer/octicons-react'
import cx from 'classnames'

import { useMainContext } from 'components/context/MainContext'

export const MobileProductDropdown = () => {
  const router = useRouter()
  const { activeProducts, currentProduct } = useMainContext()

  return (
    <div
      id="homepages"
      className="position-md-absolute nav-desktop-productDropdown p-md-4 left-md-n4 top-md-6"
      style={{ zIndex: 6 }}
    >
      {activeProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`${product.external ? '' : `/${router.locale}`}${product.href}`}
          >
            <a
              className={cx(
                'd-block py-2',
                product.id === currentProduct.id
                  ? 'color-text-link text-underline active'
                  : 'Link--primary no-underline'
              )}
            >
              {product.name}
              {product.external && (
                <span className="ml-1">
                  <LinkExternalIcon size="small" />
                </span>
              )}
            </a>
          </Link>
        )
      })}
    </div>
  )
}
