import React from 'react'
import cx from 'classnames'
import GithubSlugger from 'github-slugger'

import { HeadingLink } from '@/frame/components/article/HeadingLink'
import { ChangelogItemT } from './types'
import styles from '@/frame/components/ui/MarkdownContent/MarkdownContent.module.scss'

type Props = {
  changelogItems: ChangelogItemT[]
  years?: number[]
  currentYear?: number
}

function YearNav({ years, currentYear }: { years: number[]; currentYear: number }) {
  return (
    <nav aria-label="Changelog years" className="d-flex flex-wrap mb-4">
      {years.map((year) =>
        year === currentYear ? (
          <span key={year} className="text-bold mr-3">
            {year}
          </span>
        ) : (
          <a key={year} className="mr-3" href={String(year)}>
            {year}
          </a>
        ),
      )}
    </nav>
  )
}

export function Changelog({ changelogItems, years, currentYear }: Props) {
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
            <ul>
              {change.changes.map((changeItem) => (
                <li key={changeItem} dangerouslySetInnerHTML={{ __html: changeItem }} />
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    )
  })

  return (
    <div className={cx(styles.markdownBody)}>
      {years && currentYear && <YearNav years={years} currentYear={currentYear} />}
      {changes}
    </div>
  )
}
