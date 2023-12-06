import React from 'react'
import cx from 'classnames'

import { HeadingLink } from 'src/frame/components/article/HeadingLink'
import { BreakingChangesT } from './types'
import styles from 'src/frame/components/ui/MarkdownContent/MarkdownContent.module.scss'

export type HeadingT = {
  title: string
  slug: string
}
type Props = {
  schema: BreakingChangesT
  headings: Record<string, HeadingT>
}

export function BreakingChanges({ schema, headings }: Props) {
  const changes = Object.keys(schema).map((date) => {
    const items = schema[date]
    const { title, slug } = headings[date]
    return (
      <div className={cx(styles.markdownBody)} key={date}>
        <HeadingLink as="h2" slug={slug}>
          {title}
        </HeadingLink>
        {items.map((item) => {
          const criticalityStyles =
            item.criticality === 'breaking'
              ? 'color-border-danger color-bg-danger'
              : 'color-border-accent-emphasis color-bg-accent'
          const criticality = item.criticality === 'breaking' ? 'Breaking' : 'Dangerous'

          return (
            <ul key={item.location}>
              <li>
                <span className={cx(criticalityStyles, 'border rounded-1 m-1 p-1')}>
                  {criticality}
                </span>{' '}
                A change will be made to <code>{item.location}</code>.
                <div>
                  <b>Description: </b>
                  <span dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
                <div>
                  <b>Reason: </b> <span dangerouslySetInnerHTML={{ __html: item.reason }} />
                </div>
              </li>
            </ul>
          )
        })}
      </div>
    )
  })

  return <div>{changes}</div>
}
