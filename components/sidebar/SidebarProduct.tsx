import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import cx from 'classnames'

import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { Link } from 'components/Link'
import { AllProductsLink } from 'components/sidebar/AllProductsLink'
import { RestCollapsibleSection } from './RestCollapsibleSection'
import { ProductCollapsibleSection } from './ProductCollapsibleSection'
import { ApiVersionPicker } from './ApiVersionPicker'

import styles from './SidebarProduct.module.scss'

export const SidebarProduct = () => {
  const router = useRouter()
  const [sidebarWidth, setSidebarWidth] = useState(0)
  const sidebarRef = useRef<HTMLUListElement>(null)
  const { currentProduct, currentProductTree } = useMainContext()
  const { t } = useTranslation(['products'])
  const isRestPage = currentProduct && currentProduct.id === 'rest'

  useEffect(() => {
    function updateSize() {
      if (sidebarRef.current) {
        setSidebarWidth(sidebarRef.current.offsetWidth)
      }
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

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

  // remove query string and hash
  const routePath = `/${router.locale}${router.asPath.split('?')[0].split('#')[0]}`

  const hasExactCategory = !!currentProductTree?.childPages.find(({ href }) =>
    routePath.includes(href)
  )

  const productTitle = currentProductTree.shortTitle || currentProductTree.title

  const productSection = () => (
    <li className="my-3" data-testid="product-sidebar-items">
      <ul className="list-style-none">
        {currentProductTree &&
          currentProductTree.childPages.map((childPage, i) => {
            const isStandaloneCategory = childPage.documentType === 'article'

            const childTitle = childPage.shortTitle || childPage.title
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
                  <ProductCollapsibleSection
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
        <ApiVersionPicker width={sidebarWidth} variant="header" />
        <li className="my-3">
          <ul className="list-style-none">
            {conceptualPages.map((childPage, i) => {
              const isStandaloneCategory = childPage.documentType === 'article'
              const childTitle = childPage.shortTitle || childPage.title
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
                  {childPage.href.includes('quickstart') ? (
                    <Link
                      href={childPage.href}
                      className={cx(
                        'd-block pl-4 pr-5 py-1 color-fg-default text-bold no-underline width-full'
                      )}
                    >
                      {childTitle}
                    </Link>
                  ) : (
                    <ProductCollapsibleSection
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
        <div className="my-3">
          <div
            role="separator"
            aria-hidden="true"
            data-view-component="true"
            className="ActionList-sectionDivider mx-4"
          ></div>
          <span data-testid="rest-sidebar-reference" className={cx('f6 pl-4 pb-1 color-fg-muted')}>
            {t('rest.reference.api_reference')}
          </span>
        </div>
        <li className="my-3">
          <ul className="list-style-none">
            {restPages.map((childPage, i) => {
              const isStandaloneCategory = childPage.documentType === 'article'
              const childTitle = childPage.shortTitle || childPage.title
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
                  <RestCollapsibleSection
                    defaultOpen={defaultOpen}
                    routePath={routePath}
                    title={childTitle}
                    page={childPage}
                    isStandaloneCategory={isStandaloneCategory}
                  />
                </li>
              )
            })}
          </ul>
        </li>
      </>
    )
  }

  return (
    <ul data-testid="sidebar" ref={sidebarRef} className={cx(isRestPage && 'pt-10')}>
      <div
        className={cx(isRestPage && styles.apiAllProductsLink, isRestPage && styles.apiFixedHeader)}
        style={{ width: `${sidebarWidth}px` }}
      >
        <AllProductsLink />
      </div>

      <li data-testid="sidebar-product" title={productTitle} className="my-2">
        <Link
          href={currentProductTree.href}
          className={cx(
            'pl-4 pr-5 pb-1 f4 color-fg-default no-underline',
            isRestPage && styles.apiTitle,
            isRestPage && styles.apiFixedHeader
          )}
          style={{ width: `${sidebarWidth}px` }}
        >
          {productTitle}
        </Link>
      </li>
      {isRestPage ? restSection() : productSection()}
    </ul>
  )
}
