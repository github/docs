import { Link } from '@/frame/components/Link'
import type { JourneyContext } from '@/journeys/lib/journey-path-resolver'
import { useTranslation } from '@/languages/components/useTranslation'

type Props = {
  context: JourneyContext
}

export function JourneyTrackNav({ context }: Props) {
  const { t } = useTranslation('journey_track_nav')
  const { prevGuide, nextGuide, nextTrackFirstGuide } = context

  return (
    <div
      data-testid="journey-track-nav"
      className="py-3 px-4 rounded color-bg-default border d-flex flex-justify-between"
    >
      <span className="f5 d-flex flex-column">
        {prevGuide && (
          <>
            <span className="color-fg-default">{t('prev_article')}</span>
            <Link href={prevGuide.href} className="text-bold color-fg">
              {prevGuide.title}
            </Link>
          </>
        )}
      </span>

      <span className="f5 d-flex flex-column flex-items-end">
        {nextGuide ? (
          <>
            <span className="color-fg-default">{t('next_article')}</span>
            <Link href={nextGuide.href} className="text-bold color-fg text-right">
              {nextGuide.title}
            </Link>
          </>
        ) : nextTrackFirstGuide ? (
          <>
            <span className="color-fg-default">{t('next_article')}</span>
            <Link href={nextTrackFirstGuide.href} className="text-bold color-fg text-right">
              {nextTrackFirstGuide.trackTitle}
            </Link>
          </>
        ) : null}
      </span>
    </div>
  )
}
