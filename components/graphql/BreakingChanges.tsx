import React from 'react'
import GithubSlugger from 'github-slugger'
import cx from 'classnames'

import { LinkIconHeading } from 'components/article/LinkIconHeading'
import { BreakingChangesT } from 'components/graphql/types'
import styles from 'components/ui/MarkdownContent/MarkdownContent.module.scss'

type Props = {
  schema: BreakingChangesT
}
const slugger = new GithubSlugger()

export function BreakingChanges({ schema }: Props) {
  const changes = Object.keys(schema).map((date) => {
    const items = schema[date]
    const heading = `Changes scheduled for  ${date}`
    const slug = slugger.slug(heading)

    return (
      <div className={cx(styles.markdownBody, styles.automatedPages)} key={date}>
        <h2 id={slug}>
          <LinkIconHeading slug={slug} />
          {heading}
        </h2>
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
