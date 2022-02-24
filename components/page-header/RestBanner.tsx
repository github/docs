import React from 'react'
import { Flash } from '@primer/react'
import { useRouter } from 'next/router'
import { Link } from 'components/Link'

const restRepoDisplayPages = [
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
const restEnterpriseDisplayPages = ['/rest/reference/enterprise-admin']
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

export const RestBanner = () => {
  const router = useRouter()
  const restPage = (router.query.restPage as string[]) || []
  const asPathRoot = `/${router.query.productId}/${restPage.join('/')}`
  if (
    !restRepoDisplayPages.includes(asPathRoot) &&
    !restEnterpriseDisplayPages.includes(asPathRoot)
  ) {
    return null
  }

  let noticeString

  if (restRepoDisplayPages.includes(asPathRoot)) {
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

    noticeString = (
      <React.Fragment>
        If you can't find what you're looking for, you might try the new {newRestPagesText} REST API
        pages.
      </React.Fragment>
    )
  } else if (restEnterpriseDisplayPages.includes(asPathRoot)) {
    noticeString = (
      <React.Fragment>
        If you can't find what you're looking for, you might try the{' '}
        <Link href={`/${router.locale}/rest/reference/actions`}>Actions</Link> REST API page.
      </React.Fragment>
    )
  }

  return (
    <div data-testid="rest-api-repos-banner" className="container-xl mt-3 mx-auto p-responsive">
      <Flash variant="warning">
        <p>
          <b className="text-bold">
            <span>We've recently moved some of the REST API documentation. {noticeString}</span>
          </b>{' '}
        </p>
      </Flash>
    </div>
  )
}
