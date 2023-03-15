import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import type { LearningTrack } from 'components/context/ArticleContext'
import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  track: LearningTrack
}
export function LearningTrackCard({ track }: Props) {
  const { locale } = useRouter()
  const { t } = useTranslation('learning_track_nav')
  const { trackTitle, trackName, nextGuide, trackProduct, numberOfGuides, currentGuideIndex } =
    track
  return (
    <div
      data-testid="learning-track-card"
      className="py-3 px-4 rounded color-bg-default border d-flex flex-justify-between mb-4 mx-2"
    >
      <div className="d-flex flex-column width-full">
        <Link href={`/${locale}/${trackProduct}/guides`} className="h4 color-fg-default mb-1">
          {trackTitle}
        </Link>
        <span className="f5 color-fg-muted">
          {t('current_progress')
            .replace('{n}', numberOfGuides)
            .replace('{i}', currentGuideIndex + 1)}
        </span>
        <hr />
        <span className="h5 color-fg-default">
          {nextGuide ? (
            <>
              {t('next_guide')}:
              <Link
                href={`${nextGuide.href}?${new URLSearchParams({
                  learn: trackName,
                  learnProduct: trackProduct,
                })}`}
                className="text-bold color-fg f5 ml-1"
              >
                {nextGuide.title}
              </Link>
            </>
          ) : (
            <Link
              href={`/${locale}/${trackProduct}/guides`}
              className="h5 text-bold color-fg f5 ml-1"
            >
              {t('more_guides')}
            </Link>
          )}
        </span>
      </div>
    </div>
  )
}
