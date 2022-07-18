import cx from 'classnames'

import { ActionList } from '@primer/react'
import { Link } from 'components/Link'
import type { TocItem } from 'components/context/ProductLandingContext'

type Props = {
  items: Array<TocItem>
  variant?: 'compact' | 'expanded'
}
export const TableOfContents = (props: Props) => {
  const { items, variant = 'expanded' } = props

  const actionItems = (items || []).filter((item) => typeof item !== 'undefined')

  return (
    <ul
      data-testid="table-of-contents"
      className={cx(variant === 'compact' ? 'list-style-outside pl-2' : '')}
    >
      {variant === 'expanded' &&
        actionItems.map((item) => {
          const { fullPath: href, title, intro } = item

          return (
            <li
              key={href}
              data-testid="expanded-item"
              className="pt-4 pb-3 f4 d-list-item width-full list-style-none border-bottom"
            >
              <h2 className="py-1 h4">
                <Link href={href} className="color-fg-accent">
                  {title}
                </Link>
              </h2>
              {intro && (
                <p className="f4 color-fg-muted" dangerouslySetInnerHTML={{ __html: intro }} />
              )}
            </li>
          )
        })}

      {variant === 'compact' && (
        <ActionList>
          {actionItems.map((item) => {
            const { fullPath: href, title, childTocItems } = item
            return (
              <ActionList.Item key={href}>
                <li className="f4 d-list-item width-full list-style-none">
                  <Link className="d-block width-full text-underline" href={href}>
                    {title}
                  </Link>
                  {(childTocItems || []).length > 0 && (
                    <ul
                      className={cx(
                        variant === 'compact' ? 'list-style-circle pl-5 my-3' : 'list-style-none'
                      )}
                    >
                      {(childTocItems || []).map((childItem) => {
                        if (!childItem) {
                          return null
                        }
                        return (
                          <li key={childItem.fullPath} className="f4 d-block width-full m-2">
                            <Link
                              className="d-block width-full text-underline"
                              href={childItem.fullPath}
                            >
                              {childItem.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              </ActionList.Item>
            )
          })}
        </ActionList>
      )}
    </ul>
  )
}
