import { useTranslation } from 'components/hooks/useTranslation'
import { ArrowRightIcon } from '@primer/octicons-react'
import { useState } from 'react'
import { FeaturedTrack } from 'components/context/ProductSubLandingContext'
import { TruncateLines } from 'components/TruncateLines'

type Props = {
  track: FeaturedTrack
}

const DEFAULT_VISIBLE_GUIDES = 4
export const LearningTrack = ({ track }: Props) => {
  const [numVisible, setNumVisible] = useState(DEFAULT_VISIBLE_GUIDES)
  const showAll = () => {
    setNumVisible(track?.guides?.length || 0)
  }
  const { t } = useTranslation('product_sublanding')

  return (
    <div data-testid="learning-track" className="my-3 px-4 col-12 col-md-6">
      <div className="Box d-flex flex-column">
        <div className="Box-header color-bg-secondary p-4 d-flex flex-1 flex-items-start flex-wrap">
          <div className="d-flex flex-auto flex-items-start col-8 col-md-12 col-xl-8">
            <div className="my-xl-0 mr-xl-3">
              <h5 className="mb-3 color-text f3 font-weight-semibold">{track?.title}</h5>
              <TruncateLines as="p" maxLines={3} className="color-text">
                {track?.description}
              </TruncateLines>
            </div>
          </div>
          <a
            className="d-inline-flex btn no-wrap mt-3 mt-md-0 flex-items-center flex-justify-center"
            role="button"
            href={`${track?.guides && track?.guides[0].href}?learn=${track?.trackName}`}
          >
            <span>{t('start')}</span>
            <ArrowRightIcon size={20} className="ml-2" />
          </a>
        </div>

        {track?.guides?.slice(0, numVisible).map((guide) => (
          <div key={guide.href + track?.trackName}>
            <a
              className="Box-row d-flex flex-items-center color-text-primary no-underline"
              href={`${guide.href}?learn=${track?.trackName}`}
            >
              <div
                className="color-bg-tertiary d-inline-flex mr-4 circle flex-items-center flex-justify-center"
                style={{ width: 32, height: 32 }}
              >
                {track?.guides && (
                  <span className="m-2 f3 lh-condensed-ultra text-center text-bold step-circle-text">
                    {track.guides?.indexOf(guide) + 1}
                  </span>
                )}
              </div>
              <h5 className="flex-auto pr-2" dangerouslySetInnerHTML={{ __html: guide.title }} />
              <div className="color-text-tertiary h6 text-uppercase flex-shrink-0">
                {t('guide_types')[guide.page?.type || '']}
              </div>
            </a>
          </div>
        ))}

        {(track?.guides?.length || 0) > numVisible ? (
          <button
            className="Box-footer btn-link border-top-0 position-relative text-center text-bold color-text-link pt-1 pb-3 col-12"
            onClick={showAll}
          >
            <div
              className="position-absolute left-0 right-0 py-5 fade-tertiary-bottom"
              style={{ bottom: '50px' }}
            ></div>
            <span>
              Show {(track?.guides?.length || 0) - numVisible} {t(`more_guides`)}
            </span>
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
