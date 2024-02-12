import { useTranslation } from 'src/languages/components/useTranslation'
import { ArrowRightIcon } from '@primer/octicons-react'
import { LearningTrack as LearningTrackT } from 'src/landings/components/ProductGuidesContext'
import { Link } from 'components/Link'

import { HeadingLink } from 'components/article/HeadingLink'

type Props = {
  track: LearningTrackT
}

export const LearningTrack = ({ track }: Props) => {
  if (!track) return <div />
  const { t } = useTranslation('product_guides')

  return (
    <div data-testid="learning-track" className="col-12 col-md-6 my-3 px-4">
      <HeadingLink as="h3">{track.title}</HeadingLink>
      <p className="color-text f4 color-fg-muted">{track.description}</p>

      <Link
        {...{ 'aria-label': `${track?.title} - ${t('start_path')}` }}
        className="d-inline-flex btn"
        href={`${track.guides?.[0].href}?learn=${track.trackName}&learnProduct=${track.trackProduct}`}
      >
        <span>{t('start_path')}</span>
        <ArrowRightIcon size={20} className="ml-2" />
      </Link>

      {track.guides && (
        <ol className="pl-4 my-3 f4">
          {track.guides.map((guide) => (
            <li key={guide.href + track.trackName}>
              <span className="color-fg-muted mr-2">
                {t('guide_types')[guide.page?.type || '']}
              </span>
              <Link
                href={`${guide.href}?learn=${track.trackName}&learnProduct=${track.trackProduct}`}
              >
                {guide.title}
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
