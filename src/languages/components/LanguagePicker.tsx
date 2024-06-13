import { useRouter } from 'next/router'
import { GlobeIcon } from '@primer/octicons-react'

import { useLanguages } from 'src/languages/components/LanguagesContext'
import { useTranslation } from 'src/languages/components/useTranslation'
import { useUserLanguage } from 'src/languages/components/useUserLanguage'
import { ActionList, ActionMenu, IconButton, Link } from '@primer/react'

type Props = {
  xs?: boolean
  mediumOrLower?: boolean
}

export const LanguagePicker = ({ xs, mediumOrLower }: Props) => {
  const router = useRouter()
  const { languages } = useLanguages()
  const { setUserLanguageCookie } = useUserLanguage()

  const locale = router.locale || 'en'

  const { t } = useTranslation('picker')
  // Remember, in this context `languages` is only the active ones
  // that are available.
  // Also, if the current context has a page and that page has own ideas
  // about which languages it's available in (e.g. early-access)
  // it would already have been paired down.
  const langs = Object.values(languages)

  if (langs.length < 2) {
    return null
  }

  const selectedLang = languages[locale]

  // The `router.asPath` will always be without a hash in SSR
  // So to avoid a hydration failure on the client, we have to
  // normalize it to be without the hash. That way the path is treated
  // in a "denormalized" way.
  const routerPath = router.asPath.split('#')[0]

  // languageList is specifically <ActionList.Item>'s which are reused
  // for menus that behave differently at the breakpoints.
  const languageList = langs.map((lang) => (
    <ActionList.Item
      key={`/${lang.code}${routerPath}`}
      selected={lang === selectedLang}
      as={Link}
      lang={lang.code}
      href={`/${lang.code}${routerPath}`}
      onSelect={() => {
        if (lang.code) {
          try {
            setUserLanguageCookie(lang.code)
          } catch (err) {
            // You can never be too careful because setting a cookie
            // can fail. For example, some browser
            // extensions disallow all setting of cookies and attempts
            // at the `document.cookie` setter could throw. Just swallow
            // and move on.
            console.warn('Unable to set preferred language cookie', err)
          }
        }
      }}
    >
      {lang.nativeName || lang.name}
    </ActionList.Item>
  ))

  // At large breakpoints, we return the full <ActionMenu> with just the languages,
  // at smaller breakpoints, we return just the <ActionList> with its items so that
  // the <Header> component can place it inside its own <ActionMenu> with multiple
  // groups, language being just one of those groups.
  return (
    <div data-testid="language-picker" className="d-flex">
      {xs ? (
        <>
          {/* XS Mobile Menu */}
          <ActionMenu>
            <ActionMenu.Anchor>
              <ActionMenu.Button
                variant="invisible"
                className="color-fg-default width-full"
                aria-label={`Select language: current language is ${selectedLang.name}`}
                sx={{
                  height: 'auto',
                  textAlign: 'left',
                  'span:first-child': { display: 'inline' },
                }}
              >
                <span style={{ whiteSpace: 'pre-wrap' }}>{t('language_picker_label') + '\n'}</span>
                <span className="color-fg-muted text-normal f6">{selectedLang.name}</span>
              </ActionMenu.Button>
            </ActionMenu.Anchor>
            <ActionMenu.Overlay align="start">
              <ActionList selectionVariant="single">{languageList}</ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
        </>
      ) : mediumOrLower ? (
        <ActionList className="hide-sm" selectionVariant="single">
          <ActionList.Group>
            <ActionList.GroupHeading>{t('language_picker_label')}</ActionList.GroupHeading>
            {languageList}
          </ActionList.Group>
        </ActionList>
      ) : (
        <ActionMenu>
          <ActionMenu.Anchor>
            <IconButton
              icon={GlobeIcon}
              aria-label={`Select language: current language is ${selectedLang.name}`}
            />
          </ActionMenu.Anchor>
          <ActionMenu.Overlay align="end">
            <ActionList selectionVariant="single">{languageList}</ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      )}
    </div>
  )
}
