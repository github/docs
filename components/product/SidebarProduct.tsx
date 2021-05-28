import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

import { useMainContext } from 'components/context/MainContext'
import { AllProductsLink } from 'components/product/AllProductsLink'
// <!--
//   Styling note:

//   Categories, Maptopics, and Articles list items get a class of `active` when they correspond to content
//   hierarchy of the current page. If an item's URL is also the same as the current URL, the item
//   also gets an `is-current-page` class.
//  -->
export const SidebarProduct = () => {
  const router = useRouter()
  const { currentProductTree: currentProductTree } = useMainContext()

  if (!currentProductTree) {
    return null
  }

  const productTitle = currentProductTree.renderedShortTitle || currentProductTree.renderedFullTitle
  const routePath = `/${router.locale}${router.asPath.split('?')[0]}` // remove query string
  return (
    <>
      <AllProductsLink />

      {!currentProductTree.page.hidden && (
        <>
          <li title="" className="sidebar-product mb-2">
            <Link href={currentProductTree.href}>
              <a className="pl-4 pr-5 pb-1 f4 color-text-primary">{productTitle}</a>
            </Link>
          </li>

          <li>
            <ul className="sidebar-categories list-style-none">
              {currentProductTree.childPages.map((childPage, i) => {
                const isStandaloneCategory = childPage.page.documentType === 'article'

                const childTitle = childPage.renderedShortTitle || childPage.renderedFullTitle
                const isActive = routePath.includes(childPage.href)
                const isCurrent = routePath === childPage.href
                return (
                  <li
                    key={childPage.href + i}
                    className={cx(
                      'sidebar-category py-1',
                      isActive && 'active',
                      isCurrent && 'is-current-page',
                      isStandaloneCategory && 'standalone-category'
                    )}
                  >
                    {isStandaloneCategory ? (
                      <Link href={childPage.href}>
                        <a className="pl-4 pr-2 py-2 f6 text-uppercase d-block flex-auto mr-3 color-text-primary">
                          {childTitle}
                        </a>
                      </Link>
                    ) : (
                      <details
                        className={cx('dropdown-withArrow details details-reset')}
                        open={routePath.includes(childPage.href) || i < 3}
                      >
                        <summary>
                          <div className="d-flex flex-justify-between">
                            <Link href={childPage.href}>
                              <a className="pl-4 pr-2 py-2 f6 text-uppercase d-block flex-auto mr-3 color-text-primary">
                                {childTitle}
                              </a>
                            </Link>
                            {i < 3 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="octicon flex-shrink-0 arrow mr-3"
                                style={{ marginTop: 7 }}
                                viewBox="0 0 16 16"
                                width="16"
                                height="16"
                              >
                                {' '}
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                                ></path>
                              </svg>
                            )}
                          </div>
                        </summary>
                        {routePath.includes(childPage.href) || i < 3 ? (
                          <>
                            {/* <!-- some categories have maptopics with child articles --> */}
                            {childPage.childPages[0].page.documentType === 'mapTopic' ? (
                              <ul className="sidebar-topics list-style-none position-relative">
                                {childPage.childPages.map((grandchildPage, i) => {
                                  const grandchildTitle =
                                    grandchildPage.renderedShortTitle ||
                                    grandchildPage.renderedFullTitle
                                  const isActive = routePath.includes(grandchildPage.href)
                                  const isCurrent = routePath === grandchildPage.href
                                  return (
                                    <li
                                      key={childPage.href + i}
                                      className={cx(
                                        'sidebar-maptopic',
                                        isActive && 'active',
                                        isCurrent && 'is-current-page'
                                      )}
                                    >
                                      <Link href={grandchildPage.href}>
                                        <a className="pl-4 pr-5 py-2 color-text-primary">{grandchildTitle}</a>
                                      </Link>
                                      <ul className="sidebar-articles my-2">
                                        {grandchildPage.childPages.map(
                                          (greatgrandchildPage, i, arr) => {
                                            const greatgrandchildTitle =
                                              greatgrandchildPage.renderedShortTitle ||
                                              greatgrandchildPage.renderedFullTitle
                                            const isLast = i === arr.length - 1
                                            const isActive = routePath.includes(
                                              greatgrandchildPage.href
                                            )
                                            const isCurrent = routePath === greatgrandchildPage.href
                                            return (
                                              <li
                                                key={greatgrandchildPage.href + i}
                                                className={cx(
                                                  'sidebar-article',
                                                  isActive && 'active',
                                                  isCurrent && 'is-current-page'
                                                )}
                                              >
                                                <Link href={greatgrandchildPage.href}>
                                                  <a
                                                    className={cx(
                                                      'pl-6 pr-5 py-1 color-text-primary',
                                                      isLast && 'pb-2'
                                                    )}
                                                  >
                                                    {greatgrandchildTitle}
                                                  </a>
                                                </Link>
                                              </li>
                                            )
                                          }
                                        )}
                                      </ul>
                                    </li>
                                  )
                                })}
                              </ul>
                            ) : childPage.childPages[0].page.documentType == 'article' ? (
                              <ul className="sidebar-articles list-style-none">
                                {/* <!-- some categories have no maptopics, only articles --> */}
                                {childPage.childPages.map((grandchildPage, i, arr) => {
                                  const grandchildTitle =
                                    grandchildPage.renderedShortTitle ||
                                    grandchildPage.renderedFullTitle
                                  const isLast = i === arr.length - 1
                                  const isActive = routePath.includes(grandchildPage.href)
                                  const isCurrent = routePath === grandchildPage.href
                                  return (
                                    <li
                                      key={grandchildPage.href + i}
                                      className={cx(
                                        'sidebar-article',
                                        isActive && 'active',
                                        isCurrent && 'is-current-page'
                                      )}
                                    >
                                      <Link href={grandchildPage.href}>
                                        <a className={cx('pl-6 pr-5 py-1 color-text-primary', isLast && 'pb-2')}>
                                          {grandchildTitle}
                                        </a>
                                      </Link>
                                    </li>
                                  )
                                })}
                              </ul>
                            ) : null}
                          </>
                        ) : null}
                      </details>
                    )}
                  </li>
                )
              })}
            </ul>
          </li>
        </>
      )}
    </>
  )
}
