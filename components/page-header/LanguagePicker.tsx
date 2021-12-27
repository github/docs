import { useRouter } from 'next/router'
import { Link } from 'components/Link'
import { useLanguages } from 'components/context/LanguagesContext'
import { Picker } from 'components/ui/Picker'

type Props = {
  variant?: 'inline'
}

export const LanguagePicker = ({ variant }: Props) => {
  const router = useRouter()
  const { languages } = useLanguages()
  const locale = router.locale || 'en'
  const langs = Object.values(languages)
  const selectedLang = languages[locale]

  return (
    <Picker
      variant={variant}
      data-testid="language-picker"
      defaultText="Choose language"
      options={langs
        .filter((lang) => !lang.wip)
        .map((lang) => ({
          text: lang.nativeName || lang.name,
          selected: lang === selectedLang,
          item: (
            <Link href={router.asPath} locale={lang.code}>
              {lang.nativeName ? (
                <>
                  {lang.nativeName} ({lang.name})
                </>
              ) : (
                lang.name
              )}
            </Link>
          ),
        }))}
    />
  )
}
