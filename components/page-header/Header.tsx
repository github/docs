import { useState } from 'react'
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
import { VersionPicker } from 'components/VersionPicker'

export const Header = () => {
  const router = useRouter()
  const { relativePath, currentLayoutName, error } = useMainContext()
  const { t } = useTranslation(['header', 'homepage'])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // the graphiql explorer utilizes `?query=` in the url and we don't want our search bar to mess that up
  const updateSearchParams = router.asPath !== 'graphql/overview/explorer'
  const showVersionPicker =
    relativePath === 'index.md' ||
    currentLayoutName === 'product-landing' ||
    currentLayoutName === 'product-sublanding' ||
    currentLayoutName === 'release-notes'

  return (
    <div className="border-bottom color-border-secondary no-print">
      {error !== '404' && <HeaderNotifications />}

      <header className={cx('container-xl px-3 px-md-6 pt-3 pb-3 position-relative z-3')}>
        {/* desktop header */}
        <div
          className="d-none d-lg-flex flex-justify-end flex-items-center"
          data-testid="desktop-header"
        >
          {showVersionPicker && (
            <div className="mr-2">
              <VersionPicker hideLabel={true} variant="compact" />
            </div>
          )}

          <LanguagePicker />

          {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
          {relativePath !== 'index.md' && error !== '404' && (
            <div className="d-inline-block ml-3">
              <Search updateSearchParams={updateSearchParams} isOverlay={true} />
            </div>
          )}
        </div>

        {/* mobile header */}
        <div className="d-lg-none" data-testid="mobile-header">
          <div className="d-flex flex-justify-between">
            <div className="d-flex flex-items-center" id="github-logo-mobile" role="banner">
              <Link aria-hidden="true" tabIndex={-1} href={`/${router.locale}`}>
                <MarkGithubIcon size={32} className="color-icon-primary" />
              </Link>

              <Link
                href={`/${router.locale}`}
                className="f4 text-semibold color-text-primary no-underline no-wrap pl-2"
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
              className={cx(
                'width-full position-absolute left-0 right-0 color-shadow-large color-bg-primary px-2 px-md-4 pb-3',
                isMenuOpen ? 'd-block' : 'd-none'
              )}
            >
              <div className="mt-3 mb-2">
                <h4 className="f5 text-normal color-text-secondary ml-3">
                  {t('explore_by_product')}
                </h4>

                <ProductPicker />
              </div>

              {/* <!-- Versions picker that only appears in the header on landing pages --> */}
              {showVersionPicker && (
                <>
                  <div className="border-top my-2 mx-3" />
                  <VersionPicker hideLabel={true} variant="inline" popoverVariant={'inline'} />
                </>
              )}

              {/* <!-- Language picker - 'English', 'Japanese', etc --> */}
              <div className="border-top my-2 mx-3" />
              <LanguagePicker variant="inline" />

              {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
              {relativePath !== 'index.md' && error !== '404' && (
                <div className="my-2 pt-3 mx-3">
                  <Search updateSearchParams={updateSearchParams} />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
