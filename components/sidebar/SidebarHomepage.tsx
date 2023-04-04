import { useRouter } from 'next/router'
import { LinkExternalIcon } from '@primer/octicons-react'
import { TreeView } from '@primer/react'

import { useVersion } from 'components/hooks/useVersion'
import { useMainContext } from 'components/context/MainContext'
import { Link } from 'components/Link'

export const SidebarHomepage = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { activeProducts, isFPT } = useMainContext()

  return (
    <div data-testid="sidebar" className="mt-3">
      <TreeView>
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
              <TreeView.Item id={product.id} key={product.id}>
                <Link
                  href={href}
                  target={product.external ? '_blank' : undefined}
                  className="d-block f4 my-1 pr-5 py-2 color-fg-default no-underline width-full"
                >
                  {product.name}
                  {product.external && (
                    <span className="ml-1">
                      <LinkExternalIcon size="small" />
                    </span>
                  )}
                </Link>
              </TreeView.Item>
            )
          })}
      </TreeView>
    </div>
  )
}
