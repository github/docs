import { useRouter } from 'next/router'
import { LinkExternalIcon } from '@primer/octicons-react'
import { ActionList } from '@primer/react'

import { useVersion } from 'components/hooks/useVersion'
import { useMainContext } from 'components/context/MainContext'
import { Link } from 'components/Link'

export const SidebarHomepage = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { activeProducts, isFPT } = useMainContext()

  return (
    <ul data-testid="sidebar" className="mt-4">
      <li>
        <ActionList variant="full">
          {activeProducts
            .filter(
              (product) => isFPT || product.versions?.includes(currentVersion) || product.external
            )
            .map((product) => {
              const href = `${!product.external ? `/${router.locale}` : ''}${
                product.versions?.includes(currentVersion) && !isFPT
                  ? `/${currentVersion}/${product.id}`
                  : product.href
              }`

              return (
                <ActionList.Item
                  key={product.id}
                  title={`${product.name}${product.external ? '(External Site)' : ''}`}
                  className="width-full my-2"
                  sx={{ padding: 0 }}
                >
                  <Link
                    href={href}
                    target={product.external ? '_blank' : undefined}
                    className="d-block f4 pl-4 pr-5 py-2 color-fg-default no-underline width-full"
                  >
                    {product.name}
                    {product.external && (
                      <span className="ml-1">
                        <LinkExternalIcon size="small" />
                      </span>
                    )}
                  </Link>
                </ActionList.Item>
              )
            })}
        </ActionList>
      </li>
    </ul>
  )
}
