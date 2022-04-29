import cx from 'classnames'
import { useState, SyntheticEvent } from 'react'
import { ChevronDownIcon } from '@primer/octicons-react'
import { ActionList } from '@primer/react'

import { Link } from 'components/Link'
import { ProductTreeNode } from 'components/context/MainContext'
import { EventType, sendEvent } from 'components/lib/events'
import styles from './SidebarProduct.module.scss'

type SectionProps = {
  routePath: string
  page: ProductTreeNode
  title: string
  defaultOpen: boolean
}
export const ProductCollapsibleSection = (props: SectionProps) => {
  const { routePath, defaultOpen, title, page } = props
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const onToggle = (e: SyntheticEvent) => {
    const newIsOpen = (e.target as HTMLDetailsElement).open
    setIsOpen(newIsOpen)
    sendEvent({
      type: EventType.navigate,
      navigate_label: `details ${newIsOpen ? 'open' : 'close'}: ${title}`,
    })
  }

  // The lowest level page link displayed in the tree
  const renderTerminalPageLink = (page: ProductTreeNode) => {
    const title = page.renderedShortTitle || page.renderedFullTitle

    const isCurrent = routePath === page.href
    return {
      text: title,
      renderItem: () => (
        <ActionList.Item
          data-testid="sidebar-article"
          data-is-current-page={isCurrent}
          as="li"
          className={cx(
            'position-relative',
            styles.sidebarArticle,
            isCurrent && ['text-bold', styles.sidebarArticleActive]
          )}
          sx={{
            padding: '2px 0',
            ':hover': {
              borderRadius: 0,
            },
          }}
        >
          <Link
            href={page.href}
            className={cx(
              'd-block pl-6 pr-5 py-1 no-underline width-full',
              isCurrent ? 'color-fg-accent' : 'color-fg-default'
            )}
          >
            {title}
          </Link>
        </ActionList.Item>
      ),
    }
  }

  return (
    <details open={defaultOpen} onToggle={onToggle} className="details-reset">
      <summary className="outline-none">
        <div className="d-flex flex-justify-between">
          <div className="pl-4 pr-1 py-2 f5 d-block flex-auto mr-3 color-fg-default no-underline text-bold">
            {title}
          </div>
          <span style={{ marginTop: 7 }} className="flex-shrink-0 pr-3">
            <ChevronDownIcon className={cx('opacity-60', isOpen && 'rotate-180')} />
          </span>
        </div>
      </summary>

      {
        <>
          {/* <!-- some pages have nested child pages (formerly known as a mapTopic) --> */}
          {page.childPages[0]?.page.documentType === 'mapTopic' ? (
            <ul className="list-style-none position-relative">
              {page.childPages.map((childPage, i) => {
                const childTitle = childPage.renderedShortTitle || childPage.renderedFullTitle

                const isActive = routePath.includes(childPage.href)
                const isCurrent = routePath === childPage.href

                return (
                  <li key={childPage.href + i} data-is-current-page={isCurrent}>
                    <details
                      open={isActive}
                      onToggle={(e) => e.stopPropagation()}
                      className="details-reset"
                    >
                      <summary>
                        <div className={cx('pl-4 pr-5 py-2 no-underline')}>{childTitle}</div>
                      </summary>
                      <div data-testid="sidebar-article-group" className="pb-0">
                        <ActionList
                          {...{ as: 'ul' }}
                          items={childPage.childPages.map((cp) => {
                            return renderTerminalPageLink(cp)
                          })}
                        ></ActionList>
                      </div>
                    </details>
                  </li>
                )
              })}
            </ul>
          ) : page.childPages[0]?.page.documentType === 'article' ? (
            <div data-testid="sidebar-article-group" className="pb-0">
              <ActionList {...{ as: 'ul' }} items={page.childPages.map(renderTerminalPageLink)} />
            </div>
          ) : null}
        </>
      }
    </details>
  )
}
