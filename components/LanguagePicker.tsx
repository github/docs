import cx from 'classnames'
import { useRouter } from 'next/router'
import { Dropdown, Details, useDetails } from '@primer/components'
import { ChevronDownIcon } from '@primer/octicons-react'

import { Link } from 'components/Link'
import { useMainContext } from './context/MainContext'

type Props = {
  variant?: 'inline'
}
export const LanguagePicker = ({ variant }: Props) => {
  const router = useRouter()
  const { languages } = useMainContext()
  const { getDetailsProps } = useDetails({})
  const locale = router.locale || 'en'
  const langs = Object.values(languages)
  const selectedLang = languages[locale]

  if (variant === 'inline') {
    return (
      <Details {...getDetailsProps()} className="details-reset">
        <summary aria-label="Toggle language list">
          <div className="d-flex flex-items-center flex-justify-between py-2">
            <span>{selectedLang.nativeName || selectedLang.name}</span>
            <ChevronDownIcon size={24} className="arrow ml-md-1" />
          </div>
        </summary>
        <div>
          {langs.map((lang) => {
            return (
              <Link
                key={lang.code}
                href={router.asPath}
                locale={lang.code}
                disableClientTransition={true}
                className={cx(
                  'd-block py-2',
                  lang.code === router.locale
                    ? 'color-text-link text-underline active'
                    : 'Link--primary no-underline'
                )}
              >
                {lang.nativeName ? (
                  <>
                    {lang.nativeName} ({lang.name})
                  </>
                ) : (
                  lang.name
                )}
              </Link>
            )
          })}
        </div>
      </Details>
    )
  }

  return (
    <Dropdown
      css={`
        ul {
          width: unset;
        }
      `}
    >
      <summary>
        {selectedLang.nativeName || selectedLang.name}
        <Dropdown.Caret />
      </summary>
      <Dropdown.Menu direction="sw">
        {langs.map((lang) => {
          return (
            <Dropdown.Item key={lang.code}>
              <Link href={router.asPath} locale={lang.code} disableClientTransition={true}>
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
    </Dropdown>
  )
}
