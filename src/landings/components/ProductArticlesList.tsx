import { ActionList } from '@primer/react'

import { ProductTreeNode, useMainContext } from '@/frame/components/context/MainContext'
import { Link } from '@/frame/components/Link'
import { countArticles } from '@/landings/lib/count-articles'
import clsx from 'clsx'
import styles from './ProductArticlesList.module.scss'

export const ProductArticlesList = () => {
  const { currentProductTree } = useMainContext()

  if (!currentProductTree) {
    return null
  }

  return (
    <div className="d-flex gutter flex-wrap" data-testid="product-articles-list">
      {currentProductTree.childPages
        .filter((treeNode) => treeNode.childPages.length)
        .map((treeNode) => {
          return <ProductTreeNodeList key={treeNode.href} treeNode={treeNode} />
        })}
    </div>
  )
}

const ProductTreeNodeList = ({ treeNode }: { treeNode: ProductTreeNode }) => {
  return (
    <div className="col-12 col-lg-4 mb-6 height-full">
      <h3 className="mb-3 f4">
        <Link className="text-underline" href={treeNode.href}>
          {treeNode.title}
        </Link>
      </h3>

      <ActionList variant="full">
        {treeNode.childPages.map((childNode, index) => {
          return (
            <ActionList.LinkItem
              as="a"
              key={childNode.href + index}
              href={childNode.href}
              className={clsx(styles.linkItem, 'width-full', 'pl-0', 'd-block')}
            >
              {childNode.title}
              {childNode.childPages.length > 0 ? (
                <small className="color-fg-muted d-inline-block">
                  &nbsp;&bull; {countArticles(childNode)} articles
                </small>
              ) : null}
            </ActionList.LinkItem>
          )
        })}
      </ActionList>
    </div>
  )
}
