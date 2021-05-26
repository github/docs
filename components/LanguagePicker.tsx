import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dropdown } from '@primer/components'
import { useMainContext } from './context/MainContext'

export const LanguagePicker = () => {
  const router = useRouter()
  const { languages } = useMainContext()
  const locale = router.locale || 'en'
  const langs = Object.values(languages)
  const selectedLang = languages[locale]

  return (
    <div className="ml-4 d-flex flex-justify-center flex-items-center">
      <Dropdown css>
        <summary>
          {selectedLang.nativeName || selectedLang.name}
          <Dropdown.Caret />
        </summary>
        <Dropdown.Menu direction="sw">
          {langs.map((lang) => {
            return (
              <Dropdown.Item key={lang.code}>
                <Link href={router.asPath} locale={lang.hreflang}>
                  <a>
                    {lang.nativeName ? (
                      <>
                        {lang.nativeName} ({lang.name})
                      </>
                    ) : (
                      lang.name
                    )}
                  </a>
                </Link>
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
