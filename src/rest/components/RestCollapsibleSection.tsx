import { useRouter } from 'next/router'
import cx from 'classnames'
import { useState, useEffect } from 'react'
import { TreeView } from '@primer/react'

import { ProductTreeNode } from 'components/context/MainContext'
import { EventType, sendEvent } from 'src/events/components/events'
import { useAutomatedPageContext } from 'src/automated-pipelines/components/AutomatedPageContext'
import type { MiniTocItem } from 'components/context/ArticleContext'
import { Link } from 'components/Link'

import styles from './RestCollapsibleSection.module.scss'

let prevTarget: object | undefined

type SectionProps = {
  routePath: string
  page: ProductTreeNode
  title: string
}

export const RestCollapsibleSection = (props: SectionProps) => {
  const router = useRouter()
  const { routePath, title, page } = props
  const [currentAnchor, setCurrentAnchor] = useState('')
  const [visibleAnchor, setVisibleAnchor] = useState('')
  const isActive = routePath.includes(page.href + '/') || routePath === page.href
  const [mapTopicExpanded, setMapTopicExpanded] = useState(isActive)

  const miniTocItems =
    router.query.productId === 'rest' ||
    // These pages need the Article Page mini tocs instead of the Rest Pages
    router.asPath.includes('/rest/guides') ||
    router.asPath.includes('/rest/overview') ||
    router.asPath.includes('/rest/quickstart')
      ? []
      : useAutomatedPageContext().miniTocItems

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
    if (
      !router.asPath.includes('guides') &&
      !router.asPath.includes('overview') &&
      !router.asPath.includes('quickstart')
    ) {
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
        { rootMargin: '0px 0px -85% 0px' },
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

  useEffect(() => {
    setMapTopicExpanded(true)
  }, [router.query.subcategory])

  const renderRestAnchorLink = (miniTocItem: MiniTocItem) => {
    const miniTocAnchor = miniTocItem.contents.href
    const title = miniTocItem.contents.title
    const isAnchorCurrent = visibleAnchor === miniTocAnchor
    return (
      <TreeView.Item
        key={miniTocAnchor}
        id={miniTocAnchor}
        current={isAnchorCurrent}
        defaultExpanded={isAnchorCurrent}
      >
        <a
          id={miniTocAnchor}
          onKeyPressCapture={(e) => {
            if (e.code === 'Enter') {
              document.getElementById(miniTocAnchor)?.click()
              e?.stopPropagation()
            }
          }}
          onClick={() => setVisibleAnchor(miniTocAnchor)}
          href={miniTocAnchor}
          className={cx(styles.operationWidth, 'color-fg-default no-underline')}
        >
          {title}
        </a>
      </TreeView.Item>
    )
  }

  return (
    // This is where a category has no subcategory
    <div className="ml-3" data-testid="rest-category">
      <TreeView.Item id={title} defaultExpanded={isActive}>
        {title}
        <TreeView.SubTree>
          {page.childPages.map((childPage, i) => {
            const childTitle = childPage.title
            const childActive =
              routePath.includes(childPage.href + '/') || routePath === childPage.href
            const childCurrent = routePath === childPage.href
            return (
              <div
                data-testid="rest-subcategory"
                key={childPage.href + i}
                className={cx(styles.toggleHover, 'width-full')}
              >
                <TreeView.Item
                  id={childPage.href + i}
                  expanded={childCurrent && mapTopicExpanded}
                  onExpandedChange={() => setMapTopicExpanded(childCurrent && mapTopicExpanded)}
                  defaultExpanded={childActive}
                  // We need the subcategory level to router.push so that we can get the operations
                  // We also want it to open/close on click without doing router.push when toggling
                  onSelect={(e) => {
                    e.preventDefault()
                    const currentTarget = e.target
                    if (
                      childPage.href.split('/').pop() === router.query.subcategory &&
                      mapTopicExpanded
                    ) {
                      prevTarget = currentTarget
                    }

                    if (prevTarget && prevTarget === currentTarget) {
                      setMapTopicExpanded(!mapTopicExpanded)
                    } else {
                      sendEvent({
                        type: EventType.navigate,
                        navigate_label: `rest page navigate to: ${childPage.href}`,
                      })
                    }

                    if (e.nativeEvent instanceof KeyboardEvent && e.nativeEvent.code === 'Enter') {
                      document.getElementById(childPage.href)?.click()
                      e?.stopPropagation()
                    }

                    prevTarget = currentTarget
                  }}
                >
                  <Link
                    id={childPage.href}
                    href={childPage.href}
                    className="d-block width-full no-underline color-fg-default"
                  >
                    {childTitle}
                  </Link>

                  <TreeView.SubTree>
                    {/* At this point we have the mini-toc data for the current page
                      so we render this list of operation links. */}
                    {routePath === childPage.href ? (
                      <>
                        {miniTocItems.length > 0 && (
                          <>
                            {miniTocItems.map((item) => {
                              return renderRestAnchorLink(item)
                            })}
                          </>
                        )}
                      </>
                    ) : (
                      <div></div>
                    )}
                  </TreeView.SubTree>
                </TreeView.Item>
              </div>
            )
          })}
        </TreeView.SubTree>
      </TreeView.Item>
    </div>
  )
}
