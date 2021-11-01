import { Fragment } from 'react'
import cx from 'classnames'
import slugger from 'github-slugger'
import { ReleaseNotePatch } from './types'
import { Link } from 'components/Link'

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
        return (
          <div
            key={key}
            className={cx(
              'py-6 d-block d-xl-flex gutter-xl flex-items-baseline',
              !withReleaseNoteLabel && 'mx-6',
              !isLast && 'border-bottom'
            )}
          >
            {withReleaseNoteLabel && (
              <div className="col-12 col-xl-3 mb-5">
                <span className="px-3 py-2 text-small text-bold text-uppercase color-bg-emphasis color-fg-on-emphasis">
                  {SectionToLabelMap[key] || 'INVALID SECTION'}
                </span>
              </div>
            )}
            <ul className={cx(withReleaseNoteLabel && 'col-xl-9', 'col-12')}>
              {sectionItems.map((item) => {
                if (typeof item === 'string') {
                  return <li key={item} className="f4" dangerouslySetInnerHTML={{ __html: item }} />
                }

                const slug = item.heading ? slugger.slug(item.heading) : ''
                return (
                  <Fragment key={slug}>
                    <h4
                      id={slug}
                      className={cx(styles.sectionHeading, 'text-uppercase text-bold f4')}
                    >
                      <Link href={`#${slug}`} className="color-fg-inherit">
                        {item.heading}
                      </Link>
                    </h4>
                    {item.notes.map((note) => {
                      return (
                        <li
                          key={note}
                          className={cx(!withReleaseNoteLabel && 'list-style-none', 'f4')}
                          dangerouslySetInnerHTML={{ __html: note }}
                        />
                      )
                    })}
                  </Fragment>
                )
              })}
            </ul>
          </div>
        )
      })}
    </>
  )
}
