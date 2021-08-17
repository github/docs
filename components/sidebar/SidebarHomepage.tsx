import { useRouter } from 'next/router'
import { LinkExternalIcon } from '@primer/octicons-react'

import { useVersion } from 'components/hooks/useVersion'
import { useMainContext } from 'components/context/MainContext'
import { Link } from 'components/Link'

import { AllProductsLink } from './AllProductsLink'

export const SidebarHomepage = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { activeProducts, isFPT } = useMainContext()

  return (
    <ul data-testid="sidebar" className="mt-4">
      {!isFPT && <AllProductsLink />}

      {activeProducts.map((product) => {
        if (!isFPT && !product.versions?.includes(currentVersion) && !product.external) {
          return null
        }

        const href = `${!product.external ? `/${router.locale}` : ''}${
          product.versions?.includes(currentVersion) && !isFPT
            ? `/${currentVersion}/${product.id}`
            : product.href
        }`

        return (
          <li
            key={product.id}
            title={`${product.name}${product.external ? '(External Site)' : ''}`}
            className="my-3"
          >
            <Link
              href={href}
              target={product.external ? '_blank' : undefined}
              className="f4 pl-4 pr-5 py-2 color-text-primary no-underline"
            >
              {product.name}
              {product.external && (
                <span className="ml-1">
                  <LinkExternalIcon size="small" />
                </span>
              )}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
