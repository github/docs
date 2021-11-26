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

const LabelColorMap = {
  features: 'color-bg-success-emphasis',
  bugs: 'color-bg-attention-emphasis',
  known_issues: 'color-bg-accent-emphasis',
  security_fixes: 'color-bg-sponsors-emphasis',
  changes: 'color-bg-success-emphasis',
  deprecations: 'color-bg-done-emphasis',
  backups: 'color-bg-severe-emphasis',
}

const HeadingColorMap = {
  features: 'color-fg-success',
  bugs: 'color-fg-attention',
  known_issues: 'color-fg-accent',
  security_fixes: 'color-fg-sponsors',
  changes: 'color-fg-success',
  deprecations: 'color-fg-done',
  backups: 'color-fg-severe',
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
        const primaryLabelColor =
          LabelColorMap[key as keyof typeof LabelColorMap] || LabelColorMap.features
        const primaryHeadingColor =
          HeadingColorMap[key as keyof typeof HeadingColorMap] || HeadingColorMap.features
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
                <span
                  className={cx(
                    'px-3 py-2 color-fg-on-emphasis text-small text-bold text-uppercase',
                    primaryLabelColor
                  )}
                >
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
                      className={cx(
                        styles.sectionHeading,
                        primaryHeadingColor,
                        'text-uppercase text-bold f4'
                      )}
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
