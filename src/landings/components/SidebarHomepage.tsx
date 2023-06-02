import { useRouter } from 'next/router'
import { LinkExternalIcon } from '@primer/octicons-react'
import { TreeView } from '@primer/react'

import { Link } from 'components/Link'
import { useVersion } from 'components/hooks/useVersion'
import { useMainContext } from 'components/context/MainContext'

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
              <Link
                id={href}
                key={product.id}
                href={href}
                target={product.external ? '_blank' : undefined}
                className="no-underline"
              >
                <TreeView.Item
                  id={product.id}
                  onSelect={(e) => {
                    if (e.nativeEvent instanceof KeyboardEvent && e.nativeEvent.code === 'Enter') {
                      document.getElementById(href)?.click()
                      e?.stopPropagation()
                    }
                  }}
                >
                  <span className="d-block my-2 py-1 f4">
                    {product.name}
                    {product.external && (
                      <span className="ml-1">
                        <LinkExternalIcon aria-label="(external site)" size="small" />
                      </span>
                    )}
                  </span>
                </TreeView.Item>
              </Link>
            )
          })}
      </TreeView>
    </div>
  )
}
