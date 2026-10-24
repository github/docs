import { useRouter } from 'next/router'

import { useTranslation } from '@/languages/components/useTranslation'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { Link } from '@/frame/components/Link'
import { ProgAccessT } from './types'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

// Keep these paths centralized because content can move docs pages.
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
  const { t } = useTranslation('rest_reference')

  // Some operations omit progAccess.
  if (!progAccess) return null
  const {
    userToServerRest,
    serverToServer,
    fineGrainedPat,
    basicAuth = false,
    allowPermissionlessAccess = false,
  } = progAccess
  const noFineGrainedAccess = !(userToServerRest || serverToServer || fineGrainedPat)

  // Hide fine-grained access for dotcom permissionless endpoints; GHES may still require auth.
  if (!basicAuth && noFineGrainedAccess && allowPermissionlessAccess) return null

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
      {noFineGrainedAccess ? (
        <NoFineGrainedAccess basicAuth={basicAuth} />
      ) : (
        <FineGrainedAccess progAccess={progAccess} />
      )}
    </>
  )
}

function NoFineGrainedAccess({ basicAuth }: { basicAuth: boolean }) {
  const { t } = useTranslation('rest_reference')

  if (basicAuth) return <RenderedHTML as="p" html={t('basic_auth')} />
  return <p>{t('no_fine_grained_access')}</p>
}

type FineGrainedProps = {
  progAccess: ProgAccessT
}

// Each progAccess.permissions object is one acceptable permission set.
// Every key-value pair inside a set is required.
function FineGrainedAccess({ progAccess }: FineGrainedProps) {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { t } = useTranslation('rest_reference')

  const formattedPermissions = progAccess.permissions.map((permissionSet: object, index) => {
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

  const numPermissionSets = progAccess.permissions.length
  const permissionMsg =
    numPermissionSets === 0
      ? t('no_permission_sets')
      : numPermissionSets > 1
        ? `${t('permission_sets')}:`
        : `${t('permission_set')}:`
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
