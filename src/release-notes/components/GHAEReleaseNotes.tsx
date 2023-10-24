import cx from 'classnames'

import { MarkdownContent } from 'components/ui/MarkdownContent'
import { GHAEReleaseNotesContextT } from './types'
import { GHAEReleaseNotePatch } from './GHAEReleaseNotePatch'

import styles from './PatchNotes.module.scss'

type Props = {
  context: GHAEReleaseNotesContextT
}

export function GHAEReleaseNotes({ context }: Props) {
  const { currentVersion, releaseNotes, releases } = context

  return (
    <>
      <h1 id="title-h1" className="f4 p-3 m-0 border-bottom">
        {currentVersion.planTitle} release notes
      </h1>

      <div className="d-md-flex flex-md-row-reverse">
        {releases && (
          <aside
            className={cx('position-sticky border-md-left no-print flex-shrink-0', styles.aside)}
          >
            <nav className="height-full overflow-auto">
              <ul className="list-style-none py-2 px-0 my-0">
                {releases.map((release) => {
                  return (
                    <li key={release.version} className="my-2 px-3 f4 d-inline-block d-md-block">
                      <a href={`#${release.version}`} className="text-underline">
                        {release.version}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </aside>
        )}

        <article className="flex-1 flex-shrink-0">
          <MarkdownContent data-search="article-body">
            {releaseNotes.map((patch) => {
              return (
                <GHAEReleaseNotePatch
                  key={patch.version}
                  patch={patch}
                  currentVersion={currentVersion}
                />
              )
            })}
          </MarkdownContent>
        </article>
      </div>
    </>
  )
}
