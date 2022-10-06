import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import { useLanguages } from 'components/context/LanguagesContext'
import { Picker } from 'components/ui/Picker'
import { useTranslation } from 'components/hooks/useTranslation'
import { PREFERRED_LOCALE_COOKIE_NAME } from '../../lib/constants.js'

type Props = {
  variant?: 'inline'
}

export const LanguagePicker = ({ variant }: Props) => {
  const router = useRouter()
  const { languages } = useLanguages()

  const locale = router.locale || 'en'

  const { t } = useTranslation('picker')

  const langs = Object.values(languages)
  const selectedLang = languages[locale]

  // The `router.asPath` will always be without a hash in SSR
  // So to avoid a hydraration failure on the client, we have to
  // normalize it to be without the hash. That way the path is treated
  // in a "denormalized" way.
  const routerPath = router.asPath.split('#')[0]

  function rememberPreferredLanguage(value: string) {
    try {
      // The reason we use a cookie and not local storage is because
      // this cookie value is used and needed by the server. For
      // example, when doing `GET /some/page` we need the cookie
      // to redirect to `Location: /ja/some/page`.
      // It's important it's *not* an HttpOnly cookie because we
      // need this in the client-side which is used to determine
      // the UI about displaying notifications about preferred
      // language if your cookie doesn't match the current URL.
      Cookies.set(PREFERRED_LOCALE_COOKIE_NAME, value, {
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
        options={langs.map((lang) => ({
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
