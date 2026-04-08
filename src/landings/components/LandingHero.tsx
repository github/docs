import React from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { LinkExternalIcon } from '@primer/octicons-react'

import { Link } from '@/frame/components/Link'
import { useProductLandingContext } from '@/landings/components/ProductLandingContext'
import { useTranslation } from '@/languages/components/useTranslation'
import { useVersion } from '@/versions/components/useVersion'
import { Lead } from '@/frame/components/ui/Lead'

export const LandingHero = () => {
  const { title, beta_product, intro, introLinks } = useProductLandingContext()
  const { t } = useTranslation(['product_landing'])

  return (
    <header className="d-lg-flex gutter-lg mb-6">
      <div className="col-12 mb-3 mb-lg-0">
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
