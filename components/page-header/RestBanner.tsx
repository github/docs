import React from 'react'
import { Flash } from '@primer/react'
import { useRouter } from 'next/router'
import { Link } from 'components/Link'

const restRepoDisplayPages = [
  'branches',
  'collaborators',
  'commits',
  'deploy_keys',
  'deployments',
  'pages',
  'releases',
  'repos',
  'metrics',
  'webhooks',
]
const restEnterpriseDisplayPages = ['enterprise-admin']
const restRepoCategoryExceptionsTitles = {
  branches: 'Branches',
  collaborators: 'Collaborators',
  commits: 'Commits',
  deploy_keys: 'Deploy Keys',
  deployments: 'Deployments',
  pages: 'GitHub Pages',
  releases: 'Releases',
  metrics: 'Metrics',
  webhooks: 'Webhooks',
}

export const RestBanner = () => {
  const router = useRouter()
  const restPage = router.query.category as string
  if (!restRepoDisplayPages.includes(restPage) && !restEnterpriseDisplayPages.includes(restPage)) {
    return null
  }

  let noticeString

  if (restRepoDisplayPages.includes(restPage)) {
    const pages = Object.keys(restRepoCategoryExceptionsTitles) as Array<
      keyof typeof restRepoCategoryExceptionsTitles
    >
    const newRestPagesText = pages.map((page, i) => [
      <React.Fragment key={page}>
        <Link href={`/${router.locale}/rest/${page}`}>
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
  } else if (restEnterpriseDisplayPages.includes(restPage)) {
    noticeString = (
      <React.Fragment>
        If you can't find what you're looking for, you might try the{' '}
        <Link href={`/${router.locale}/rest/actions`}>Actions</Link> REST API page.
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
