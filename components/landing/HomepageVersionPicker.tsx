import cx from 'classnames'
import { useRouter } from 'next/router'
import { Dropdown, Details, useDetails } from '@primer/components'
import { ChevronDownIcon } from '@primer/octicons-react'

import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'
import { useVersion } from 'components/hooks/useVersion'

type Props = {
  variant?: 'inline'
}
export const HomepageVersionPicker = ({ variant }: Props) => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { getDetailsProps } = useDetails({})
  const { allVersions, page, enterpriseServerVersions } = useMainContext()

  if (page.permalinks && page.permalinks.length <= 1) {
    return null
  }

  const label = allVersions[currentVersion].versionTitle

  if (variant === 'inline') {
    return (
      <Details {...getDetailsProps()} className="details-reset">
        <summary aria-label="Toggle language list">
          <div className="d-flex flex-items-center flex-justify-between py-2">
            <span>{label}</span>
            <ChevronDownIcon size={24} className="arrow ml-md-1" />
          </div>
        </summary>
        <div>
          {(page.permalinks || []).map((permalink) => {
            return (
              <Link
                key={permalink.href}
                href={permalink.href}
                className={cx(
                  'd-block py-2',
                  permalink.href === router.asPath
                    ? 'color-text-link text-underline active'
                    : 'Link--primary no-underline'
                )}
              >
                {permalink.pageVersionTitle}
              </Link>
            )
          })}
          <Link
            href={`/${router.locale}/${enterpriseServerVersions[0]}/admin/all-releases`}
            className="f6 no-underline color-text-tertiary no-wrap"
          >
            See all Enterprise releases
          </Link>
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
        {label}
        <Dropdown.Caret />
      </summary>
      <Dropdown.Menu direction="sw">
        {(page.permalinks || []).map((permalink) => {
          return (
            <Dropdown.Item key={permalink.href}>
              <Link href={permalink.href}>{permalink.pageVersionTitle}</Link>
            </Dropdown.Item>
          )
        })}
        <div className="pb-1">
          <Link
            href={`/${router.locale}/${enterpriseServerVersions[0]}/admin/all-releases`}
            className="f6 no-underline color-text-tertiary pl-3 pr-2 no-wrap"
          >
            See all Enterprise releases
          </Link>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}
