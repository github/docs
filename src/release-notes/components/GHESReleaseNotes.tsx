import cx from 'classnames'

import { MarkdownContent } from 'components/ui/MarkdownContent'
import { GHESReleaseNotesContextT } from './types'
import { GHESReleaseNotePatch } from './GHESReleaseNotePatch'

import styles from './PatchNotes.module.scss'

type Props = {
  context: GHESReleaseNotesContextT
}

export function GHESReleaseNotes({ context }: Props) {
  const { latestPatch, latestRelease, currentVersion, releaseNotes, releases, message } = context

  const currentRelease = releases.find(
    (release) => release.version === currentVersion.currentRelease,
  )

  return (
    <>
      <h1 id="title-h1" className="f4 p-3 m-0 border-bottom">
        {currentVersion.planTitle} {currentVersion.currentRelease} release notes
      </h1>

      <div className="d-md-flex flex-md-row-reverse">
        {currentRelease && (
          <aside
            className={cx('position-sticky border-md-left no-print flex-shrink-0', styles.aside)}
          >
            <nav className="height-full overflow-auto">
              <ul className="list-style-none py-2 px-0 my-0">
                {currentRelease.patches.map((patch) => {
                  return (
                    <li key={patch.version} className="my-2 px-3 f4 d-inline-block d-md-block">
                      <a href={`#${patch.version}`} className="text-underline">
                        {patch.version}
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
                <GHESReleaseNotePatch
                  key={patch.version}
                  patch={patch}
                  currentVersion={currentVersion}
                  latestPatch={latestPatch}
                  latestRelease={latestRelease}
                  message={message}
                />
              )
            })}
          </MarkdownContent>
        </article>
      </div>
    </>
  )
}
