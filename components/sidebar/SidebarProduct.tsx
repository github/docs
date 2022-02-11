import { useRouter } from 'next/router'
import cx from 'classnames'
import { useState, useEffect, SyntheticEvent } from 'react'
import { ChevronDownIcon } from '@primer/octicons-react'
import { ActionList } from '@primer/components'

import { Link } from 'components/Link'
import { ProductTreeNode, useMainContext } from 'components/context/MainContext'
import { AllProductsLink } from 'components/sidebar/AllProductsLink'
import { EventType, sendEvent } from 'components/lib/events'

import styles from './SidebarProduct.module.scss'

export const SidebarProduct = () => {
  const router = useRouter()
  const { currentProductTree } = useMainContext()

  useEffect(() => {
    const activeArticle = document.querySelector('[data-is-current-page=true]')
    // Setting to the top doesn't give enough context of surrounding categories
    activeArticle?.scrollIntoView({ block: 'center' })
    // scrollIntoView affects some articles that are very low in the sidebar
    // The content scrolls down a bit. This sets the article content back up
    // top unless the route contains a link heading.
    if (!router.asPath.includes('#')) window?.scrollTo(0, 0)
  }, [])

  if (!currentProductTree) {
    return null
  }

  const productTitle = currentProductTree.renderedShortTitle || currentProductTree.renderedFullTitle
  // remove query string and hash
  const routePath = `/${router.locale}${router.asPath.split('?')[0].split('#')[0]}`

  const hasExactCategory = !!currentProductTree.childPages.find(({ href }) =>
    routePath.includes(href)
  )
  return (
    <ul data-testid="sidebar" className={styles.container}>
      <AllProductsLink />

      {!currentProductTree.page.hidden && (
        <>
          <li data-testid="sidebar-product" title={productTitle} className="my-2">
            <Link
              href={currentProductTree.href}
              className="pl-4 pr-5 pb-1 f4 color-fg-default no-underline"
            >
              {productTitle}
            </Link>
          </li>

          <li className="my-3">
            <ul className="list-style-none">
              {currentProductTree.childPages.map((childPage, i) => {
                const isStandaloneCategory = childPage.page.documentType === 'article'

                const childTitle = childPage.renderedShortTitle || childPage.renderedFullTitle
                const isActive =
                  routePath.includes(childPage.href + '/') || routePath === childPage.href
                const defaultOpen = hasExactCategory ? isActive : false
                return (
                  <li
                    key={childPage.href + i}
                    data-is-active-category={isActive}
                    data-is-current-page={isActive && isStandaloneCategory}
                    className={cx('py-1', isActive && 'color-bg-inset')}
                  >
                    {isStandaloneCategory ? (
                      <Link
                        href={childPage.href}
                        className="pl-4 pr-2 py-2 d-block flex-auto mr-3 color-fg-default no-underline text-bold"
                      >
                        {childTitle}
                      </Link>
                    ) : (
                      <CollapsibleSection
                        defaultOpen={defaultOpen}
                        routePath={routePath}
                        title={childTitle}
                        page={childPage}
                      />
                    )}
                  </li>
                )
              })}
            </ul>
          </li>
        </>
      )}
    </ul>
  )
}

type SectionProps = {
  routePath: string
  page: ProductTreeNode
  title: string
  defaultOpen: boolean
}
const CollapsibleSection = (props: SectionProps) => {
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
          <div className="pl-4 pr-1 py-2 f6 text-uppercase d-block flex-auto mr-3 color-fg-default no-underline text-bold">
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
