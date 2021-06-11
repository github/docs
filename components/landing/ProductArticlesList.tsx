import cx from 'classnames'
import { useState } from 'react'

import { ChevronUpIcon } from '@primer/octicons-react'

import { ProductTreeNode, useMainContext } from 'components/context/MainContext'
import { Link } from 'components/Link'

const maxArticles = 10

export const ProductArticlesList = () => {
  const { currentProductTree } = useMainContext()

  if (!currentProductTree) {
    return null
  }

  return (
    <div className="d-flex gutter flex-wrap">
      {currentProductTree.childPages.map((treeNode, i) => {
        if (treeNode.page.documentType === 'article') {
          return null
        }

        return <ArticleList key={treeNode.href + i} treeNode={treeNode} />
      })}
    </div>
  )
}

const ArticleList = ({ treeNode }: { treeNode: ProductTreeNode }) => {
  const [isShowingMore, setIsShowingMore] = useState(false)

  return (
    <div className="col-12 col-lg-4 mb-6 height-full">
      <h4 className="mb-3">
        <Link href={treeNode.href}>{treeNode.renderedFullTitle}</Link>
      </h4>

      <ul className="list-style-none">
        {treeNode.childPages.map((childNode, index) => {
          if (treeNode.childPages[0].page.documentType === 'mapTopic' && childNode.page.hidden) {
            return null
          }

          return (
            <li
              key={childNode.href + index}
              className={cx('mb-3', !isShowingMore && index >= maxArticles ? 'd-none' : null)}
            >
              <Link href={childNode.href}>{childNode.page.title}</Link>
              {childNode.page.documentType === 'mapTopic' ? (
                <small className="color-text-secondary d-inline-block">
                  &nbsp;&bull; {treeNode.childPages.length} articles
                </small>
              ) : null}
            </li>
          )
        })}
      </ul>
      {!isShowingMore && treeNode.childPages.length > maxArticles && (
        <button onClick={() => setIsShowingMore(true)} className="btn-link Link--secondary">
          Show {treeNode.childPages.length - maxArticles} more{' '}
          <ChevronUpIcon className="v-align-text-bottom" />
        </button>
      )}
    </div>
  )
}
