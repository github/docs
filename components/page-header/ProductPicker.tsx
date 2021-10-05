import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'
import { ChevronDownIcon, LinkExternalIcon } from '@primer/octicons-react'
import { Box, Dropdown, Details, useDetails } from '@primer/components'

// Product Picker - GitHub.com, Enterprise Server, etc
export const ProductPicker = () => {
  const router = useRouter()
  const { activeProducts, currentProduct } = useMainContext()
  const { getDetailsProps, setOpen } = useDetails({ closeOnOutsideClick: true })

  return (
    <Details {...getDetailsProps()} className="details-reset">
      <summary
        className="d-block color-text-primary btn btn-invisible"
        role="button"
        aria-label="Toggle products list"
      >
        <div
          data-testid="current-product"
          data-current-product-path={currentProduct?.href}
          className="d-flex flex-items-center flex-justify-between"
        >
          <span>{currentProduct?.name || 'All Products'}</span>
          <ChevronDownIcon size={24} className="arrow ml-md-1" />
        </div>
      </summary>
      <Box data-testid="product-picker-list" py="2" style={{ zIndex: 6 }}>
        {activeProducts.map((product) => {
          return (
            <Dropdown.Item key={product.id} onClick={() => setOpen(false)}>
              <Link href={`${product.external ? '' : `/${router.locale}`}${product.href}`}>
                {product.name}
                {product.external && (
                  <span className="ml-1">
                    <LinkExternalIcon size="small" />
                  </span>
                )}
              </Link>
            </Dropdown.Item>
          )
        })}
      </Box>
    </Details>
  )
}
