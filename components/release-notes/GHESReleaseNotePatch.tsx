import { useEffect, useRef } from 'react'
import dayjs from 'dayjs'

import { useTranslation } from 'components/hooks/useTranslation'
import { PatchNotes } from './PatchNotes'
import { Link } from 'components/Link'
import { CurrentVersion, ReleaseNotePatch, GHESMessage } from './types'
import { useOnScreen } from 'components/hooks/useOnScreen'

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
  const onScreen = useOnScreen(containerRef, '-40% 0px -50%')
  useEffect(() => {
    if (onScreen) {
      didEnterView()
    }
  }, [onScreen])

  return (
    <div
      ref={containerRef}
      className="mb-10 color-bg-secondary pb-6 border-bottom border-top"
      id={patch.version}
    >
      <header
        style={{ zIndex: 1 }}
        className="container-xl position-sticky top-0 color-bg-secondary border-bottom px-3 pt-4 pb-2"
      >
        <div className="d-flex flex-items-center">
          <h2 className="border-bottom-0 m-0 p-0">
            {currentVersion.versionTitle}.{patch.patchVersion}
          </h2>

          {patch.release_candidate && (
            <span
              className="IssueLabel color-bg-warning-inverse color-text-inverse ml-3"
              style={{ whiteSpace: 'pre' }}
            >
              Release Candidate
            </span>
          )}

          {currentVersion.plan === 'enterprise-server' && (
            <Link
              href={`https://enterprise.github.com/releases/${patch.downloadVersion}/download`}
              className="ml-3 text-small text-bold"
            >
              Download
            </Link>
          )}

          <button className="js-print btn-link ml-3 text-small text-bold">Print</button>
        </div>

        <p className="color-text-secondary mt-1">{dayjs(patch.date).format('MMMM, DD, YYYY')}</p>

        {patch.version !== latestPatch && currentVersion.currentRelease === latestRelease && (
          <p className="color-text-secondary mt-1">
            <span
              dangerouslySetInnerHTML={{ __html: message.ghes_release_notes_upgrade_patch_only }}
            />{' '}
            {t('notices.release_notes_use_latest')}
          </p>
        )}

        {patch.version === latestPatch && currentVersion.currentRelease !== latestRelease && (
          <p className="color-text-secondary mt-1">
            <span
              dangerouslySetInnerHTML={{ __html: message.ghes_release_notes_upgrade_release_only }}
            />{' '}
            {t('notices.release_notes_use_latest')}
          </p>
        )}

        {patch.version !== latestPatch && currentVersion.currentRelease !== latestRelease && (
          <p className="color-text-secondary mt-1">
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
