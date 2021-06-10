import { useTranslation } from "components/hooks/useTranslation";
import { ArrowRightIcon } from '@primer/octicons-react'
import { useState } from "react";
import { FeaturedTrack } from "components/context/ProductSubLandingContext";

type Props = {
  track: FeaturedTrack
}

export const LearningTrack = ({ track }: Props) => {
  const guides = track.guides
  const [ visibleGuides, setVisibleGuides ] = useState(guides?.slice(0, 4))
  const showAll = () => {
    setVisibleGuides(guides)
  }
  const { t } = useTranslation('product_sublanding')

 return (
  <div className="my-3 px-4 col-12 col-md-6 learning-track">
    <div className="Box js-show-more-container d-flex flex-column">
      <div className="Box-header bg-gradient--blue-pink p-4 d-flex flex-1 flex-items-start flex-wrap">
        <div className="d-flex flex-auto flex-items-start col-8 col-md-12 col-xl-8">
          <div className="my-xl-0 mr-xl-3">
            <h5 className="mb-3 color-text-inverse font-mktg h3-mktg ">
              {track.title}
            </h5>
            <p className="color-text-inverse truncate-overflow-3 learning-track--description">{track.description}</p>
          </div>
        </div>
      <a 
        className="d-inline-block border color-border-inverse color-text-inverse px-3 py-2 f5 no-underline text-bold no-wrap mt-3 mt-md-0" 
        role="button" 
        href="{{ track.guides[0].href }}?learn={{ track.trackName }}"
      >
        {t('start')}
        <span className="mr-2">
          <ArrowRightIcon size={20} />
        </span>
      </a>
    </div>
    {visibleGuides?.map((guide) => 
      <div>
        <a className="Box-row d-flex flex-items-center color-text-primary no-underline js-show-more-item" href={`${guide.href}?learn=${track.trackName}`}>
          <div className="circle color-bg-tertiary d-inline-flex mr-4">
            {guides && <span className="m-2 f3 lh-condensed-ultra text-center text-bold step-circle-text">{guides?.indexOf(guide)+1}</span>}
          </div>
          <h5 className="flex-auto pr-2">{guide.title}</h5>
          <div className="color-text-tertiary h6 text-uppercase">{t('guide_types')[guide.page.type]}</div>
        </a>
        {guides && guides?.indexOf(guide) == 3 ? (
          <a 
            className="Box-footer btn-link border-top-0 position-relative text-center text-bold color-text-link pt-1 pb-3 col-12 js-show-more-button"
            onClick={showAll}
          >
            <div className="position-absolute left-0 right-0 py-5 fade-background-bottom" style={{ bottom: '50px' }}></div>
            <span>Show more guides</span>
          </a>
        ) : <div />}
      </div>
    )}
    </div>
  </div>
 )
}