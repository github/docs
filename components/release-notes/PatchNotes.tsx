import { Fragment } from 'react'
import cx from 'classnames'
import { slug } from 'github-slugger'
import { ReleaseNotePatch } from './types'
import { Link } from 'components/Link'
import { LinkIconHeading } from 'components/article/LinkIconHeading'

import styles from './PatchNotes.module.scss'

const SectionToLabelMap: Record<string, string> = {
  features: 'Features',
  bugs: 'Bug fixes',
  known_issues: 'Known issues',
  security_fixes: 'Security fixes',
  changes: 'Changes',
  deprecations: 'Deprecations',
  backups: 'Backups',
}

type Props = {
  patch: ReleaseNotePatch
  withReleaseNoteLabel?: boolean
}
export function PatchNotes({ patch, withReleaseNoteLabel }: Props) {
  return (
    <>
      {Object.entries(patch.sections).map(([key, sectionItems], i, arr) => {
        const isLast = i === arr.length - 1
        const sectionSlug = `${patch.version}-${key.replaceAll('_', '-')}`
        return (
          <div
            key={key}
            className={cx(
              'py-6 d-block d-xl-flex',
              !withReleaseNoteLabel && 'mx-6',
              !isLast && 'border-bottom'
            )}
          >
            <div>
              <h3 className="pl-4" id={sectionSlug}>
                <LinkIconHeading slug={sectionSlug} />
                {`${patch.version}: ${SectionToLabelMap[key]}` || 'INVALID SECTION'}
              </h3>
              <ul>
                {sectionItems.map((item, i) => {
                  if (typeof item === 'string') {
                    return (
                      <li key={item} className="f4" dangerouslySetInnerHTML={{ __html: item }} />
                    )
                  }

                  const headingSlug = item.heading ? slug(item.heading) : `heading${i}`
                  return (
                    <Fragment key={headingSlug}>
                      <li className="list-style-none">
                        <h4 id={headingSlug} className={cx(styles.sectionHeading, 'text-bold f4')}>
                          <Link href={`#${headingSlug}`}>{item.heading}</Link>
                        </h4>
                      </li>
                      {item.notes.map((note) => {
                        return (
                          <li
                            key={note}
                            className="f4"
                            dangerouslySetInnerHTML={{ __html: note }}
                          />
                        )
                      })}
                    </Fragment>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </>
  )
}
