import cx from 'classnames'
import slugger from 'github-slugger'
import { ReleaseNotePatch } from './types'
import { Link } from 'components/Link'

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
              `release-notes-section-${key}`,
              'py-6 d-block d-xl-flex gutter-xl flex-items-baseline',
              !withReleaseNoteLabel && 'mx-6',
              !isLast && 'border-bottom'
            )}
          >
            {withReleaseNoteLabel && (
              <div className="col-12 col-xl-3 mb-5">
                <span className="px-3 py-2 text-small text-bold text-uppercase text-mono color-text-inverse release-notes-section-label">
                  {SectionToLabelMap[key] || 'INVALID SECTION'}
                </span>
              </div>
            )}
            <ul className={cx(withReleaseNoteLabel && 'col-xl-9', 'col-12 release-notes-list')}>
              {sectionItems.map((item) => {
                if (typeof item === 'string') {
                  return (
                    <li key={item} className="release-notes-list-item">
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  )
                }

                const slug = item.heading ? slugger.slug(item.heading) : ''
                return (
                  <li key={slug} className="release-notes-list-item list-style-none">
                    <h4
                      id={slug}
                      className="release-notes-section-heading text-uppercase text-bold"
                    >
                      <Link href={`#${slug}`} className="text-inherit">
                        {item.heading}
                      </Link>
                    </h4>

                    <ul className="pl-0 pb-4 mt-2 release-notes-list">
                      {item.notes.map((note) => {
                        return (
                          <li
                            key={note}
                            className="release-notes-list-item"
                            dangerouslySetInnerHTML={{ __html: note }}
                          />
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </>
  )
}
