import cx from 'classnames'
import type { JSX } from 'react'
import { KebabHorizontalIcon, LinkExternalIcon } from '@primer/octicons-react'
import { IconButton, ActionMenu, ActionList } from '@primer/react'

import { LanguagePicker } from '@/languages/components/LanguagePicker'
import { useTranslation } from '@/languages/components/useTranslation'
import { VersionPicker } from '@/versions/components/VersionPicker'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { useHasAccount } from '../hooks/useHasAccount'

import styles from './HeaderSearchAndWidgets.module.scss'

type Props = {
  isSearchOpen: boolean
  width: number | null
  SearchButton: JSX.Element | null
}

export function HeaderSearchAndWidgets({ width, isSearchOpen, SearchButton }: Props) {
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['header'])
  const { hasAccount } = useHasAccount()
  const signupCTAVisible =
    hasAccount === false && // don't show if `null`
    (currentVersion === DEFAULT_VERSION || currentVersion === 'enterprise-cloud@latest')

  return (
    <>
      <div className={cx('d-flex flex-items-center', isSearchOpen && 'd-none')}>
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

        {/* Below large widths we show the search as a button which needs to be grouped with the widgets */}
        <div className={styles.displayUnderLarge}>{SearchButton}</div>

        {/* The ... navigation menu at medium and smaller widths */}
        <div>
          <ActionMenu aria-labelledby="menu-title">
            <ActionMenu.Anchor>
              <IconButton
                data-testid="mobile-menu"
                icon={KebabHorizontalIcon}
                aria-label={t('header.open_menu_label')}
                className={
                  isSearchOpen ? styles.menuButtonSearchOpen : styles.menuButtonSearchClosed
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
    </>
  )
}
