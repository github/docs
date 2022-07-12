import { useEffect, useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { MarkGithubIcon, ThreeBarsIcon, XIcon } from '@primer/octicons-react'
import { useVersion } from 'components/hooks/useVersion'

import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'
import { useAuth } from 'components/context/DotComAuthenticatedContext'
import { LanguagePicker } from './LanguagePicker'
import { HeaderNotifications } from 'components/page-header/HeaderNotifications'
import { ProductPicker } from 'components/page-header/ProductPicker'
import { useTranslation } from 'components/hooks/useTranslation'
import { Search } from 'components/Search'
import { VersionPicker } from 'components/page-header/VersionPicker'
import { Breadcrumbs } from './Breadcrumbs'
import styles from './Header.module.scss'

export const Header = () => {
  const router = useRouter()
  const { error } = useMainContext()
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['header', 'homepage'])
  const [isMenuOpen, setIsMenuOpen] = useState(
    router.pathname !== '/' && router.query.query && true
  )
  const [scroll, setScroll] = useState(false)

  const { isDotComAuthenticated } = useAuth()

  const signupCTAVisible =
    !isDotComAuthenticated &&
    (currentVersion === 'free-pro-team@latest' || currentVersion === 'enterprise-cloud@latest')

  useEffect(() => {
    function onScroll() {
      setScroll(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const close = (e: { key: string }) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <div
      className={cx(
        'border-bottom d-unset color-border-muted no-print z-3 color-bg-default',
        styles.header
      )}
    >
      {error !== '404' && <HeaderNotifications />}
      <header
        className={cx(
          'color-bg-default px-3 px-md-6 pt-3 pb-3 position-sticky top-0 z-3 border-bottom',
          scroll && 'color-shadow-small'
        )}
      >
        {/* desktop header */}
        <div
          className="d-none d-lg-flex flex-justify-end flex-items-center flex-wrap flex-xl-nowrap"
          data-testid="desktop-header"
        >
          <div
            className={cx('mr-auto width-full width-xl-auto', scroll && styles.breadcrumbs)}
            data-search="breadcrumbs"
          >
            <Breadcrumbs />
          </div>
          <div className="d-flex flex-items-center">
            <VersionPicker />
            <LanguagePicker />

            {signupCTAVisible && (
              <a
                href="https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs"
                target="_blank"
                rel="noopener"
                className="ml-3 btn color-fg-muted"
              >
                {t`sign_up_cta`}
              </a>
            )}

            {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
            {error !== '404' && (
              <div className="d-inline-block ml-3">
                <Search iconSize={16} isHeaderSearch={true} />
              </div>
            )}
          </div>
        </div>

        {/* mobile header */}
        <div className="d-lg-none" data-testid="mobile-header">
          <div className="d-flex flex-justify-between">
            <div className="d-flex flex-items-center" id="github-logo-mobile">
              <Link aria-hidden="true" tabIndex={-1} href={`/${router.locale}`}>
                <MarkGithubIcon size={32} className="color-fg-default" />
              </Link>

              <Link
                href={`/${router.locale}`}
                className="f4 text-semibold color-fg-default no-underline no-wrap pl-2"
              >
                {t('github_docs')}
              </Link>
            </div>

            <nav>
              <button
                className="btn"
                data-testid="mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Navigation Menu"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
              >
                {isMenuOpen ? <XIcon size="small" /> : <ThreeBarsIcon size="small" />}
              </button>
            </nav>
          </div>

          {/* mobile menu contents */}
          <div className="relative">
            <div
              className={cx('width-full position-sticky top-0', isMenuOpen ? 'd-block' : 'd-none')}
            >
              <div className="my-4">
                <Breadcrumbs />
              </div>

              <ProductPicker />

              <div className="border-top my-2" />
              <VersionPicker variant="inline" />

              <div className="border-top my-2" />
              <LanguagePicker variant="inline" />
              {signupCTAVisible && (
                <a
                  href="https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs"
                  target="_blank"
                  rel="noopener"
                  className="mt-3 py-2 btn color-fg-muted d-block"
                >
                  {t`sign_up_cta`}
                </a>
              )}

              {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
              {error !== '404' && (
                <div className="my-2 pt-2">
                  <Search iconSize={16} isMobileSearch={true} />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Adding Portal Root here for DropdownMenu and ActionList Search Results */}
      <div id="__primerPortalRoot__" className={cx(styles.portalRoot)} />
    </div>
  )
}
