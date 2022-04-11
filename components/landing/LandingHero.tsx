import { useEffect, useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { LinkExternalIcon } from '@primer/octicons-react'

import { useMainContext } from 'components/context/MainContext'
import { Link } from 'components/Link'
import { useProductLandingContext } from 'components/context/ProductLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { useVersion } from 'components/hooks/useVersion'
import { Lead } from 'components/ui/Lead'

export const LandingHero = () => {
  const { airGap } = useMainContext()
  const { product_video, shortTitle, title, beta_product, intro, introLinks } =
    useProductLandingContext()
  const { t } = useTranslation('product_landing')
  const [renderIFrame, setRenderIFrame] = useState(false)

  // delay iFrame rendering so that dom ready happens sooner
  useEffect(() => {
    setRenderIFrame(true)
  }, [])

  return (
    <header className="d-lg-flex gutter-lg mb-6">
      <div className={cx('col-12 mb-3 mb-lg-0', product_video && 'col-lg-6')}>
        <h1>
          {shortTitle || title}{' '}
          {beta_product && <span className="Label Label--success v-align-middle">Beta</span>}
        </h1>

        {intro && <Lead data-search="lead">{intro}</Lead>}

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
                  className={cx('btn btn-large f4 mt-3 mr-3 ', i === 0 && 'btn-primary')}
                >
                  {t(key) || key}
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

// Fully Qualified Link - it includes the version and locale in the path if
// the href is not an external link.
type Props = {
  href: string
  children: React.ReactNode
  className?: string
}
export const FullLink = ({ href, children, className }: Props) => {
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
    <Link href={linkHref} className={className}>
      {children}{' '}
      {isExternal && (
        <span className="ml-1">
          <LinkExternalIcon size="small" />
        </span>
      )}
    </Link>
  )
}
