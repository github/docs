import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dropdown } from '@primer/components'

import { useMainContext } from 'components/context/MainContext'
import { useVersion } from 'components/hooks/useVersion'
import { useTranslation } from 'components/hooks/useTranslation'

export const ArticleVersionPicker = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { allVersions, page, enterpriseServerVersions } = useMainContext()
  const { t } = useTranslation('pages')

  if (page.permalinks && page.permalinks.length <= 1) {
    return null
  }

  return (
    <div className="d-none d-lg-flex flex-justify-end">
      <Dropdown
        css={`
          ul {
            width: unset;
          }
        `}
      >
        <summary className="f4 h5-mktg btn-outline-mktg btn-mktg p-2">
          <span className="d-md-none d-xl-inline-block">{t('article_version')}</span>{' '}
          {allVersions[currentVersion].versionTitle}
          <Dropdown.Caret />
        </summary>
        <Dropdown.Menu direction="sw">
          {(page.permalinks || []).map((permalink) => {
            if (permalink.pageVersion === 'homepage') {
              return null
            }

            return (
              <Dropdown.Item key={permalink.href}>
                <Link href={permalink.href}>
                  <a>{permalink.pageVersionTitle}</a>
                </Link>
              </Dropdown.Item>
            )
          })}
          <div className="pb-1">
            <Link href={`/${router.locale}/${enterpriseServerVersions[0]}/admin/all-releases`}>
              <a className="f6 no-underline color-text-tertiary pl-3 pr-2 no-wrap">
                See all Enterprise releases
              </a>
            </Link>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
