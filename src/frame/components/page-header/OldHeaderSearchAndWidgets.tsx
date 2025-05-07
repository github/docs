import { Suspense } from 'react'
import cx from 'classnames'
import { SearchIcon, XIcon, KebabHorizontalIcon, LinkExternalIcon } from '@primer/octicons-react'
import { IconButton, ActionMenu, ActionList } from '@primer/react'

import { LanguagePicker } from '@/languages/components/LanguagePicker'
import { useTranslation } from '@/languages/components/useTranslation'
import DomainNameEdit from '@/links/components/DomainNameEdit'
import { OldSearchInput } from '@/search/components/input/OldSearchInput'
import { VersionPicker } from '@/versions/components/VersionPicker'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { useHasAccount } from '../hooks/useHasAccount'
import { useMainContext } from '../context/MainContext'

import styles from './OldHeaderSearchAndWidgets.module.scss'

type Props = {
  isSearchOpen: boolean
  setIsSearchOpen: (value: boolean) => void
  width: number | null
}

export function OldHeaderSearchAndWidgets({ isSearchOpen, setIsSearchOpen, width }: Props) {
  const { error } = useMainContext()
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['header'])
  const { hasAccount } = useHasAccount()
  const signupCTAVisible =
    hasAccount === false && // don't show if `null`
    (currentVersion === DEFAULT_VERSION || currentVersion === 'enterprise-cloud@latest')

  const showDomainNameEdit = currentVersion.startsWith('enterprise-server@')

  return (
    <div className={cx('d-flex flex-items-center', isSearchOpen && styles.widgetsContainer)}>
      {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
      {error !== '404' && (
        <div
          className={cx(
            isSearchOpen
              ? styles.searchContainerWithOpenSearch
              : styles.searchContainerWithClosedSearch,
            'mr-3',
          )}
        >
          <OldSearchInput isSearchOpen={isSearchOpen} />
        </div>
      )}

      <div className={cx('d-none d-lg-flex flex-items-center', signupCTAVisible && 'mr-3')}>
        <LanguagePicker />
      </div>

      {signupCTAVisible && (
        <div data-testid="header-signup" className="border-left">
          <a
            href="https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs"
            target="_blank"
            rel="noopener"
            className="d-none d-lg-flex ml-3 btn color-fg-muted"
          >
            {t`sign_up_cta`}
          </a>
        </div>
      )}

      <IconButton
        className={cx('hide-lg hide-xl', !isSearchOpen ? 'd-flex flex-items-center' : 'd-none')}
        data-testid="mobile-search-button"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        aria-label="Open Search Bar"
        aria-expanded={isSearchOpen ? 'true' : 'false'}
        icon={SearchIcon}
      />
      <IconButton
        className="px-3"
        data-testid="mobile-search-button"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        aria-label="Close Search Bar"
        aria-expanded={isSearchOpen ? 'true' : 'false'}
        icon={XIcon}
        sx={
          isSearchOpen
            ? {
                // The x button to close the small width search UI when search is open, as the
                // browser width increases to md and above we no longer show that search UI so
                // the close search button is hidden as well.
                // breakpoint(md)
                '@media (min-width: 768px)': {
                  display: 'none',
                },
              }
            : {
                display: 'none',
              }
        }
      />

      {/* The ... navigation menu at medium and smaller widths */}
      <div>
        <ActionMenu aria-labelledby="menu-title">
          <ActionMenu.Anchor>
            <IconButton
              data-testid="mobile-menu"
              icon={KebabHorizontalIcon}
              aria-label="Open Menu"
              sx={
                isSearchOpen
                  ? // The ... menu button when the smaller width search UI is open.  Since the search
                    // UI is open, we don't show the button at smaller widths but we do show it as
                    // the browser width increases to md, and then at lg and above widths we hide
                    // the button again since the pickers and sign-up button are shown in the header.
                    {
                      marginLeft: '8px',
                      display: 'none',
                      // breakpoint(md)
                      '@media (min-width: 768px)': {
                        display: 'inline-block',
                        marginLeft: '4px',
                      },
                      // breakpoint(lg)
                      '@media (min-width: 1012px)': {
                        display: 'none',
                      },
                    }
                  : // The ... menu button when the smaller width search UI is closed, the button is
                    // shown up to md.  At lg and above we don't show the button since the pickers
                    // and sign-up button are shown in the header.
                    {
                      marginLeft: '16px',
                      '@media (min-width: 768px)': {
                        marginLeft: '0',
                      },
                      '@media (min-width: 1012px)': {
                        display: 'none',
                      },
                    }
              }
            />
          </ActionMenu.Anchor>
          <ActionMenu.Overlay align="start">
            <ActionList>
              <ActionList.Group data-testid="open-mobile-menu">
                {width && width > 544 ? (
                  <LanguagePicker mediumOrLower={true} />
                ) : (
                  <LanguagePicker xs={true} />
                )}
                <ActionList.Divider />
                {width && width < 545 && (
                  <>
                    <VersionPicker xs={true} />
                    <ActionList.Divider />
                    {showDomainNameEdit && (
                      <>
                        <Suspense>
                          <DomainNameEdit xs={true} />
                        </Suspense>
                        <ActionList.Divider />
                      </>
                    )}
                  </>
                )}
                {signupCTAVisible && (
                  <ActionList.LinkItem
                    href="https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs"
                    target="_blank"
                    rel="noopener"
                    data-testid="mobile-signup"
                    className="d-flex color-fg-muted"
                  >
                    {t`sign_up_cta`}
                    <LinkExternalIcon
                      className="height-full float-right"
                      aria-label="(external site)"
                    />
                  </ActionList.LinkItem>
                )}{' '}
              </ActionList.Group>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </div>
    </div>
  )
}
