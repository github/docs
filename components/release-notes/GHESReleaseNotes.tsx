import { SyntheticEvent, useState } from 'react'
import cx from 'classnames'
import { ChevronDownIcon, LinkExternalIcon } from '@primer/octicons-react'
import { useMainContext } from 'components/context/MainContext'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { GHESReleaseNotesContextT } from './types'
import { GHESReleaseNotePatch } from './GHESReleaseNotePatch'

import styles from './PatchNotes.module.scss'

type Props = {
  context: GHESReleaseNotesContextT
}
export function GHESReleaseNotes({ context }: Props) {
  const router = useRouter()
  const { currentProduct } = useMainContext()
  const [focusedPatch, setFocusedPatch] = useState('')
  const { latestPatch, latestRelease, currentVersion, releaseNotes, releases, message } = context
  return (
    <div className="d-flex">
      <article className="min-width-0 flex-1">
        <div className="d-flex flex-items-center flex-justify-center color-bg-default text-bold px-5 py-2">
          <h1 className="f4 py-3 m-0">
            {currentVersion.planTitle} {currentVersion.currentRelease} release notes
          </h1>
        </div>
        <MarkdownContent data-search="article-content">
          {releaseNotes.map((patch) => {
            return (
              <GHESReleaseNotePatch
                key={patch.version}
                patch={patch}
                currentVersion={currentVersion}
                latestPatch={latestPatch}
                latestRelease={latestRelease}
                message={message}
                didEnterView={() => {
                  setFocusedPatch(patch.version)
                }}
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
          <MarkdownContent data-search="article-content">
            <ul className="list-style-none pl-0 text-bold">
              {releases.map((release) => {
                const releaseLink = `/${router.locale}/${currentVersion.plan}@${release.version}/${currentProduct?.id}/release-notes`

                if (!release.patches || release.patches.length === 0) {
                  return (
                    <li key={release.version} className="border-bottom">
                      <Link
                        href={releaseLink}
                        className="Link--primary no-underline px-3 py-4 my-0 d-flex flex-items-center flex-justify-between"
                      >
                        {release.version}
                        <LinkExternalIcon />
                      </Link>
                    </li>
                  )
                }

                if (release.version === currentVersion.currentRelease) {
                  return (
                    <CollapsibleReleaseSection
                      key={release.version}
                      release={release}
                      focusedPatch={focusedPatch}
                      releaseLink={releaseLink}
                    />
                  )
                }

                return (
                  <li key={release.version} className="border-bottom">
                    <Link
                      className="px-3 py-4 my-0 d-flex flex-items-center flex-justify-between"
                      href={releaseLink}
                    >
                      {release.version}
                      <span className="color-fg-muted text-small text-normal mr-1">
                        {release.patches.length} releases
                      </span>
                    </Link>
                  </li>
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
  releaseLink,
  focusedPatch,
}: {
  release: GHESReleaseNotesContextT['releases'][0]
  releaseLink: string
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
        <summary className="px-3 py-4 my-0 d-flex flex-items-center flex-justify-between outline-none">
          {release.version}
          <div className="d-flex">
            <span className="color-fg-muted text-small text-normal mr-1">
              {release.patches.length} {release.patches.length === 1 ? 'release' : 'releases'}
            </span>
            <ChevronDownIcon className={isOpen ? 'rotate-180' : ''} />
          </div>
        </summary>
        <ul className="color-bg-subtle border-top list-style-none py-4 px-0 my-0">
          {release.patches.map((patch) => {
            const isActive = patch.version === focusedPatch
            return (
              <li
                key={patch.version}
                className={cx('px-3 my-0 py-1', isActive && 'color-bg-accent')}
              >
                <Link
                  href={`${releaseLink}#${patch.version}`}
                  className="d-flex flex-items-center flex-justify-between"
                >
                  {patch.version}
                  <span className="color-fg-muted text-mono text-small text-normal">
                    {dayjs(patch.date).format('MMMM DD, YYYY')}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </details>
    </li>
  )
}
