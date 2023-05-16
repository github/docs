import React from 'react'
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

  return (
    <ul
      data-testid="table-of-contents"
      className={cx(variant === 'compact' ? 'list-style-outside pl-2' : '')}
    >
      {variant === 'expanded' &&
        items.map((item) => {
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
                <div className="f4 color-fg-muted" dangerouslySetInnerHTML={{ __html: intro }} />
              )}
            </li>
          )
        })}

      {variant === 'compact' && (
        <ActionList>
          {items.map((item) => {
            const { fullPath: href, title, childTocItems } = item
            return (
              <React.Fragment key={href}>
                <ActionList.LinkItem
                  key={href}
                  href={href}
                  className="f4 color-fg-accent d-list-item d-block width-full text-underline"
                >
                  {title}
                </ActionList.LinkItem>
                {(childTocItems || []).length > 0 && (
                  <ul
                    className={cx(
                      variant === 'compact' ? 'list-style-circle pl-5' : 'list-style-none'
                    )}
                  >
                    {(childTocItems || []).map((childItem) => {
                      if (!childItem) {
                        return null
                      }
                      return (
                        <ActionList.LinkItem
                          key={childItem.fullPath}
                          href={childItem.fullPath}
                          className="f4 color-fg-accent d-list-item d-block width-full text-underline"
                        >
                          {childItem.title}
                        </ActionList.LinkItem>
                      )
                    })}
                  </ul>
                )}
                {/* </li> */}
              </React.Fragment>
            )
          })}
        </ActionList>
      )}
    </ul>
  )
}
