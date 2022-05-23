import cx from 'classnames'
import { useProductGuidesContext } from 'components/context/ProductGuidesContext'
import { ArrowRightIcon, StarFillIcon } from '@primer/octicons-react'
import { useTranslation } from 'components/hooks/useTranslation'
import { Link } from 'components/Link'
import { TruncateLines } from 'components/ui/TruncateLines'
import { Lead } from 'components/ui/Lead'
import styles from './GuidesHero.module.scss'

export const GuidesHero = () => {
  const { title, intro, featuredTrack } = useProductGuidesContext()
  const { t } = useTranslation('product_guides')
  const cardWidth = 280

  const guideItems = featuredTrack?.guides?.map((guide) => (
    <li className="px-2 d-flex flex-shrink-0" key={guide.href} style={{ width: cardWidth }}>
      <Link
        href={`${guide.href}?learn=${featuredTrack.trackName}&learnProduct=${featuredTrack.trackProduct}`}
        className="d-inline-block Box p-5 color-bg-default color-border-default no-underline"
      >
        <div className="d-flex flex-justify-between flex-items-center">
          <div
            className="color-bg-default color-fg-accent border d-inline-flex flex-items-center flex-justify-center circle"
            style={{ width: 40, height: 40 }}
          >
            {featuredTrack.guides && (
              <span className="f2 lh-condensed-ultra text-center text-bold">
                {featuredTrack.guides?.indexOf(guide) + 1}
              </span>
            )}
          </div>
          <div className="color-fg-muted h6 text-uppercase">
            {t('guide_types')[guide.page?.type || '']}
          </div>
        </div>
        <h3 className="text-semibold my-4 color-fg-default">{guide.title}</h3>
        <TruncateLines maxLines={8} className="color-fg-muted f5 my-4">
          <span dangerouslySetInnerHTML={{ __html: guide.intro }} />
        </TruncateLines>
      </Link>
    </li>
  ))

  return (
    <div>
      <header className="d-flex gutter mb-6 my-4">
        <div className="col-12">
          <h1>{title} guides</h1>
          {intro && <Lead data-search="lead">{intro}</Lead>}
        </div>
      </header>
      {featuredTrack && (
        <div className="mb-6 position-relative overflow-hidden mr-n3 ml-n3 px-3">
          <ul
            data-testid="feature-track"
            className="list-style-none d-flex flex-nowrap overflow-x-scroll px-2"
          >
            <li className="px-2 d-flex flex-shrink-0" style={{ width: cardWidth }}>
              <div className="d-inline-block Box p-5 color-bg-subtle">
                <div
                  className="d-inline-flex flex-items-center flex-justify-center circle border"
                  style={{ width: 40, height: 40, border: '2px white solid' }}
                >
                  <StarFillIcon size={24} />
                </div>
                <h2 className="text-semibold my-4 f3">{featuredTrack.title}</h2>
                <div className="f5 my-4">{featuredTrack.description}</div>
                {featuredTrack.guides && (
                  <Link
                    {...{ 'aria-label': `${featuredTrack.title} - ${t('start_path')}` }}
                    className="d-inline-flex flex-items-center flex-justify-center btn px-4 py-2 f5 no-underline text-bold"
                    role="button"
                    href={`${featuredTrack.guides[0].href}?learn=${featuredTrack.trackName}&learnProduct=${featuredTrack.trackProduct}`}
                  >
                    {t(`start_path`)}
                    <ArrowRightIcon size={20} className="ml-2" />
                  </Link>
                )}
              </div>
            </li>
            {guideItems}
          </ul>
          <div
            className={cx('position-absolute top-0 bottom-0 left-0 ml-3 pl-3', styles.fadeLeft)}
          ></div>
          <div
            className={cx('position-absolute top-0 bottom-0 right-0 mr-3 pr-3', styles.fadeRight)}
          ></div>
        </div>
      )}
    </div>
  )
}
