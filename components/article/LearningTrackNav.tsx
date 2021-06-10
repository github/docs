import type { LearningTrack } from 'components/context/ArticleContext'
import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  track: LearningTrack
}
export function LearningTrackNav({ track }: Props) {
  const { t } = useTranslation('learning_track_nav')
  const { prevGuide, nextGuide, trackName } = track
  return (
    <div className="py-3 px-4 rounded color-bg-primary border-gradient--purple-pink d-flex flex-justify-between learning-track-nav">
      <span className="d-flex flex-column">
        {prevGuide && (
          <>
            <span className="f6 color-text-secondary">{t('prevGuide')}</span>
            <a
              href={`${prevGuide.href}?learn=${trackName}`}
              className="text-bold color-text-secondary"
            >
              {prevGuide.title}
            </a>
          </>
        )}
      </span>

      <span className="d-flex flex-column flex-items-end">
        {nextGuide && (
          <>
            <span className="f6 color-text-secondary">{t('nextGuide')}</span>
            <a
              href={`${nextGuide.href}?learn=${trackName}`}
              className="text-bold color-text-secondary text-right"
            >
              {nextGuide.title}
            </a>
          </>
        )}
      </span>
    </div>
  )
}
