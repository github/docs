import { useTranslation } from 'src/languages/components/useTranslation'
import { ArrowRightIcon } from '@primer/octicons-react'
import { LearningTrack as LearningTrackT } from 'src/landings/components/ProductGuidesContext'
import { Link } from 'src/frame/components/Link'

import { HeadingLink } from 'src/frame/components/article/HeadingLink'

type Props = {
  track: LearningTrackT
}

export const LearningTrack = ({ track }: Props) => {
  const { t, tObject } = useTranslation('product_guides')
  if (!track) return <div />

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
              <span className="mr-2">
                {tObject('guide_types')[guide.page?.type || ''] as string}
              </span>
              <Link
                href={`${guide.href}?learn=${track.trackName}&learnProduct=${track.trackProduct}`}
                className="text-underline"
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
