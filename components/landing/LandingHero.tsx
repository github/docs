import { useEffect, useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { useMainContext } from 'components/context/MainContext'

import { Link } from 'components/Link'
import { useProductLandingContext } from 'components/context/ProductLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { useVersion } from 'components/hooks/useVersion'

export const LandingHero = () => {
  const { airGap } = useMainContext()
  const { product_video, shortTitle, beta_product, intro, introLinks } = useProductLandingContext()
  const { t } = useTranslation('product_landing')
  const [renderIFrame, setRenderIFrame] = useState(false)

  // delay iFrame rendering so that dom ready happens sooner
  useEffect(() => {
    setRenderIFrame(true)
  }, [])

  return (
    <header className="d-lg-flex gutter-lg mb-6">
      <div className={cx(product_video && 'col-12 col-lg-6 mb-3 mb-lg-0')}>
        <span className="text-mono color-text-secondary">Product</span>
        <h1 className="mb-3 font-mktg">
          {shortTitle}{' '}
          {beta_product && <span className="Label Label--success v-align-middle">Beta</span>}
        </h1>

        <div
          className="lead-mktg color-text-secondary"
          dangerouslySetInnerHTML={{ __html: intro }}
        />

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
                  href={link}
                  className={cx('btn-mktg bt-large f4 mt-3 mr-3', i !== 0 && 'btn-outline-mktg')}
                >
                  {t(key)}
                </FullLink>
              )
            })}
      </div>

      {product_video && (
        <div className="col-12 col-lg-6">
          <div className="position-relative" style={{ paddingBottom: '56.25%' }}>
            {!airGap && (
              <iframe
                title={`${shortTitle} Video`}
                className="top-0 left-0 position-absolute color-shadow-large rounded-1 width-full height-full"
                src={renderIFrame ? product_video : ''}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

// Fully Qualified Link - it includes the version and locale in the path
type Props = {
  href: string
  children: React.ReactNode
  className?: string
}
export const FullLink = ({ href, children, className }: Props) => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const locale = router.locale || 'en'
  const fullyQualifiedHref = `/${locale}${
    currentVersion !== 'free-pro-team@latest' ? `/${currentVersion}` : ''
  }${href}`
  return (
    <Link href={fullyQualifiedHref} className={className}>
      {children}
    </Link>
  )
}
