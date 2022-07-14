import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import { useLanguages } from 'components/context/LanguagesContext'
import { Picker } from 'components/ui/Picker'
import { useTranslation } from 'components/hooks/useTranslation'

// This value is replicated in two places! See middleware/detect-language.js
const PREFERRED_LOCALE_COOKIE_NAME = 'preferredlang'

type Props = {
  variant?: 'inline'
}

export const LanguagePicker = ({ variant }: Props) => {
  const router = useRouter()
  const { languages } = useLanguages()
  const locale = router.locale || 'en'
  const langs = Object.values(languages)
  const selectedLang = languages[locale]
  const { t } = useTranslation('picker')

  // The `router.asPath` will always be without a hash in SSR
  // So to avoid a hydraration failure on the client, we have to
  // normalize it to be without the hash. That way the path is treated
  // in a "denormalized" way.
  const routerPath = router.asPath.split('#')[0]

  function rememberPreferredLanguage(option: { locale: string }) {
    try {
      Cookies.set(PREFERRED_LOCALE_COOKIE_NAME, option.locale, {
        expires: 365,
        secure: document.location.protocol !== 'http:',
      })
    } catch (err) {
      // You can never be too careful because setting a cookie
      // can fail. For example, some browser
      // extensions disallow all setting of cookies and attempts
      // at the `document.cookie` setter could throw. Just swallow
      // and move on.
      console.warn('Unable to set preferred language cookie', err)
    }
  }

  return (
    <div data-testid="language-picker">
      <Picker
        variant={variant}
        defaultText={t('language_picker_default_text')}
        options={langs
          .filter((lang) => !lang.wip)
          .map((lang) => ({
            text: lang.nativeName || lang.name,
            selected: lang === selectedLang,
            locale: lang.code,
            href: `${routerPath}`,
            onselect: rememberPreferredLanguage,
          }))}
      />
    </div>
  )
}
