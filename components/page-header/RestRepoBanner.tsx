import { Flash } from '@primer/components'
import { useRouter } from 'next/router'
import { Link } from 'components/Link'
const restDisplayPages = [
  '/rest/reference/branches',
  '/rest/reference/collaborators',
  '/rest/reference/commits',
  '/rest/reference/deployments',
  '/rest/reference/pages',
  '/rest/reference/repos',
  '/rest/reference/repository-metrics',
  '/rest/reference/webhooks',
]
const restRepoCategoryExceptions = [
  'Branches',
  'Collaborators',
  'Commits',
  'Deployments',
  'Github Pages',
  'Repository metrics',
  'Webhooks',
]

export const RestRepoBanner = () => {
  const router = useRouter()
  const asPathRoot = router.asPath.split('?')[0].split('#')[0]
  if (!restDisplayPages.includes(asPathRoot)) {
    return null
  }

  const newRestPagesText = restRepoCategoryExceptions.map((page, i) => [
    <Link href={`/rest/references/${page}`}>
      {page}
      {i < restRepoCategoryExceptions.length - 1 && ', '}
    </Link>,
  ])

  return (
    <div data-testid="rest-api-repos-banner" className="container-xl mt-3 mx-auto p-responsive">
      <Flash variant="warning">
        <p>
          <b className="text-bold">
            <span>
              We've recently moved some of the REST API documentation. If you can't find what you're
              looking for, you might try the new {newRestPagesText} REST API pages.
            </span>
          </b>{' '}
        </p>
      </Flash>
    </div>
  )
}
