import cx from 'classnames'
import { useTranslation } from 'components/hooks/useTranslation'
import { ArrowRightIcon } from '@primer/octicons-react'
import { ActionList } from '@primer/react'
import { useState } from 'react'
import { FeaturedTrack } from 'components/context/ProductGuidesContext'
import { TruncateLines } from 'components/ui/TruncateLines'
import slugger from 'github-slugger'
import styles from './LearningTrack.module.scss'

type Props = {
  track: FeaturedTrack
}

const DEFAULT_VISIBLE_GUIDES = 4
export const LearningTrack = ({ track }: Props) => {
  const [numVisible, setNumVisible] = useState(DEFAULT_VISIBLE_GUIDES)
  const { t } = useTranslation('product_guides')
  const slug = track?.title ? slugger.slug(track?.title) : ''
  const showAll = () => {
    setNumVisible(track?.guides?.length || 0)
  }

  return (
    <div data-testid="learning-track" className="my-3 px-4 col-12 col-md-6">
      <div className="Box d-flex flex-column">
        <div className="Box-header color-bg-subtle p-4 d-flex flex-1 flex-items-start flex-wrap">
          <div className="d-flex flex-auto flex-items-start col-7 col-md-7 col-xl-7">
            <div className="my-xl-0 mr-xl-3">
              <h3 id={slug} className={cx('mb-3 color-text f3 text-semibold', styles.hashAnchor)}>
                <a className="color-unset" href={`#${slug}`}>
                  {track?.title}
                </a>
              </h3>
              <TruncateLines as="p" maxLines={3} className="color-text">
                {track?.description}
              </TruncateLines>
            </div>
          </div>
          <a
            {...{ 'aria-label': `${track?.title} - ${t('start_path')}` }}
            className="d-inline-flex btn no-wrap mt-3 mt-md-0 flex-items-center flex-justify-center"
            href={`${track?.guides && track?.guides[0].href}?learn=${
              track?.trackName
            }&learnProduct=${track?.trackProduct}`}
          >
            <span>{t('start_path')}</span>
            <ArrowRightIcon size={20} className="ml-2" />
          </a>
        </div>

        {track && track.guides && (
          <div style={{ counterReset: 'li' }}>
            <ActionList as="ol" variant="full">
              {track?.guides?.slice(0, numVisible).map((guide) => {
                return (
                  <ActionList.Item
                    as="li"
                    key={guide.href + track?.trackName}
                    className="width-full p-0"
                    sx={{
                      position: 'relative',
                      borderRadius: 0,
                      ':hover': {
                        borderRadius: 0,
                      },
                      ':before': {
                        width: 'calc(1.5rem - 0px)',
                        height: 'calc(1.5rem - 0px)',
                        fontSize: 'calc(1rem - 1px)',
                        margin: '22px 0 0 1rem',
                        content: 'counter(li)',
                        counterIncrement: 'li',
                        position: 'absolute',
                        left: 0,
                        color: 'var(--color-canvas-default)',
                        fontWeight: 500,
                        textAlign: 'center',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-fg-default)',
                      },
                    }}
                  >
                    <a
                      className="rounded-0 pl-7 py-4 width-full d-block Box-row d-flex flex-items-center color-fg-default no-underline"
                      href={`${guide.href}?learn=${track?.trackName}&learnProduct=${track?.trackProduct}`}
                    >
                      <h4
                        className="flex-auto pr-2 f5"
                        dangerouslySetInnerHTML={{ __html: guide.title }}
                      />
                      <div className="color-fg-muted h6 text-uppercase flex-shrink-0">
                        {t('guide_types')[guide.page?.type || '']}
                      </div>
                    </a>
                  </ActionList.Item>
                )
              })}
            </ActionList>
          </div>
        )}
        {
          <button
            className={
              'Box-footer btn-link border-top-0 position-relative text-center text-bold color-fg-accent pt-1 pb-3 col-12 ' +
              ((track?.guides?.length || 0) <= numVisible && cx(styles.removeHoverEvents))
            }
            onClick={showAll}
          >
            {(track?.guides?.length || 0) > numVisible ? (
              <div>
                <div
                  className={cx('position-absolute left-0 right-0 py-5', styles.fadeBottom)}
                  style={{ bottom: '50px' }}
                />
                <span>
                  Show {(track?.guides?.length || 0) - numVisible} {t(`more_guides`)}
                </span>
              </div>
            ) : (
              <span className="color-fg-default">All guides shown</span>
            )}
          </button>
        }
      </div>
    </div>
  )
}
