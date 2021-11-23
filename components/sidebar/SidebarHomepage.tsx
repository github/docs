import { useRouter } from 'next/router'
import { LinkExternalIcon } from '@primer/octicons-react'
import { ActionList } from '@primer/components'

import { useVersion } from 'components/hooks/useVersion'
import { useMainContext } from 'components/context/MainContext'
import { Link } from 'components/Link'

import { AllProductsLink } from './AllProductsLink'

export const SidebarHomepage = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { activeProducts, isFPT } = useMainContext()
  const navItems = []

  for (let i = 0; i < activeProducts.length; i++) {
    const product = activeProducts[i]

    if (!isFPT && !product.versions?.includes(currentVersion) && !product.external) {
      continue
    }

    const href = `${!product.external ? `/${router.locale}` : ''}${
      product.versions?.includes(currentVersion) && !isFPT
        ? `/${currentVersion}/${product.id}`
        : product.href
    }`

    navItems.push({
      renderItem: () => (
        <ActionList.Item
          as="li"
          key={product.id}
          title={`${product.name}${product.external ? '(External Site)' : ''}`}
          className="my-2"
          sx={{ padding: 0 }}
        >
          <Link
            href={href}
            target={product.external ? '_blank' : undefined}
            className="f4 pl-4 pr-5 py-2 color-fg-default no-underline width-full"
          >
            {product.name}
            {product.external && (
              <span className="ml-1">
                <LinkExternalIcon size="small" />
              </span>
            )}
          </Link>
        </ActionList.Item>
      ),
    })
  }

  return (
    <ul data-testid="sidebar" className="mt-4">
      {!isFPT && <AllProductsLink />}
      <li>
        <ActionList {...{ as: 'ul' }} items={navItems}></ActionList>
      </li>
    </ul>
  )
}
