import { useRouter } from 'next/router'
import { Link } from 'components/Link'
import { useLanguages } from 'components/context/LanguagesContext'
import { Picker } from 'components/ui/Picker'
import { useTranslation } from 'components/hooks/useTranslation'

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

  return (
    <Picker
      variant={variant}
      data-testid="language-picker"
      defaultText={t('language_picker_default_text')}
      options={langs
        .filter((lang) => !lang.wip)
        .map((lang) => ({
          text: lang.nativeName || lang.name,
          selected: lang === selectedLang,
          item: (
            <Link href={routerPath} locale={lang.code}>
              {lang.nativeName ? (
                <>
                  <span lang={lang.code}>{lang.nativeName}</span> (
                  <span lang="en">{lang.name}</span>)
                </>
              ) : (
                <span lang={lang.code}>{lang.name}</span>
              )}
            </Link>
          ),
        }))}
    />
  )
}
