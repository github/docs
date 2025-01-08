import React from 'react'
import cx from 'classnames'

import { HeadingLink } from 'src/frame/components/article/HeadingLink'
import { ChangelogItemT } from './types'
import styles from 'src/frame/components/ui/MarkdownContent/MarkdownContent.module.scss'

type Props = {
  changelogItems: ChangelogItemT[]
}

export function Changelog({ changelogItems }: Props) {
  const changes = changelogItems.map((item) => {
    const heading = `Schema changes for ${item.date}`

    return (
      <div key={item.date}>
        <HeadingLink as="h2">{heading}</HeadingLink>
        {(item.schemaChanges || []).map((change, index) => (
          <React.Fragment key={index}>
            <p>{change.title}</p>
            <ul>
              {change.changes.map((change) => (
                <li key={change} dangerouslySetInnerHTML={{ __html: change }} />
              ))}
            </ul>
          </React.Fragment>
        ))}
        {(item.previewChanges || []).map((change, index) => (
          <React.Fragment key={index}>
            <p>{change.title}</p>
            <ul>
              {change.changes.map((change) => (
                <li key={change} dangerouslySetInnerHTML={{ __html: change }} />
              ))}
            </ul>
          </React.Fragment>
        ))}
        {(item.upcomingChanges || []).map((change, index) => (
          <React.Fragment key={index}>
            <p>{change.title}</p>
            {change.changes.map((change) => (
              <li key={change} dangerouslySetInnerHTML={{ __html: change }} />
            ))}
          </React.Fragment>
        ))}
      </div>
    )
  })

  return <div className={cx(styles.markdownBody)}>{changes}</div>
}
