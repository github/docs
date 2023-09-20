import { useRef } from 'react'
import dayjs from 'dayjs'

import { useTranslation } from 'src/languages/components/useTranslation'
import { PatchNotes } from './PatchNotes'
import { CurrentVersion, ReleaseNotePatch } from './types'

type Props = { patch: ReleaseNotePatch; currentVersion: CurrentVersion }
export function GHAEReleaseNotePatch({ patch, currentVersion }: Props) {
  const { t } = useTranslation('release_notes')
  const containerRef = useRef<HTMLDivElement>(null)
  const bannerText = t('banner_text')

  return (
    <div ref={containerRef} className="mb-10 pb-6" id={patch.release}>
      <header
        style={{ zIndex: 1, marginTop: -1 }}
        className="container-md border-top border-bottom px-3 pt-4 pb-2"
      >
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

      <div className="container-md px-3">
        <div className="mt-3" dangerouslySetInnerHTML={{ __html: patch.intro }} />

        <PatchNotes patch={patch} />
      </div>
    </div>
  )
}
