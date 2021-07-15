import { Breadcrumbs } from '../Breadcrumbs'
import { useProductSubLandingContext } from 'components/context/ProductSubLandingContext'
import { ArrowRightIcon, StarFillIcon } from '@primer/octicons-react'
import { useTranslation } from 'components/hooks/useTranslation'
import { Link } from 'components/Link'

export const SubLandingHero = () => {
  const { title, intro, featuredTrack } = useProductSubLandingContext()
  const { t } = useTranslation('product_sublanding')

  const guideItems = featuredTrack?.guides?.map((guide) => (
    <li className="px-2 d-flex flex-shrink-0" key={guide.href}>
      <Link
        href={`${guide.href}?learn=${featuredTrack.trackName}`}
        className="d-inline-block Box p-5 color-bg-primary color-border-primary no-underline"
      >
        <div className="d-flex flex-justify-between flex-items-center">
          <div className="circle color-bg-primary color-text-link border-gradient--pink-blue-dark d-inline-flex">
            {featuredTrack.guides && (
              <span
                className="m-2 f2 lh-condensed-ultra text-center text-bold step-circle-text"
                style={{ width: '24px', height: '24px' }}
              >
                {featuredTrack.guides?.indexOf(guide) + 1}
              </span>
            )}
          </div>
          <div className="color-text-tertiary h6 text-uppercase">
            {t('guide_types')[guide.page?.type || '']}
          </div>
        </div>
        <h3 className="font-mktg h3-mktg my-4 color-text-primary">{guide.title}</h3>
        <div className="lead-mktg color-text-secondary f5 my-4 truncate-overflow-8">
          {guide.intro}
        </div>
      </Link>
    </li>
  ))

  return (
    <div>
      <header className="d-flex gutter mb-6">
        <div className="col-12">
          <Breadcrumbs variant="large" />
          <h1 className="my-3 font-mktg">{title} guides</h1>
          <div
            className="lead-mktg color-text-secondary f4 description-text"
            dangerouslySetInnerHTML={{ __html: intro }}
          />
        </div>
      </header>
      {featuredTrack && (
        <div className="mb-6 position-relative overflow-hidden mr-n3 ml-n3 px-3">
          <ul className="list-style-none d-flex flex-nowrap overflow-x-scroll px-2 feature-track">
            <li className="px-2 d-flex flex-shrink-0">
              <div className="d-inline-block Box p-5 bg-gradient--blue-pink color-text-inverse">
                <div
                  className="circle color-text-inverse d-inline-flex"
                  style={{ border: '2px white solid' }}
                >
                  <StarFillIcon className="v-align-middle m-2" size={24} />
                </div>
                <h3 className="font-mktg h3-mktg my-4">{featuredTrack.title}</h3>
                <div className="lead-mktg color-text-inverse f5 my-4">
                  {featuredTrack.description}
                </div>
                {featuredTrack.guides && (
                  <Link
                    className="d-inline-block border color-border-inverse color-text-inverse px-4 py-2 f5 no-underline text-bold"
                    role="button"
                    href={`${featuredTrack.guides[0].href}?learn=${featuredTrack.trackName}`}
                  >
                    <span className="mr-2">
                      <ArrowRightIcon size={20} />
                    </span>
                    {t(`start_path`)}
                  </Link>
                )}
              </div>
            </li>
            {guideItems}
          </ul>
          <div className="position-absolute top-0 bottom-0 left-0 ml-3 pl-3 fade-background-left"></div>
          <div className="position-absolute top-0 bottom-0 right-0 mr-3 pr-3 fade-background-right"></div>
        </div>
      )}
    </div>
  )
}
