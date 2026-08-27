import { TriangleDownIcon } from '@primer/octicons-react'
import { Heading } from '@primer/react-brand'
import { Link } from '@/frame/components/Link'
import { useTranslation } from '@/languages/components/useTranslation'
import { JourneyTrack } from '@/journeys/lib/journey-path-resolver'
import styles from './JourneyLearningTracks.module.scss'

type JourneyLearningTracksProps = {
  tracks: JourneyTrack[]
  articlesHeading?: string | null
}

// `flush` drops the card inset for the single-track path, which has no card.
const renderGuides = (track: JourneyTrack, flush = false) => (
  <ol
    // `list-style: none` strips list semantics in Safari/VoiceOver; the ordinals
    // are decorative badges, so restore them explicitly.
    role="list"
    className={flush ? `${styles.trackGuides} ${styles.trackGuidesFlush}` : styles.trackGuides}
    data-testid="journey-articles"
  >
    {(track.guides || []).map((article: { href: string; title: string }, guideIndex: number) => (
      <li key={article.href} role="listitem">
        <span className={styles.guideBadge} aria-hidden="true">
          {guideIndex + 1}
        </span>
        <Link href={article.href} className={styles.guideLink}>
          {article.title}
        </Link>
      </li>
    ))}
  </ol>
)

export const JourneyLearningTracks = ({ tracks, articlesHeading }: JourneyLearningTracksProps) => {
  const { t } = useTranslation('journey_landing')

  if (!tracks || tracks.length === 0) {
    return null
  }

  // Single journey: a plain heading + article list, no numbered cards.
  if (tracks.length === 1) {
    const track = tracks[0]
    const headingText = articlesHeading || t('articles_heading')

    return (
      <div data-testid="journey-single-track">
        <Heading as="h2" size="4" weight="semibold" className={styles.singleTrackHeading}>
          {headingText}
        </Heading>
        {renderGuides(track, true)}
      </div>
    )
  }

  return (
    <ol
      // `list-style: none` strips list semantics in Safari/VoiceOver; the rail
      // numbers are decorative, so the ordering must survive here.
      role="list"
      data-testid="journey-tracks"
      className={styles.tracks}
    >
      {tracks.map((track, trackIndex) => {
        const articlesLabel = t('articles').replace('{{ number }}', `${track.guides?.length || 0}`)

        return (
          <li key={track.id} role="listitem" className={styles.trackItem}>
            {trackIndex > 0 && <span className={styles.connectorAbove} aria-hidden="true" />}
            <span className={styles.railBadge} aria-hidden="true">
              {trackIndex + 1}
            </span>
            <span className={styles.connectorBelow} aria-hidden="true" />
            <details
              id={`track-${track.id}`}
              className={styles.trackCard}
              data-testid="journey-track"
            >
              <summary className={styles.trackSummary}>
                <div className={styles.trackHeaderRow}>
                  <div className={styles.trackTitleGroup}>
                    <Heading
                      as="h2"
                      size="subhead-medium"
                      weight="semibold"
                      className={styles.trackTitle}
                    >
                      {track.title}
                    </Heading>
                    <span className={styles.articlesPill}>{articlesLabel}</span>
                    {track.timeCommitment && (
                      <span className={styles.articlesPill}>{track.timeCommitment}</span>
                    )}
                  </div>
                  <TriangleDownIcon className={styles.chevron} size={16} />
                </div>
                <p className={styles.trackDescription}>{track.description}</p>
              </summary>
              {renderGuides(track)}
            </details>
          </li>
        )
      })}
    </ol>
  )
}
