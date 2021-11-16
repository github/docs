import { useRouter } from 'next/router'
import cx from 'classnames'
import { Dropdown, Details, Box, Text, useDetails } from '@primer/components'
import { ArrowRightIcon, ChevronDownIcon } from '@primer/octicons-react'

import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'
import { useVersion } from 'components/hooks/useVersion'
import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  variant?: 'inline' | 'compact'
}
export const VersionPicker = ({ variant }: Props) => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { allVersions, page, enterpriseServerVersions } = useMainContext()
  const { getDetailsProps, setOpen } = useDetails({ closeOnOutsideClick: true })
  const { t } = useTranslation('pages')

  if (page.permalinks && page.permalinks.length <= 1) {
    return null
  }

  return (
    <>
      <div>
        <Details
          {...getDetailsProps()}
          className={cx(
            'position-relative details-reset',
            variant === 'inline' ? 'd-block' : 'd-inline-block'
          )}
          data-testid="article-version-picker"
        >
          <summary
            className="d-block btn btn-invisible color-fg-default"
            aria-haspopup="true"
            aria-label="Toggle version list"
          >
            {variant === 'inline' ? (
              <div className="d-flex flex-items-center flex-justify-between">
                <Text>{allVersions[currentVersion].versionTitle}</Text>
                <ChevronDownIcon size={24} className="arrow ml-md-1" />
              </div>
            ) : (
              <>
                <Text>{allVersions[currentVersion].versionTitle}</Text>
                <Dropdown.Caret />
              </>
            )}
          </summary>
          {variant === 'inline' ? (
            <Box py="2">
              {(page.permalinks || []).map((permalink) => {
                return (
                  <Dropdown.Item key={permalink.href} onClick={() => setOpen(false)}>
                    <Link href={permalink.href}>{permalink.pageVersionTitle}</Link>
                  </Dropdown.Item>
                )
              })}
              <Box mt={1}>
                <Link
                  onClick={() => {
                    setOpen(false)
                  }}
                  href={`/${router.locale}/${enterpriseServerVersions[0]}/admin/all-releases`}
                  className="f6 no-underline color-fg-muted pl-3 pr-2 no-wrap"
                >
                  {t('all_enterprise_releases')}{' '}
                  <ArrowRightIcon verticalAlign="middle" size={15} className="mr-2" />
                </Link>
              </Box>
            </Box>
          ) : (
            <Dropdown.Menu direction="sw" style={{ width: 'unset' }}>
              {(page.permalinks || []).map((permalink) => {
                return (
                  <Dropdown.Item key={permalink.href} onClick={() => setOpen(false)}>
                    <Link href={permalink.href}>{permalink.pageVersionTitle}</Link>
                  </Dropdown.Item>
                )
              })}
              <Box
                borderColor="border.default"
                borderTopWidth={1}
                borderTopStyle="solid"
                mt={2}
                pt={2}
                pb={1}
              >
                <Link
                  onClick={() => {
                    setOpen(false)
                  }}
                  href={`/${router.locale}/${enterpriseServerVersions[0]}/admin/all-releases`}
                  className="f6 no-underline color-fg-muted pl-3 pr-2 no-wrap"
                >
                  {t('all_enterprise_releases')}{' '}
                  <ArrowRightIcon verticalAlign="middle" size={15} className="mr-2" />
                </Link>
              </Box>
            </Dropdown.Menu>
          )}
        </Details>
      </div>
    </>
  )
}
