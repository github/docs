import { useRef, useEffect } from 'react'

import { useTranslation } from 'components/hooks/useTranslation'
import { useOnScreen } from 'components/hooks/useOnScreen'
import { PatchNotes } from './PatchNotes'
import { ReleaseNotePatch } from './types'

type Props = { patch: ReleaseNotePatch; didEnterView: () => void }
export function GHAEReleaseNotePatch({ patch, didEnterView }: Props) {
  const { t } = useTranslation('release_notes')
  const containerRef = useRef<HTMLDivElement>(null)
  const onScreen = useOnScreen(containerRef, '-40% 0px -50%')
  useEffect(() => {
    if (onScreen) {
      didEnterView()
    }
  }, [onScreen])

  const bannerText = patch.currentWeek
    ? t('banner_text_current')
    : `${t('banner_text_past')} ${patch.friendlyDate}.`

  return (
    <div
      ref={containerRef}
      className="mb-10 color-bg-secondary pb-6 border-bottom border-top"
      id={patch.date}
    >
      <header
        style={{ zIndex: 1 }}
        className="container-xl position-sticky top-0 color-bg-secondary border-bottom px-3 pt-4 pb-2"
      >
        <div className="d-flex flex-items-center">
          <h2 className="border-bottom-0 m-0 p-0">{patch.title}</h2>

          {patch.release_candidate && (
            <span
              className="IssueLabel color-bg-warning-inverse color-text-inverse ml-3"
              style={{ whiteSpace: 'pre' }}
            >
              Release Candidate
            </span>
          )}

          <button className="js-print btn-link ml-3 text-small text-bold">Print</button>
        </div>
        <p className="color-text-secondary mt-1">
          {patch.friendlyDate} - {bannerText}
        </p>
      </header>

      <div className="container-xl px-3">
        <div className="mt-3" dangerouslySetInnerHTML={{ __html: patch.intro }} />

        <PatchNotes patch={patch} />
      </div>
    </div>
  )
}
