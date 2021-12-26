import { useRouter } from 'next/router'
import cx from 'classnames'

import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'
import { ChevronDownIcon, LinkExternalIcon } from '@primer/octicons-react'
import { Details, useDetails } from '@primer/components'

export const ProductPicker = () => {
  const router = useRouter()
  const { activeProducts, currentProduct } = useMainContext()
  const { getDetailsProps } = useDetails({})

  return (
    <Details {...getDetailsProps()} className="details-reset">
      <summary className="color-text-link" role="button" aria-label="Toggle products list">
        <div id="current-product" className="d-flex flex-items-center flex-justify-between py-2">
          {/* <!-- Product switcher - GitHub.com, Enterprise Server, etc -->
    <!-- 404 and 500 error layouts are not real pages so we need to hardcode the name for those --> */}
          <span>{currentProduct?.name || 'All Products'}</span>
          <ChevronDownIcon size={24} className="arrow ml-md-1" />
        </div>
      </summary>
      <div id="homepages" style={{ zIndex: 6 }}>
        {activeProducts.map((product) => {
          return (
            <Link
              key={product.id}
              href={`${product.external ? '' : `/${router.locale}`}${product.href}`}
              className={cx(
                'd-block py-2',
                product.id === currentProduct?.id
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
            </Link>
          )
        })}
      </div>
    </Details>
  )
}
