import { useRouter } from 'next/router'
import { GlobeIcon } from '@primer/octicons-react'

import { useLanguages } from 'components/context/LanguagesContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { useUserLanguage } from 'components/hooks/useUserLanguage'
import { Picker } from 'components/ui/Picker'

type Props = {
  mediumOrLower?: boolean
}

export const LanguagePicker = ({ mediumOrLower }: Props) => {
  const router = useRouter()
  const { languages } = useLanguages()
  const { setUserLanguageCookie } = useUserLanguage()

  const locale = router.locale || 'en'

  const { t } = useTranslation('picker')
  // Remember, in this context `languages` is only the active ones
  // that are available. I.e. no wip ones.
  // Also, if the current context has a page and that page has own ideas
  // about which languages it's available in (e.g. early-access)
  // it would already have been paired down.
  const langs = Object.values(languages)

  if (langs.length < 2) {
    return null
  }

  const selectedLang = languages[locale]

  // The `router.asPath` will always be without a hash in SSR
  // So to avoid a hydraration failure on the client, we have to
  // normalize it to be without the hash. That way the path is treated
  // in a "denormalized" way.
  const routerPath = router.asPath.split('#')[0]

  return (
    <div data-testid="language-picker">
      <Picker
        defaultText={t('language_picker_default_text')}
        items={langs.map((lang) => ({
          text: lang.nativeName || lang.name,
          selected: lang === selectedLang,
          href: `/${lang.code}${routerPath}`,
          extra: {
            locale: lang.code,
          },
        }))}
        pickerLabel={mediumOrLower ? 'Language' : ''}
        iconButton={mediumOrLower ? undefined : GlobeIcon}
        onSelect={(item) => {
          if (item.extra?.locale) {
            try {
              setUserLanguageCookie(item.extra.locale)
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
        buttonBorder={mediumOrLower}
        dataTestId="default-language"
        ariaLabel={`Select language: current language is ${selectedLang.name}`}
        alignment={mediumOrLower ? 'start' : 'end'}
      />
    </div>
  )
}
