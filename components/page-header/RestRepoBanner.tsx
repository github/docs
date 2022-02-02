import React from 'react'
import { Flash } from '@primer/components'
import { useRouter } from 'next/router'
import { Link } from 'components/Link'

const restDisplayPages = [
  '/rest/reference/branches',
  '/rest/reference/collaborators',
  '/rest/reference/commits',
  '/rest/reference/deployments',
  '/rest/reference/pages',
  '/rest/reference/releases',
  '/rest/reference/repos',
  '/rest/reference/metrics',
  '/rest/reference/webhooks',
]
const restRepoCategoryExceptionsTitles = {
  branches: 'Branches',
  collaborators: 'Collaborators',
  commits: 'Commits',
  deployments: 'Deployments',
  pages: 'GitHub Pages',
  releases: 'Releases',
  metrics: 'Metrics',
  webhooks: 'Webhooks',
}

export const RestRepoBanner = () => {
  const router = useRouter()
  const asPathRoot = router.asPath.split('?')[0].split('#')[0]
  if (!restDisplayPages.includes(asPathRoot)) {
    return null
  }

  const pages = Object.keys(restRepoCategoryExceptionsTitles) as Array<
    keyof typeof restRepoCategoryExceptionsTitles
  >
  const newRestPagesText = pages.map((page, i) => [
    <React.Fragment key={page}>
      <Link href={`/${router.locale}/rest/reference/${page}`}>
        {restRepoCategoryExceptionsTitles[page]}
      </Link>
      {i < pages.length - 1 && ', '}
    </React.Fragment>,
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
