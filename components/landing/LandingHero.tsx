import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMainContext } from 'components/context/MainContext'

import { useProductLandingContext } from 'components/context/ProductLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { useVersion } from 'components/hooks/useVersion'

export const LandingHero = () => {
  const { airGap } = useMainContext()
  const { product_video, shortTitle, beta_product, intro, introLinks } = useProductLandingContext()
  const { t } = useTranslation('product_landing')

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

        {/* idea to abstract the introLinks into something more component-like */}
        {/* {introLinks.map((link) => {
            return (
              <FullLink
                href={link.href}
                className={cx(
                  'btn-mktg btn-large f4 mt-3 mr-3',
                  link.secondary && 'btn-outline-mktg'
                )}
              >
                {t(link.translationKeyLabel)}
              </FullLink>
            )
          })} */}

        {introLinks?.quickstart && (
          <FullLink href={introLinks.quickstart} className="btn-mktg btn-large f4 mt-3 mr-3">
            {t('quickstart')}
          </FullLink>
        )}

        {introLinks?.reference && (
          <FullLink
            href={introLinks.reference}
            className="btn-mktg btn-outline-mktg btn-large f4 mt-3 mr-3"
          >
            {t('reference')}
          </FullLink>
        )}

        {introLinks?.overview && (
          <FullLink
            href={introLinks.overview}
            className="btn-mktg btn-outline-mktg btn-large f4 mt-3 mr-3"
          >
            {t('overview')}
          </FullLink>
        )}
      </div>

      {product_video && (
        <div className="col-12 col-lg-6">
          <div className="position-relative" style={{ paddingBottom: '56.25%' }}>
            {!airGap && (
              <iframe
                title={`${shortTitle} Video`}
                className="top-0 left-0 position-absolute color-shadow-large rounded-1 width-full height-full"
                src={product_video}
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
    <Link href={fullyQualifiedHref}>
      <a className={className}>{children}</a>
    </Link>
  )
}
