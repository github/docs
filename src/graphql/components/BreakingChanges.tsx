import React from 'react'
import cx from 'classnames'

import { HeadingLink } from 'components/article/HeadingLink'
import { BreakingChangesT } from './types'
import styles from 'components/ui/MarkdownContent/MarkdownContent.module.scss'

type Props = {
  schema: BreakingChangesT
}

export function BreakingChanges({ schema }: Props) {
  const changes = Object.keys(schema).map((date) => {
    const items = schema[date]
    const heading = `Changes scheduled for ${date}`

    return (
      <div className={cx(styles.markdownBody)} key={date}>
        <HeadingLink as="h2">{heading}</HeadingLink>
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
                <p>
                  <b>Description: </b>
                  <span dangerouslySetInnerHTML={{ __html: item.description }} />
                </p>
                <p>
                  <b>Reason: </b> <span dangerouslySetInnerHTML={{ __html: item.reason }} />
                </p>
              </li>
            </ul>
          )
        })}
      </div>
    )
  })

  return <div>{changes}</div>
}
