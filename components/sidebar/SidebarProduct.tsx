import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { TreeView } from '@primer/react'
import cx from 'classnames'

import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { Link } from 'components/Link'
import { RestCollapsibleSection } from './RestCollapsibleSection'
import { ProductCollapsibleSection } from './ProductCollapsibleSection'

export const SidebarProduct = () => {
  const router = useRouter()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const { currentProduct, currentProductTree } = useMainContext()
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

  if (!currentProductTree) {
    return null
  }

  // remove query string and hash
  const routePath = `/${router.locale}${router.asPath.split('?')[0].split('#')[0]}`

  const productSection = () => (
    <div className="ml-3" data-testid="product-sidebar">
      <TreeView aria-label="product sidebar">
        {currentProductTree &&
          currentProductTree.childPages.map((childPage, i) => {
            const isStandaloneCategory = childPage.documentType === 'article'
            const childTitle = childPage.shortTitle || childPage.title
            const isActive =
              routePath.includes(childPage.href + '/') || routePath === childPage.href

            return (
              <div key={childPage.title}>
                {isStandaloneCategory ? (
                  <TreeView.Item
                    id={childPage.href}
                    current={routePath === childPage.href}
                    key={childPage.href + i}
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
    const conceptualPages = currentProductTree.childPages.filter(
      (page) =>
        page.href.includes('guides') ||
        page.href.includes('overview') ||
        page.href.includes('quickstart')
    )
    const restPages = currentProductTree.childPages.filter(
      (page) =>
        !page.href.includes('guides') &&
        !page.href.includes('overview') &&
        !page.href.includes('quickstart')
    )
    return (
      <>
        <div className="ml-3">
          <TreeView aria-label="rest sidebar">
            {conceptualPages.map((childPage, i) => {
              const childTitle = childPage.shortTitle || childPage.title
              const isActive =
                routePath.includes(childPage.href + '/') || routePath === childPage.href

              return (
                <div key={childTitle}>
                  {childPage.href.includes('quickstart') ? (
                    <TreeView.Item id={childPage.href} key={childPage.href + i} current={isActive}>
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
            const isStandaloneCategory = childPage.documentType === 'article'
            const childTitle = childPage.shortTitle || childPage.title

            return (
              <RestCollapsibleSection
                key={childPage.href + i}
                routePath={routePath}
                title={childTitle}
                page={childPage}
                isStandaloneCategory={isStandaloneCategory}
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
