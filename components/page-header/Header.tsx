import { useEffect, useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { MarkGithubIcon, ThreeBarsIcon, XIcon } from '@primer/octicons-react'

import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'
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
  const { relativePath, error } = useMainContext()
  const { t } = useTranslation(['header', 'homepage'])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  // the graphiql explorer utilizes `?query=` in the url and we don't want our search bar to mess that up
  const updateSearchParams = router.asPath !== 'graphql/overview/explorer'

  useEffect(() => {
    function onScroll() {
      setScroll(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
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

          <div className="mr-2">
            <VersionPicker variant="compact" />
          </div>

          <LanguagePicker />

          {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
          {relativePath !== 'index.md' && error !== '404' && (
            <div className="d-inline-block ml-3">
              <Search iconSize={16} updateSearchParams={updateSearchParams} isHeaderSearch={true} />
            </div>
          )}
        </div>

        {/* mobile header */}
        <div className="d-lg-none" data-testid="mobile-header">
          <div className="d-flex flex-justify-between">
            <div className="d-flex flex-items-center" id="github-logo-mobile" role="banner">
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

            <div>
              <button
                className="btn"
                data-testid="mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Navigation Menu"
              >
                {isMenuOpen ? <XIcon size="small" /> : <ThreeBarsIcon size="small" />}
              </button>
            </div>
          </div>

          {/* mobile menu contents */}
          <div className="relative">
            <div
              className={cx('width-full position-sticky top-0', isMenuOpen ? 'd-block' : 'd-none')}
            >
              <div className="mt-3 mb-2">
                <div className="pt-3 mb-4 ml-2">
                  <Breadcrumbs />
                </div>
                <h4 className="f5 text-normal color-fg-muted ml-3">{t('explore_by_product')}</h4>

                <ProductPicker />
              </div>

              <div className="border-top my-2 mx-3" />
              <VersionPicker variant="inline" />

              {/* <!-- Language picker - 'English', 'Japanese', etc --> */}
              <div className="border-top my-2 mx-3" />
              <LanguagePicker variant="inline" />

              {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
              {relativePath !== 'index.md' && error !== '404' && (
                <div className="my-2 pt-3 mx-3">
                  <Search iconSize={16} updateSearchParams={updateSearchParams} />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
