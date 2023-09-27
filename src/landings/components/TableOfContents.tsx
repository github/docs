import React from 'react'
import cx from 'classnames'

import { ActionList } from '@primer/react'
import { Link } from 'components/Link'
import type { TocItem } from 'src/landings/components/ProductLandingContext'

type Props = {
  items: Array<TocItem>
  variant?: 'compact' | 'expanded'
}
export const TableOfContents = (props: Props) => {
  const { items, variant = 'expanded' } = props

  return (
    <div
      data-testid="table-of-contents"
      className={cx(variant === 'compact' ? 'list-style-outside pl-2' : '')}
    >
      {variant === 'expanded' &&
        items.map((item) => {
          const { fullPath: href, title, intro } = item

          return (
            <div
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
            </div>
          )
        })}

      {variant === 'compact' && (
        <ActionList>
          {items.map((item) => {
            const { fullPath: href, title, childTocItems } = item
            return (
              <React.Fragment key={href}>
                <ActionList.Item
                  key={href}
                  className="f4 color-fg-accent d-list-item d-block width-full text-underline"
                >
                  <Link href={href}>{title}</Link>
                </ActionList.Item>
                {(childTocItems || []).length > 0 && (
                  <li className="f4 color-fg-accent d-list-item d-block width-full text-underline">
                    <ActionList
                      className={cx(
                        variant === 'compact' ? 'list-style-circle pl-5' : 'list-style-none',
                      )}
                    >
                      {(childTocItems || []).filter(Boolean).map((childItem) => {
                        return (
                          <ActionList.Item
                            key={childItem.fullPath}
                            className="f4 color-fg-accent d-list-item d-block width-full text-underline"
                          >
                            <Link href={childItem.fullPath}>{childItem.title}</Link>
                          </ActionList.Item>
                        )
                      })}
                    </ActionList>
                  </li>
                )}
              </React.Fragment>
            )
          })}
        </ActionList>
      )}
    </div>
  )
}
