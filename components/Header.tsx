import { useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { MarkGithubIcon, ThreeBarsIcon, XIcon } from '@primer/octicons-react'
import { ButtonOutline } from '@primer/components'

import { Link } from 'components/Link'
import { useMainContext } from './context/MainContext'
import { LanguagePicker } from './LanguagePicker'
import { HeaderNotifications } from 'components/HeaderNotifications'
import { ProductPicker } from 'components/ProductPicker'
import { useTranslation } from 'components/hooks/useTranslation'
import { HomepageVersionPicker } from 'components/landing/HomepageVersionPicker'
import { Search } from 'components/Search'

export const Header = () => {
  const router = useRouter()
  const { relativePath, currentLayoutName, error } = useMainContext()
  const { t } = useTranslation(['header', 'homepage'])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const showVersionPicker =
    relativePath === 'index.md' ||
    currentLayoutName === 'product-landing' ||
    currentLayoutName === 'product-sublanding'

  return (
    <div className="border-bottom color-border-secondary no-print">
      {error !== '404' && <HeaderNotifications />}

      <header
        className="container-xl px-3 px-md-6 pt-3 pb-3 position-relative"
        style={{ zIndex: 2 }}
      >
        {/* desktop header */}
        <div className="d-none d-lg-flex flex-justify-end">
          {showVersionPicker && (
            <div className="py-2 mr-4">
              <HomepageVersionPicker />
            </div>
          )}

          <div className="py-2">
            <LanguagePicker />
          </div>

          {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
          {relativePath !== 'index.md' && error !== '404' && (
            <div className="d-inline-block ml-4">
              <Search />
            </div>
          )}
        </div>

        {/* mobile header */}
        <div className="d-lg-none">
          <div className="d-flex flex-justify-between">
            <div className="d-flex flex-items-center" id="github-logo-mobile" role="banner">
              <Link aria-hidden="true" tabIndex={-1} href={`/${router.locale}`}>
                <MarkGithubIcon size={32} className="color-icon-primary" />
              </Link>

              <Link
                href={`/${router.locale}`}
                className="h4-mktg color-text-primary no-underline no-wrap pl-2"
              >
                {t('github_docs')}
              </Link>
            </div>

            <div>
              <ButtonOutline
                css
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Navigation Menu"
              >
                {isMenuOpen ? <XIcon size="small" /> : <ThreeBarsIcon size="small" />}
              </ButtonOutline>
            </div>
          </div>

          {/* mobile menu contents */}
          <div className="relative">
            <div
              className={cx(
                'width-full position-absolute left-0 right-0 color-shadow-large color-bg-primary px-3 px-md-6 pb-3',
                isMenuOpen ? 'd-block' : 'd-none'
              )}
            >
              <div className="mt-3 mb-2">
                <h4 className="text-mono f5 text-normal color-text-secondary">
                  {t('explore_by_product')}
                </h4>

                <ProductPicker />
              </div>

              {/* <!-- Versions picker that only appears in the header on landing pages --> */}
              {showVersionPicker && (
                <div className="border-top py-2">
                  <HomepageVersionPicker variant="inline" />
                </div>
              )}

              {/* <!-- Language picker - 'English', 'Japanese', etc --> */}
              <div className="border-top py-2">
                <LanguagePicker variant="inline" />
              </div>

              {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
              {relativePath !== 'index.md' && error !== '404' && (
                <div className="pt-3 border-top">
                  <Search />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
