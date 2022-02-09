import type { LearningTrack } from 'components/context/ArticleContext'
import { useTranslation } from 'components/hooks/useTranslation'

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
      <span className="d-flex flex-column">
        {prevGuide && (
          <>
            <span className="f6 color-fg-muted">{t('prevGuide')}</span>
            <a
              href={`${prevGuide.href}?learn=${trackName}&learnProduct=${trackProduct}`}
              className="text-bold color-fg-muted"
            >
              {prevGuide.title}
            </a>
          </>
        )}
      </span>

      <span className="d-flex flex-column flex-items-end">
        {nextGuide && (
          <>
            <span className="f6 color-fg-muted">{t('nextGuide')}</span>
            <a
              href={`${nextGuide.href}?learn=${trackName}&learnProduct=${trackProduct}`}
              className="text-bold color-fg-muted text-right f4"
            >
              {nextGuide.title}
            </a>
          </>
        )}
      </span>
    </div>
  )
}
