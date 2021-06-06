import { useRouter } from 'next/router'
import { Dropdown } from '@primer/components'

import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'
import { useVersion } from 'components/hooks/useVersion'
import { useTranslation } from 'components/hooks/useTranslation'

export const HomepageVersionPicker = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { allVersions, page, enterpriseServerVersions } = useMainContext()
  const { t } = useTranslation('homepage')

  if (page.permalinks && page.permalinks.length <= 1) {
    return null
  }

  const label =
    currentVersion === 'homepage' ? t('version_picker') : allVersions[currentVersion].versionTitle

  return (
    <div className="d-md-inline-block">
      <div className="border-top border-md-top-0 py-2 py-md-0 d-md-inline-block">
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
              if (permalink.pageVersion === 'homepage') {
                return null
              }

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
      </div>
    </div>
  )
}
