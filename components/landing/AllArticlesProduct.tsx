import Link from 'next/link'
import { ChevronUpIcon } from '@primer/octicons-react'
import cx from 'classnames'

import { useProductLandingContext, Product } from 'components/context/ProductLandingContext'
import { useState } from 'react'

const maxArticles = 10

export const AllArticlesProduct = () => {
  const { product } = useProductLandingContext()

  return (
    <div className="d-flex gutter flex-wrap">
      {Object.entries(product.categories).map(([key, category]) => {
        if (category.standalone) {
          return null
        }

        return <ArticleList key={key} category={category} />
      })}
    </div>
  )
}

const ArticleList = ({ category }: { category: Product['categories'][0] }) => {
  const [isShowingMore, setIsShowingMore] = useState(false)
  const numArticles = Object.keys(category.articles || {}).length
  return (
    <div className="col-12 col-lg-4 mb-6 height-full">
      <h4 className="mb-3">
        <Link href={category.href}>
          <a>{category.title}</a>
        </Link>
      </h4>

      <ul className="list-style-none">
        {Object.entries(category.articles || {}).map(([key, article], i) => {
          return (
            <li key={key} className={cx('mb-3', !isShowingMore && i > maxArticles - 1 && 'd-none')}>
              <Link href={article.href}>
                <a>{article.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      {numArticles > maxArticles && !isShowingMore && (
        <button className="btn-link Link--secondary" onClick={() => setIsShowingMore(true)}>
          Show {numArticles - maxArticles} more <ChevronUpIcon className="v-align-text-bottom" />
        </button>
      )}
    </div>
  )
}
