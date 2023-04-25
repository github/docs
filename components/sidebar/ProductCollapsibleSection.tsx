import cx from 'classnames'
import { TreeView } from '@primer/react'

import { Link } from 'components/Link'
import { ProductTreeNode } from 'components/context/MainContext'
import { EventType, sendEvent } from 'src/events/browser'

type SectionProps = {
  routePath: string
  page: ProductTreeNode
  title: string
}
export const ProductCollapsibleSection = (props: SectionProps) => {
  const { routePath, page } = props
  // The lowest level page link displayed in the tree
  const renderTerminalPageLink = (page: ProductTreeNode) => {
    const title = page.shortTitle || page.title
    const isCurrent = routePath === page.href

    return (
      <Link
        href={page.href}
        key={page.href}
        className={cx('color-fg-default no-underline', isCurrent ? 'text-bold' : '')}
      >
        <TreeView.Item
          id={page.href}
          data-testid="sidebar-article"
          current={isCurrent}
          defaultExpanded={isCurrent}
          onSelect={() => {
            sendEvent({
              type: EventType.navigate,
              navigate_label: `product page navigate to: ${page.href}`,
            })
          }}
        >
          {title}
        </TreeView.Item>
      </Link>
    )
  }

  return (
    <>
      {/* <!-- some pages have nested child pages (formerly known as a mapTopic) --> */}
      {page.childPages[0]?.documentType === 'mapTopic' ? (
        <>
          {page.childPages.map((childPage, i) => {
            const childTitle = childPage.shortTitle || childPage.title
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
      ) : page.childPages[0]?.documentType === 'article' ? (
        <div data-testid="sidebar-article-group">
          {page.childPages.map((cp) => {
            return renderTerminalPageLink(cp)
          })}
        </div>
      ) : null}
    </>
  )
}
