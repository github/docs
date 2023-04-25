import { useEffect, useRef } from 'react'
import dayjs from 'dayjs'
import cx from 'classnames'

import { useTranslation } from 'components/hooks/useTranslation'
import { PatchNotes } from './PatchNotes'
import { Link } from 'components/Link'
import { CurrentVersion, ReleaseNotePatch, GHESMessage } from './types'
import { useOnScreen } from 'components/hooks/useOnScreen'

import styles from './PatchNotes.module.scss'

type Props = {
  patch: ReleaseNotePatch
  currentVersion: CurrentVersion
  latestPatch: string
  latestRelease: string
  message: GHESMessage
  didEnterView: () => void
}
export function GHESReleaseNotePatch({
  patch,
  currentVersion,
  latestPatch,
  latestRelease,
  message,
  didEnterView,
}: Props) {
  const { t } = useTranslation('header')
  const containerRef = useRef<HTMLDivElement>(null)
  const onScreen = useOnScreen(containerRef, { rootMargin: '-40% 0px -50%' })
  useEffect(() => {
    if (onScreen) {
      didEnterView()
    }
  }, [onScreen])

  return (
    <div
      ref={containerRef}
      className={cx(styles.sectionHeading, 'mb-10 pb-6 border-bottom border-top')}
      id={patch.version}
    >
      <header style={{ zIndex: 1 }} className="container-xl border-bottom px-3 pt-4 pb-2">
        <div className="d-flex flex-justify-between flex-wrap">
          <h2 className="border-bottom-0 m-0 p-0 mt-2">
            {currentVersion.versionTitle}.{patch.patchVersion}
          </h2>

          {patch.release_candidate && (
            <span
              className="IssueLabel color-bg-attention-emphasis color-fg-on-emphasis ml-3 flex-items-center d-inline-flex"
              style={{ whiteSpace: 'pre' }}
            >
              Release Candidate
            </span>
          )}

          {currentVersion.plan === 'enterprise-server' && (
            <Link
              href={`https://enterprise.github.com/releases/${patch.downloadVersion}/download`}
              className="btn btn-outline mt-2 text-small text-bold no-underline"
            >
              Download GitHub Enterprise Server {patch.downloadVersion}
            </Link>
          )}
        </div>

        <p className="color-fg-muted mt-1">{dayjs(patch.date).format('MMMM DD, YYYY')}</p>

        {patch.version !== latestPatch && currentVersion.currentRelease === latestRelease && (
          <p className="color-fg-muted mt-1">
            <span
              dangerouslySetInnerHTML={{ __html: message.ghes_release_notes_upgrade_patch_only }}
            />{' '}
            {t('notices.release_notes_use_latest')}
          </p>
        )}

        {patch.version === latestPatch && currentVersion.currentRelease !== latestRelease && (
          <p className="color-fg-muted mt-1">
            <span
              dangerouslySetInnerHTML={{ __html: message.ghes_release_notes_upgrade_release_only }}
            />{' '}
            {t('notices.release_notes_use_latest')}
          </p>
        )}

        {patch.version !== latestPatch && currentVersion.currentRelease !== latestRelease && (
          <p className="color-fg-muted mt-1">
            <span
              dangerouslySetInnerHTML={{
                __html: message.ghes_release_notes_upgrade_patch_and_release,
              }}
            />{' '}
            {t('notices.release_notes_use_latest')}
          </p>
        )}
      </header>

      <div className="container-xl px-3">
        <div className="mt-3" dangerouslySetInnerHTML={{ __html: patch.intro }} />

        <PatchNotes patch={patch} withReleaseNoteLabel />
      </div>
    </div>
  )
}
