import { Link } from 'components/Link'
import type { LearningTrack } from 'components/context/ArticleContext'
import { useTranslation } from 'src/languages/components/useTranslation'

type Props = {
  track: LearningTrack
}
export function LearningTrackNav({ track }: Props) {
  const { t } = useTranslation('learning_track_nav')
  const { prevGuide, nextGuide, trackName, trackProduct } = track
  return (
    <div
      data-testid="learning-track-nav"
      className="py-3 px-4 rounded color-bg-default border d-flex flex-justify-between"
    >
      <span className="f5 d-flex flex-column">
        {prevGuide && (
          <>
            <span className="color-fg-default">{t('prev_guide')}</span>
            <Link
              href={`${prevGuide.href}?learn=${trackName}&learnProduct=${trackProduct}`}
              className="text-bold color-fg"
            >
              {prevGuide.title}
            </Link>
          </>
        )}
      </span>

      <span className="f5 d-flex flex-column flex-items-end">
        {nextGuide && (
          <>
            <span className="color-fg-default">{t('next_guide')}</span>
            <Link
              href={`${nextGuide.href}?${new URLSearchParams({
                learn: trackName,
                learnProduct: trackProduct,
              })}`}
              className="text-bold color-fg text-right"
            >
              {nextGuide.title}
            </Link>
          </>
        )}
      </span>
    </div>
  )
}
