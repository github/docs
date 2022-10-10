import React from 'react'
import GithubSlugger from 'github-slugger'
import cx from 'classnames'

import { LinkIconHeading } from 'components/article/LinkIconHeading'
import { ChangelogItemT } from 'components/graphql/types'
import styles from 'components/ui/MarkdownContent/MarkdownContent.module.scss'

type Props = {
  changelogItems: ChangelogItemT[]
}

export function Changelog({ changelogItems }: Props) {
  const changes = changelogItems.map((item) => {
    const heading = `Schema changes for ${item.date}`
    const slugger = new GithubSlugger()
    const slug = slugger.slug(heading)

    return (
      <div className={cx(styles.markdownBody, styles.automatedPages)} key={item.date}>
        <h2 id={slug}>
          <LinkIconHeading slug={slug} />
          {heading}
        </h2>
        {item.schemaChanges &&
          item.schemaChanges.map((change, index) => (
            <React.Fragment key={`${item.date}-schema-changes-${index}`}>
              <p>{change.title}</p>
              <ul>
                {change.changes.map((change) => (
                  <li key={`${item.date}-${change}`}>
                    <span dangerouslySetInnerHTML={{ __html: change }} />
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        {item.previewChanges &&
          item.previewChanges.map((change, index) => (
            <React.Fragment key={`${item.date}-preview-changes-${index}`}>
              <p>{change.title}</p>
              <ul>
                {change.changes.map((change) => (
                  <li key={`${item.date}-${change}`}>
                    <span dangerouslySetInnerHTML={{ __html: change }} />
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        {item.upcomingChanges &&
          item.upcomingChanges.map((change, index) => (
            <React.Fragment key={`${item.date}-upcoming-changes-${index}`}>
              <p>{change.title}</p>
              {change.changes.map((change) => (
                <li key={`${item.date}-${change}`}>
                  <span dangerouslySetInnerHTML={{ __html: change }} />
                </li>
              ))}
            </React.Fragment>
          ))}
      </div>
    )
  })

  return <div>{changes}</div>
}
