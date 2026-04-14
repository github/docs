import React from 'react'
import cx from 'classnames'
import GithubSlugger from 'github-slugger'

import { HeadingLink } from '@/frame/components/article/HeadingLink'
import { ChangelogItemT } from './types'
import styles from '@/frame/components/ui/MarkdownContent/MarkdownContent.module.scss'

type Props = {
  changelogItems: ChangelogItemT[]
}

export function Changelog({ changelogItems }: Props) {
  const slugger = new GithubSlugger()

  const changes = changelogItems.map((item, index) => {
    const heading = `Schema changes for ${item.date}`
    const slug = slugger.slug(heading)

    return (
      <div key={`${item.date}-${index}`}>
        <HeadingLink as="h2" slug={slug}>
          {heading}
        </HeadingLink>
        {(item.schemaChanges || []).map((change, changeIndex) => (
          <React.Fragment key={changeIndex}>
            <p>{change.title}</p>
            <ul>
              {change.changes.map((changeItem) => (
                <li key={changeItem} dangerouslySetInnerHTML={{ __html: changeItem }} />
              ))}
            </ul>
          </React.Fragment>
        ))}
        {(item.previewChanges || []).map((change, changeIndex) => (
          <React.Fragment key={changeIndex}>
            <p>{change.title}</p>
            <ul>
              {change.changes.map((changeItem) => (
                <li key={changeItem} dangerouslySetInnerHTML={{ __html: changeItem }} />
              ))}
            </ul>
          </React.Fragment>
        ))}
        {(item.upcomingChanges || []).map((change, changeIndex) => (
          <React.Fragment key={changeIndex}>
            <p>{change.title}</p>
            {change.changes.map((changeItem) => (
              <li key={changeItem} dangerouslySetInnerHTML={{ __html: changeItem }} />
            ))}
          </React.Fragment>
        ))}
      </div>
    )
  })

  return <div className={cx(styles.markdownBody)}>{changes}</div>
}
