import cx from 'classnames'

import { ActionList } from '@primer/react'

import { ProductTreeNode, useMainContext } from 'components/context/MainContext'
import { Link } from 'components/Link'

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
            <ActionList.Item
              as="li"
              key={childNode.href + index}
              className={cx('width-full pl-0')}
              sx={{
                borderRadius: 0,
                ':hover': {
                  borderRadius: 0,
                },
              }}
            >
              <Link className="d-block width-full text-underline" href={childNode.href}>
                {childNode.title}
                {childNode.childPages.length > 0 ? (
                  <small className="color-fg-muted d-inline-block">
                    &nbsp;&bull; {childNode.childPages.length} articles
                  </small>
                ) : null}
              </Link>
            </ActionList.Item>
          )
        })}
      </ActionList>
    </div>
  )
}
