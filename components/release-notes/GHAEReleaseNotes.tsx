import { SyntheticEvent, useState } from 'react'
import cx from 'classnames'
import { ChevronDownIcon } from '@primer/octicons-react'
import { GHAEReleaseNotePatch } from './GHAEReleaseNotePatch'
import { GHAEReleaseNotesContextT } from './types'

type GitHubAEProps = {
  context: GHAEReleaseNotesContextT
}
export function GHAEReleaseNotes({ context }: GitHubAEProps) {
  const { releaseNotes, releases, currentVersion } = context
  const [focusedPatch, setFocusedPatch] = useState('')

  return (
    <div className="d-flex">
      <article className="min-width-0 flex-1">
        <div className="d-flex flex-items-center flex-justify-between color-bg-primary px-5 py-2">
          <div></div>
          <h1 className="f4 py-3 m-0">{currentVersion.planTitle} release notes</h1>
          <div></div>
        </div>

        <div className="markdown-body">
          {releaseNotes.map((patch) => {
            return (
              <GHAEReleaseNotePatch
                key={patch.version}
                patch={patch}
                didEnterView={() => setFocusedPatch(patch.version)}
              />
            )
          })}
        </div>
      </article>

      <aside
        className="markdown-body position-sticky top-0 d-none d-md-block border-left no-print color-bg-primary flex-shrink-0"
        style={{ width: 260, height: '100vh' }}
      >
        <nav className="height-full overflow-auto">
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
  const defaultIsOpen = true
  const [isOpen, setIsOpen] = useState(defaultIsOpen)

  const onToggle = (e: SyntheticEvent) => {
    const newIsOpen = (e.target as HTMLDetailsElement).open
    setIsOpen(newIsOpen)
  }

  return (
    <li key={release.version} className="border-bottom">
      <details
        className="my-0 details-reset release-notes-version-picker"
        aria-current="page"
        open={defaultIsOpen}
        onToggle={onToggle}
      >
        <summary className="px-3 py-4 my-0 d-flex flex-items-center flex-justify-between">
          {release.version}
          <div className="d-flex">
            <span className="color-text-tertiary text-mono text-small text-normal mr-1">
              {release.patches.length} releases
            </span>
            <ChevronDownIcon className={isOpen ? 'rotate-180' : ''} />
          </div>
        </summary>
        <ul className="color-bg-tertiary border-top list-style-none py-4 px-0 my-0">
          {release.patches.map((patch) => {
            const isActive = patch.version === focusedPatch
            return (
              <li key={patch.version} className={cx('px-3 my-0 py-1', isActive && 'color-bg-info')}>
                <a
                  href={`#${patch.date}`}
                  className="d-flex flex-items-center flex-justify-between"
                >
                  {patch.friendlyDate}
                </a>
              </li>
            )
          })}
        </ul>
      </details>
    </li>
  )
}
