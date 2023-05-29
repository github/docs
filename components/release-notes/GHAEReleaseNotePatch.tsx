import { useRef, useEffect } from 'react'
import dayjs from 'dayjs'
import cx from 'classnames'

import { useTranslation } from 'components/hooks/useTranslation'
import { useOnScreen } from 'components/hooks/useOnScreen'
import { PatchNotes } from './PatchNotes'
import { CurrentVersion, ReleaseNotePatch } from './types'

import styles from './PatchNotes.module.scss'

type Props = { patch: ReleaseNotePatch; currentVersion: CurrentVersion; didEnterView: () => void }
export function GHAEReleaseNotePatch({ patch, currentVersion, didEnterView }: Props) {
  const { t } = useTranslation('release_notes')
  const containerRef = useRef<HTMLDivElement>(null)
  const onScreen = useOnScreen(containerRef, { rootMargin: '-40% 0px -50%' })
  useEffect(() => {
    if (onScreen) {
      didEnterView()
    }
  }, [onScreen])

  const bannerText = t('banner_text')

  return (
    <div
      ref={containerRef}
      className={cx(styles.sectionHeading, 'mb-10 pb-6 border-bottom border-top')}
      id={patch.release}
    >
      <header style={{ zIndex: 1 }} className="container-xl border-bottom px-3 pt-4 pb-2">
        <div className="d-flex flex-items-center">
          <h2 className="border-bottom-0 m-0 p-0">
            {currentVersion.versionTitle} {patch.release}
          </h2>

          {patch.release_candidate && (
            <span
              className="IssueLabel color-bg-attention-emphasis color-fg-on-emphasis ml-3"
              style={{ whiteSpace: 'pre' }}
            >
              Release Candidate
            </span>
          )}
        </div>
        <p className="color-fg-muted mt-1">
          {bannerText} {dayjs(patch.date).format('MMMM DD, YYYY')}.
        </p>
      </header>

      <div className="container-xl px-3">
        <div className="mt-3" dangerouslySetInnerHTML={{ __html: patch.intro }} />

        <PatchNotes patch={patch} />
      </div>
    </div>
  )
}
