import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { TreeView } from '@primer/react'
import cx from 'classnames'

import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { Link } from 'components/Link'
import { RestCollapsibleSection } from 'src/rest/components/RestCollapsibleSection'
import { ProductCollapsibleSection } from 'components/sidebar/ProductCollapsibleSection'

export const SidebarProduct = () => {
  const router = useRouter()
  const sidebarRef = useRef<HTMLDivElement>(null)

  const {
    currentProduct,
    // For the sidebar we only need the short titles so we can use the
    // more "compressed" tree that is as light as possible.
    sidebarTree,
  } = useMainContext()
  const { t } = useTranslation(['products'])
  const isRestPage = currentProduct && currentProduct.id === 'rest'

  useEffect(() => {
    const activeArticle = document.querySelector('[aria-expanded=true]')
    // Setting to the top doesn't give enough context of surrounding categories
    activeArticle?.scrollIntoView({ block: 'center' })
    // scrollIntoView affects some articles that are very low in the sidebar
    // The content scrolls down a bit. This sets the article content back up
    // top unless the route contains a link heading.
    if (!router.asPath.includes('#')) window?.scrollTo(0, 0)
  }, [])

  if (!sidebarTree) {
    return null
  }

  // remove query string and hash
  const routePath = `/${router.locale}${router.asPath.split('?')[0].split('#')[0]}`

  const productSection = () => (
    <div className="ml-3" data-testid="product-sidebar">
      <TreeView aria-label="product sidebar">
        {sidebarTree &&
          sidebarTree.childPages.map((childPage, i) => {
            const isStandaloneCategory = childPage.childPages.length === 0
            const childTitle = childPage.title
            const isActive =
              routePath.includes(childPage.href + '/') || routePath === childPage.href

            return (
              <div key={childPage.title}>
                {isStandaloneCategory ? (
                  <TreeView.Item
                    id={childPage.href}
                    current={routePath === childPage.href}
                    key={childPage.href + i}
                    onSelect={(e) => {
                      if (
                        e.nativeEvent instanceof KeyboardEvent &&
                        e.nativeEvent.code === 'Enter'
                      ) {
                        // Need to grab the a tag inside the TreeView.Item
                        const aLink = document.getElementById(childPage.href)?.firstChild?.lastChild
                          ?.lastChild?.lastChild as HTMLElement
                        if (aLink) aLink.click()
                        e?.stopPropagation()
                      }
                    }}
                  >
                    <Link href={childPage.href} className="color-fg-default no-underline">
                      {childTitle}
                    </Link>
                  </TreeView.Item>
                ) : (
                  <TreeView.Item
                    defaultExpanded={isActive}
                    id={childPage.href}
                    key={childPage.href + i}
                    current={routePath === childPage.href}
                  >
                    {childTitle}
                    <TreeView.SubTree>
                      <ProductCollapsibleSection
                        routePath={routePath}
                        title={childTitle}
                        page={childPage}
                      />
                    </TreeView.SubTree>
                  </TreeView.Item>
                )}
              </div>
            )
          })}
      </TreeView>
    </div>
  )

  const restSection = () => {
    const conceptualPages = sidebarTree.childPages.filter(
      (page) =>
        page.href.includes('guides') ||
        page.href.includes('overview') ||
        page.href.includes('quickstart'),
    )
    const restPages = sidebarTree.childPages.filter(
      (page) =>
        !page.href.includes('guides') &&
        !page.href.includes('overview') &&
        !page.href.includes('quickstart'),
    )
    return (
      <>
        <div className="ml-3">
          <TreeView aria-label="rest sidebar">
            {conceptualPages.map((childPage, i) => {
              const childTitle = childPage.title
              const isActive =
                routePath.includes(childPage.href + '/') || routePath === childPage.href

              return (
                <div key={childTitle}>
                  {childPage.href.includes('quickstart') ? (
                    <TreeView.Item
                      id={childPage.href}
                      key={childPage.href + i}
                      current={isActive}
                      onSelect={(e) => {
                        if (
                          e.nativeEvent instanceof KeyboardEvent &&
                          e.nativeEvent.code === 'Enter'
                        ) {
                          document.getElementById(childPage.href)?.click()
                          e?.stopPropagation()
                        }
                      }}
                    >
                      <Link
                        href={childPage.href}
                        className={cx('d-block no-underline width-full color-fg-default')}
                      >
                        {childTitle}
                      </Link>
                    </TreeView.Item>
                  ) : (
                    <TreeView.Item
                      id={childPage.href}
                      key={childPage.href + i}
                      defaultExpanded={isActive}
                    >
                      {childTitle}
                      <TreeView.SubTree>
                        <ProductCollapsibleSection
                          routePath={routePath}
                          title={childTitle}
                          page={childPage}
                        />
                      </TreeView.SubTree>
                    </TreeView.Item>
                  )}
                </div>
              )
            })}
          </TreeView>
        </div>
        <div className="my-3">
          <div
            role="separator"
            aria-hidden="true"
            data-view-component="true"
            className="mb-3"
          ></div>
          <span data-testid="rest-sidebar-reference" className={cx('f6 pl-3 color-fg-muted')}>
            {t('rest.reference.api_reference')}
          </span>
        </div>
        <TreeView>
          {restPages.map((childPage, i) => {
            const childTitle = childPage.title

            return (
              <RestCollapsibleSection
                key={childPage.href + i}
                routePath={routePath}
                title={childTitle}
                page={childPage}
              />
            )
          })}
        </TreeView>
      </>
    )
  }

  return (
    <div data-testid="sidebar" ref={sidebarRef} style={{ overflowY: 'auto' }} className="pt-3">
      {isRestPage ? restSection() : productSection()}
    </div>
  )
}
