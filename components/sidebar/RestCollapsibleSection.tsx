import { useRouter } from 'next/router'
import cx from 'classnames'
import { useState, useEffect, SyntheticEvent, ReactElement } from 'react'
import { ChevronDownIcon } from '@primer/octicons-react'
import { ActionList } from '@primer/react'

import { Link } from 'components/Link'
import { ProductTreeNode } from 'components/context/MainContext'
import { EventType, sendEvent } from 'components/lib/events'
import { MiniTocItem, useRestContext } from 'components/context/RestContext'
import styles from './SidebarProduct.module.scss'

type SectionProps = {
  routePath: string
  page: ProductTreeNode
  title: string
  defaultOpen: boolean
  isStandaloneCategory: boolean
}

type ConditionalLinkTypes = {
  condition: boolean
  wrapper: Function
  children: ReactElement
}

export const RestCollapsibleSection = (props: SectionProps) => {
  const router = useRouter()
  const { routePath, defaultOpen, title, page, isStandaloneCategory } = props
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [currentAnchor, setCurrentAnchor] = useState('')
  const [visibleAnchor, setVisibleAnchor] = useState('')

  const onToggle = (e: SyntheticEvent) => {
    const newIsOpen = (e.target as HTMLDetailsElement).open
    setIsOpen(newIsOpen)
    sendEvent({
      type: EventType.navigate,
      navigate_label: `details ${newIsOpen ? 'open' : 'close'}: ${title}`,
    })
  }

  const miniTocItems =
    router.query.productId === 'rest' ||
    // These pages need the Article Page mini tocs instead of the Rest Pages
    router.asPath.includes('/rest/guides') ||
    router.asPath.includes('/rest/overview')
      ? []
      : useRestContext().miniTocItems

  useEffect(() => {
    if (!currentAnchor) {
      setCurrentAnchor(window.location.hash)
    }

    const hashChangeHandler = () => {
      setCurrentAnchor(window.location.hash)
    }

    window.addEventListener('hashchange', hashChangeHandler)

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [])

  useEffect(() => {
    if (!router.asPath.includes('guides') && !router.asPath.includes('overview')) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target.id) {
              const anchor = '#' + entry.target.id.split('--')[0]
              if (entry.isIntersecting === true) setVisibleAnchor(anchor)
            } else if (router.asPath.includes('#')) {
              setVisibleAnchor('#' + router.asPath.split('#')[1])
            } else {
              setVisibleAnchor('')
            }
          })
        },
        { rootMargin: '0px 0px -85% 0px' }
      )
      // TODO: When we add the ## About the {title} API to each operation
      // we can remove the h2 here
      const headingsList = Array.from(document.querySelectorAll('h2, h3'))

      headingsList.forEach((heading) => {
        observer.observe(heading)
      })

      return () => {
        observer.disconnect()
      }
    }
  }, [miniTocItems])
  // This wrapper solves the issue of having standalone categories not
  // link to the new page. We want standalone categories to have links
  // just like maptopics/subcategories.
  const ConditionalLinkWrapper = ({ condition, wrapper, children }: ConditionalLinkTypes) =>
    condition ? wrapper(children) : children

  const renderRestAnchorLink = (miniTocItem: MiniTocItem) => {
    const miniTocAnchor = miniTocItem.contents.href
    const title = miniTocItem.contents.title
    const isCurrent = visibleAnchor === miniTocAnchor
    return {
      text: title,
      renderItem: () => (
        <ActionList.Item
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
          <a
            className={cx(
              'd-block pl-6 pr-5 py-1 no-underline width-full',
              isCurrent ? 'color-fg-accent' : 'color-fg-default'
            )}
            onClick={() => setVisibleAnchor(miniTocAnchor)}
            href={miniTocAnchor}
          >
            {title}
          </a>
        </ActionList.Item>
      ),
    }
  }

  return (
    <details open={defaultOpen} onToggle={onToggle} className="details-reset">
      <summary className="outline-none">
        <ConditionalLinkWrapper
          condition={isStandaloneCategory}
          wrapper={(children: ReactElement) => (
            <Link href={page.href} className="color-fg-default no-underline text-bold">
              {children}
            </Link>
          )}
        >
          <div className="d-flex flex-justify-between">
            <div className="pl-4 pr-1 py-2 f5 d-block flex-auto mr-3 color-fg-default no-underline text-bold">
              {title}
            </div>
            <span style={{ marginTop: 7 }} className="flex-shrink-0 pr-3">
              <ChevronDownIcon className={cx('opacity-60', isOpen && 'rotate-180')} />
            </span>
          </div>
        </ConditionalLinkWrapper>
      </summary>

      {
        <>
          {/* <!-- Render the maptopic level subcategory operation links e.g. --> */}
          <ul className="list-style-none position-relative">
            {page.childPages.length <= 0 ? (
              <div data-testid="sidebar-article-group" className="pb-0">
                {miniTocItems.length > 0 && (
                  <ActionList
                    {...{ as: 'ul' }}
                    items={miniTocItems.map((item) => {
                      return renderRestAnchorLink(item)
                    })}
                  ></ActionList>
                )}
              </div>
            ) : (
              page.childPages.map((childPage, i) => {
                const childTitle = childPage.renderedShortTitle || childPage.renderedFullTitle
                const isActive = routePath.includes(childPage.href)
                const isCurrent = routePath === childPage.href

                // At this point we have the mini-toc data for the current page
                // so we render this list of operation links.
                if (routePath === childPage.href) {
                  return (
                    <li key={childPage.href + i} data-is-current-page={isCurrent}>
                      <details
                        open={isActive}
                        onToggle={(e) => e.stopPropagation()}
                        className="details-reset"
                      >
                        <summary>
                          <div
                            data-testid="sidebar-rest-subcategory"
                            className={cx('pl-4 pr-5 py-2 no-underline')}
                          >
                            {childTitle}
                          </div>
                        </summary>
                        <div className="pb-0">
                          {miniTocItems.length > 0 && (
                            <ActionList
                              {...{ as: 'ul' }}
                              items={miniTocItems.map((item) => {
                                return renderRestAnchorLink(item)
                              })}
                            ></ActionList>
                          )}
                        </div>
                      </details>
                    </li>
                  )
                } else {
                  // We're not on the current page so don't have any minitoc
                  // data so just render a link to the category page.
                  return (
                    <li key={childTitle} data-testid="sidebar-article-group" className="pb-0">
                      <Link
                        href={childPage.href}
                        className={cx(
                          'd-block pl-4 pr-5 py-1 no-underline width-full',
                          isCurrent ? 'color-fg-accent' : 'color-fg-default'
                        )}
                      >
                        {childTitle}
                      </Link>
                    </li>
                  )
                }
              })
            )}
          </ul>
        </>
      }
    </details>
  )
}
