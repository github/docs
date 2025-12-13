import { useRouter } from 'next/router'

import { Link } from '@/frame/components/Link'
import type { JourneyContext } from '@/journeys/lib/journey-path-resolver'
import { useTranslation } from '@/languages/components/useTranslation'
import { useVersion } from '@/versions/components/useVersion'

type Props = {
  journey: JourneyContext
}

export function JourneyTrackCard({ journey }: Props) {
  const { locale } = useRouter()
  const { currentVersion } = useVersion()
  const { t } = useTranslation('journey_track_nav')
  const { trackTitle, journeyTitle, journeyPath, nextGuide, numberOfGuides, currentGuideIndex } =
    journey
  const fullPath = `/${locale}/${currentVersion}${journeyPath}?feature=journey-landing`

  return (
    <div
      data-testid="journey-track-card"
      className="py-3 px-4 rounded color-bg-default border d-flex flex-justify-between mb-4 mx-2"
    >
      <div className="d-flex flex-column width-full">
        <h2 className="h4">
          <Link href={fullPath} className="mb-1 text-underline">
            {journeyTitle}
          </Link>
        </h2>
        <span className="f6 color-fg-muted mb-2">{trackTitle}</span>
        <span className="f5 color-fg-muted">
          {t('current_progress')
            .replace('{n}', `${numberOfGuides}`)
            .replace('{i}', `${currentGuideIndex + 1}`)}
        </span>
        <hr />
        <span className="h5 color-fg-default">
          {nextGuide ? (
            <>
              {t('next_article')}:
              <Link href={nextGuide.href} className="text-bold color-fg f5 ml-1">
                {nextGuide.title}
              </Link>
            </>
          ) : (
            <Link href={fullPath} className="h5 text-bold color-fg f5 ml-1">
              {t('more_articles')}
            </Link>
          )}
        </span>
      </div>
    </div>
  )
}
