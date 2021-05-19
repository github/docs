import cx from 'classnames'
import Link from 'next/link'

import { useMainContext } from 'components/context/MainContext'
import { AllProductsLink } from './AllProductsLink'
import { useRouter } from 'next/router'

/* Styling note:

Categories, Maptopics, and Articles list items get a class of `active` when they correspond to content
hierarchy of the current page. If an item's URL is also the same as the current URL, the item
also gets an `is-current-page` class.
*/
export const ProductSiteTree = () => {
  const router = useRouter()
  const { productSiteTree: product, pageHidden, breadcrumbs } = useMainContext()
  if (!product) {
    return null
  }

  return (
    <>
      <AllProductsLink />

      <li title={product.title} className="sidebar-product mb-2">
        {!pageHidden && (
          <Link href={product.href}>
            <a className="pl-4 pr-5 pb-1 f4 color-text-primary">{product.title}</a>
          </Link>
        )}
      </li>
      <li>
        <ul className="sidebar-categories list-style-none">
          {Object.entries(product.categories || {}).map(([key, category], i) => {
            const isActive = breadcrumbs.category?.href === category.href
            const isCurrent = isActive && router.asPath === category.href
            const title = category.shortTitle || category.title
            return (
              <li
                key={key}
                className={cx(
                  'sidebar-category py-1',
                  isActive && 'active',
                  isCurrent && 'is-current-page',
                  category.standalone && 'standalone-category'
                )}
              >
                {category.standalone ? (
                  <a
                    href={category.href}
                    className="pl-4 pr-2 py-2 f6 text-uppercase d-block flex-auto mr-3 color-text-primary"
                  >
                    {title}
                  </a>
                ) : (
                  <details
                    className="dropdown-withArrow details details-reset"
                    open={breadcrumbs.category?.href === category.href || i < 3}
                  >
                    <summary>
                      <div className="d-flex flex-justify-between">
                        <a
                          href={category.href}
                          className="pl-4 pr-2 py-2 f6 text-uppercase d-block flex-auto mr-3 color-text-primary"
                        >
                          {title}
                        </a>
                        {(isActive || i < 3) && (
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

                    {(isActive || i < 4) &&
                      (category.maptopics ? (
                        // <!-- some categories have maptopics with child articles -->
                        <ul className="sidebar-topics list-style-none position-relative">
                          {Object.entries(category.maptopics).map(([key, maptopic]) => {
                            if (!maptopic || maptopic.hidden) {
                              return null
                            }

                            const title = maptopic.shortTitle || maptopic.title
                            const isActiveMapTopic = breadcrumbs.maptopic?.href == maptopic.href
                            const isCurrentMapTopic =
                              isActiveMapTopic && router.asPath === maptopic.href
                            return (
                              <li
                                key={key}
                                className={cx(
                                  'sidebar-maptopic',
                                  isActiveMapTopic && 'active',
                                  isCurrentMapTopic && 'is-current-page'
                                )}
                              >
                                <a
                                  href={maptopic.href}
                                  className="pl-4 pr-5 py-2 color-text-primary"
                                >
                                  {title}
                                </a>
                                <ul className="sidebar-articles my-2">
                                  {Object.entries(maptopic.articles || {}).map(
                                    ([key, article], i, arr) => {
                                      if (!article || article.hidden) {
                                        return null
                                      }

                                      const isLast = i === arr.length - 1

                                      const title = article.shortTitle || article.title
                                      const isActiveArticle =
                                        breadcrumbs.article?.href === article.href
                                      const isCurrentArticle =
                                        isActiveArticle && router.asPath === article.href
                                      return (
                                        <li
                                          key={key}
                                          className={cx(
                                            'sidebar-article',
                                            isActiveArticle && 'active',
                                            isCurrentArticle && 'is-current-page'
                                          )}
                                        >
                                          <a
                                            href={article.href}
                                            className={cx(
                                              'pl-6 pr-5 py-1 color-text-primary',
                                              isLast && 'pb-2'
                                            )}
                                          >
                                            {title}
                                          </a>
                                        </li>
                                      )
                                    }
                                  )}
                                </ul>
                              </li>
                            )
                          })}
                        </ul>
                      ) : (
                        // <!-- some categories have no maptopics, only articles -->
                        <ul className="sidebar-articles list-style-none">
                          {Object.entries(category.articles || {}).map(([key, article], i, arr) => {
                            if (!article || article.hidden) {
                              return null
                            }

                            const isLast = i === arr.length - 1
                            const isActive = breadcrumbs.article?.href === article.href
                            const isCurrent = isActive && router.asPath === article.href

                            return (
                              <li
                                key={key}
                                className={cx(
                                  'sidebar-article',
                                  isActive && 'active',
                                  isCurrent && 'is-current-page'
                                )}
                              >
                                <a
                                  href={article.href}
                                  className={cx(
                                    'pl-6 pr-5 py-1 color-text-primary',
                                    isLast && 'pb-2'
                                  )}
                                >
                                  {article.shortTitle || article.title}
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      ))}
                  </details>
                )}
              </li>
            )
          })}
        </ul>
      </li>
    </>
  )
}
