import { ArrowRightIcon } from '@primer/octicons-react'

import { Link } from '@/frame/components/Link'
import type { JourneyContext } from '@/journeys/lib/journey-path-resolver'
import { useTranslation } from '@/languages/components/useTranslation'
import styles from './JourneyTrackNav.module.scss'

type Props = {
  context: JourneyContext
}

export function JourneyTrackNav({ context }: Props) {
  const { t } = useTranslation('journey_track_nav')
  const { nextGuide, nextTrackFirstGuide, currentGuideIndex, numberOfGuides, trackTitle } = context

  const upNext = nextGuide ?? nextTrackFirstGuide
  if (!upNext) return null

  // In-track: show the next article's title. Crossing into a new track: show the
  // track's name so the reader knows they're moving on to a new track.
  const label = nextGuide ? nextGuide.title : nextTrackFirstGuide!.trackTitle

  const progress = t('up_next_progress')
    .replace('{i}', `${currentGuideIndex + 1}`)
    .replace('{n}', `${numberOfGuides}`)
    .replace('{track}', trackTitle)

  return (
    <nav data-testid="journey-track-nav" aria-label={t('up_next')} className={styles.upNext}>
      <div className={styles.lead}>
        <p className={styles.eyebrow}>{t('up_next')}</p>
        <Link href={upNext.href} className={styles.link} aria-label={`${t('up_next')}: ${label}`}>
          <span className={styles.title}>{label}</span>
          <ArrowRightIcon size={16} />
        </Link>
      </div>

      <p className={styles.progress}>{progress}</p>
    </nav>
  )
}
