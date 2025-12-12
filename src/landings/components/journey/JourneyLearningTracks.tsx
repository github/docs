/* filepath: /workspaces/docs-internal/src/landings/components/journey/JourneyLearningTracks.tsx */
import { ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react'
import { Details, Timeline, Token, useDetails } from '@primer/react'
import { Link } from '@/frame/components/Link'
import { useTranslation } from '@/languages/components/useTranslation'
import { JourneyTrack } from '@/journeys/lib/journey-path-resolver'
import styles from './JourneyLearningTracks.module.scss'

type JourneyLearningTracksProps = {
  tracks: JourneyTrack[]
}

export const JourneyLearningTracks = ({ tracks }: JourneyLearningTracksProps) => {
  const { t } = useTranslation('journey_landing')

  if (!tracks || tracks.length === 0) {
    return null
  }

  const renderTrackContent = (track: JourneyTrack) => {
    const { getDetailsProps, open } = useDetails({})

    return (
      <Details
        {...getDetailsProps()}
        id={`track-${track.id}`}
        className={styles.trackCard}
        data-testid="journey-track"
      >
        <summary className={styles.trackSummary}>
          <div className={styles.trackHeader}>
            <h2 className="h4 text-bold">{track.title}</h2>
            <Token text={`${track.guides?.length || 0} articles`} />
          </div>
          <div className={styles.trackDescription}>
            <p>{track.description}</p>
          </div>
          <div className={`position-absolute ${styles.expandButton}`}>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </summary>
        <ol className={styles.trackGuides} data-testid="journey-articles">
          {(track.guides || []).map((article: { href: string; title: string }) => (
            <li key={article.title}>
              <Link href={article.href} className="text-semibold">
                {article.title}
              </Link>
            </li>
          ))}
        </ol>
      </Details>
    )
  }

  // simple single journey
  if (tracks.length === 1) {
    const track = tracks[0]

    return (
      <div data-testid="journey-single-track">
        <div className={styles.trackHeader}>
          <h2 className="h1 text-bold mb-4">{t('articles_heading')}</h2>
        </div>
        <ol className={`${styles.trackGuides} pl-0`} data-testid="journey-articles">
          {(track.guides || []).map((article: { href: string; title: string }) => (
            <li key={article.href}>
              <Link href={article.href} className="f4 text-semibold">
                {article.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    )
  }

  // more than one journey has timeline and mobile layout
  return (
    <div data-testid="journey-tracks">
      {/* Desktop: Timeline component */}
      <div className={styles.timelineContainer}>
        <Timeline clipSidebar className={styles.timelineThinLine}>
          {tracks.map((track, trackIndex) => {
            return (
              <Timeline.Item key={track.id}>
                <Timeline.Badge className={styles.timelineBadge}>{trackIndex + 1}</Timeline.Badge>
                <Timeline.Body className={styles.journeyTracks}>
                  {renderTrackContent(track)}
                </Timeline.Body>
              </Timeline.Item>
            )
          })}
        </Timeline>
      </div>

      {/* Mobile: Custom stacked layout */}
      <div className={styles.mobileLayout}>
        {tracks.map((track, trackIndex) => (
          <div key={track.id} className={styles.mobileItem}>
            <div className={styles.mobileBadge}>{trackIndex + 1}</div>
            <div className={styles.mobileTile}>{renderTrackContent(track)}</div>
            {trackIndex < tracks.length - 1 && <div className={styles.mobileConnector} />}
          </div>
        ))}
      </div>
    </div>
  )
}
