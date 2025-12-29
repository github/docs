import React from 'react'

import { Link } from '@/frame/components/Link'
import type { TocItem } from '@/landings/types'

type Props = {
  items: Array<TocItem>
  variant?: 'compact' | 'expanded'
}
export const TableOfContents = (props: Props) => {
  const { items, variant = 'expanded' } = props

  return (
    <div data-testid="table-of-contents">
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
        <ul className="list-style-none f4">
          {items.map((item) => {
            const { fullPath, title, childTocItems } = item
            return (
              <li key={fullPath} className="mb-2">
                <Link href={fullPath} className="text-underline mb-2 d-block">
                  {title}
                </Link>
                {(childTocItems || []).filter(Boolean).length > 0 && (
                  <ul className="pl-4 list-style-none">
                    {(childTocItems || []).filter(Boolean).map((childItem) => (
                      <li key={childItem.fullPath} className="mb-2">
                        <Link href={childItem.fullPath} className="text-underline">
                          {childItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
