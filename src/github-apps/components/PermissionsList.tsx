import { useRouter } from 'next/router'
import cx from 'classnames'
import { slug as githubSlug } from 'github-slugger'

import { HeadingLink } from 'components/article/HeadingLink'
import { useTranslation } from 'src/languages/components/useTranslation'
import { Link } from 'components/Link'
import { MainContextT } from 'components/context/MainContext'
import {
  AutomatedPageContext,
  AutomatedPageContextT,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import { AutomatedPage } from 'src/automated-pipelines/components/AutomatedPage'
import { RestRedirect } from 'src/rest/components/RestRedirect'

import styles from 'src/github-apps/components/PermissionTable.module.scss'
const IAT_DOCS_REF =
  '/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation'
const UAT_DOCS_REF =
  '/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user'

type PermissionOperationsT = {
  slug: string
  category: string
  subcategory: string
  verb: string
  requestPath: string
  access: 'admin' | 'write' | 'read'
  'user-to-server': boolean
  'server-to-server': boolean
  'additional-permissions': []
}

export type PermissionT = {
  displayTitle: string
  resourceGroup: string
  permissions: PermissionOperationsT[]
}
export type PermissionListT = Record<string, PermissionT>

type Props = {
  items: PermissionListT
  currentVersion: string
  categoriesWithoutSubcategories: string[]
  mainContext: MainContextT
  automatedPageContext: AutomatedPageContextT
  tokenTypes?: boolean
}

export function PermissionsList({
  items,
  currentVersion,
  categoriesWithoutSubcategories,
  automatedPageContext,
  mainContext,
  tokenTypes = false,
}: Props) {
  const { locale } = useRouter()
  const DEFAULT_VERSION = mainContext.nonEnterpriseDefaultVersion
  const rootPath =
    currentVersion === DEFAULT_VERSION ? `/${locale}` : `/${locale}/${currentVersion}`

  // Translated strings
  const { t } = useTranslation('products')
  const ENDPOINTS_TH = t('rest.overview.permissions.endpoints')
  const ACCESS_TH = t('rest.overview.permissions.access')
  const TOKENS_TH = t('rest.overview.permissions.tokens')
  const ADDITIONAL_TH = t('rest.overview.permissions.additionalPermissions')
  const UAT = t('rest.overview.permissions.uat')
  const IAT = t('rest.overview.permissions.iat')

  const content = Object.entries(items).map(([permissionName, permissionObject]) => {
    const { displayTitle, permissions } = permissionObject
    const adminPermissions = permissions.filter((permission) => permission.access === 'admin')
    const writePermissions = permissions.filter((permission) => permission.access === 'write')
    const readPermissions = permissions.filter((permission) => permission.access === 'read')
    const sortedPermissions = [...adminPermissions, ...writePermissions, ...readPermissions]
    return (
      <div key={permissionName} className={cx(styles.parameterTable)}>
        <HeadingLink as="h2" slug={githubSlug(displayTitle)}>
          {displayTitle}
        </HeadingLink>
        <table>
          <thead>
            <tr>
              <th className="text-left">{ENDPOINTS_TH}</th>
              <th className="text-center">{ACCESS_TH}</th>
              {tokenTypes ? <th className="text-center">{TOKENS_TH}</th> : null}
              <th className="text-center">{ADDITIONAL_TH}</th>
            </tr>
          </thead>
          <tbody>
            {sortedPermissions.map((operation, index) => {
              const { slug, verb, requestPath } = operation
              const category = categoriesWithoutSubcategories.includes(operation.category)
                ? `${operation.category}`
                : `${operation.category}/${operation.subcategory}`
              const opPath = `${rootPath}/rest/${category}#${slug}`
              const iat = operation['server-to-server'] ? (
                <span className="label mt-2">
                  <Link href={`${rootPath}${IAT_DOCS_REF}`}>{IAT}</Link>
                </span>
              ) : null
              const uat = operation['user-to-server'] ? (
                <span className="label no-underline">
                  <Link href={`${rootPath}${UAT_DOCS_REF}`}>{UAT}</Link>
                </span>
              ) : null

              const additionalPermissions = operation['additional-permissions'].map(
                (permission) => items[permission].displayTitle,
              )
              const permissionsClass = operation['additional-permissions'].length
                ? ''
                : 'text-center'
              return (
                <tr key={`${permissionName}-${operation.slug}-${index}`}>
                  <td>
                    <Link href={`${opPath}`}>
                      <span>{verb.toUpperCase()}</span> {`${requestPath}`}
                    </Link>
                  </td>
                  <td className="v-align-middle text-center">{operation.access}</td>
                  {tokenTypes ? (
                    <td className="v-align-middle text-center">
                      {uat}
                      <br />
                      {iat}
                    </td>
                  ) : null}
                  <td className={permissionsClass}>
                    {operation['additional-permissions'].length
                      ? additionalPermissions.map((permission, index) => {
                          return (
                            <div key={`${permission}-${index}`}>
                              <a href={`#${githubSlug(permission)}`}>{permission}</a>
                              {additionalPermissions.length - 1 !== index ? (
                                <span className="pl-1">, </span>
                              ) : null}
                            </div>
                          )
                        })
                      : '✖️'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  })

  return (
    <AutomatedPageContext.Provider value={automatedPageContext}>
      <RestRedirect />
      <AutomatedPage>{content}</AutomatedPage>
    </AutomatedPageContext.Provider>
  )
}
