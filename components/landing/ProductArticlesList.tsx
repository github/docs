import Link from 'next/link'

import cx from 'classnames'
import { useState } from 'react'
import { ChevronUpIcon } from '@primer/octicons-react'
import { CurrentProductTree, useMainContext } from 'components/context/MainContext'

const maxArticles = 10

export const ProductArticlesList = () => {
  const { currentProductTree } = useMainContext()

  if (!currentProductTree) {
    return null
  }

  return (
    <div className="d-flex gutter flex-wrap">
      {currentProductTree.childPages.map((childPage) => {
        if (childPage.page.documentType === 'article') {
          return null
        }

        return <ArticleList key={childPage.href} page={childPage} />
      })}
    </div>
  )
}

const ArticleList = ({ page }: { page: CurrentProductTree }) => {
  const [isShowingMore, setIsShowingMore] = useState(false)

  return (
    <div className="col-12 col-lg-4 mb-6 height-full">
      <h4 className="mb-3">
        <Link href={page.href}>
          <a>{page.page.title}</a>
        </Link>
      </h4>

      <ul className="list-style-none">
        {page.childPages.map((grandchildPage, index) => {
          if (page.childPages[0].page.documentType === 'mapTopic' && grandchildPage.page.hidden) {
            return null
          }

          return (
            <li className={cx('mb-3', index >= maxArticles ? 'd-none' : null)}>
              <Link href={grandchildPage.href}>
                <a>{grandchildPage.page.title}</a>
              </Link>
              {grandchildPage.page.documentType === 'mapTopic' ? (
              <small className="color-text-secondary d-inline-block">
                &nbsp;&bull; {page.childPages.length} articles
              </small>) : null}
            </li>
          )
        })}
      </ul>
      {!isShowingMore && page.childPages.length > maxArticles && (
        <button onClick={() => setIsShowingMore(true)} className="btn-link Link--secondary">
          Show {page.childPages.length - maxArticles} more{' '}
          <ChevronUpIcon className="v-align-text-bottom" />
        </button>
      )}
    </div>
  )
}
