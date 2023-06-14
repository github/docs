import { LinkExternalIcon } from '@primer/octicons-react'
import { TreeView } from '@primer/react'

import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'

export const SidebarHomepage = () => {
  const { homepageLinks } = useMainContext()
  if (!homepageLinks) throw new Error("'homepageLinks' not set in main context")

  return (
    <div data-testid="sidebar" className="mt-3">
      <TreeView>
        {homepageLinks.map((link) => {
          const { href, external, name } = link
          return (
            <Link
              id={href}
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              className="no-underline"
            >
              <TreeView.Item
                id={href}
                onSelect={(e) => {
                  if (e.nativeEvent instanceof KeyboardEvent && e.nativeEvent.code === 'Enter') {
                    document.getElementById(href)?.click()
                    e?.stopPropagation()
                  }
                }}
              >
                <span className="d-block my-2 py-1 f4">
                  {name}
                  {external && (
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
