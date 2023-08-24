import cx from 'classnames'
import { TreeView } from '@primer/react'

import { Link } from 'components/Link'
import { ProductTreeNode } from 'components/context/MainContext'

type SectionProps = {
  routePath: string
  page: ProductTreeNode
  title: string
}
export const ProductCollapsibleSection = (props: SectionProps) => {
  const { routePath, page } = props
  // The lowest level page link displayed in the tree
  const renderTerminalPageLink = (page: ProductTreeNode) => {
    const title = page.title
    const isCurrent = routePath === page.href

    return (
      <TreeView.Item
        id={page.href + ' item'}
        key={page.href}
        data-testid="sidebar-article"
        current={isCurrent}
        defaultExpanded={isCurrent}
        onSelect={(e) => {
          if (e.nativeEvent instanceof KeyboardEvent && e.nativeEvent.code === 'Enter') {
            document.getElementById(page.href)?.click()
            e?.stopPropagation()
          }
        }}
      >
        <Link
          id={page.href}
          href={page.href}
          className={cx('color-fg-default no-underline', isCurrent ? 'text-bold' : '')}
          aria-label={page.title + ' link'}
        >
          {title}
        </Link>
      </TreeView.Item>
    )
  }

  return (
    <>
      {/* <!-- some pages have nested child pages (formerly known as a mapTopic) --> */}
      {page.childPages[0]?.childPages.length > 0 ? (
        <>
          {page.childPages.map((childPage, i) => {
            const childTitle = childPage.title
            const isActive = routePath.includes(childPage.href)
            const isCurrent = routePath === childPage.href

            return (
              <div key={childPage.href + i}>
                <TreeView.Item defaultExpanded={isActive} id={childTitle} current={isCurrent}>
                  {childTitle}
                  <TreeView.SubTree data-testid="sidebar-article-group">
                    {childPage.childPages.map((cp) => {
                      return renderTerminalPageLink(cp)
                    })}
                  </TreeView.SubTree>
                </TreeView.Item>
              </div>
            )
          })}
        </>
      ) : page.childPages[0]?.childPages.length === 0 ? (
        <div data-testid="sidebar-article-group">
          {page.childPages.map((cp) => {
            return renderTerminalPageLink(cp)
          })}
        </div>
      ) : null}
    </>
  )
}
