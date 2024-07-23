import { useRouter } from 'next/router'

import { useTranslation } from 'src/languages/components/useTranslation'
import { DEFAULT_VERSION, useVersion } from 'src/versions/components/useVersion'
import { Link } from 'src/frame/components/Link'
import { ProgAccessT } from './types'

// Documentation paths may be moved around by content team in the future
const USER_TOKEN_PATH =
  '/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app'
const INSTALLATION_TOKEN_PATH =
  '/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app'
const FINE_GRAINED_TOKEN_PATH =
  '/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token'

type Props = {
  progAccess: ProgAccessT
  slug: string
  operationTitle: string
}

export function RestAuth({ progAccess, slug, operationTitle }: Props) {
  const { currentVersion } = useVersion()
  const { t } = useTranslation('rest_reference')

  // This early return can be removed once GHES 3.9 is deprecated
  // The GHES 3.8 and 3.9 releases don't support fine-grained access tokens
  if (currentVersion === 'enterprise-server@3.9' || currentVersion === 'enterprise-server@3.8')
    return null

  // There are some operations that have no progAccess access defined
  // For those operations, we shouldn't display this component
  if (!progAccess) return null
  const { userToServerRest, serverToServer, fineGrainedPat, basicAuth = false } = progAccess
  const noFineGrainedAcccess = !(userToServerRest || serverToServer || fineGrainedPat)

  const heading = basicAuth ? t('basic_auth_heading') : t('fine_grained_access')
  const headingId = heading.replace('{{ RESTOperationTitle }}', operationTitle)
  const authSlug = basicAuth
    ? `${slug}--basic-authentication`
    : `${slug}--fine-grained-access-tokens`

  return (
    <>
      <h3 className="mt-4 mb-3 pt-3 h4" id={authSlug}>
        <a href={`#${authSlug}`}>{headingId}</a>
      </h3>
      {noFineGrainedAcccess ? (
        <NoFineGrainedAccess basicAuth={basicAuth} />
      ) : (
        <FineGrainedAccess progAccess={progAccess} />
      )}
    </>
  )
}

function NoFineGrainedAccess({ basicAuth }: { basicAuth: boolean }) {
  const { t } = useTranslation('rest_reference')

  if (basicAuth) return <p dangerouslySetInnerHTML={{ __html: t('basic_auth') }}></p>
  return <p>{t('no_fine_grained_access')}</p>
}

type FineGrainedProps = {
  progAccess: ProgAccessT
}

function FineGrainedAccess({ progAccess }: FineGrainedProps) {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { t } = useTranslation('rest_reference')

  // progAccess.permissions is an array of objects
  // For example: [ {'"Actions" repository permissions': 'read', '"Administration" organization permissions': 'write'}, {'"Secrets" organization permissions"': 'write'} ]
  // Each object represents a set of permissions containing one
  // or more key-value pairs. All permissions in a set are required.
  // If there is more than one set of permissions, any set can be used.
  const formattedPermissions = progAccess.permissions.map((permissionSet: Object, index) => {
    // Given the example above, the first object is now an array of tuples
    // [['"Actions" repository permissions', 'read'], ['"Administration" organization permissions', 'read']]
    // that can be formatted as a string like `"Administration" organization permissions (write)'
    const permissionSetPairs = Object.entries(permissionSet)
    const numPermissionSetPairs = permissionSetPairs.length

    return (
      <li key={`token-permissions-${index}`}>
        {permissionSetPairs.map(([key, value], setIndex) => (
          <span key={`token-permissions-text-${index}-${setIndex}`}>
            <span>{`${key} (${value})`}</span>
            {setIndex < numPermissionSetPairs - 1 && <span> and </span>}
          </span>
        ))}
      </li>
    )
  })

  let basePath = `/${router.locale}`
  if (currentVersion !== DEFAULT_VERSION) {
    basePath += `/${currentVersion}`
  }

  // Pluralize the message if needed or customize it
  // when no permissions are defined
  const numPermissionSets = progAccess.permissions.length
  const permissionMsg =
    numPermissionSets === 0
      ? t('no_permission_sets')
      : numPermissionSets > 1
        ? t('permission_sets') + ':'
        : t('permission_set') + ':'
  const publicAccessMsg =
    numPermissionSets === 0
      ? t('allows_public_read_access_no_permissions')
      : t('allows_public_read_access')

  return (
    <>
      <p>{t('works_with_fine_grained_tokens')}:</p>
      <ul>
        {progAccess.userToServerRest && (
          <li>
            <Link href={`${basePath}${USER_TOKEN_PATH}`}>{t('user_access_token_name')}</Link>
          </li>
        )}
        {progAccess.serverToServer && (
          <li>
            <Link href={`${basePath}${INSTALLATION_TOKEN_PATH}`}>
              {t('installation_access_token_name')}
            </Link>
          </li>
        )}
        {progAccess.fineGrainedPat && (
          <li>
            <Link href={`${basePath}${FINE_GRAINED_TOKEN_PATH}`}>
              {t('fine_grained_access_token_name')}
            </Link>
          </li>
        )}
      </ul>
      <p>{permissionMsg}</p>
      {formattedPermissions.length > 0 && <ul>{formattedPermissions}</ul>}
      {progAccess.allowsPublicRead && <p>{publicAccessMsg}</p>}
    </>
  )
}
