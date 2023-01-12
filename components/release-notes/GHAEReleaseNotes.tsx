import { useState } from 'react'
import cx from 'classnames'
import dayjs from 'dayjs'
import { GHAEReleaseNotePatch } from './GHAEReleaseNotePatch'
import { GHAEReleaseNotesContextT } from './types'
import { MarkdownContent } from 'components/ui/MarkdownContent'

import styles from './PatchNotes.module.scss'

type GitHubAEProps = {
  context: GHAEReleaseNotesContextT
}
export function GHAEReleaseNotes({ context }: GitHubAEProps) {
  const { releaseNotes, releases, currentVersion } = context
  const [focusedPatch, setFocusedPatch] = useState('')

  return (
    <div className="d-flex">
      <article className="min-width-0 flex-1">
        <div className="d-flex flex-items-center flex-justify-between color-bg-default px-5 py-2">
          <h1 className="f4 py-3 m-0">{currentVersion.planTitle} release notes</h1>
        </div>

        <MarkdownContent data-search="article-body">
          {releaseNotes.map((patch) => {
            return (
              <GHAEReleaseNotePatch
                key={patch.version}
                patch={patch}
                currentVersion={currentVersion}
                didEnterView={() => setFocusedPatch(patch.version)}
              />
            )
          })}
        </MarkdownContent>
      </article>

      <aside
        className={cx(
          'position-sticky d-none d-md-block border-left no-print color-bg-default flex-shrink-0',
          styles.aside
        )}
      >
        <nav className="height-full overflow-auto">
          <MarkdownContent>
            <ul className="list-style-none pl-0 text-bold">
              {releases.map((release) => {
                return (
                  <CollapsibleReleaseSection
                    key={release.version}
                    release={release}
                    focusedPatch={focusedPatch}
                  />
                )
              })}
            </ul>
          </MarkdownContent>
        </nav>
      </aside>
    </div>
  )
}

const CollapsibleReleaseSection = ({
  release,
  focusedPatch,
}: {
  release: GHAEReleaseNotesContextT['releases'][0]
  focusedPatch: string
}) => {
  return (
    <li key={release.version} className="border-bottom">
      <ul className="list-style-none py-4 px-0 my-0">
        {release.patches.map((patch) => {
          const isActive = patch.release === focusedPatch
          return (
            <li key={patch.release} className={cx('px-3 my-0', isActive && 'color-bg-accent')}>
              <a
                href={`#${patch.release}`}
                className="d-flex flex-items-center flex-justify-between"
              >
                {patch.release}
                <span className="color-fg-muted text-mono text-small text-normal">
                  {dayjs(patch.date).format('MMMM DD, YYYY')}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </li>
  )
}
