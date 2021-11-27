import { useRouter } from 'next/router'
import { Box, Dropdown, Details, Text, useDetails } from '@primer/components'
import { ChevronDownIcon } from '@primer/octicons-react'

import { Link } from 'components/Link'
import { useLanguages } from 'components/context/LanguagesContext'

type Props = {
  variant?: 'inline'
}
export const LanguagePicker = ({ variant }: Props) => {
  const router = useRouter()
  const { languages } = useLanguages()
  const { getDetailsProps, setOpen } = useDetails({ closeOnOutsideClick: true })
  const locale = router.locale || 'en'
  const langs = Object.values(languages)
  const selectedLang = languages[locale]

  if (variant === 'inline') {
    return (
      <Details {...getDetailsProps()} data-testid="language-picker">
        <summary
          className="d-block btn btn-invisible color-fg-default"
          aria-label="Toggle language list"
        >
          <div className="d-flex flex-items-center flex-justify-between">
            <Text>{selectedLang.nativeName || selectedLang.name}</Text>
            <ChevronDownIcon size={24} className="arrow ml-md-1" />
          </div>
        </summary>
        <Box mt={1}>
          {langs.map((lang) => {
            if (lang.wip) {
              return null
            }

            return (
              <Dropdown.Item onClick={() => setOpen(false)} key={lang.code}>
                <Link href={router.asPath} locale={lang.code}>
                  {lang.nativeName ? (
                    <>
                      {lang.nativeName} ({lang.name})
                    </>
                  ) : (
                    lang.name
                  )}
                </Link>
              </Dropdown.Item>
            )
          })}
        </Box>
      </Details>
    )
  }

  return (
    <Details {...getDetailsProps()} data-testid="language-picker" className="position-relative">
      <summary className="d-block btn btn-invisible color-fg-default">
        <Text>{selectedLang.nativeName || selectedLang.name}</Text>
        <Dropdown.Caret />
      </summary>
      <Dropdown.Menu direction="sw" style={{ width: 'unset' }}>
        {langs.map((lang) => {
          if (lang.wip) {
            return null
          }

          return (
            <Dropdown.Item key={lang.code} onClick={() => setOpen(false)}>
              <Link href={router.asPath} locale={lang.code}>
                {lang.nativeName ? (
                  <>
                    {lang.nativeName} ({lang.name})
                  </>
                ) : (
                  lang.name
                )}
              </Link>
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Details>
  )
}
