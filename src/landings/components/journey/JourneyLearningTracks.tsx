/* filepath: /workspaces/docs-internal/src/landings/components/journey/JourneyLearningTracks.tsx */
import { ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react'
import { Button, Details, Timeline, Token, useDetails } from '@primer/react'
import { Link } from '@/frame/components/Link'
import { JourneyTrack } from '@/journeys/lib/journey-path-resolver'
import styles from './JourneyLearningTracks.module.scss'

type JourneyLearningTracksProps = {
  tracks: JourneyTrack[]
}

export const JourneyLearningTracks = ({ tracks }: JourneyLearningTracksProps) => {
  if (!tracks || tracks.length === 0) {
    return null
  }

  const renderTrackContent = (track: JourneyTrack, trackIndex: number) => {
    const { getDetailsProps, open } = useDetails({})

    return (
      <>
        <div className={styles.trackHeader}>
          <h3 className="h4 text-bold">{track.title}</h3>
          <Token text={`${track.guides?.length || 0} articles`} />
        </div>
        <p className={styles.trackDescription}>{track.description}</p>
        <Details {...getDetailsProps()}>
          <Button
            as="summary"
            variant="invisible"
            className={`position-absolute ${styles.expandButton}`}
            aria-label={
              open
                ? `Collapse article list ${trackIndex + 1}`
                : `Expand article list ${trackIndex + 1}`
            }
          >
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>
          <ol className={styles.trackGuides} data-testid="journey-articles">
            {(track.guides || []).map((article: { href: string; title: string }) => (
              <li key={article.title}>
                <Link href={article.href} className={`text-semibold ${styles.guideLink}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ol>
        </Details>
      </>
    )
  }

  return (
    <div data-testid="journey-tracks">
      {/* Desktop: Timeline component */}
      <div className={styles.timelineContainer}>
        <Timeline clipSidebar className={styles.timelineThinLine}>
          {tracks.map((track, trackIndex) => {
            return (
              <Timeline.Item key={track.id}>
                <Timeline.Badge className={styles.timelineBadge}>{trackIndex + 1}</Timeline.Badge>
                <Timeline.Body className={styles.learningTracks}>
                  <div className="position-relative" data-testid="journey-track">
                    {renderTrackContent(track, trackIndex)}
                  </div>
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
            <div className={styles.mobileTile}>
              <div className="position-relative" data-testid="journey-track">
                {renderTrackContent(track, trackIndex)}
              </div>
            </div>
            {trackIndex < tracks.length - 1 && <div className={styles.mobileConnector} />}
          </div>
        ))}
      </div>
    </div>
  )
}
