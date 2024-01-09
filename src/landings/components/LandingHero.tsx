import { useEffect, useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { LinkExternalIcon, NoteIcon } from '@primer/octicons-react'

import { Link } from 'src/frame/components/Link'
import { useProductLandingContext } from 'src/landings/components/ProductLandingContext'
import { useTranslation } from 'src/languages/components/useTranslation'
import { useVersion } from 'src/versions/components/useVersion'
import { Lead } from 'src/frame/components/ui/Lead'

export const LandingHero = () => {
  const {
    productVideo,
    productVideoTranscript,
    shortTitle,
    title,
    beta_product,
    intro,
    introLinks,
  } = useProductLandingContext()
  const { t } = useTranslation(['product_landing'])
  const [renderIFrame, setRenderIFrame] = useState(false)

  // delay iFrame rendering so that dom ready happens sooner
  useEffect(() => {
    setRenderIFrame(true)
  }, [])

  return (
    <header className="d-lg-flex gutter-lg mb-6">
      <div className={cx('col-12 mb-3 mb-lg-0', productVideo && 'col-lg-6')}>
        <h1 id="title-h1">
          {title}{' '}
          {beta_product && <span className="Label Label--success v-align-middle">Beta</span>}
        </h1>

        {intro && <Lead data-search="lead">{intro}</Lead>}

        <div data-search="hide">
          {introLinks &&
            Object.entries(introLinks)
              .filter(([key, link]) => {
                return link && !key.includes('raw')
              })
              .map(([key, link], i) => {
                if (!link) {
                  return null
                }
                return (
                  <FullLink
                    key={link}
                    id={link}
                    href={link}
                    className={cx('btn btn-large f4 mt-3 mr-3 ', i === 0 && 'btn-primary')}
                  >
                    {t(key)}
                  </FullLink>
                )
              })}
        </div>
      </div>

      {productVideo && (
        <div className="col-12 col-lg-6" data-search="hide">
          <div className="position-relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              title={`${shortTitle || title} Video`}
              className="top-0 left-0 position-absolute color-shadow-large rounded-1 width-full height-full"
              src={renderIFrame ? productVideo : ''}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {productVideoTranscript && (
            <div className="position-relative my-2">
              <FullLink id="product-video" href={productVideoTranscript}>
                <NoteIcon className="octicon-link mr-2" size="small" verticalAlign="middle" />
                {t('view_transcript')}
              </FullLink>
            </div>
          )}
        </div>
      )}
    </header>
  )
}

// Fully Qualified Link - it includes the version and locale in the path if
// the href is not an external link.
type Props = {
  href: string
  id: string
  children: React.ReactNode
  className?: string
}
export const FullLink = ({ href, id, children, className }: Props) => {
  const router = useRouter()
  const { currentVersion } = useVersion()

  const isExternal = href.startsWith('https')
  let linkHref = href
  if (!isExternal) {
    const locale = router.locale || 'en'
    linkHref = `/${locale}${
      currentVersion !== 'free-pro-team@latest' ? `/${currentVersion}` : ''
    }${href}`
  }

  return (
    <Link id={id} href={linkHref} className={className}>
      {children}{' '}
      {isExternal && (
        <span className="ml-1">
          <LinkExternalIcon aria-label="(external site)" size="small" />
        </span>
      )}
    </Link>
  )
}
